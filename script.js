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

  /* parcours : fixed winding path, steps pop in one after the other */
  (function(){
    var box = $('#journey'); if(!box) return;
    var fill = $('.j-fill', box), svg = $('.j-svg', box), grad = $('#jg');
    var items = $$('.j-item', box), nodes = items.map(function(it){ return $('.j-node', it); });
    var mq = window.matchMedia('(max-width:900px)');
    function curve(a, b, i, vertical){
      if(!vertical){ var mx = (a.x + b.x) / 2; return ' C' + mx + ' ' + a.y + ' ' + mx + ' ' + b.y + ' ' + b.x + ' ' + b.y; }
      var s = (i % 2 ? 1 : -1) * 34, dy = b.y - a.y;
      return ' C' + (a.x + s) + ' ' + (a.y + dy * .3) + ' ' + (b.x + s) + ' ' + (b.y - dy * .3) + ' ' + b.x + ' ' + b.y;
    }
    function build(){
      var br = box.getBoundingClientRect(), vertical = mq.matches;
      svg.setAttribute('viewBox', '0 0 ' + box.offsetWidth + ' ' + box.offsetHeight);
      var pts = nodes.map(function(n){ var r = n.getBoundingClientRect(); return {x: r.left - br.left + r.width / 2, y: r.top - br.top + r.height / 2}; });
      var d = 'M' + pts[0].x + ' ' + pts[0].y;
      for(var i = 1; i < pts.length; i++) d += curve(pts[i - 1], pts[i], i, vertical);
      fill.setAttribute('d', d);
      grad.setAttribute('x1', vertical ? 0 : pts[0].x); grad.setAttribute('x2', vertical ? 0 : pts[pts.length - 1].x);
      grad.setAttribute('y1', vertical ? pts[0].y : 0); grad.setAttribute('y2', vertical ? pts[pts.length - 1].y : 0);
      box.classList.add('ready');
    }
    function reveal(){
      items.forEach(function(it, i){ setTimeout(function(){ it.classList.add('reached'); }, reduce ? 0 : 250 + i * 420); });
    }
    build();
    window.addEventListener('resize', build);
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(build);
    if(reduce || !('IntersectionObserver' in window)){ reveal(); return; }
    var seenIO = new IntersectionObserver(function(es){
      if(es[0].isIntersecting){ seenIO.disconnect(); reveal(); }
    },{threshold:.3});
    seenIO.observe(box);
  })();

  /* contact */
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