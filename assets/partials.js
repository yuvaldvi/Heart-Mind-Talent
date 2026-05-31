// Shared header + footer + scroll reveal injected into every page.

const NAV = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Case Studies", href: "case-studies.html" },
  { label: "Testimonials", href: "testimonials.html" },
  { label: "How We Work", href: "how-we-work.html" },
  { label: "Insights", href: "insights.html" },
  { label: "Contact", href: "contact.html" },
];

function currentPath() {
  const p = location.pathname.split("/").pop() || "index.html";
  return p;
}

function renderHeader() {
  const el = document.querySelector("[data-header]");
  if (!el) return;
  const cur = currentPath();
  el.innerHTML = `
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a href="index.html" class="logo-link" aria-label="Heart Mind Talent — home">
          <img src="assets/logo.png" alt="Heart Mind Talent" class="logo-img" />
        </a>
        <nav class="nav" aria-label="Primary">
          ${NAV.map(n => `<a href="${n.href}" class="${cur===n.href?'active':''}">${n.label}</a>`).join("")}
          <a href="contact.html#book" class="cta">Book a call <span class="cta__arrow">→</span></a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const el = document.querySelector("[data-footer]");
  if (!el) return;
  el.innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="site-footer__top">
          <div>
            <div class="site-footer__big">Hire the people <em>building the future.</em></div>
            <a href="contact.html#book" class="cta" style="background:#fff;color:#0a0a0a;border-color:#fff;">Book a call <span class="cta__arrow">→</span></a>
          </div>
          <div class="footer-col">
            <h5>Navigate</h5>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="case-studies.html">Case Studies</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>
              <li><a href="how-we-work.html">How We Work</a></li>
              <li><a href="insights.html">Insights</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:admin@heartmindtalent.com">admin@heartmindtalent.com</a></li>
              <li><a href="tel:+442073462988">+44 20 7346 2988</a></li>
              <li style="color:#8a857b;">Ingham Rd<br/>London NW6 1DE<br/>United Kingdom</li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Follow</h5>
            <ul>
              <li><a href="https://www.linkedin.com/company/heart-mind-talent-ltd/" target="_blank" rel="noopener">LinkedIn ↗</a></li>
              <li><a href="https://x.com/HeartMindTalent" target="_blank" rel="noopener">X / Twitter ↗</a></li>
              <li><a href="insights.html#beehiiv-subscribe">Subscribe to Insights ↗</a></li>
            </ul>
          </div>
        </div>
        <div class="site-footer__bottom">
          <a href="index.html" class="logo-link" aria-label="Heart Mind Talent">
            <img src="assets/logo.png" alt="Heart Mind Talent" class="logo-img logo-img--inverted" />
          </a>
          <div>© ${new Date().getFullYear()} Heart Mind Talent Ltd. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `;
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(e => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(e => io.observe(e));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  setupReveal();
});
