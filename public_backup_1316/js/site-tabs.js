(() => {
  const links = Array.from(document.querySelectorAll('.tabbar a'));
  const ids = links.map(a => a.getAttribute('href')).filter(h => h?.startsWith('#'));
  const secs = ids.map(id => document.querySelector(id)).filter(Boolean);

  // Smooth scroll
  links.forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if(href?.startsWith('#')){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
        history.replaceState(null, '', href);
      }
    });
  });

  // Active on scroll
  const obs = new IntersectionObserver((entries) => {
    // choose the section most visible
    const topmost = entries
      .filter(en => en.isIntersecting)
      .sort((a,b)=> b.intersectionRatio - a.intersectionRatio)[0];
    if(!topmost) return;
    const id = '#'+topmost.target.id;
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href')===id));
  }, { rootMargin: '-45% 0px -45% 0px', threshold:[.25,.6,.9] });
  secs.forEach(s => obs.observe(s));
})();
