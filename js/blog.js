/* ============================================================
   AFADETH — Module Blog
   ============================================================ */

/* ---- Données mock (remplacé par Supabase en phase 2) ---- */
const BLOG_DATA = [
  {
    id:1, slug:'autonomisation-economique-femmes-2024',
    title:'L\'autonomisation économique des femmes : bilan 2024',
    excerpt:'Plus de 1 000 femmes ont bénéficié de nos programmes d\'économie solidaire cette année. Retour sur les réalisations et les défis relevés à Thomassin.',
    content:`<p>En 2024, l'AFADETH a franchit une étape historique en accompagnant plus de 1 000 femmes dans leurs projets d'autonomisation économique. Ce bilan témoigne de l'engagement sans faille de l'association depuis sa fondation en 2006.</p>
<h2>Les programmes phares</h2>
<p>Le programme <strong>Kore Fanm Agrikòl yo</strong> (Soutien aux femmes agricultrices) a permis à 350 femmes de moderniser leurs pratiques agricoles grâce à des formations techniques et un accès facilité aux intrants.</p>
<blockquote>« Avant AFADETH, je cultivais comme ma grand-mère. Aujourd'hui, j'ai doublé ma récolte et je vends sur trois marchés. » — Marie-Louise, agricultrice à Thomassin</blockquote>
<h3>Économie Solidaire</h3>
<p>Le volet EKONOMI SOLIDÈ a soutenu la création de 87 micro-entreprises féminines, dans les secteurs de l'artisanat, de la restauration et du commerce.</p>
<h2>Perspectives 2025</h2>
<p>L'association vise à atteindre 2 000 femmes en 2025, notamment grâce au partenariat avec l'UEH pour la recherche et l'évaluation des impacts.</p>`,
    cat:'Économie', date:'12 Juin 2025', author:'Nancy VILCÉ', authorRole:'Présidente AFADETH',
    readTime:'5 min', gradient:'linear-gradient(135deg,#880E4F,#C2185B)', featured:true,
    tags:['Économie', 'Femmes', 'Entrepreneuriat', 'Thomassin']
  },
  {
    id:2, slug:'clinique-sante-fanm-bilan',
    title:'Clinique Sante Fanm AFADETH : 500 consultations en 3 mois',
    excerpt:'Notre clinique permanente à Pétion-Ville a réalisé 500 consultations gynécologiques et de santé reproductive au premier trimestre 2025.',
    content:`<p>La Clinique Permanente <strong>Sante Fanm AFADETH</strong> continue de démontrer son impact vital dans la région de Pétion-Ville. Avec 500 consultations en seulement 3 mois, elle s'affirme comme un pilier indispensable de la santé des femmes haïtiennes.</p>
<h2>Services offerts</h2>
<p>La clinique propose des consultations gynécologiques, des dépistages du cancer du sein et du col de l'utérus, ainsi que des services de santé reproductive et d'hygiène menstruelle.</p>
<h2>Impact sur la communauté</h2>
<p>Grâce à l'approche mobile, l'équipe médicale rejoint également les communautés rurales de Fermathe et Fort-Jacques chaque mois.</p>`,
    cat:'Santé', date:'28 Mai 2025', author:'Abigail EDOUARD', authorRole:'Administratrice',
    readTime:'4 min', gradient:'linear-gradient(135deg,#4A148C,#7B1FA2)',
    tags:['Santé', 'Clinique', 'Femmes', 'Reproductive']
  },
  {
    id:3, slug:'lutte-vbg-programme-psea',
    title:'Protection et droits : notre programme anti-VBG en action',
    excerpt:'L\'unité PSEA de l\'AFADETH a accompagné 120 survivantes en 2025. Un travail de terrain crucial pour la protection des femmes vulnérables.',
    content:`<p>La lutte contre les Violences Basées sur le Genre (VBG) reste au cœur de la mission de l'AFADETH. L'unité PSEA, renforcée grâce au partenariat avec Avocats Sans Frontières, a considérablement étendu sa portée en 2025.</p>
<h2>Accompagnement juridique</h2>
<p>120 survivantes ont bénéficié d'un accompagnement juridique complet, allant de la prise de plainte jusqu'à la représentation devant les tribunaux haïtiens.</p>
<blockquote>« AFADETH m'a redonné ma voix et ma dignité. » — Témoignage anonyme, mars 2025</blockquote>`,
    cat:'Droits & VBG', date:'15 Mai 2025', author:'Annette G. JOSEPH', authorRole:'Coordinatrice',
    readTime:'6 min', gradient:'linear-gradient(135deg,#BF360C,#E85D04)',
    tags:['VBG', 'Droits', 'PSEA', 'Protection']
  },
  {
    id:4, slug:'afadeth-jeunesse-leadership',
    title:'AFADETH Jeunesse : forger les leaders de demain',
    excerpt:'La branche jeunesse de l\'AFADETH forme une nouvelle génération de femmes leaders engagées pour transformer Haïti.',
    content:`<p>AFADETH Jeunesse incarne l'avenir de l'organisation. Sous la coordination de Sherly ROSIER, ce programme regroupe plus de 200 jeunes femmes de 15 à 30 ans qui s'engagent dans des actions citoyennes et de leadership.</p>
<h2>Programmes en cours</h2>
<p>Des ateliers de formation au leadership, des sessions de mentorat avec des professionnelles haïtiennes, et des campagnes de sensibilisation dans les écoles constituent le cœur du programme.</p>`,
    cat:'Éducation', date:'3 Mai 2025', author:'Sherly ROSIER', authorRole:'Responsable Jeunesse',
    readTime:'4 min', gradient:'linear-gradient(135deg,#1A237E,#3949AB)',
    tags:['Jeunesse', 'Leadership', 'Éducation', 'Femmes']
  },
  {
    id:5, slug:'partenariat-unfpa-2025',
    title:'Renouvellement du partenariat stratégique avec l\'UNFPA',
    excerpt:'L\'AFADETH et l\'UNFPA ont signé un accord de partenariat renforcé pour 2025-2027, ouvrant de nouvelles perspectives pour les droits reproductifs en Haïti.',
    content:`<p>La signature du nouvel accord de partenariat avec l'UNFPA marque une étape importante dans le développement institutionnel de l'AFADETH. Cet accord triennal (2025-2027) mobilise des ressources significatives pour les programmes de santé reproductive.</p>
<h2>Objectifs du partenariat</h2>
<p>Renforcement des capacités cliniques, formation du personnel médical, et extension des services aux zones rurales constituent les trois axes prioritaires de cet accord.</p>`,
    cat:'Partenariats', date:'20 Avril 2025', author:'Nancy VILCÉ', authorRole:'Présidente AFADETH',
    readTime:'3 min', gradient:'linear-gradient(135deg,#004D40,#26A69A)',
    tags:['UNFPA', 'Partenariat', 'Santé', 'International']
  },
  {
    id:6, slug:'restaurant-communautaire-bilan',
    title:'Un an après : le restaurant solidaire transforme des vies',
    excerpt:'Lancé en 2024, le Restaurant Communautaire Solidaire AFADETH a servi plus de 15 000 repas et créé 12 emplois pour des femmes vulnérables.',
    content:`<p>Le Restaurant Communautaire Solidaire AFADETH célèbre son premier anniversaire avec un bilan remarquable. Implanté au cœur de Pétion-Ville, il est devenu bien plus qu'un simple restaurant : c'est un espace de solidarité et d'autonomisation.</p>
<h2>Un modèle économique solidaire</h2>
<p>Le restaurant fonctionne selon un modèle à double tarification : les repas sont vendus à prix normal aux personnes avec revenus, et à prix symbolique ou gratuitement aux personnes vulnérables.</p>`,
    cat:'Économie', date:'8 Avril 2025', author:'Abigail EDOUARD', authorRole:'Administratrice',
    readTime:'5 min', gradient:'linear-gradient(135deg,#E65100,#FF6D00)',
    tags:['Restaurant', 'Solidarité', 'Emploi', 'Communauté']
  },
];

