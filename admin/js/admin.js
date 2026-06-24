/* ============================================================
   AFADETH Admin — Data layer + Supabase sync
   ============================================================ */

/* ── Supabase ── */
const _SB_URL  = 'https://yhdtvdgpjmefacrphxsi.supabase.co';
const _SB_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZHR2ZGdwam1lZmFjcnBoeHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNDYyMTYsImV4cCI6MjA5NzgyMjIxNn0.d4n8dO72uF_IWbAJ7Cx4rskHnmJ7UVr1KSdC_iAP5E4';
const sb = supabase.createClient(_SB_URL, _SB_KEY);

/* ── Caches (rend les getters synchrones) ── */
let _albumsCache   = null;
let _articlesCache = null;
let _contactsCache = null;
let _usersCache    = null;

/* ── Seeds (fallback hors-ligne) ── */
const ALBUMS_SEED = [
  {
    id:1, name:'Événements 2025', slug:'evenements-2025', cat:'evenements',
    desc:'Cérémonies, rassemblements et événements officiels de l\'AFADETH en 2025.',
    cover:'../assets/images/gallery/gallery_03.jpg', date:'2025-06-15',
    photos:[
      {id:1,src:'../assets/images/gallery/gallery_01.jpg',title:'Félicitation — Nouvelle Présidente',desc:'L\'AFADETH félicite sa Présidente'},
      {id:2,src:'../assets/images/gallery/gallery_02.jpg',title:'Message Officiel AFADETH',desc:'Communication officielle — Pétion-Ville'},
      {id:3,src:'../assets/images/gallery/gallery_03.jpg',title:'Grande Cérémonie AFADETH',desc:'Rassemblement des membres et partenaires'},
      {id:4,src:'../assets/images/gallery/gallery_04.jpg',title:'Remise de Distinctions',desc:'Cérémonie de reconnaissance des membres méritantes'},
    ]
  },
  {
    id:2, name:'Santé & Clinique', slug:'sante-clinique', cat:'sante',
    desc:'Activités de la Clinique Permanente Sante Fanm AFADETH et programmes de santé communautaire.',
    cover:'../assets/images/gallery/gallery_05.jpg', date:'2025-05-20',
    photos:[
      {id:5,src:'../assets/images/gallery/gallery_05.jpg',title:'Activité Communautaire',desc:'Programme santé et bien-être — Thomassin'},
      {id:6,src:'../assets/images/gallery/gallery_06.jpg',title:'Journée de la Femme',desc:'Célébration du 8 mars — AFADETH en action'},
      {id:7,src:'../assets/images/gallery/gallery_07.jpg',title:'Formation des Bénévoles',desc:'Renforcement des capacités des membres'},
    ]
  },
  {
    id:3, name:'Économie Solidaire', slug:'economie-solidaire', cat:'economie',
    desc:'Le programme Kore Fanm Agrikòl yo et les initiatives économiques de l\'AFADETH.',
    cover:'../assets/images/gallery/gallery_08.jpg', date:'2025-04-10',
    photos:[
      {id:8,src:'../assets/images/gallery/gallery_08.jpg',title:'Rencontre Annuelle des Membres',desc:'Assemblée et bilan des activités de l\'association'},
    ]
  },
  {id:4,name:'Droits & Protection VBG',slug:'droits-vbg',cat:'droits',desc:'Sensibilisation et accompagnement juridique dans la lutte contre les VBG.',cover:'',date:'2025-03-08',photos:[]},
  {id:5,name:'AFADETH Jeunesse',slug:'afadeth-jeunesse',cat:'education',desc:'Ateliers leadership et activités de la branche jeunesse.',cover:'',date:'2025-02-14',photos:[]}
];

