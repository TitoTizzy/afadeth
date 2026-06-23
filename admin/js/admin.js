/* ============================================================
   AFADETH Admin — Shared data layer + utilities
   ============================================================ */

/* ── LocalStorage helpers ── */
const LS = {
  get(key, fallback = null) {
    try { return JSON.parse(localStorage.getItem('afadeth_' + key)) ?? fallback; }
    catch { return fallback; }
  },
  set(key, val) { localStorage.setItem('afadeth_' + key, JSON.stringify(val)); },
  rm(key) { localStorage.removeItem('afadeth_' + key); }
};

/* ── ALBUMS ── */
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
  {
    id:4, name:'Droits & Protection VBG', slug:'droits-vbg', cat:'droits',
    desc:'Sensibilisation, formations et accompagnement juridique dans la lutte contre les VBG.',
    cover:'', date:'2025-03-08',
    photos:[]
  },
  {
    id:5, name:'AFADETH Jeunesse', slug:'afadeth-jeunesse', cat:'education',
    desc:'Ateliers leadership, formations et activités de la branche jeunesse de l\'AFADETH.',
    cover:'', date:'2025-02-14',
    photos:[]
  }
];

function getAlbums()    { return LS.get('albums', ALBUMS_SEED); }
function saveAlbums(a)  { LS.set('albums', a); }
function nextAlbumId()  { const a = getAlbums(); return a.length ? Math.max(...a.map(x=>x.id))+1 : 1; }
function nextPhotoId(a) { return a.photos.length ? Math.max(...a.photos.map(x=>x.id))+1 : 1; }

/* ── ARTICLES ── */
const ARTICLES_SEED = [
  {id:1,title:'L\'autonomisation économique des femmes : bilan 2024',cat:'Économie',
   date:'2025-06-12',author:'Nancy VILCÉ',status:'published',featured:true,
   excerpt:'Plus de 1 000 femmes ont bénéficié de nos programmes d\'économie solidaire cette année.',
   content:'<p>En 2024, l\'AFADETH a franchi une étape historique...</p>',
   tags:['Économie','Femmes','Entrepreneuriat'],cover:''},
  {id:2,title:'Clinique Sante Fanm AFADETH : 500 consultations en 3 mois',cat:'Santé',
   date:'2025-05-28',author:'Abigail EDOUARD',status:'published',featured:false,
   excerpt:'Notre clinique permanente à Pétion-Ville a réalisé 500 consultations gynécologiques.',
   content:'<p>La Clinique Permanente Sante Fanm AFADETH continue de démontrer son impact vital...</p>',
   tags:['Santé','Clinique','Femmes'],cover:''},
  {id:3,title:'Protection et droits : notre programme anti-VBG en action',cat:'Droits & VBG',
   date:'2025-05-15',author:'Annette G. JOSEPH',status:'published',featured:false,
   excerpt:'L\'unité PSEA de l\'AFADETH a accompagné 120 survivantes en 2025.',
   content:'<p>La lutte contre les Violences Basées sur le Genre reste au cœur de la mission...</p>',
   tags:['VBG','Droits','PSEA'],cover:''},
  {id:4,title:'AFADETH Jeunesse : forger les leaders de demain',cat:'Éducation',
   date:'2025-05-03',author:'Sherly ROSIER',status:'published',featured:false,
   excerpt:'La branche jeunesse de l\'AFADETH forme une nouvelle génération de femmes leaders.',
   content:'<p>AFADETH Jeunesse incarne l\'avenir de l\'organisation...</p>',
   tags:['Jeunesse','Leadership','Éducation'],cover:''},
  {id:5,title:'Renouvellement du partenariat stratégique avec l\'UNFPA',cat:'Partenariats',
   date:'2025-04-20',author:'Nancy VILCÉ',status:'published',featured:false,
   excerpt:'L\'AFADETH et l\'UNFPA ont signé un accord de partenariat renforcé pour 2025-2027.',
   content:'<p>La signature du nouvel accord de partenariat avec l\'UNFPA marque une étape importante...</p>',
   tags:['UNFPA','Partenariat','Santé'],cover:''},
  {id:6,title:'Un an après : le restaurant solidaire transforme des vies',cat:'Économie',
   date:'2025-04-08',author:'Abigail EDOUARD',status:'published',featured:false,
   excerpt:'Lancé en 2024, le Restaurant Communautaire Solidaire AFADETH a servi plus de 15 000 repas.',
   content:'<p>Le Restaurant Communautaire Solidaire AFADETH célèbre son premier anniversaire...</p>',
   tags:['Restaurant','Solidarité','Emploi'],cover:''},
];

