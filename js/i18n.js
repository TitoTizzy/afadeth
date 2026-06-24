/* ============================================================
   AFADETH — Système de traduction multilingue
   Langues : fr · en · ht (Kreyòl) · es
   ============================================================ */

const LANG_META = {
  fr: { label:'Français',  flag:'🇫🇷', code:'FR' },
  en: { label:'English',   flag:'🇺🇸', code:'EN' },
  ht: { label:'Kreyòl',    flag:'🇭🇹', code:'HT' },
  es: { label:'Español',   flag:'🇪🇸', code:'ES' }
};

const I18N = {

  /* ── FRANÇAIS (base) ── */
  fr: {
    /* Navbar */
    'nav.tagline':    'Unir pour Servir',
    'nav.home':       'Accueil',
    'nav.mission':    'Mission',
    'nav.actions':    'Nos Actions',
    'nav.gallery':    'Galerie',
    'nav.blog':       'Blog',
    'nav.contact':    'Contact',
    'nav.support':    'Nous soutenir',

    /* Stats hero */
    'hero.badge':     'Fondée en 2006 · Thomassin, Haïti',
    'hero.pour':      'Pour les',
    'hero.sub':       'Par les Fanm.',
    'hero.org':       'Association des Femmes Dévouées de Thomassin',
    'hero.subtitle':  'Depuis 2006, nous unissons les femmes de Thomassin pour transformer des vies — par la santé, l\'économie, l\'éducation et la lutte contre les violences basées sur le genre.',
    'hero.btn.mission': 'Notre Mission',
    'hero.btn.join':  'Nous rejoindre',
    'hero.scroll':    'Défiler',

    /* Stats section */
    'stats.years':  'D\'existence et d\'engagement',
    'stats.women':  'Femmes soutenues',
    'stats.fields': 'Champs d\'intervention',
    'stats.sites':  'Sites d\'action',

    /* Racines */
    'racines.label':  'Ki moun nou ye · Nos Racines',
    'racines.title':  'Nées de la <em style="background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">terre haïtienne</em>',
    'racines.desc':   'AFADETH puise ses forces dans les valeurs profondes de la paysannerie haïtienne — la solidarité du lakou, la résilience des fanm peyizan, l\'amour de la tè a.',
    'racines.lakou.title': 'Le Lakou — l\'esprit de communauté',
    'racines.lakou.desc':  'Dans la tradition haïtienne, le <em>lakou</em> est la cour commune où les femmes se réunissent, s\'entraident et partagent. AFADETH est notre lakou moderne — un espace de solidarité, de guérison et d\'empowerment pour les femmes de Thomassin.',
    'racines.fanm.title':  'Fanm Peyizan — la force des femmes rurales',
    'racines.fanm.desc':   'Les femmes paysannes haïtiennes font vivre leurs familles et leurs communautés avec une résilience extraordinaire. Nos programmes honorent cette force en leur donnant accès aux outils, aux ressources et à la reconnaissance qu\'elles méritent.',
    'racines.unir.title':  'Unir pour Servir — la kominote',
    'racines.unir.desc':   'Notre devise s\'inspire du <em>konbit</em> haïtien — le travail collectif où chacune apporte sa contribution pour le bien de toutes. Depuis 2006, nous cultivons cette entraide au cœur des montagnes de Thomassin.',

    /* About */
    'about.label':  'Qui sommes-nous',
    'about.title':  'Une association <em>de femmes,</em><br>pour les femmes',
    'about.quote':  '« Unir pour Servir » — la devise qui guide chacune de nos actions depuis 2006.',
    'about.p1':     'AFADETH est née d\'une vision simple et puissante : que les femmes de Thomassin — montagnes, champs et marchés — puissent accéder aux soins, à l\'éducation et à des opportunités économiques dignes. Fondée par des femmes engagées de Pétion-Ville, notre association est devenue un pilier de la communauté haïtienne.',
    'about.lakou_quote': '« Nan lakou a, nou fò ansanm. Dans notre lakou, nous sommes fortes ensemble. »',
    'about.lakou_source':'— Proverbe haïtien, cœur de notre mission',
    'about.p2':     'Trois antennes — Pétion-Ville, Fermathe, Centre-Ville — pour toucher les fanm là où elles vivent, avec des programmes ancrés dans la réalité de la paysannerie haïtienne.',
    'about.tl.founded':      '2006 — Fondation',
    'about.tl.founded_desc': 'Création de AFADETH à Thomassin, Pétion-Ville',
    'about.tl.growth':       'Croissance',
    'about.tl.growth_desc':  'Extension à 3 sites, 4 programmes, 3 000+ femmes',
    'about.tl.today':        'Aujourd\'hui',
    'about.tl.today_desc':   '20 ans de services et d\'autonomisation des femmes haïtiennes',
    'about.btn.vision': 'Notre vision →',
    'about.btn.join':   'Nous rejoindre',
    'about.badge_label':'Année de fondation',

    /* Programmes */
    'fields.label':    'Nos Programmes',
    'fields.title':    '4 Champs <em style="background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">d\'intervention</em>',
    'fields.subtitle': 'Des actions concrètes, menées par et pour les femmes haïtiennes',
    'fields.eco.title':    'Économie Solidaire',
    'fields.eco.desc':     'Microcrédits, formations entrepreneuriales et coopératives d\'épargne pour l\'autonomie financière des femmes de Thomassin.',
    'fields.sante.title':  'Santé Fanm',
    'fields.sante.desc':   'Cliniques mobiles, sensibilisation à la santé maternelle et reproductive, et accompagnement psychosocial dans toute la zone.',
    'fields.vbg.title':    'Droits & Lutte anti-VBG',
    'fields.vbg.desc':     'Aide juridique, refuges d\'urgence et programmes de sensibilisation contre les violences basées sur le genre.',
    'fields.youth.title':  'AFADETH Jeunesse',
    'fields.youth.desc':   'Bourses, cours de rattrapage, formations professionnelles et mentorat pour les jeunes filles et femmes en quête d\'avenir.',
    'fields.btn':          'Explorer tous nos programmes →',

    /* Galerie */
    'gallery.label':   'Notre Galerie',
    'gallery.see_all': 'Voir toutes les photos →',

    /* Mission banner */
    'mission.quote':  '« Unir les femmes haïtiennes pour bâtir une communauté plus juste, plus saine et plus prospère. »',
    'mission.source': '— Nancy VILCÉ, Présidente · AFADETH',
    'mission.btn':    'Lire notre mission complète →',

    /* Blog */
    'blog.label':    'Actualités',
    'blog.title':    'Nos dernières <em style="font-style:italic;color:var(--wine)">nouvelles</em>',
    'blog.see_all':  'Voir tous les articles →',
    'blog.read':     'Lire →',

    /* Partenaires */
    'partners.title': 'Nos partenaires & soutiens',

    /* CTA final */
    'cta.label':    'Rejoignez-nous',
    'cta.title':    'Ensemble, nous sommes <em style="color:var(--wine)">plus fortes</em>',
    'cta.desc':     'Que vous souhaitiez devenir membre, bénévole ou partenaire, chaque geste compte pour les femmes de Thomassin.',
    'cta.contact':  'Nous contacter',
    'cta.actions':  'Voir nos actions',

    /* Footer */
    'footer.brand_desc': 'Association des Femmes Dévouées de Thomassin. Organisation humanitaire fondée en 2006, Pétion-Ville, Haïti.',
    'footer.col.nav':      'Navigation',
    'footer.col.programs': 'Programmes',
    'footer.col.contact':  'Contact',
    'footer.contact_us':   'Nous contacter',
    'footer.privacy':      'Confidentialité',
    'footer.legal':        'Mentions légales',
    'footer.copy':         '© 2025 AFADETH — Association des Femmes Dévouées de Thomassin. Tous droits réservés.',

    /* Contact page */
    'contact.breadcrumb_home': 'Accueil',
    'contact.label': 'Nous rejoindre',
    'contact.title': 'Contactez <em>AFADETH</em>',
    'contact.desc':  'Que vous souhaitiez nous soutenir, collaborer, rejoindre notre réseau ou simplement en savoir plus — nous sommes là pour vous.',
    'contact.form.label': 'Envoyez-nous un message',
    'contact.form.title': 'Parlons de votre <em class="h2-em-orange">projet ensemble</em>',
    'form.prenom':   'Prénom *',
    'form.nom':      'Nom *',
    'form.email':    'Adresse email *',
    'form.phone':    'Téléphone',
    'form.subject':  'Objet de votre message *',
    'form.subject.placeholder': 'Sélectionnez un sujet',
    'form.subject.soutien':     'Soutenir AFADETH',
    'form.subject.partenariat': 'Proposition de partenariat',
    'form.subject.adhesion':    'Adhérer à l\'association',
    'form.subject.jeunesse':    'AFADETH Jeunesse',
    'form.subject.media':       'Demande médias / presse',
    'form.subject.clinique':    'Clinique Sante Fanm',
    'form.subject.autre':       'Autre demande',
    'form.message':  'Votre message *',
    'form.message.placeholder': 'Décrivez votre demande, votre projet ou vos questions…',
    'form.consent':  'J\'accepte que mes données soient utilisées pour répondre à ma demande conformément à la politique de confidentialité de AFADETH.',
    'form.submit':   'Envoyer mon message →',
    'form.success.title': 'Message envoyé !',
    'form.success.text':  'Merci pour votre message. L\'équipe AFADETH vous répondra dans les plus brefs délais.',
    'contact.facebook.follow': 'Suivez-nous sur Facebook',
    'contact.facebook.desc':   'Actualités, photos, événements',
    'contact.direction':       'Direction',
    'contact.president.role':  'Présidente — AFADETH',
    'contact.president.quote': '« Notre porte est toujours ouverte pour ceux qui partagent notre vision d\'une Haïti plus juste pour les femmes. »',
    'contact.schedule.title':  '🕐 Disponibilité',
    'contact.schedule.weekday':'Lundi – Vendredi',
    'contact.schedule.saturday':'Samedi',
    'contact.schedule.sunday': 'Dimanche',

    /* Page heroes */
    'page.gallery.title': 'Notre <em>Galerie</em>',
    'page.gallery.desc':  'Les visages, les actions et les moments qui font vivre l\'AFADETH.',
    'page.blog.title':    'Blog & <em>Actualités</em>',
    'page.blog.desc':     'Les dernières nouvelles de l\'AFADETH et de ses programmes.',
    'page.actions.title': 'Nos <em>Actions</em>',
    'page.actions.desc':  'Quatre programmes concrets pour transformer les vies des femmes de Thomassin.',
  },

  /* ── ENGLISH ── */
  en: {
    'nav.tagline':  'Unite to Serve',
    'nav.home':     'Home',
    'nav.mission':  'Mission',
    'nav.actions':  'Our Actions',
    'nav.gallery':  'Gallery',
    'nav.blog':     'Blog',
    'nav.contact':  'Contact',
    'nav.support':  'Support Us',

    'hero.badge':   'Founded in 2006 · Thomassin, Haiti',
    'hero.pour':    'For the',
    'hero.sub':     'By the Fanm.',
    'hero.org':     'Association of Devoted Women of Thomassin',
    'hero.subtitle':'Since 2006, we unite the women of Thomassin to transform lives — through health, economy, education and the fight against gender-based violence.',
    'hero.btn.mission':'Our Mission',
    'hero.btn.join':'Join Us',
    'hero.scroll':  'Scroll',

    'stats.years':  'Years of commitment',
    'stats.women':  'Women supported',
    'stats.fields': 'Fields of action',
    'stats.sites':  'Action sites',

    'racines.label': 'Who We Are · Our Roots',
    'racines.title': 'Born from <em style="background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">Haitian soil</em>',
    'racines.desc':  'AFADETH draws its strength from the deep values of Haitian peasantry — the solidarity of the lakou, the resilience of the fanm peyizan, the love of the land.',
    'racines.lakou.title':'The Lakou — the spirit of community',
    'racines.lakou.desc': 'In Haitian tradition, the <em>lakou</em> is the common yard where women gather, help each other and share. AFADETH is our modern lakou — a space of solidarity, healing and empowerment for the women of Thomassin.',
    'racines.fanm.title': 'Fanm Peyizan — the strength of rural women',
    'racines.fanm.desc':  'Haitian peasant women sustain their families and communities with extraordinary resilience. Our programs honor this strength by giving them access to tools, resources and the recognition they deserve.',
    'racines.unir.title': 'Unite to Serve — the community',
    'racines.unir.desc':  'Our motto is inspired by the Haitian <em>konbit</em> — collective work where each woman contributes for the good of all. Since 2006, we have cultivated this mutual aid in the heart of the mountains of Thomassin.',

    'about.label':  'Who We Are',
    'about.title':  'An association <em>of women,</em><br>for women',
    'about.quote':  '"Unite to Serve" — the motto guiding each of our actions since 2006.',
    'about.p1':     'AFADETH was born from a simple and powerful vision: that the women of Thomassin — mountains, fields and markets — could access healthcare, education and dignified economic opportunities. Founded by committed women of Pétion-Ville, our association has become a pillar of the Haitian community.',
    'about.lakou_quote': '« Nan lakou a, nou fò ansanm. In our lakou, we are strong together. »',
    'about.lakou_source':'— Haitian proverb, heart of our mission',
    'about.p2':     'Three sites — Pétion-Ville, Fermathe, Centre-Ville — to reach fanm where they live, with programs rooted in the reality of Haitian peasantry.',
    'about.tl.founded':      '2006 — Founded',
    'about.tl.founded_desc': 'Creation of AFADETH in Thomassin, Pétion-Ville',
    'about.tl.growth':       'Growth',
    'about.tl.growth_desc':  'Expansion to 3 sites, 4 programs, 3,000+ women',
    'about.tl.today':        'Today',
    'about.tl.today_desc':   '20 years of services and empowerment of Haitian women',
    'about.btn.vision': 'Our vision →',
    'about.btn.join':   'Join Us',
    'about.badge_label':'Year of foundation',

    'fields.label':    'Our Programs',
    'fields.title':    '4 Fields <em style="background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">of action</em>',
    'fields.subtitle': 'Concrete actions, led by and for Haitian women',
    'fields.eco.title':   'Solidarity Economy',
    'fields.eco.desc':    'Microcredit, entrepreneurial training and savings cooperatives for the financial independence of women in Thomassin.',
    'fields.sante.title': 'Women\'s Health',
    'fields.sante.desc':  'Mobile clinics, maternal and reproductive health awareness, and psychosocial support throughout the area.',
    'fields.vbg.title':   'Rights & Anti-GBV',
    'fields.vbg.desc':    'Legal aid, emergency shelters and awareness programs against gender-based violence.',
    'fields.youth.title': 'AFADETH Youth',
    'fields.youth.desc':  'Scholarships, catch-up classes, vocational training and mentoring for young girls and women seeking a future.',
    'fields.btn':         'Explore all our programs →',

    'gallery.label':   'Our Gallery',
    'gallery.see_all': 'See all photos →',

    'mission.quote':  '"To unite Haitian women to build a more just, healthier and more prosperous community."',
    'mission.source': '— Nancy VILCÉ, President · AFADETH',
    'mission.btn':    'Read our full mission →',

    'blog.label':    'News',
    'blog.title':    'Our latest <em style="font-style:italic;color:var(--wine)">news</em>',
    'blog.see_all':  'See all articles →',
    'blog.read':     'Read →',

    'partners.title': 'Our partners & supporters',

    'cta.label':    'Join Us',
    'cta.title':    'Together, we are <em style="color:var(--wine)">stronger</em>',
    'cta.desc':     'Whether you want to become a member, volunteer or partner, every gesture counts for the women of Thomassin.',
    'cta.contact':  'Contact Us',
    'cta.actions':  'See our actions',

    'footer.brand_desc': 'Association of Devoted Women of Thomassin. Humanitarian organization founded in 2006, Pétion-Ville, Haiti.',
    'footer.col.nav':      'Navigation',
    'footer.col.programs': 'Programs',
    'footer.col.contact':  'Contact',
    'footer.contact_us':   'Contact Us',
    'footer.privacy':      'Privacy',
    'footer.legal':        'Legal',
    'footer.copy':         '© 2025 AFADETH — Association of Devoted Women of Thomassin. All rights reserved.',

    'contact.breadcrumb_home': 'Home',
    'contact.label': 'Join Us',
    'contact.title': 'Contact <em>AFADETH</em>',
    'contact.desc':  'Whether you want to support us, collaborate, join our network or simply learn more — we are here for you.',
    'contact.form.label': 'Send Us a Message',
    'contact.form.title': 'Let\'s talk about your <em class="h2-em-orange">project together</em>',
    'form.prenom':   'First Name *',
    'form.nom':      'Last Name *',
    'form.email':    'Email Address *',
    'form.phone':    'Phone',
    'form.subject':  'Subject of your message *',
    'form.subject.placeholder': 'Select a subject',
    'form.subject.soutien':     'Support AFADETH',
    'form.subject.partenariat': 'Partnership proposal',
    'form.subject.adhesion':    'Join the association',
    'form.subject.jeunesse':    'AFADETH Youth',
    'form.subject.media':       'Media / press request',
    'form.subject.clinique':    'Women\'s Health Clinic',
    'form.subject.autre':       'Other request',
    'form.message':  'Your message *',
    'form.message.placeholder': 'Describe your request, project or questions…',
    'form.consent':  'I agree that my data will be used to respond to my request in accordance with AFADETH\'s privacy policy.',
    'form.submit':   'Send My Message →',
    'form.success.title': 'Message sent!',
    'form.success.text':  'Thank you for your message. The AFADETH team will respond as soon as possible.',
    'contact.facebook.follow': 'Follow Us on Facebook',
    'contact.facebook.desc':   'News, photos, events',
    'contact.direction':       'Management',
    'contact.president.role':  'President — AFADETH',
    'contact.president.quote': '"Our door is always open to those who share our vision of a more just Haiti for women."',
    'contact.schedule.title':  '🕐 Availability',
    'contact.schedule.weekday':'Monday – Friday',
    'contact.schedule.saturday':'Saturday',
    'contact.schedule.sunday': 'Sunday',

    'page.gallery.title': 'Our <em>Gallery</em>',
    'page.gallery.desc':  'The faces, actions and moments that bring AFADETH to life.',
    'page.blog.title':    'Blog & <em>News</em>',
    'page.blog.desc':     'The latest news from AFADETH and its programs.',
    'page.actions.title': 'Our <em>Actions</em>',
    'page.actions.desc':  'Four concrete programs to transform the lives of women in Thomassin.',
  },

  /* ── KREYÒL AYISYEN ── */
  ht: {
    'nav.tagline':  'Ini pou Sèvi',
    'nav.home':     'Akèy',
    'nav.mission':  'Misyon',
    'nav.actions':  'Aksyon Nou',
    'nav.gallery':  'Galri',
    'nav.blog':     'Blog',
    'nav.contact':  'Kontak',
    'nav.support':  'Ede Nou',

    'hero.badge':   'Fonde an 2006 · Thomassin, Ayiti',
    'hero.pour':    'Pou',
    'hero.sub':     'Pa Fanm yo.',
    'hero.org':     'Asosyasyon Fanm Devoye Thomassin',
    'hero.subtitle':'Depi 2006, nou ini fanm Thomassin pou chanje lavi — pa sante, ekonomi, edikasyon ak lit kont vyolans baze sou sèks.',
    'hero.btn.mission':'Misyon Nou',
    'hero.btn.join':'Rantre avèk Nou',
    'hero.scroll':  'Desann',

    'stats.years':  'Ane angajman',
    'stats.women':  'Fanm ki te resevwa èd',
    'stats.fields': 'Domèn entèvansyon',
    'stats.sites':  'Sit aksyon',

    'racines.label': 'Ki moun nou ye · Rasin Nou',
    'racines.title': 'Pran rasin nan <em style="background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">tè ayisyen an</em>',
    'racines.desc':  'AFADETH pran fòs li nan valè fon peyizannri ayisyen an — solidarite lakou a, rezistans fanm peyizan yo, renmen tè a.',
    'racines.lakou.title':'Lakou a — lespri kominote',
    'racines.lakou.desc': 'Nan tradisyon ayisyen an, <em>lakou</em> a se lakou kote fanm yo rasanble, ede youn lòt epi pataje. AFADETH se lakou modèn nou an — yon espas solidarite, gerizon ak anpowerment pou fanm Thomassin yo.',
    'racines.fanm.title': 'Fanm Peyizan — fòs fanm ki viv nan kan yo',
    'racines.fanm.desc':  'Fanm peyizan ayisyen yo fè fanmi ak kominote yo viv ak yon rezistans ekstraòdinè. Pwogram nou yo onore fòs sa a lè yo ba yo aksè nan zouti, resous ak rekonesans yo merite.',
    'racines.unir.title': 'Ini pou Sèvi — la kominote',
    'racines.unir.desc':  'Deviz nou an enspire pa <em>konbit</em> ayisyen an — travay kolektif kote chak moun kontribiye pou byennèt tout moun. Depi 2006, nou kiltive èd resiprò sa a nan kè mòn Thomassin yo.',

    'about.label':  'Ki moun nou ye',
    'about.title':  'Yon asosyasyon <em>fanm,</em><br>pou fanm yo',
    'about.quote':  '« Ini pou Sèvi » — deviz ki gide chak aksyon nou yo depi 2006.',
    'about.p1':     'AFADETH te fèt sou yon vizyon senp ak pwisan : pou fanm Thomassin yo — mòn, jaden ak mache yo — ka jwenn swen medikal, edikasyon ak opòtinite ekonomik ki diy. Fonde pa fanm angaje Pétion-Ville, asosyasyon nou an vin tounen yon poto kominote ayisyen an.',
    'about.lakou_quote': '« Nan lakou a, nou fò ansanm. Nan lakou nou an, nou fò ansanm. »',
    'about.lakou_source':'— Pwovèb ayisyen, kè misyon nou an',
    'about.p2':     'Twa sant — Pétion-Ville, Fermathe, Sant-Vil — pou jwenn fanm yo kote yo viv, avèk pwogram ki baze sou reyalite peyizannri ayisyen an.',
    'about.tl.founded':      '2006 — Fondasyon',
    'about.tl.founded_desc': 'Kreye AFADETH nan Thomassin, Pétion-Ville',
    'about.tl.growth':       'Kwasans',
    'about.tl.growth_desc':  'Elaji pou 3 sit, 4 pwogram, 3 000+ fanm',
    'about.tl.today':        'Jodi a',
    'about.tl.today_desc':   '20 ane sèvis ak anpowerment pou fanm ayisyen yo',
    'about.btn.vision': 'Vizyon nou →',
    'about.btn.join':   'Rantre avèk Nou',
    'about.badge_label':'Ane fondasyon',

    'fields.label':    'Pwogram Nou',
    'fields.title':    '4 Domèn <em style="background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">entèvansyon</em>',
    'fields.subtitle': 'Aksyon konkrèt, dirije pa ak pou fanm ayisyen yo',
    'fields.eco.title':   'Ekonomi Solidè',
    'fields.eco.desc':    'Mikwokredi, fòmasyon antreprenerial ak koperativ epay pou endepandans finansyè fanm Thomassin yo.',
    'fields.sante.title': 'Sante Fanm',
    'fields.sante.desc':  'Klinik mobil, sansibilizasyon sante matènèl ak reproduktif, ak akonpayman sikosiyal nan tout zòn nan.',
    'fields.vbg.title':   'Dwa ak Lit kont VBG',
    'fields.vbg.desc':    'Èd jiridik, refij ijans ak pwogram sansibilizasyon kont vyolans baze sou sèks.',
    'fields.youth.title': 'AFADETH Jèn',
    'fields.youth.desc':  'Bous, kou ratrapaj, fòmasyon pwofesyonèl ak manto pou jèn fi ak fanm ki ap chèche yon avni.',
    'fields.btn':         'Eksplore tout pwogram nou yo →',

    'gallery.label':   'Galri Nou',
    'gallery.see_all': 'Wè tout foto yo →',

    'mission.quote':  '« Ini fanm ayisyen yo pou bati yon kominote ki pi jis, pi an sante ak pi pwospè. »',
    'mission.source': '— Nancy VILCÉ, Prezidant · AFADETH',
    'mission.btn':    'Li misyon konplè nou an →',

    'blog.label':    'Aktyalite',
    'blog.title':    'Dènye <em style="font-style:italic;color:var(--wine)">nouvèl nou</em>',
    'blog.see_all':  'Wè tout atik yo →',
    'blog.read':     'Li →',

    'partners.title': 'Patnè nou yo',

    'cta.label':    'Rantre avèk Nou',
    'cta.title':    'Ansanm, nou pi <em style="color:var(--wine)">fò</em>',
    'cta.desc':     'Kèlkeswa ou vle vin manm, volontè oswa patnè, chak jès konte pou fanm Thomassin yo.',
    'cta.contact':  'Kontakte Nou',
    'cta.actions':  'Wè aksyon nou yo',

    'footer.brand_desc': 'Asosyasyon Fanm Devoye Thomassin. Òganizasyon imanitè ki te fonde an 2006, Pétion-Ville, Ayiti.',
    'footer.col.nav':      'Navigasyon',
    'footer.col.programs': 'Pwogram',
    'footer.col.contact':  'Kontak',
    'footer.contact_us':   'Kontakte Nou',
    'footer.privacy':      'Konfidansyalite',
    'footer.legal':        'Mentions légales',
    'footer.copy':         '© 2025 AFADETH — Asosyasyon Fanm Devoye Thomassin. Tout dwa rezève.',

    'contact.breadcrumb_home': 'Akèy',
    'contact.label': 'Rantre avèk Nou',
    'contact.title': 'Kontakte <em>AFADETH</em>',
    'contact.desc':  'Kèlkeswa ou vle sipòte nou, kolabore, rantre nan rezo nou an oswa senpleman aprann plis — nou la pou ou.',
    'contact.form.label': 'Voye Nou yon Mesaj',
    'contact.form.title': 'Ann pale sou <em class="h2-em-orange">pwojè ou an ansanm</em>',
    'form.prenom':   'Prenon *',
    'form.nom':      'Non *',
    'form.email':    'Adrès imèl *',
    'form.phone':    'Telefòn',
    'form.subject':  'Sijè mesaj ou a *',
    'form.subject.placeholder': 'Seleksyone yon sijè',
    'form.subject.soutien':     'Sipòte AFADETH',
    'form.subject.partenariat': 'Pwopozisyon patenarya',
    'form.subject.adhesion':    'Rantre nan asosyasyon an',
    'form.subject.jeunesse':    'AFADETH Jèn',
    'form.subject.media':       'Demann medya / laprès',
    'form.subject.clinique':    'Klinik Sante Fanm',
    'form.subject.autre':       'Lòt demann',
    'form.message':  'Mesaj ou a *',
    'form.message.placeholder': 'Dekri demann ou a, pwojè ou a oswa kesyon ou yo…',
    'form.consent':  'Mwen dakò ke done mwen yo pral itilize pou reponn demann mwen an konfòmeman ak politik konfidansyalite AFADETH.',
    'form.submit':   'Voye Mesaj Mwen →',
    'form.success.title': 'Mesaj voye !',
    'form.success.text':  'Mèsi pou mesaj ou a. Ekip AFADETH la ap reponn ou pi vit ke posib.',
    'contact.facebook.follow': 'Swiv Nou sou Facebook',
    'contact.facebook.desc':   'Aktyalite, foto, evènman',
    'contact.direction':       'Direksyon',
    'contact.president.role':  'Prezidant — AFADETH',
    'contact.president.quote': '« Pòt nou an toujou louvri pou moun ki pataje vizyon nou an pou yon Ayiti ki pi jis pou fanm yo. »',
    'contact.schedule.title':  '🕐 Disponibilite',
    'contact.schedule.weekday':'Lendi – Vandredi',
    'contact.schedule.saturday':'Samdi',
    'contact.schedule.sunday': 'Dimanch',

    'page.gallery.title': 'Galri <em>Nou</em>',
    'page.gallery.desc':  'Vizaj, aksyon ak moman ki fè AFADETH viv.',
    'page.blog.title':    'Blog & <em>Aktyalite</em>',
    'page.blog.desc':     'Dènye nouvèl AFADETH ak pwogram li yo.',
    'page.actions.title': 'Aksyon <em>Nou</em>',
    'page.actions.desc':  'Kat pwogram konkrèt pou chanje lavi fanm Thomassin yo.',
  },

  /* ── ESPAÑOL ── */
  es: {
    'nav.tagline':  'Unir para Servir',
    'nav.home':     'Inicio',
    'nav.mission':  'Misión',
    'nav.actions':  'Nuestras Acciones',
    'nav.gallery':  'Galería',
    'nav.blog':     'Blog',
    'nav.contact':  'Contacto',
    'nav.support':  'Apóyanos',

    'hero.badge':   'Fundada en 2006 · Thomassin, Haití',
    'hero.pour':    'Por las',
    'hero.sub':     'Por las Fanm.',
    'hero.org':     'Asociación de Mujeres Devotas de Thomassin',
    'hero.subtitle':'Desde 2006, unimos a las mujeres de Thomassin para transformar vidas — a través de la salud, la economía, la educación y la lucha contra la violencia de género.',
    'hero.btn.mission':'Nuestra Misión',
    'hero.btn.join':'Únase a Nosotros',
    'hero.scroll':  'Desplazarse',

    'stats.years':  'Años de compromiso',
    'stats.women':  'Mujeres apoyadas',
    'stats.fields': 'Áreas de acción',
    'stats.sites':  'Sitios de acción',

    'racines.label': 'Quiénes Somos · Nuestras Raíces',
    'racines.title': 'Nacidas de la <em style="background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">tierra haitiana</em>',
    'racines.desc':  'AFADETH extrae su fuerza de los valores profundos del campesinado haitiano — la solidaridad del lakou, la resiliencia de las fanm peyizan, el amor por la tierra.',
    'racines.lakou.title':'El Lakou — el espíritu de comunidad',
    'racines.lakou.desc': 'En la tradición haitiana, el <em>lakou</em> es el patio común donde las mujeres se reúnen, se ayudan y comparten. AFADETH es nuestro lakou moderno — un espacio de solidaridad, sanación y empoderamiento para las mujeres de Thomassin.',
    'racines.fanm.title': 'Fanm Peyizan — la fuerza de las mujeres rurales',
    'racines.fanm.desc':  'Las mujeres campesinas haitianas sostienen a sus familias y comunidades con una resiliencia extraordinaria. Nuestros programas honran esta fortaleza dándoles acceso a herramientas, recursos y el reconocimiento que merecen.',
    'racines.unir.title': 'Unir para Servir — la comunidad',
    'racines.unir.desc':  'Nuestro lema se inspira en el <em>konbit</em> haitiano — el trabajo colectivo donde cada mujer contribuye para el bien de todas. Desde 2006, cultivamos esta ayuda mutua en el corazón de las montañas de Thomassin.',

    'about.label':  'Quiénes Somos',
    'about.title':  'Una asociación <em>de mujeres,</em><br>para las mujeres',
    'about.quote':  '«Unir para Servir» — el lema que guía cada una de nuestras acciones desde 2006.',
    'about.p1':     'AFADETH nació de una visión simple y poderosa: que las mujeres de Thomassin — montañas, campos y mercados — pudieran acceder a la atención médica, la educación y oportunidades económicas dignas. Fundada por mujeres comprometidas de Pétion-Ville, nuestra asociación se ha convertido en un pilar de la comunidad haitiana.',
    'about.lakou_quote': '« Nan lakou a, nou fò ansanm. En nuestro lakou, somos fuertes juntas. »',
    'about.lakou_source':'— Proverbio haitiano, corazón de nuestra misión',
    'about.p2':     'Tres sedes — Pétion-Ville, Fermathe, Centre-Ville — para llegar a las fanm donde viven, con programas arraigados en la realidad del campesinado haitiano.',
    'about.tl.founded':      '2006 — Fundación',
    'about.tl.founded_desc': 'Creación de AFADETH en Thomassin, Pétion-Ville',
    'about.tl.growth':       'Crecimiento',
    'about.tl.growth_desc':  'Expansión a 3 sedes, 4 programas, 3.000+ mujeres',
    'about.tl.today':        'Hoy',
    'about.tl.today_desc':   '20 años de servicios y empoderamiento de mujeres haitianas',
    'about.btn.vision': 'Nuestra visión →',
    'about.btn.join':   'Únase',
    'about.badge_label':'Año de fundación',

    'fields.label':    'Nuestros Programas',
    'fields.title':    '4 Áreas <em style="background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">de acción</em>',
    'fields.subtitle': 'Acciones concretas, lideradas por y para las mujeres haitianas',
    'fields.eco.title':   'Economía Solidaria',
    'fields.eco.desc':    'Microcrédito, formación empresarial y cooperativas de ahorro para la autonomía financiera de las mujeres de Thomassin.',
    'fields.sante.title': 'Salud Fanm',
    'fields.sante.desc':  'Clínicas móviles, concientización sobre salud materna y reproductiva, y apoyo psicosocial en toda la zona.',
    'fields.vbg.title':   'Derechos y Lucha anti-VBG',
    'fields.vbg.desc':    'Asistencia jurídica, refugios de emergencia y programas de sensibilización contra la violencia de género.',
    'fields.youth.title': 'AFADETH Juventud',
    'fields.youth.desc':  'Becas, clases de apoyo, formación profesional y mentoring para niñas y mujeres jóvenes en busca de un futuro.',
    'fields.btn':         'Explorar todos nuestros programas →',

    'gallery.label':   'Nuestra Galería',
    'gallery.see_all': 'Ver todas las fotos →',

    'mission.quote':  '«Unir a las mujeres haitianas para construir una comunidad más justa, más saludable y más próspera.»',
    'mission.source': '— Nancy VILCÉ, Presidenta · AFADETH',
    'mission.btn':    'Leer nuestra misión completa →',

    'blog.label':    'Noticias',
    'blog.title':    'Nuestras últimas <em style="font-style:italic;color:var(--wine)">noticias</em>',
    'blog.see_all':  'Ver todos los artículos →',
    'blog.read':     'Leer →',

    'partners.title': 'Nuestros socios y apoyos',

    'cta.label':    'Únase a Nosotros',
    'cta.title':    'Juntas, somos <em style="color:var(--wine)">más fuertes</em>',
    'cta.desc':     'Ya sea que quiera convertirse en miembro, voluntario o socio, cada gesto cuenta para las mujeres de Thomassin.',
    'cta.contact':  'Contáctanos',
    'cta.actions':  'Ver nuestras acciones',

    'footer.brand_desc': 'Asociación de Mujeres Devotas de Thomassin. Organización humanitaria fundada en 2006, Pétion-Ville, Haití.',
    'footer.col.nav':      'Navegación',
    'footer.col.programs': 'Programas',
    'footer.col.contact':  'Contacto',
    'footer.contact_us':   'Contáctanos',
    'footer.privacy':      'Privacidad',
    'footer.legal':        'Aviso legal',
    'footer.copy':         '© 2025 AFADETH — Asociación de Mujeres Devotas de Thomassin. Todos los derechos reservados.',

    'contact.breadcrumb_home': 'Inicio',
    'contact.label': 'Únase',
    'contact.title': 'Contacte a <em>AFADETH</em>',
    'contact.desc':  'Ya sea que desee apoyarnos, colaborar, unirse a nuestra red o simplemente aprender más — estamos aquí para usted.',
    'contact.form.label': 'Envíenos un Mensaje',
    'contact.form.title': 'Hablemos de su <em class="h2-em-orange">proyecto juntos</em>',
    'form.prenom':   'Nombre *',
    'form.nom':      'Apellido *',
    'form.email':    'Correo electrónico *',
    'form.phone':    'Teléfono',
    'form.subject':  'Asunto de su mensaje *',
    'form.subject.placeholder': 'Seleccione un asunto',
    'form.subject.soutien':     'Apoyar AFADETH',
    'form.subject.partenariat': 'Propuesta de asociación',
    'form.subject.adhesion':    'Unirse a la asociación',
    'form.subject.jeunesse':    'AFADETH Juventud',
    'form.subject.media':       'Solicitud de medios / prensa',
    'form.subject.clinique':    'Clínica de Salud Fanm',
    'form.subject.autre':       'Otra solicitud',
    'form.message':  'Su mensaje *',
    'form.message.placeholder': 'Describa su solicitud, proyecto o preguntas…',
    'form.consent':  'Acepto que mis datos sean utilizados para responder a mi solicitud de acuerdo con la política de privacidad de AFADETH.',
    'form.submit':   'Enviar Mi Mensaje →',
    'form.success.title': '¡Mensaje enviado!',
    'form.success.text':  'Gracias por su mensaje. El equipo AFADETH le responderá lo antes posible.',
    'contact.facebook.follow': 'Síguenos en Facebook',
    'contact.facebook.desc':   'Noticias, fotos, eventos',
    'contact.direction':       'Dirección',
    'contact.president.role':  'Presidenta — AFADETH',
    'contact.president.quote': '«Nuestra puerta siempre está abierta para quienes comparten nuestra visión de una Haití más justa para las mujeres.»',
    'contact.schedule.title':  '🕐 Disponibilidad',
    'contact.schedule.weekday':'Lunes – Viernes',
    'contact.schedule.saturday':'Sábado',
    'contact.schedule.sunday': 'Domingo',

    'page.gallery.title': 'Nuestra <em>Galería</em>',
    'page.gallery.desc':  'Los rostros, acciones y momentos que dan vida a AFADETH.',
    'page.blog.title':    'Blog & <em>Noticias</em>',
    'page.blog.desc':     'Las últimas noticias de AFADETH y sus programas.',
    'page.actions.title': 'Nuestras <em>Acciones</em>',
    'page.actions.desc':  'Cuatro programas concretos para transformar las vidas de las mujeres de Thomassin.',
  }
};