const BLOG_CATS = { Tous:null, Économie:'Économie', Santé:'Santé', 'Droits & VBG':'Droits & VBG', Éducation:'Éducation', Partenariats:'Partenariats' };

const ITEMS_PER_PAGE = 4;
let currentPage = 1;
let currentCat = null;
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {

  /* Blog listing page */
  if (document.getElementById('articles-container')) {
    renderFeatured();
    renderArticles();
    initSearch();
    initSidebar();
    initReadingBar();
  }

  /* Single article page */
  if (document.getElementById('article-content')) {
    loadArticle();
    initReadingBar();
  }

});

/* ---- Featured article ---- */
function renderFeatured() {
  const el = document.getElementById('featured-article');
  if (!el) return;
  const a = BLOG_DATA.find(i => i.featured) || BLOG_DATA[0];
  el.innerHTML = `
    <a href="article.html?id=${a.id}" class="article-featured reveal">
      <div class="article-featured__bg" style="background:${a.gradient}"></div>
      <div class="article-featured__gradient"></div>
      <div class="article-featured__body">
        <div class="article-featured__badge">★ À la une</div>
        <h2 class="article-featured__title">${a.title}</h2>
        <div class="article-featured__meta">
          <span>📅 ${a.date}</span>
          <span>•</span>
          <span>⏱ ${a.readTime} de lecture</span>
          <span>•</span>
          <span>✍ ${a.author}</span>
        </div>
      </div>
    </a>
  `;
}

