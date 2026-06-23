/* ============================================================
   AFADETH — JS Principal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll ---- */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');
  if (hamburger && mobileMenu) {
    /* Close button injected inside the overlay */
    const closeBtn = document.createElement('button');
    closeBtn.className = 'navbar__mobile-close';
    closeBtn.setAttribute('aria-label', 'Fermer le menu');
    closeBtn.innerHTML = '&times;';
    mobileMenu.appendChild(closeBtn);

    const openMenu = () => {
      hamburger.classList.add('open');
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
    closeBtn.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('.navbar__mobile-link').forEach(l => {
      l.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });
  }

  /* ---- Reveal on scroll ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ---- Animated counters ---- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const fmt = (n, suf) => suf === '+' ? n.toLocaleString() + '+' : n + suf;
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const step = 16;
      const increment = target / (duration / step);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = fmt(Math.floor(current), suffix);
      }, step);
    };
    const cObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCounter(e.target); cObserver.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObserver.observe(c));
  }

  /* ---- Active nav link ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link[href^="#"]');
  if (sections.length && navLinks.length) {
    const setActive = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === '#' + current) l.classList.add('active');
      });
    };
    window.addEventListener('scroll', setActive, { passive: true });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* ---- Gallery preview hover + lightbox (homepage) ---- */
  const galleryItems = document.querySelectorAll('.gallery-preview__item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => item.classList.add('hovered'));
    item.addEventListener('mouseleave', () => item.classList.remove('hovered'));
  });

  const lb       = document.getElementById('preview-lb');
  const lbImg    = lb && lb.querySelector('.plb__img');
  const lbWrap   = lb && lb.querySelector('.plb__wrap');
  const lbClose  = lb && lb.querySelector('.plb__close');

  if (lb && lbImg) {
    let scale = 1;

    function plbSetScale(s) {
      scale = Math.min(Math.max(s, 1), 5);
      lbImg.style.transform = `scale(${scale})`;
      lbWrap.classList.toggle('zoomed', scale > 1);
    }

    function plbOpen(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || '';
      plbSetScale(1);
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function plbClose() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
      lbImg.src = '';
      plbSetScale(1);
    }

    /* Ouvrir au clic sur un item galerie */
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const photo = item.querySelector('.gal-photo');
        if (photo && photo.src) plbOpen(photo.src, photo.alt);
      });
    });

    /* Clic sur l'image : bascule zoom 1× / 2.5× */
    lbImg.addEventListener('click', e => {
      e.stopPropagation();
      plbSetScale(scale > 1 ? 1 : 2.5);
    });

    /* Molette : zoom progressif */
    lbWrap.addEventListener('wheel', e => {
      e.preventDefault();
      plbSetScale(scale + (e.deltaY < 0 ? 0.3 : -0.3));
    }, { passive: false });

    /* Pincement tactile */
    let touchDist = 0;
    lbWrap.addEventListener('touchstart', e => {
      if (e.touches.length === 2)
        touchDist = Math.hypot(e.touches[1].clientX - e.touches[0].clientX,
                               e.touches[1].clientY - e.touches[0].clientY);
    }, { passive: true });
    lbWrap.addEventListener('touchmove', e => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const d = Math.hypot(e.touches[1].clientX - e.touches[0].clientX,
                              e.touches[1].clientY - e.touches[0].clientY);
        plbSetScale(scale * (d / touchDist));
        touchDist = d;
      }
    }, { passive: false });

    /* Fermer */
    lbClose.addEventListener('click', plbClose);
    lb.querySelector('.plb__backdrop').addEventListener('click', plbClose);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') plbClose(); });
  }

  /* ---- Toasts utilitaires (export global) ---- */
  window.showToast = (msg, type = 'success') => {
    const t = document.createElement('div');
    t.className = `toast toast--${type}`;
    t.innerHTML = `<span class="toast__icon">${type === 'success' ? '✓' : '⚠'}</span><span>${msg}</span>`;
    Object.assign(t.style, {
      position:'fixed', bottom:'24px', right:'24px',
      background: type === 'success' ? 'var(--rose)' : '#E85D04',
      color:'#fff', padding:'14px 22px', borderRadius:'var(--radius-full)',
      display:'flex', alignItems:'center', gap:'10px',
      fontSize:'.9rem', fontWeight:'500',
      boxShadow:'var(--shadow-md)',
      zIndex:'9999', animation:'toastIn .35s ease forwards'
    });
    document.body.appendChild(t);
    setTimeout(() => { t.style.animation = 'toastOut .35s ease forwards'; setTimeout(() => t.remove(), 340); }, 3500);
  };

  /* ---- Inject toast animation ---- */
  if (!document.getElementById('toast-style')) {
    const s = document.createElement('style');
    s.id = 'toast-style';
    s.textContent = `
      @keyframes toastIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      @keyframes toastOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(20px)}}
    `;
    document.head.appendChild(s);
  }

});
