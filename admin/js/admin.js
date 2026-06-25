/* ============================================================
   AFADETH Admin — Data layer + Supabase sync
   ============================================================ */

/* ── Supabase ── */
const sb = window.sb;

/* ── Caches (rend les getters synchrones) ── */
let _albumsCache   = null;
let _articlesCache = null;
let _contactsCache = null;
let _usersCache    = null;
let _currentUserEmail = '';

/* ── Seeds — intentionnellement vides : on utilise uniquement les données Supabase ── */
const ALBUMS_SEED   = [];
const ARTICLES_SEED = [];
const CONTACTS_SEED = [];
const USERS_SEED    = [];

/* ── Mappers Supabase → format local ── */
function _mapAlbum(row) {
  return {
    id:     row.id,
    name:   row.name,
    slug:   row.slug,
    cat:    row.cat,
    desc:   row.description || '',
    cover:  row.cover_url   || '',
    date:   row.date        || '',
    photos: (row.photos || [])
      .sort((a,b) => (a.sort_order||0) - (b.sort_order||0))
      .map(p => ({id:p.id, src:p.src_url, title:p.title||'', desc:p.description||''}))
  };
}

function _mapArticle(row) {
  return {
    id:      row.id,
    title:   row.titre,
    cat:     row.cat,
    date:    (row.published_at || row.created_at || '').slice(0,10),
    author:  row.auteur,
    status:  _toUiStatus(row.status),
    excerpt: row.resume   || '',
    content: row.contenu  || '',
    tags:    row.tags     || [],
    cover:   row.cover_url|| '',
    featured:false
  };
}

function _mapContact(row) {
  return {
    id:        row.id,
    prenom:    row.prenom,
    nom:       row.nom,
    email:     row.email,
    telephone: row.telephone || '',
    sujet:     row.sujet     || '',
    message:   row.message,
    lu:        row.lu       ?? false,
    archived:  row.archived ?? false,
    date:      row.created_at || ''
  };
}

function _toDbStatus(status) {
  return status === 'published' || status === 'publie' ? 'publie' : 'brouillon';
}

function _toUiStatus(status) {
  return status === 'publie' || status === 'published' ? 'published' : 'draft';
}