const ARTICLES_SEED = [
  {id:1,title:'L\'autonomisation économique des femmes : bilan 2024',cat:'economie',date:'2025-06-12',author:'Nancy VILCÉ',status:'publie',featured:true,excerpt:'Plus de 1 000 femmes ont bénéficié de nos programmes d\'économie solidaire cette année.',content:'<p>En 2024, l\'AFADETH a franchi une étape historique...</p>',tags:['Économie','Femmes','Entrepreneuriat'],cover:''},
  {id:2,title:'Clinique Sante Fanm AFADETH : 500 consultations en 3 mois',cat:'sante',date:'2025-05-28',author:'Abigail EDOUARD',status:'publie',featured:false,excerpt:'Notre clinique permanente à Pétion-Ville a réalisé 500 consultations gynécologiques.',content:'<p>La Clinique Permanente Sante Fanm AFADETH continue de démontrer son impact vital...</p>',tags:['Santé','Clinique','Femmes'],cover:''},
  {id:3,title:'Protection et droits : notre programme anti-VBG en action',cat:'droits',date:'2025-05-15',author:'Annette G. JOSEPH',status:'publie',featured:false,excerpt:'L\'unité PSEA de l\'AFADETH a accompagné 120 survivantes en 2025.',content:'<p>La lutte contre les Violences Basées sur le Genre reste au cœur de la mission...</p>',tags:['VBG','Droits','PSEA'],cover:''},
  {id:4,title:'AFADETH Jeunesse : forger les leaders de demain',cat:'education',date:'2025-05-03',author:'Sherly ROSIER',status:'publie',featured:false,excerpt:'La branche jeunesse de l\'AFADETH forme une nouvelle génération de femmes leaders.',content:'<p>AFADETH Jeunesse incarne l\'avenir de l\'organisation...</p>',tags:['Jeunesse','Leadership','Éducation'],cover:''},
  {id:5,title:'Renouvellement du partenariat stratégique avec l\'UNFPA',cat:'evenements',date:'2025-04-20',author:'Nancy VILCÉ',status:'publie',featured:false,excerpt:'L\'AFADETH et l\'UNFPA ont signé un accord de partenariat renforcé pour 2025-2027.',content:'<p>La signature du nouvel accord de partenariat avec l\'UNFPA marque une étape importante...</p>',tags:['UNFPA','Partenariat','Santé'],cover:''},
  {id:6,title:'Un an après : le restaurant solidaire transforme des vies',cat:'economie',date:'2025-04-08',author:'Abigail EDOUARD',status:'publie',featured:false,excerpt:'Lancé en 2024, le Restaurant Communautaire Solidaire AFADETH a servi plus de 15 000 repas.',content:'<p>Le Restaurant Communautaire Solidaire AFADETH célèbre son premier anniversaire...</p>',tags:['Restaurant','Solidarité','Emploi'],cover:''},
];

const CONTACTS_SEED = [
  {id:1,prenom:'Marie',nom:'JEAN',email:'marie.jean@gmail.com',telephone:'+509 3812 4567',sujet:'adhesion',message:'Bonjour, je souhaite adhérer à l\'AFADETH.',date:'2025-06-23T14:32:00',lu:false,archived:false},
  {id:2,prenom:'Rose-Marie',nom:'PIERRE',email:'rosemarie.pierre@yahoo.com',telephone:'',sujet:'partenariat',message:'Notre ONG "Fanm Solid" souhaite explorer une collaboration avec l\'AFADETH.',date:'2025-06-22T09:15:00',lu:true,archived:false},
  {id:3,prenom:'Claudine',nom:'LORIVAL',email:'claudine@entreprise.ht',telephone:'+509 2222 3344',sujet:'soutien',message:'Nous souhaitons faire un don à l\'AFADETH pour soutenir la clinique Sante Fanm.',date:'2025-06-20T16:45:00',lu:true,archived:false},
  {id:4,prenom:'Jean-Pierre',nom:'MOREAU',email:'jp.moreau@presse-ht.com',telephone:'',sujet:'media',message:'Journaliste pour Presse-HT. Je souhaiterais interviewer la présidente de l\'AFADETH.',date:'2025-06-18T11:20:00',lu:false,archived:false},
];

const USERS_SEED = [
  {id:1,prenom:'Myrtho',nom:'Charles',email:'myrthocharles95@gmail.com',role:'admin',created:'2025-06-01',actif:true,init:'MC'},
  {id:2,prenom:'Nancy',nom:'Vilcé',email:'contactafadeth06@gmail.com',role:'admin',created:'2025-06-01',actif:true,init:'NV'},
];

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
    status:  row.status,
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
    lu:        row.lu,
    archived:  row.archived,
    date:      row.created_at || ''
  };
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
  if (!error && data) _albumsCache = data.map(_mapAlbum);
}

async function _loadArticles() {
  const { data, error } = await sb.from('articles')
    .select('*').order('created_at', { ascending:false });
  if (!error && data) _articlesCache = data.map(_mapArticle);
}

async function _loadContacts() {
  const { data, error } = await sb.from('contacts')
    .select('*').order('created_at', { ascending:false });
  if (!error && data) _contactsCache = data.map(_mapContact);
}

