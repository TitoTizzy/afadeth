/* ============================================================
   AFADETH — Module Galerie (Albums View)
   ============================================================ */

const CAT_LABELS_G = {
  evenements:'Événements', sante:'Santé', economie:'Économie',
  droits:'Droits & VBG', education:'Éducation'
};

/* Local seed — paths relative to root (not admin/) */
const LOCAL_ALBUMS = [
  { id:1, name:'Événements 2025', cat:'evenements', date:'2025-06-15',
    desc:'Cérémonies, rassemblements et événements officiels de l\'AFADETH en 2025.',
    cover:'assets/images/gallery/gallery_03.jpg',
    photos:[
      {id:1,src:'assets/images/gallery/gallery_01.jpg',title:'Félicitation — Nouvelle Présidente',desc:'L\'AFADETH félicite sa Présidente — nouveau défi, même engagement'},
      {id:2,src:'assets/images/gallery/gallery_02.jpg',title:'Message Officiel AFADETH',desc:'Communication officielle de l\'Association — Pétion-Ville'},
      {id:3,src:'assets/images/gallery/gallery_03.jpg',title:'Grande Cérémonie AFADETH',desc:'Rassemblement des membres et partenaires — Thomassin'},
      {id:4,src:'assets/images/gallery/gallery_04.jpg',title:'Remise de Distinctions',desc:'Cérémonie de reconnaissance des membres méritantes'},
    ]
  },
  { id:2, name:'Santé & Clinique', cat:'sante', date:'2025-05-20',
    desc:'Activités de la Clinique Permanente Sante Fanm AFADETH et programmes de santé communautaire.',
    cover:'assets/images/gallery/gallery_05.jpg',
    photos:[
      {id:5,src:'assets/images/gallery/gallery_05.jpg',title:'Activité Communautaire',desc:'Programme santé et bien-être pour les femmes de Thomassin'},
      {id:6,src:'assets/images/gallery/gallery_06.jpg',title:'Journée de la Femme',desc:'Célébration du 8 mars — AFADETH en action'},
      {id:7,src:'assets/images/gallery/gallery_07.jpg',title:'Formation des Bénévoles',desc:'Renforcement des capacités des membres AFADETH'},
    ]
  },
  { id:3, name:'Économie Solidaire', cat:'economie', date:'2025-04-10',
    desc:'Le programme Kore Fanm Agrikòl yo et les initiatives économiques de l\'AFADETH.',
    cover:'assets/images/gallery/gallery_08.jpg',
    photos:[
      {id:8,src:'assets/images/gallery/gallery_08.jpg',title:'Rencontre Annuelle des Membres',desc:'Assemblée et bilan des activités de l\'association'},
    ]
  },
  { id:4, name:'Droits & Protection VBG', cat:'droits', date:'2025-03-08',
    desc:'Sensibilisation, formations et accompagnement juridique dans la lutte contre les VBG.',
    cover:'', photos:[]
  },
  { id:5, name:'AFADETH Jeunesse', cat:'education', date:'2025-02-14',
    desc:'Ateliers leadership, formations et activités de la branche jeunesse de l\'AFADETH.',
    cover:'', photos:[]
  }
];

