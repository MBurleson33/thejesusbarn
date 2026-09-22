// ── THE JESUS BARN · SHARED SITE COMPONENTS ──
// Update nav and footer here — changes apply to every page automatically.

(function() {

  // ── CONFIG ──
  const CURRENT_PATH = window.location.pathname;

  function isActive(href) {
    if (href === '/') return CURRENT_PATH === '/';
    return CURRENT_PATH.startsWith(href);
  }

  // ── NAV LINKS ──
  // href: internal anchor (#section) or page (/page)
  // For internal anchors, if not on homepage, link to /#section instead
  const NAV_LINKS = [
    { label: 'Our Story',      href: '#video',  anchor: true },
    { label: "What's Here",    href: '#free',   anchor: true },
    { label: 'BLESSing Fund',  href: '/needs',  anchor: false },
  ];
  const NAV_CTA = { label: 'Give Now', href: '/give' };

  // ── FOOTER LINKS ──
  const FOOTER_LINKS = [
    { label: 'Our Story',      href: '#video',          anchor: true },
    { label: "What's Here",    href: '#free',           anchor: true },
    { label: 'BLESSing Fund',  href: '/needs',          anchor: false },
    { label: 'Give Now',       href: '/give',           anchor: false },
    { label: 'Contact',        href: '#contact',        anchor: true },
    { label: 'Privacy Policy', href: '/privacy-policy.html', anchor: false },
  ];

  // ── SOCIAL LINKS ──
  const SOCIAL = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/groups/27263925436532413',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCBxbHdnu2TBXkr1hMBAVUNQ/',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#141414"/></svg>`
    }
  ];

  // ── HELPERS ──
  function resolveHref(href, anchor) {
    // If it's an anchor and we're not on the homepage, prefix with /
    if (anchor && CURRENT_PATH !== '/') return '/' + href;
    return href;
  }

  // ── INJECT NAV ──
  function injectNav() {
    const placeholder = document.getElementById('jb-nav');
    if (!placeholder) return;

    const links = NAV_LINKS.map(l => `
      <li role="listitem">
        <a href="${resolveHref(l.href, l.anchor)}" onclick="if(window.closeNav)closeNav()">${l.label}</a>
      </li>`).join('');

    placeholder.outerHTML = `
<nav role="navigation" aria-label="Main navigation">
  <a class="nav-logo" href="/" aria-label="The Jesus Barn — Home">
    <img src="/images/The-Jesus-Barn-Logo.png" alt="The Jesus Barn">
  </a>
  <ul class="nav-links" id="navLinks" role="list">
    ${links}
    <li role="listitem">
      <a href="${NAV_CTA.href}" class="nav-cta" onclick="if(window.closeNav)closeNav()">${NAV_CTA.label}</a>
    </li>
    <li role="listitem">
      <a onclick="if(window.jbPromptAdmin)jbPromptAdmin();if(window.closeNav)closeNav();" class="nav-admin-link" aria-label="Admin">·</a>
    </li>
  </ul>
  <button class="nav-burger" id="navBurger" onclick="toggleNav()" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>`;
  }

  // ── INJECT FOOTER ──
  function injectFooter() {
    const placeholder = document.getElementById('jb-footer');
    if (!placeholder) return;

    const footerLinks = FOOTER_LINKS.map(l =>
      `<li><a href="${resolveHref(l.href, l.anchor)}">${l.label}</a></li>`
    ).join('');

    const socialLinks = SOCIAL.map(s =>
      `<a class="social-link" href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">${s.svg}</a>`
    ).join('');

    placeholder.outerHTML = `
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">The Jesus Barn</div>
      <ul class="footer-nav">${footerLinks}</ul>
    </div>
    <div class="footer-social">${socialLinks}</div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} The Jesus Barn · Piedmont, Oklahoma<span class="footer-dot" onclick="if(window.jbPromptAdmin)jbPromptAdmin()" title=""></span></span>
      <span class="footer-copy"><a href="mailto:hello@thejesusbarn.org" style="color:inherit;text-decoration:none;">hello@thejesusbarn.org</a></span>
    </div>
  </div>
</footer>`;
  }

  // ── NAV TOGGLE ──
  window.toggleNav = function() {
    const links = document.getElementById('navLinks');
    const burger = document.getElementById('navBurger');
    if (!links) return;
    links.classList.toggle('open');
    burger.setAttribute('aria-expanded', links.classList.contains('open'));
  };

  window.closeNav = function() {
    const links = document.getElementById('navLinks');
    const burger = document.getElementById('navBurger');
    if (!links) return;
    links.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  };

  // ── RUN ──
  document.addEventListener('DOMContentLoaded', function() {
    injectNav();
    injectFooter();
  });

})();