/* ---- Articles list ---- */
function renderArticles() {
  const container = document.getElementById('articles-container');
  if (!container) return;

  let data = BLOG_DATA.filter(a => !a.featured || currentCat);
  if (currentCat) data = BLOG_DATA.filter(a => a.cat === currentCat);
  if (searchQuery) data = data.filter(a =>
    a.title.toLowerCase().includes(searchQuery) ||
    a.excerpt.toLowerCase().includes(searchQuery) ||
    a.tags.some(t => t.toLowerCase().includes(searchQuery))
  );

  const total = data.length;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageData = data.slice(start, start + ITEMS_PER_PAGE);

  if (!pageData.length) {
    container.innerHTML = `<div style="text-align:center;padding:60px;color:var(--light-text-2);opacity:.6">Aucun article trouvé.</div>`;
    renderPagination(0);
    return;
  }

  container.innerHTML = pageData.map((a, i) => `
    <article class="article-card reveal" style="transition-delay:${i * 0.1}s">
      <div class="article-card__img">
        <div class="article-card__img-inner" style="background:${a.gradient};height:100%;min-height:200px"></div>
        <span class="article-card__cat">${a.cat}</span>
      </div>
      <div class="article-card__body">
        <div class="article-card__meta">
          <span class="article-card__date">📅 ${a.date}</span>
          <div class="article-card__date-dot"></div>
          <span class="article-card__read">⏱ ${a.readTime}</span>
        </div>
        <h2 class="article-card__title">${a.title}</h2>
        <p class="article-card__excerpt">${a.excerpt}</p>
        <div class="article-card__footer">
          <div class="article-card__author">
            <div class="article-card__avatar">${a.author.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
            <div class="article-card__author-info">
              <div class="article-card__author-name">${a.author}</div>
              <div class="article-card__author-role">${a.authorRole}</div>
            </div>
          </div>
          <a href="article.html?id=${a.id}" class="article-card__link">Lire →</a>
        </div>
      </div>
    </article>
  `).join('');

  initRevealArticles();
  renderPagination(total);
}

/* ---- Pagination ---- */
function renderPagination(total) {
  const el = document.getElementById('pagination');
  if (!el) return;
  const pages = Math.ceil(total / ITEMS_PER_PAGE);
  if (pages <= 1) { el.innerHTML = ''; return; }

  const items = [];
  if (currentPage > 1) items.push(`<button class="page-btn page-btn-prev" onclick="goPage(${currentPage-1})">← Préc.</button>`);
  for (let i = 1; i <= pages; i++) {
    items.push(`<button class="page-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`);
  }
  if (currentPage < pages) items.push(`<button class="page-btn page-btn-next" onclick="goPage(${currentPage+1})">Suiv. →</button>`);
  el.innerHTML = items.join('');
}

window.goPage = (p) => {
  currentPage = p;
  renderArticles();
  document.getElementById('articles-container')?.scrollIntoView({ behavior:'smooth', block:'start' });
};

/* ---- Search ---- */
function initSearch() {
  const input = document.querySelector('.sidebar-search input');
  const btn = document.querySelector('.sidebar-search button');
  if (!input) return;
  const doSearch = () => {
    searchQuery = input.value.toLowerCase().trim();
    currentPage = 1;
    renderArticles();
  };
  btn?.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
}

/* ---- Sidebar ---- */
function initSidebar() {
  /* Categories */
  const catList = document.getElementById('sidebar-cats');
  if (catList) {
    catList.innerHTML = Object.entries(BLOG_CATS).map(([label, val]) => {
      const count = val ? BLOG_DATA.filter(a => a.cat === val).length : BLOG_DATA.length;
      return `<div class="sidebar-cat ${currentCat===val?'active':''}" data-cat="${val||''}">
        ${label} <span>${count}</span>
      </div>`;
    }).join('');
    catList.querySelectorAll('.sidebar-cat').forEach(el => {
      el.addEventListener('click', () => {
        currentCat = el.dataset.cat || null;
        currentPage = 1;
        catList.querySelectorAll('.sidebar-cat').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
        renderArticles();
      });
    });
  }

  /* Recent posts */
  const recent = document.getElementById('sidebar-recent');
  if (recent) {
    recent.innerHTML = BLOG_DATA.slice(0,3).map(a => `
      <div class="sidebar-recent-item">
        <div class="sidebar-recent-img"><div style="background:${a.gradient};width:100%;height:100%;border-radius:8px"></div></div>
        <div>
          <a href="article.html?id=${a.id}" class="sidebar-recent-title">${a.title}</a>
          <div class="sidebar-recent-date">${a.date}</div>
        </div>
      </div>
    `).join('');
  }

  /* Tags */
  const tags = document.getElementById('sidebar-tags');
  if (tags) {
    const allTags = [...new Set(BLOG_DATA.flatMap(a => a.tags))];
    tags.innerHTML = allTags.map(t => `<span class="sidebar-tag">${t}</span>`).join('');
    tags.querySelectorAll('.sidebar-tag').forEach(el => {
      el.addEventListener('click', () => {
        searchQuery = el.textContent.toLowerCase();
        currentPage = 1;
        renderArticles();
        if (window.showToast) window.showToast(`Recherche : ${el.textContent}`);
      });
    });
  }
}