/* ── Fonctions principales ── */

let _currentLang = 'fr';

function i18n(key) {
  const t = I18N[_currentLang] || I18N.fr;
  return t[key] || I18N.fr[key] || key;
}

function applyLang(lang) {
  _currentLang = lang;
  const t = I18N[lang] || I18N.fr;

  /* 1. Éléments data-i18n (textContent) */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n] || I18N.fr[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  /* 2. Éléments data-i18n-html (innerHTML) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml] || I18N.fr[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  /* 3. Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = t[el.dataset.i18nPlaceholder] || I18N.fr[el.dataset.i18nPlaceholder];
    if (v !== undefined) el.placeholder = v;
  });

  /* 4. Liens navbar par href (aucun changement HTML requis) */
  const NAV_HREF = {
    'index.html':   'nav.home',
    'mission.html': 'nav.mission',
    'actions.html': 'nav.actions',
    'galerie.html': 'nav.gallery',
    'blog.html':    'nav.blog',
    'contact.html': 'nav.contact',
  };
  document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop().split('?')[0];
    const key  = NAV_HREF[href];
    if (key && t[key]) a.textContent = t[key];
  });

  /* 5. Liens footer */
  document.querySelectorAll('.footer__link').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop().split('#')[0];
    const key  = NAV_HREF[href];
    if (key && t[key]) a.textContent = '→ ' + t[key];
  });

  /* 6. Éléments ciblés par classe unique */
  _set('.navbar__logo-tagline',    t['nav.tagline']);
  _set('.footer__brand-desc',      t['footer.brand_desc']);
  _set('.footer__copy',            t['footer.copy']);

  /* 7. Footer col titles par contenu (robuste) */
  document.querySelectorAll('.footer__col-title').forEach(el => {
    const col = el.dataset.col;
    if (col && t['footer.col.' + col]) el.textContent = t['footer.col.' + col];
  });

  /* 8. Bouton CTA navbar */
  document.querySelectorAll('.navbar__cta .btn-primary').forEach(el => {
    if (t['nav.support']) el.textContent = t['nav.support'];
  });

  /* 9. Boutons footer "Nous contacter" */
  document.querySelectorAll('.footer__contact-us').forEach(el => {
    if (t['footer.contact_us']) el.textContent = t['footer.contact_us'];
  });

  /* 10. Liens légaux footer */
  document.querySelectorAll('.footer__legal-privacy').forEach(el => { el.textContent = t['footer.privacy'] || ''; });
  document.querySelectorAll('.footer__legal-mentions').forEach(el => { el.textContent = t['footer.legal'] || ''; });

  /* 11. Mettre à jour le sélecteur de langue */
  const meta = LANG_META[lang];
  document.querySelectorAll('.lang-flag').forEach(el => { el.textContent = meta.flag; });
  document.querySelectorAll('.lang-code').forEach(el => { el.textContent = meta.code; });
  document.querySelectorAll('.lang-option, .mobile-lang-btn').forEach(btn => {
    const bl = btn.dataset.lang;
    btn.classList.toggle('lang-active', bl === lang);
  });
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });

  /* 12. html lang attribute */
  document.documentElement.lang = lang;

  /* 13. Sauvegarder la préférence */
  localStorage.setItem('afadeth_lang', lang);
}

function _set(selector, val) {
  if (!val) return;
  document.querySelectorAll(selector).forEach(el => { el.textContent = val; });
}

/* ── UI : bascule du menu ── */
function toggleLangMenu(e) {
  e.stopPropagation();
  const sw = document.getElementById('lang-switcher');
  if (sw) sw.classList.toggle('open');
}

function setLang(lang) {
  if (!I18N[lang]) return;
  applyLang(lang);
  /* Fermer le dropdown */
  document.querySelectorAll('.lang-switcher').forEach(sw => sw.classList.remove('open'));
}

/* Fermer le dropdown si clic ailleurs */
document.addEventListener('click', () => {
  document.querySelectorAll('.lang-switcher').forEach(sw => sw.classList.remove('open'));
});

/* ── Initialisation ── */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('afadeth_lang') || 'fr';
  applyLang(saved);
});