function getArticles()    { return LS.get('articles', ARTICLES_SEED); }
function saveArticles(a)  { LS.set('articles', a); }
function nextArticleId()  { const a = getArticles(); return a.length ? Math.max(...a.map(x=>x.id))+1 : 1; }

/* ── CONTACTS ── */
const CONTACTS_SEED = [
  {id:1,prenom:'Marie',nom:'JEAN',email:'marie.jean@gmail.com',telephone:'+509 3812 4567',
   sujet:'adhesion',message:'Bonjour, je souhaite adhérer à l\'AFADETH. Je suis engagée dans la communauté de Thomassin et je voudrais contribuer aux actions de l\'association. Comment faire pour adhérer ?',
   date:'2025-06-23T14:32:00',lu:false,archived:false},
  {id:2,prenom:'Rose-Marie',nom:'PIERRE',email:'rosemarie.pierre@yahoo.com',telephone:'',
   sujet:'partenariat',message:'Notre ONG "Fanm Solid" souhaite explorer une collaboration avec l\'AFADETH sur les programmes de formation en leadership féminin. Nous intervenons dans le Nord et pourrions bénéficier de votre expertise. Merci de nous contacter.',
   date:'2025-06-22T09:15:00',lu:true,archived:false},
  {id:3,prenom:'Claudine',nom:'LORIVAL',email:'claudine@entreprise.ht',telephone:'+509 2222 3344',
   sujet:'soutien',message:'Nous souhaitons faire un don à l\'AFADETH pour soutenir la clinique Sante Fanm. Comment procéder ? Y a-t-il une possibilité de donation en ligne ou via MonCash ?',
   date:'2025-06-20T16:45:00',lu:true,archived:false},
  {id:4,prenom:'Jean-Pierre',nom:'MOREAU',email:'jp.moreau@presse-ht.com',telephone:'',
   sujet:'media',message:'Journaliste pour Presse-HT. Je réalise un reportage sur les organisations féminines en Haïti et souhaiterais interviewer la présidente de l\'AFADETH. Est-ce possible de convenir d\'un rendez-vous ?',
   date:'2025-06-18T11:20:00',lu:false,archived:false},
];
function getContacts()    { return LS.get('contacts', CONTACTS_SEED); }
function saveContacts(c)  { LS.set('contacts', c); }
function unreadCount()    { return getContacts().filter(c=>!c.lu&&!c.archived).length; }

/* ── USERS ── */
const USERS_SEED = [
  {id:1,prenom:'Nancy',nom:'VILCÉ',email:'nancy@afadeth.org',role:'admin',
   created:'2025-01-15',actif:true,init:'NV'},
  {id:2,prenom:'Abigail',nom:'EDOUARD',email:'abigail@afadeth.org',role:'editor',
   created:'2025-02-01',actif:true,init:'AE'},
];
function getUsers()    { return LS.get('users', USERS_SEED); }
function saveUsers(u)  { LS.set('users', u); }
function nextUserId()  { const u = getUsers(); return u.length ? Math.max(...u.map(x=>x.id))+1 : 1; }

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

/* ── Confirm delete ── */
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

/* ── Sujet labels ── */
const SUJET = {
  soutien:'Soutenir',partenariat:'Partenariat',adhesion:'Adhésion',
  jeunesse:'AFADETH Jeunesse',media:'Médias',clinique:'Clinique',autre:'Autre'
};

/* ── Category labels ── */
const CAT_LABELS = {
  evenements:'Événements',sante:'Santé',economie:'Économie',
  droits:'Droits & VBG',education:'Éducation'
};

/* ── Active nav link ── */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link').forEach(a => {
    const href = (a.getAttribute('href')||'').split('/').pop();
    if (href === page) a.classList.add('active');
  });
}

/* ── Unread badge in sidebar ── */
function refreshBadges() {
  const n = unreadCount();
  document.querySelectorAll('[data-unread]').forEach(el => {
    el.textContent = n||'';
    el.style.display = n ? 'inline-flex':'none';
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initToast();
  setActiveNav();
  refreshBadges();
  // Load current user display
  const users = getUsers();
  const u = users[0]||{prenom:'Admin',nom:'',init:'A'};
  document.querySelectorAll('[data-user-name]').forEach(el=>{el.textContent=u.prenom+' '+u.nom;});
  document.querySelectorAll('[data-user-init]').forEach(el=>{el.textContent=u.init||u.prenom[0];});
});