/* ---- Single Article ---- */
function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const article = BLOG_DATA.find(a => a.id === id) || BLOG_DATA[0];

  /* Update page title */
  document.title = `${article.title} — AFADETH`;

  /* Hero */
  const hero = document.getElementById('article-hero-bg');
  if (hero) hero.style.background = article.gradient;

  const heroTitle = document.getElementById('article-hero-title');
  if (heroTitle) heroTitle.textContent = article.title;

  const heroCat = document.getElementById('article-hero-cat');
  if (heroCat) heroCat.textContent = article.cat;

  const heroMeta = document.getElementById('article-hero-meta');
  if (heroMeta) heroMeta.innerHTML = `<span>📅 ${article.date}</span><span>•</span><span>⏱ ${article.readTime} de lecture</span><span>•</span><span>✍ ${article.author}</span>`;

  /* Author */
  const authorEl = document.getElementById('article-author');
  if (authorEl) {
    authorEl.innerHTML = `
      <div class="article__author-avatar">${article.author.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div>
        <div class="article__author-name">${article.author}</div>
        <div class="article__author-role">${article.authorRole}</div>
      </div>
    `;
  }

  /* Content */
  const content = document.getElementById('article-content');
  if (content) content.innerHTML = article.content;

  /* Tags */
  const tagsEl = document.getElementById('article-tags');
  if (tagsEl) tagsEl.innerHTML = article.tags.map(t => `<span class="sidebar-tag">${t}</span>`).join('');

  /* Related */
  const related = document.getElementById('related-grid');
  if (related) {
    const others = BLOG_DATA.filter(a => a.id !== article.id).slice(0,3);
    related.innerHTML = others.map(a => `
      <a href="article.html?id=${a.id}" class="blog-card">
        <div class="blog-card__img">
          <div class="blog-card__img-inner" style="background:${a.gradient};height:100%"></div>
          <span class="blog-card__cat">${a.cat}</span>
        </div>
        <div class="blog-card__body">
          <div class="blog-card__date">${a.date}</div>
          <h3 class="blog-card__title">${a.title}</h3>
          <p class="blog-card__excerpt">${a.excerpt}</p>
          <div class="blog-card__footer">
            <div class="blog-card__author">
              <div class="blog-card__avatar">${a.author.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
              <span class="blog-card__author-name">${a.author}</span>
            </div>
            <span class="blog-card__link">Lire →</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  /* Sidebar */
  initSidebarSingle(article);
}

function initSidebarSingle(current) {
  const recent = document.getElementById('sidebar-recent');
  if (recent) {
    recent.innerHTML = BLOG_DATA.filter(a => a.id !== current.id).slice(0,3).map(a => `
      <div class="sidebar-recent-item">
        <div class="sidebar-recent-img"><div style="background:${a.gradient};width:64px;height:64px;border-radius:8px"></div></div>
        <div>
          <a href="article.html?id=${a.id}" class="sidebar-recent-title">${a.title}</a>
          <div class="sidebar-recent-date">${a.date}</div>
        </div>
      </div>
    `).join('');
  }
  const tags = document.getElementById('sidebar-tags');
  if (tags) {
    tags.innerHTML = current.tags.map(t => `<span class="sidebar-tag">${t}</span>`).join('');
  }
}

/* ---- Reading progress bar ---- */
function initReadingBar() {
  const bar = document.querySelector('.reading-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0%';
  }, { passive:true });
}

/* ---- Reveal articles ---- */
function initRevealArticles() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } });
  }, { threshold:0.1 });
  document.querySelectorAll('.article-card.reveal, .article-featured.reveal').forEach(el => obs.observe(el));
}
