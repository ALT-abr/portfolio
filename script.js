(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function(s,r){return (r||document).querySelector(s)};
  var $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

  /* header: shadow + scroll progress */
  var top = $('#top'), bar = $('#scrollbar');
  function onScroll(){
    var m = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (m > 0 ? Math.min(1, window.scrollY / m) : 0) + ')';
    top.classList.toggle('stuck', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  /* smooth in-page navigation (no hash changes) */
  function go(id){
    var el = document.getElementById(id); if(!el) return;
    el.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'start'});
  }
  $$('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault(); go(a.getAttribute('href').slice(1));
      if(a.hasAttribute('data-open-contact')) setContact(true);
    });
  });

  /* scroll spy */
  var links = $$('.nav a');
  var spy = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting) links.forEach(function(l){l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)});
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  links.forEach(function(l){var s = document.getElementById(l.getAttribute('href').slice(1)); if(s) spy.observe(s)});

  /* reveal on scroll: only for elements that start below the fold */
  if(!reduce && 'IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting) return;
        var el = e.target; io.unobserve(el); el.classList.add('in');
        setTimeout(function(){el.classList.remove('pre','in'); el.style.removeProperty('--d')}, 2400);
      });
    },{threshold:.12, rootMargin:'0px 0px -6% 0px'});
    $$('[data-reveal]').forEach(function(el){
      if(el.getBoundingClientRect().top < window.innerHeight * .92) return;
      el.classList.add('pre'); io.observe(el);
    });
  }

  /* cursor glow on skill cards */
  $$('.glow').forEach(function(el){
    el.addEventListener('pointermove', function(e){
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* mascot follows the pointer a little */
  var row = $('.about-row'), tilt = $('.mascot-tilt');
  if(!reduce && row && tilt){
    row.addEventListener('pointermove', function(e){
      var r = tilt.getBoundingClientRect();
      var dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width/2)) / 420));
      var dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height/2)) / 260));
      tilt.style.setProperty('--tx', (dx * 9) + 'px');
      tilt.style.setProperty('--ty', (dy * 4) + 'px');
      tilt.style.setProperty('--rot', (dx * 3.5) + 'deg');
    });
    row.addEventListener('pointerleave', function(){
      tilt.style.setProperty('--tx','0px'); tilt.style.setProperty('--ty','0px'); tilt.style.setProperty('--rot','0deg');
    });
  }

  /* projects showcase */
  var wrap = $('.proj-wrap'), list = $('#proj-list'), ind = $('.proj-ind');
  var tabs = $$('.proj-item'), panels = $$('.proj-panel');
  var cur = 0, auto = !reduce, seen = true;
  function place(){
    var t = tabs[cur]; if(!ind || !t) return;
    ind.style.height = t.offsetHeight + 'px';
    ind.style.transform = 'translateY(' + t.offsetTop + 'px)';
  }
  function syncAuto(){ list.classList.toggle('auto', auto && seen); }
  function select(i, byUser){
    if(byUser) auto = false;
    cur = i;
    tabs.forEach(function(t,j){
      var on = j === i;
      t.classList.toggle('on', on); t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function(p,j){ p.classList.toggle('on', j === i); p.inert = j !== i; });
    place(); syncAuto();
    if(byUser && window.innerWidth <= 980){ tabs[i].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'}); }
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click', function(){ select(i, true); });
    t.addEventListener('keydown', function(e){
      var k = e.key, n = tabs.length, to = null;
      if(k === 'ArrowDown' || k === 'ArrowRight') to = (cur + 1) % n;
      else if(k === 'ArrowUp' || k === 'ArrowLeft') to = (cur - 1 + n) % n;
      else if(k === 'Home') to = 0; else if(k === 'End') to = n - 1;
      if(to !== null){ e.preventDefault(); select(to, true); tabs[to].focus(); }
    });
  });
  list.addEventListener('animationend', function(e){
    if(auto && e.target.classList.contains('bar')) select((cur + 1) % tabs.length, false);
  });
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){ seen = es[0].isIntersecting; syncAuto(); },{threshold:.25}).observe(wrap);
  }
  window.addEventListener('resize', place);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(place);
  place(); syncAuto();

  /* contact */
  var panel = $('#cta-panel'), btn = $('#cta-btn');
  function setContact(open){
    panel.classList.toggle('open', open); panel.inert = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function(){ setContact(!panel.classList.contains('open')); });

  var copyBtn = $('#copy-btn'), label = $('#copy-label'), cic = $('#copy-ic use'), mail = $('#mail-text');
  function done(ok){
    label.textContent = ok ? 'Adresse copiée' : 'Sélectionnée : copiez-la';
    cic.setAttribute('href', ok ? '#i-check' : '#i-copy');
    setTimeout(function(){ label.textContent = "Copier l'adresse"; cic.setAttribute('href','#i-copy'); }, 2200);
  }
  copyBtn.addEventListener('click', function(){
    var text = mail.textContent.trim();
    function fallback(){
      var r = document.createRange(); r.selectNodeContents(mail);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); done(false);
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){ done(true); }, fallback);
    } else fallback();
  });
})();