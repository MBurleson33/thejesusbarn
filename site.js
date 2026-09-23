(function() {
  const PATH = window.location.pathname;
  function href(h, anchor) {
    if (anchor && PATH !== '/') return '/' + h;
    return h;
  }

  const NAV_LINKS = [
    { label: 'Our Story',     h: '#video',     anchor: true },
    { label: "What's Here",   h: '#free',      anchor: true },
    { label: 'Volunteer',     h: '/volunteer', anchor: false },
    { label: 'BLESSing Fund', h: '/needs',     anchor: false },
  ];

  const FOOTER_LINKS = [
    { label: 'Our Story',      h: '#video',             anchor: true },
    { label: "What's Here",    h: '#free',              anchor: true },
    { label: 'Volunteer',      h: '/volunteer',         anchor: false },
    { label: 'Community Wall', h: '/wall',              anchor: false },
    { label: 'BLESSing Fund',  h: '/needs',             anchor: false },
    { label: 'Give Now',       h: '/give',              anchor: false },
    { label: 'Contact',        h: '#contact',           anchor: true },
    { label: 'Privacy Policy', h: '/privacy-policy.html', anchor: false },
  ];

  const FB_URL  = 'https://www.facebook.com/groups/27263925436532413';
  const YT_URL  = 'https://www.youtube.com/channel/UCBxbHdnu2TBXkr1hMBAVUNQ/';
  const FB_SVG  = `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
  const YT_SVG  = `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#141414"/></svg>`;

  function injectNav() {
    const ph = document.getElementById('jb-nav');
    if (!ph) return;
    const links = NAV_LINKS.map(l => `<li role="listitem"><a href="${href(l.h, l.anchor)}" onclick="if(window.closeNav)closeNav()">${l.label}</a></li>`).join('');
    ph.outerHTML = `
<nav role="navigation" aria-label="Main navigation">
  <a class="nav-logo" href="/" aria-label="The Jesus Barn — Home">
    <img src="/images/The-Jesus-Barn-Logo.png" alt="The Jesus Barn">
  </a>
  <ul class="nav-links" id="navLinks" role="list">
    ${links}
    <li role="listitem"><a href="/give" class="nav-cta" onclick="if(window.closeNav)closeNav()">Give Now</a></li>
    <li role="listitem"><a onclick="if(window.jbPromptAdmin)jbPromptAdmin();if(window.closeNav)closeNav();" class="nav-admin-link" aria-label="Admin">·</a></li>
  </ul>
  <button class="nav-burger" id="navBurger" onclick="toggleNav()" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>`;
  }

  function injectFooter() {
    const ph = document.getElementById('jb-footer');
    if (!ph) return;
    const links = FOOTER_LINKS.map(l => `<li><a href="${href(l.h, l.anchor)}">${l.label}</a></li>`).join('');
    ph.outerHTML = `
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-logo">
        <a href="/"><img src="/images/The-Jesus-Barn-Logo.png" alt="The Jesus Barn"></a>
      </div>
      <ul class="footer-nav">${links}</ul>
    </div>
    <div class="footer-social">
      <a href="${FB_URL}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${FB_SVG}</a>
      <a href="${YT_URL}" target="_blank" rel="noopener noreferrer" aria-label="YouTube">${YT_SVG}</a>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} The Jesus Barn · Piedmont, Oklahoma<span class="footer-dot" onclick="if(window.jbPromptAdmin)jbPromptAdmin()" title=""></span></span>
      <span class="footer-copy"><a href="mailto:hello@thejesusbarn.org">hello@thejesusbarn.org</a></span>
    </div>
  </div>
</footer>`;
  }

  window.toggleNav = function() {
    const links = document.getElementById('navLinks');
    const burger = document.getElementById('navBurger');
    if (!links) return;
    links.classList.toggle('open');
    if (burger) burger.setAttribute('aria-expanded', links.classList.contains('open'));
  };

  window.closeNav = function() {
    const links = document.getElementById('navLinks');
    const burger = document.getElementById('navBurger');
    if (links) links.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  };

  document.addEventListener('DOMContentLoaded', function() {
    injectNav();
    injectFooter();
  });
})();