function _slugify(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function _goLogin(reason) {
  const qs = reason ? `?reason=${encodeURIComponent(reason)}` : '';
  window.location.replace(`login.html${qs}`);
}

async function _requireAdminSession() {
  if (!sb) {
    _goLogin('config');
    return null;
  }

  const { data: { session }, error:sessionError } = await sb.auth.getSession();
  if (sessionError || !session?.user?.email) {
    await sb.auth.signOut().catch(()=>{});
    _goLogin('auth');
    return null;
  }

  const email = session.user.email.toLowerCase();
  const { data:adminUser, error:adminError } = await sb.from('admin_users')
    .select('email, prenom, nom, role, actif')
    .ilike('email', email)
    .eq('actif', true)
    .maybeSingle();

  if (adminError || !adminUser) {
    await sb.auth.signOut().catch(()=>{});
    _goLogin('forbidden');
    return null;
  }

  return { session, adminUser };
}

function _mapUser(row) {
  return {
    id:      row.id,
    prenom:  row.prenom,
    nom:     row.nom,
    email:   row.email,
    role:    row.role,
    actif:   row.actif,
    created: (row.created_at||'').slice(0,10),
    init:    (row.prenom[0]||'') + (row.nom[0]||'')
  };
}

/* ── Chargeurs Supabase ── */
async function _loadAlbums() {
  const { data, error } = await sb.from('albums')
    .select('*, photos(*)')
    .order('date', { ascending:false, nullsFirst:false });
  if (error) { console.warn('[AFADETH] loadAlbums:', error.message); _albumsCache = []; return; }
  _albumsCache = (data||[]).map(_mapAlbum);
}

async function _loadArticles() {
  const { data, error } = await sb.from('articles')
    .select('*').order('created_at', { ascending:false });
  if (error) { console.warn('[AFADETH] loadArticles:', error.message); _articlesCache = []; return; }
  _articlesCache = (data||[]).map(_mapArticle);
}

async function _loadContacts() {
  const { data, error } = await sb.from('contacts')
    .select('*').order('created_at', { ascending:false });
  if (error) { console.warn('[AFADETH] loadContacts:', error.message); _contactsCache = []; return; }
  _contactsCache = (data||[]).map(_mapContact);
}

async function _loadUsers() {
  const { data, error } = await sb.from('admin_users')
    .select('*').order('id');
  if (error) { console.warn('[AFADETH] loadUsers:', error.message); _usersCache = []; return; }
  _usersCache = (data||[]).map(_mapUser);
}

/* ── Getters synchrones (lisent le cache) ── */
function getAlbums()   { return _albumsCache   ?? ALBUMS_SEED; }
function getArticles() { return _articlesCache ?? ARTICLES_SEED; }
function getContacts() {
  const base = _contactsCache ?? CONTACTS_SEED;
  try {
    const readIds = JSON.parse(localStorage.getItem('afadeth_read_ids')||'[]');
    if (!readIds.length) return base;
    return base.map(c => readIds.includes(c.id) ? {...c, lu:true} : c);
  } catch(e) { return base; }
}
function getUsers()    { return _usersCache    ?? USERS_SEED; }

/* ── Générateurs d'ID ── */
function nextAlbumId()      { const a=getAlbums();   return a.length ? Math.max(...a.map(x=>x.id))+1 : 1; }
function nextPhotoId(album) { return album.photos.length ? Math.max(...album.photos.map(x=>x.id))+1 : 1; }
function nextArticleId()    { const a=getArticles(); return a.length ? Math.max(...a.map(x=>x.id))+1 : 1; }
function nextUserId()       { const u=getUsers();    return u.length ? Math.max(...u.map(x=>x.id))+1 : 1; }

/* ── Sauvegarde : met à jour le cache puis sync Supabase ── */
function saveAlbums(albums)     { _albumsCache   = albums;   _pushAlbums(albums); }
function saveArticles(articles) { _articlesCache = articles; _pushArticles(articles); }
function saveContacts(contacts) {
  _contactsCache = contacts;
  try {
    const readIds = contacts.filter(c=>c.lu).map(c=>c.id);
    localStorage.setItem('afadeth_read_ids', JSON.stringify(readIds));
  } catch(e) {}
  _pushContacts(contacts);
}
function saveUsers(users)       { _usersCache    = users;    _pushUsers(users); }

/* ── Push albums ── */
async function _pushAlbums(albums) {
  try {
    const { data:existing } = await sb.from('albums').select('id, name');
    const existingIds = new Set((existing||[]).map(r=>r.id));
    const newIds      = new Set(albums.map(a=>a.id));

    for (const id of existingIds) {
      if (!newIds.has(id)) {
        const name = (existing||[]).find(r=>r.id===id)?.name || `Album #${id}`;
        await sb.from('albums').delete().eq('id', id);
        logAction('album', 'Suppression album', `"${name}"`);
      }
    }

    for (const a of albums) {
      const isNew = !existingIds.has(a.id);
      const slug = a.slug || _slugify(a.name);
      await sb.from('albums').upsert({
        id:          a.id,
        name:        a.name,
        slug:        slug,
        cat:         a.cat,
        description: a.desc  || '',
        cover_url:   a.cover || '',
        date:        a.date  || null,
      }, { onConflict:'id' });

      await sb.from('photos').delete().eq('album_id', a.id);
      if (a.photos && a.photos.length) {
        await sb.from('photos').insert(a.photos.map((p,i) => ({
          id:          p.id,
          album_id:    a.id,
          src_url:     p.src,
          title:       p.title || '',
          description: p.desc  || '',
          is_cover:    p.src === a.cover,
          sort_order:  i,
        })));
      }
      if (isNew) logAction('album', 'Création album', `"${a.name}"`);
    }
  } catch(e) { console.error('[AFADETH] push albums:', e); }
}

/* ── Push articles ── */
async function _pushArticles(articles) {
  try {
    const { data:existing } = await sb.from('articles').select('id, titre');
    const existingIds = new Set((existing||[]).map(r=>r.id));
    const newIds      = new Set(articles.map(a=>a.id));

    for (const id of existingIds) {
      if (!newIds.has(id)) {
        const titre = (existing||[]).find(r=>r.id===id)?.titre || `Article #${id}`;
        await sb.from('articles').delete().eq('id', id);
        logAction('article', 'Suppression article', `"${titre}"`);
      }
    }

    for (const a of articles) {
      const isNew = !existingIds.has(a.id);
      const dbStatus = _toDbStatus(a.status);
      const slug = a.slug || _slugify(a.title).slice(0,80);
      const publishedAt = dbStatus === 'publie'
        ? (a.published_at || (a.date ? a.date + 'T00:00:00.000Z' : new Date().toISOString()))
        : null;
      await sb.from('articles').upsert({
        id:          a.id,
        titre:       a.title || a.titre || '',
        slug:        slug,
        cat:         a.cat   || 'evenements',
        auteur:      a.author|| a.auteur || 'AFADETH',
        cover_url:   a.cover || '',
        resume:      a.excerpt || a.resume  || '',
        contenu:     a.content || a.contenu || '',
        tags:        a.tags  || [],
        status:      dbStatus,
        published_at: publishedAt,
      }, { onConflict:'id' });
      if (isNew) logAction('article', 'Création article', `"${a.title || a.titre || ''}"`);
    }
  } catch(e) { console.error('[AFADETH] push articles:', e); }
}

/* ── Push contacts (seulement lu/archived — les contacts sont créés par le formulaire) ── */
async function _pushContacts(contacts) {
  try {
    const { data:existing } = await sb.from('contacts').select('id');
    const existingIds = new Set((existing||[]).map(r=>r.id));
    const newIds      = new Set(contacts.map(c=>c.id));

    for (const id of existingIds) {
      if (!newIds.has(id)) await sb.from('contacts').delete().eq('id', id);
    }

    for (const c of contacts) {
      await sb.from('contacts').update({ lu:c.lu, archived:c.archived }).eq('id', c.id);
    }
  } catch(e) { console.error('[AFADETH] push contacts:', e); }
}

/* ── Push users ── */
async function _pushUsers(users) {
  try {
    const { data:existing } = await sb.from('admin_users').select('id, prenom, nom');
    const existingIds = new Set((existing||[]).map(r=>r.id));
    const newIds      = new Set(users.map(u=>u.id));

    for (const id of existingIds) {
      if (!newIds.has(id)) {
        const rec = (existing||[]).find(r=>r.id===id);
        const name = rec ? `${rec.prenom} ${rec.nom}` : `Utilisateur #${id}`;
        await sb.from('admin_users').delete().eq('id', id);
        logAction('user', 'Suppression utilisateur', `"${name}"`);
      }
    }

    for (const u of users) {
      const isNew = !existingIds.has(u.id);
      await sb.from('admin_users').upsert({
        id:     u.id,
        email:  u.email,
        prenom: u.prenom,
        nom:    u.nom,
        role:   u.role,
        actif:  u.actif,
      }, { onConflict:'id' });
      if (isNew) logAction('user', 'Création utilisateur', `"${u.prenom} ${u.nom}" (${u.email})`);
    }
  } catch(e) { console.error('[AFADETH] push users:', e); }
}

/* ── Journal d'activité ── */
async function logAction(type, action, details) {
  const entry = { id: Date.now(), type, action, user_email: _currentUserEmail, details: details||'', created_at: new Date().toISOString() };
  try {
    const ls = JSON.parse(localStorage.getItem('afadeth_logs')||'[]');
    ls.unshift(entry);
    if (ls.length > 300) ls.splice(300);
    localStorage.setItem('afadeth_logs', JSON.stringify(ls));
  } catch(e) {}
  try {
    await sb.from('logs').insert({ type, action, user_email: _currentUserEmail, details: details||'' });
  } catch(e) { console.warn('[AFADETH] logAction Supabase:', e); }
}

/* ── Messages non lus ── */
function unreadCount() { return getContacts().filter(c=>!c.lu&&!c.archived).length; }

/* ── Toast ── */
let toastWrap = null;
function initToast() {
  if (toastWrap) return;
  toastWrap = document.createElement('div');
  toastWrap.className = 'toast-wrap';
  document.body.appendChild(toastWrap);
}
function showToast(msg, type='', dur=3200) {
  initToast();
  const t = document.createElement('div');
  t.className = 'toast ' + (type==='success'?'ok':type==='error'?'err':'');
  const icon = type==='success'?'✓':type==='error'?'✕':'ℹ';
  t.innerHTML = `<span style="font-weight:700">${icon}</span><span>${msg}</span>`;
  toastWrap.appendChild(t);
  setTimeout(()=>{
    t.style.animation='tIn .3s cubic-bezier(.34,1.56,.64,1) reverse';
    setTimeout(()=>t.remove(),300);
  }, dur);
}

/* ── Modals ── */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow='hidden'; }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow=''; }
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open'); document.body.style.overflow='';
  }
  const closeBtn = e.target.closest('[data-modal-close]');
  if (closeBtn) closeModal(closeBtn.dataset.modalClose);
});