async function _loadUsers() {
  const { data, error } = await sb.from('admin_users')
    .select('*').order('id');
  if (!error && data) _usersCache = data.map(_mapUser);
}

/* ── Getters synchrones (lisent le cache) ── */
function getAlbums()   { return _albumsCache   ?? ALBUMS_SEED; }
function getArticles() { return _articlesCache ?? ARTICLES_SEED; }
function getContacts() { return _contactsCache ?? CONTACTS_SEED; }
function getUsers()    { return _usersCache    ?? USERS_SEED; }

/* ── Générateurs d'ID ── */
function nextAlbumId()      { const a=getAlbums();   return a.length ? Math.max(...a.map(x=>x.id))+1 : 1; }
function nextPhotoId(album) { return album.photos.length ? Math.max(...album.photos.map(x=>x.id))+1 : 1; }
function nextArticleId()    { const a=getArticles(); return a.length ? Math.max(...a.map(x=>x.id))+1 : 1; }
function nextUserId()       { const u=getUsers();    return u.length ? Math.max(...u.map(x=>x.id))+1 : 1; }

/* ── Sauvegarde : met à jour le cache puis sync Supabase ── */
function saveAlbums(albums)     { _albumsCache   = albums;   _pushAlbums(albums); }
function saveArticles(articles) { _articlesCache = articles; _pushArticles(articles); }
function saveContacts(contacts) { _contactsCache = contacts; _pushContacts(contacts); }
function saveUsers(users)       { _usersCache    = users;    _pushUsers(users); }

/* ── Push albums ── */
async function _pushAlbums(albums) {
  try {
    const { data:existing } = await sb.from('albums').select('id');
    const existingIds = new Set((existing||[]).map(r=>r.id));
    const newIds      = new Set(albums.map(a=>a.id));

    for (const id of existingIds) {
      if (!newIds.has(id)) await sb.from('albums').delete().eq('id', id);
    }

    for (const a of albums) {
      const slug = a.slug || a.name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
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
    }
  } catch(e) { console.error('[AFADETH] push albums:', e); }
}

/* ── Push articles ── */
async function _pushArticles(articles) {
  try {
    const { data:existing } = await sb.from('articles').select('id');
    const existingIds = new Set((existing||[]).map(r=>r.id));
    const newIds      = new Set(articles.map(a=>a.id));

    for (const id of existingIds) {
      if (!newIds.has(id)) await sb.from('articles').delete().eq('id', id);
    }

    for (const a of articles) {
      const slug = a.slug || a.title.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80);
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
        status:      a.status === 'publie' ? 'publie' : 'brouillon',
        published_at: a.status === 'publie' ? (a.published_at || new Date().toISOString()) : null,
      }, { onConflict:'id' });
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
    const { data:existing } = await sb.from('admin_users').select('id');
    const existingIds = new Set((existing||[]).map(r=>r.id));
    const newIds      = new Set(users.map(u=>u.id));

    for (const id of existingIds) {
      if (!newIds.has(id)) await sb.from('admin_users').delete().eq('id', id);
    }

    for (const u of users) {
      await sb.from('admin_users').upsert({
        id:     u.id,
        email:  u.email,
        prenom: u.prenom,
        nom:    u.nom,
        role:   u.role,
        actif:  u.actif,
      }, { onConflict:'id' });
    }
  } catch(e) { console.error('[AFADETH] push users:', e); }
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
  await sb.auth.signOut();
  window.location.href = 'login.html';
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', async () => {
  /* 1. Vérifier l'authentification */
  const { data: { session } } = await sb.auth.getSession();
  if (!session) {
    window.location.replace('login.html');
    return;
  }

  /* 2. Afficher l'email de l'utilisateur connecté */
  const userEmail = session.user.email || '';
  document.querySelectorAll('[data-user-name]').forEach(el => { el.textContent = userEmail; });
  document.querySelectorAll('[data-user-init]').forEach(el => { el.textContent = userEmail[0]?.toUpperCase() || 'A'; });

  /* 3. Bouton déconnexion */
  document.querySelectorAll('.sf-logout').forEach(btn => {
    btn.addEventListener('click', logout);
  });

  initToast();
  setActiveNav();

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
    'renderStats','renderMessages','renderArticlesPreview','renderAlbumsPreview'
  ];
  fns.forEach(fn => { if (typeof window[fn]==='function') window[fn](); });
});