/* Normalize paths: admin stores ../assets/… but we're at root */
function fixPath(s) { return (s||'').replace(/^\.\.\//,''); }

/* ── Cache Supabase ── */
let _albums = null;

function getAlbumsCache() { return _albums || LOCAL_ALBUMS; }

async function _fetchAlbums() {
  try {
    const { data, error } = await window.sb.from('albums')
      .select('*, photos(*)')
      .order('date', { ascending:false, nullsFirst:false });
    if (!error && data && data.length) {
      _albums = data.map(row => ({
        id:     row.id,
        name:   row.name,
        cat:    row.cat,
        date:   row.date   || '',
        desc:   row.description || '',
        cover:  row.cover_url   || '',
        photos: (row.photos || [])
          .sort((a,b) => (a.sort_order||0) - (b.sort_order||0))
          .map(p => ({id:p.id, src:p.src_url, title:p.title||'', desc:p.description||''}))
      }));
    }
  } catch(e) {}
  if (!_albums) {
    /* fallback: localStorage puis seed */
    try {
      const raw = localStorage.getItem('afadeth_albums');
      if (raw) {
        _albums = JSON.parse(raw).map(a => ({
          ...a,
          cover:  fixPath(a.cover),
          photos: (a.photos||[]).map(p => ({...p, src:fixPath(p.src)}))
        }));
      }
    } catch(e) {}
    if (!_albums) _albums = LOCAL_ALBUMS;
  }
}

/* ── State ── */
let filteredItems  = [];
let lightboxIndex  = 0;

/* ─────────────────────────────────────────────────────────
   ALBUMS VIEW
───────────────────────────────────────────────────────── */
const CAT_COL = {
  evenements:'#E85D04', sante:'#3A6E1F', economie:'#B87333',
  droits:'#7A1E32', education:'#C04A00'
};

function buildAlbumsView() {
  const grid = document.getElementById('albums-grid');
  if (!grid) return;
  const albums = getAlbumsCache();

  grid.innerHTML = albums.map(a => `
    <div class="galerie-album-card reveal" onclick="openAlbum(${a.id})" style="cursor:pointer">
      <div class="galerie-album-cover" style="${!a.cover?'background:linear-gradient(135deg,'+(CAT_COL[a.cat]||'#E85D04')+'cc,rgba(0,0,0,.45))':''}">
        ${a.cover
          ? `<img src="${a.cover}" alt="${a.name}" loading="lazy" onerror="this.style.display='none'"/>`
          : `<span style="font-size:3rem;opacity:.6">🖼️</span>`}
        <div class="galerie-album-badge-count">${a.photos.length}<br/><span>photo${a.photos.length!==1?'s':''}</span></div>
        <div class="galerie-album-badge-cat" style="background:${(CAT_COL[a.cat]||'#E85D04')}dd">${CAT_LABELS_G[a.cat]||a.cat}</div>
      </div>
      <div class="galerie-album-body">
        <div class="galerie-album-name">${a.name}</div>
        <div class="galerie-album-desc">${a.desc||''}</div>
        <span class="galerie-album-cta">Voir les photos <span class="galerie-album-arrow">→</span></span>
      </div>
    </div>
  `).join('');

  initReveal();
}

/* ── Open album ── */
function openAlbum(id) {
  const album = getAlbumsCache().find(a => a.id === id);
  if (!album) return;

  filteredItems = [...album.photos];

  const nameEl = document.getElementById('album-view-name');
  const metaEl = document.getElementById('album-view-meta');
  if (nameEl) nameEl.textContent = album.name;
  if (metaEl) metaEl.textContent = `${CAT_LABELS_G[album.cat]||album.cat} · ${album.photos.length} photo${album.photos.length!==1?'s':''}`;

  document.getElementById('albums-section').style.display  = 'none';
  document.getElementById('photos-section').style.display  = 'block';
  document.getElementById('gallery-loading').style.display = 'none';

  buildPhotosGrid(album);
  window.scrollTo({top: document.getElementById('photos-section').offsetTop - 80, behavior:'smooth'});
}

/* ── Back to albums ── */
function showAlbumsView() {
  document.getElementById('albums-section').style.display = 'block';
  document.getElementById('photos-section').style.display = 'none';
  filteredItems = [];
  window.scrollTo({top: document.getElementById('albums-section').offsetTop - 80, behavior:'smooth'});
}

/* ─────────────────────────────────────────────────────────
   PHOTOS GRID
───────────────────────────────────────────────────────── */
function buildPhotosGrid(album) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.classList.remove('gallery-grid--hidden');
  grid.innerHTML = '';

  if (!album.photos.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--light-text-2)">
        <div style="font-size:3rem;margin-bottom:16px">📸</div>
        <div style="font-size:1.1rem;font-weight:600;color:var(--light-text)">Cet album ne contient pas encore de photos</div>
        <p style="margin-top:8px;font-size:.9rem">Revenez bientôt pour découvrir nos nouvelles images !</p>
      </div>`;
    return;
  }

  const heights = [320,280,340,260,300,380];
  const grads   = [
    'linear-gradient(145deg,#C04A00,#E85D04)',
    'linear-gradient(145deg,#7A1E32,#E85D04)',
    'linear-gradient(145deg,#1B4020,#3A6E1F)',
    'linear-gradient(145deg,#B87333,#C9A237)',
    'linear-gradient(145deg,#C04A00,#C9A237)',
  ];

  album.photos.forEach((photo, idx) => {
    const div = document.createElement('div');
    div.className = 'gallery-item reveal';
    div.dataset.idx = idx;
    div.style.transitionDelay = `${(idx % 4) * 0.08}s`;
    div.innerHTML = photo.src
      ? `<img src="${photo.src}" alt="${photo.title||''}" class="gallery-item__img" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
         <div class="gallery-item__placeholder" style="display:none;height:${heights[idx%heights.length]}px;background:${grads[idx%grads.length]}"></div>
         <div class="gallery-item__overlay"><div>
           <div class="gallery-item__title">${photo.title||''}</div>
           <div class="gallery-item__desc-short">${photo.desc||''}</div>
         </div></div>
         <div class="gallery-item__zoom">⤢</div>`
      : `<div class="gallery-item__placeholder" style="height:${heights[idx%heights.length]}px;background:${grads[idx%grads.length]}"></div>
         <div class="gallery-item__overlay"><div>
           <div class="gallery-item__title">${photo.title||''}</div>
           <div class="gallery-item__desc-short">${photo.desc||''}</div>
         </div></div>
         <div class="gallery-item__zoom">⤢</div>`;
    div.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(div);
  });

  initReveal();
}

/* ── Reveal ── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.gallery-item.reveal:not(.show), .galerie-album-card.reveal:not(.show)')
    .forEach(el => obs.observe(el));
}

/* ─────────────────────────────────────────────────────────
   LIGHTBOX + ZOOM / PAN
───────────────────────────────────────────────────────── */
let lbZoom = 1, lbPanX = 0, lbPanY = 0;
let lbPanning = false, lbPanStart = {x:0,y:0}, lbPinchDist = 0;
const ZOOM_MIN=1, ZOOM_MAX=6, ZOOM_STEP=0.3;

function lbImg()  { return document.getElementById('lb-img'); }
function lbPh()   { return document.getElementById('lb-placeholder'); }
function lbLvl()  { return document.getElementById('lb-zoom-level'); }

function setZoom(newZ, ox=0, oy=0) {
  const prev = lbZoom;
  lbZoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, newZ));
  if (lbZoom !== prev) {
    const r = lbZoom / prev;
    lbPanX = ox + (lbPanX - ox) * r;
    lbPanY = oy + (lbPanY - oy) * r;
  }
  applyZoom();
}

function applyZoom() {
  const img = lbImg();
  if (!img || img.style.display === 'none') return;
  img.style.transform = `translate(${lbPanX}px,${lbPanY}px) scale(${lbZoom})`;
  img.classList.toggle('lb-zoomed', lbZoom > 1);
  const lvl = lbLvl();
  if (lvl) lvl.textContent = Math.round(lbZoom * 100) + '%';
}

function resetZoom() { lbZoom=1; lbPanX=0; lbPanY=0; applyZoom(); }

function onLbWheel(e) {
  e.preventDefault();
  const img = lbImg();
  if (!img || img.style.display === 'none') return;
  const rect = img.getBoundingClientRect();
  setZoom(lbZoom + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP),
          e.clientX - (rect.left + rect.width/2),
          e.clientY - (rect.top  + rect.height/2));
}

function onLbDblClick(e) {
  const img = lbImg();
  if (!img || img.style.display === 'none') return;
  if (lbZoom > 1) { resetZoom(); return; }
  const rect = img.getBoundingClientRect();
  setZoom(2.5, e.clientX-(rect.left+rect.width/2), e.clientY-(rect.top+rect.height/2));
}

function onLbMouseDown(e) {
  if (lbZoom <= 1 || e.button !== 0) return;
  lbPanning = true;
  lbPanStart = {x: e.clientX - lbPanX, y: e.clientY - lbPanY};
  const img = lbImg();
  if (img) img.classList.add('lb-panning');
  e.preventDefault();
}
function onLbMouseMove(e) {
  if (!lbPanning) return;
  lbPanX = e.clientX - lbPanStart.x;
  lbPanY = e.clientY - lbPanStart.y;
  const img = lbImg();
  if (img) img.style.transform = `translate(${lbPanX}px,${lbPanY}px) scale(${lbZoom})`;
}
function onLbMouseUp() {
  if (!lbPanning) return;
  lbPanning = false;
  const img = lbImg();
  if (img) img.classList.remove('lb-panning');
}

function pinchDist(t) { return Math.hypot(t[1].clientX-t[0].clientX, t[1].clientY-t[0].clientY); }
function onLbTouchStart(e) { if (e.touches.length===2) { e.preventDefault(); lbPinchDist=pinchDist(e.touches); } }
function onLbTouchMove(e) {
  if (e.touches.length!==2||!lbPinchDist) return;
  e.preventDefault();
  const d = pinchDist(e.touches);
  setZoom(lbZoom * d / lbPinchDist);
  lbPinchDist = d;
}
function onLbTouchEnd() { lbPinchDist = 0; }

function buildLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  lb.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
  lb.querySelector('.lightbox__prev').addEventListener('click', () => navigateLightbox(-1));
  lb.querySelector('.lightbox__next').addEventListener('click', () => navigateLightbox(1));
  lb.addEventListener('click', e => { if (e.target===lb || e.target.id==='lb-stage') closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key==='Escape')      closeLightbox();
    if (e.key==='ArrowLeft')   navigateLightbox(-1);
    if (e.key==='ArrowRight')  navigateLightbox(1);
    if (e.key==='+'||e.key==='=') setZoom(lbZoom+ZOOM_STEP);
    if (e.key==='-')           setZoom(lbZoom-ZOOM_STEP);
    if (e.key==='0')           resetZoom();
  });

  document.getElementById('lb-zoom-in') .addEventListener('click', () => setZoom(lbZoom+ZOOM_STEP));
  document.getElementById('lb-zoom-out').addEventListener('click', () => setZoom(lbZoom-ZOOM_STEP));
  document.getElementById('lb-zoom-reset').addEventListener('click', resetZoom);

  const stage = document.getElementById('lb-stage');
  stage.addEventListener('wheel',      onLbWheel,     {passive:false});
  stage.addEventListener('dblclick',   onLbDblClick);
  stage.addEventListener('mousedown',  onLbMouseDown);
  window.addEventListener('mousemove', onLbMouseMove);
  window.addEventListener('mouseup',   onLbMouseUp);
  stage.addEventListener('touchstart', onLbTouchStart,{passive:false});
  stage.addEventListener('touchmove',  onLbTouchMove, {passive:false});
  stage.addEventListener('touchend',   onLbTouchEnd);
}

function openLightbox(idx) {
  if (!filteredItems.length) return;
  lightboxIndex = idx;
  resetZoom();
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  resetZoom();
}

function navigateLightbox(dir) {
  if (!filteredItems.length) return;
  lightboxIndex = (lightboxIndex + dir + filteredItems.length) % filteredItems.length;
  resetZoom();
  updateLightbox();
}

function updateLightbox() {
  const item = filteredItems[lightboxIndex];
  if (!item) return;
  const lb  = document.getElementById('lightbox');
  const img = lbImg();
  const ph  = lbPh();

  if (item.src) {
    if (img) { img.src = item.src; img.alt = item.title||''; img.style.display = 'block'; }
    if (ph)  { ph.style.display = 'none'; }
  } else {
    if (img) { img.src=''; img.style.display='none'; }
    if (ph)  { ph.style.display='block'; ph.style.background='linear-gradient(145deg,#C04A00,#E85D04)'; }
  }

  lb.querySelector('.lightbox__info-title').textContent = item.title||'';
  lb.querySelector('.lightbox__info-cat').textContent   = item.desc||'';
  lb.querySelector('.lightbox__info-desc').textContent  = '';
  lb.querySelector('.lightbox__counter').textContent    = `${lightboxIndex+1} / ${filteredItems.length}`;
  if (lbLvl()) lbLvl().textContent = '100%';
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', async () => {
  buildLightbox();
  buildAlbumsView(); /* rendu immédiat avec seed */
  await _fetchAlbums();
  buildAlbumsView(); /* re-rendu avec données Supabase */
});