/* ── Confirmation suppression ── */
function confirmDelete(msg, cb) {
  if (window.confirm(msg||'Confirmer la suppression ?')) cb();
}

/* ── Dates ── */
function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric'});
}
function fmtDateTime(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
}
function nowISO() { return new Date().toISOString(); }

/* ── Labels ── */
const SUJET = {
  soutien:'Soutenir',partenariat:'Partenariat',adhesion:'Adhésion',
  jeunesse:'AFADETH Jeunesse',media:'Médias',clinique:'Clinique',autre:'Autre'
};
const CAT_LABELS = {
  evenements:'Événements',sante:'Santé',economie:'Économie',
  droits:'Droits & VBG',education:'Éducation'
};

/* ── Nav active ── */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link').forEach(a => {
    const href = (a.getAttribute('href')||'').split('/').pop();
    if (href === page) a.classList.add('active');
  });
}

/* ── Badge messages non lus ── */
function refreshBadges() {
  const n = unreadCount();
  document.querySelectorAll('[data-unread]').forEach(el => {
    el.textContent = n||'';
    el.style.display = n ? 'inline-flex':'none';
  });
}

function _refreshUserDisplay() {
  const users = getUsers();
  const u = users[0]||{prenom:'Admin',nom:'',init:'A'};
  document.querySelectorAll('[data-user-name]').forEach(el=>{el.textContent=u.prenom+' '+u.nom;});
  document.querySelectorAll('[data-user-init]').forEach(el=>{el.textContent=u.init||(u.prenom[0]||'A');});
}

