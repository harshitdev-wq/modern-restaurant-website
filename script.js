// mobile menu
  const toggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // menu tabs
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
      document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    });
  });

  // testimonial slider
  const slides = document.querySelectorAll('.quote-slide');
  const dots = document.querySelectorAll('.dot');
  let qi = 0;
  function showQuote(i){
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.style.background = 'rgba(244,235,218,.3)');
    slides[i].classList.add('active');
    dots[i].style.background = 'var(--gold)';
    qi = i;
  }
  dots.forEach(d => d.addEventListener('click', () => showQuote(parseInt(d.dataset.i))));
  setInterval(() => showQuote((qi + 1) % slides.length), 5500);

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // nav background on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 40){
      header.style.background = 'rgba(27,14,16,0.75)';
      header.style.backdropFilter = 'blur(14px)';
    } else {
      header.style.background = 'transparent';
      header.style.backdropFilter = 'none';
    }
  });