/* ── Déconnexion ── */
async function logout() {
  await logAction('auth', 'Déconnexion', '');
  await sb.auth.signOut();
  window.location.href = 'login.html';
}

/* ── Sidebar collapsible ── */
function toggleSidebar() {
  const layout = document.querySelector('.admin-layout');
  if (!layout) return;
  const collapsed = layout.classList.toggle('sb-collapsed');
  try { localStorage.setItem('afadeth_sb', collapsed ? '1' : ''); } catch(e) {}
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', async () => {
  /* 1. Verifier l'authentification */
  const guard = await _requireAdminSession();
  if (!guard) return;
  const { session, adminUser } = guard;

  /* 2. Afficher l'utilisateur connecte */
  const userEmail = session.user.email || '';
  _currentUserEmail = userEmail;
  const displayName = `${adminUser.prenom || ''} ${adminUser.nom || ''}`.trim() || userEmail;
  document.querySelectorAll('[data-user-name]').forEach(el => { el.textContent = displayName; });
  document.querySelectorAll('[data-user-init]').forEach(el => { el.textContent = (adminUser.prenom?.[0] || userEmail[0] || 'A').toUpperCase(); });
  if (!sessionStorage.getItem('admin_session_logged')) {
    sessionStorage.setItem('admin_session_logged', '1');
    logAction('auth', 'Connexion', 'Session admin démarrée');
  }

  /* 3. Bouton déconnexion */
  document.querySelectorAll('.sf-logout').forEach(btn => {
    btn.addEventListener('click', logout);
  });

  initToast();
  setActiveNav();

  /* Sidebar : restaurer l'état réduit + bind clic logo */
  if (localStorage.getItem('afadeth_sb') === '1')
    document.querySelector('.admin-layout')?.classList.add('sb-collapsed');
  document.querySelector('.sidebar-brand')?.addEventListener('click', toggleSidebar);

  /* 4. Charger les données depuis Supabase */
  try {
    await Promise.all([_loadAlbums(), _loadArticles(), _loadContacts(), _loadUsers()]);
  } catch(e) {
    console.warn('[AFADETH] Supabase load failed, using seed data.');
  }

  refreshBadges();

  /* 5. Re-render la page courante */
  const fns = [
    'renderAlbums','renderList','renderTable',
    'renderStats','renderMessages','renderArticlesPreview','renderAlbumsPreview','renderLogs'
  ];
  fns.forEach(fn => { if (typeof window[fn]==='function') window[fn](); });
  document.body.classList.add('admin-ready');
});
