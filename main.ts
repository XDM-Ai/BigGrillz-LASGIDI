import './styles.css';

const promo = './resources/biggrillz-promo.jpeg';
const logo = './resources/biggrillz-logo.jpeg';

const whatsapp = 'https://wa.me/2347049500615?text=Hello%20BigGrillz%20LASGIDI%2C%20I%27d%20like%20to%20place%20an%20order.';
const glovo = 'https://glovoapp.com';
const chowdeck = 'https://chowdeck.com';

const specialties = [
  ['🐟', 'Bole & Grilled Fish', 'Whole charcoal-grilled fish paired with smoky roasted plantain and our signature heat.'],
  ['🍌', 'Roasted Plantain', 'Sweet, smoky plantain with deep grill marks and that unmistakable Lasgidi bole aroma.'],
  ['🌶️', 'Signature Pepper Sauce', 'A bold, spicy house-style pepper sauce made to wake up every bite.'],
  ['🧅', 'Onion Chops', 'Fresh purple onion rings for a crisp, bright finish against the smoky grill.'],
  ['🌿', 'Utazi Garnish', 'Freshly chopped utazi leaves adding a clean herbal lift to the platter.']
];

const benefits = [
  ['🔥', 'Charcoal Grilled', 'Real smoky flavour'],
  ['🍌', 'Fresh Roasted Plantain', 'Sweet, smoky & tender'],
  ['🐟', 'Fresh Grilled Fish', 'Grilled to order'],
  ['🌶️', 'Signature Pepper Sauce', 'Big flavour, bold heat'],
  ['🌿', 'Fresh Garnishes', 'Finishing touches matter'],
  ['📦', 'Carefully Packed', 'Ready for your doorstep']
];

const gallery = [
  [promo, 'BigGrillz signature platter', 'Whole grilled fish + roasted plantain'],
  [promo, 'Charcoal-grilled fish', 'Smoky, juicy and fire-kissed'],
  [promo, 'Roasted plantain', 'Five golden grilled fingers'],
  [promo, 'Signature pepper sauce', 'Bold red house-style heat'],
  [promo, 'Fresh garnishes', 'Purple onion + utazi finish'],
  [promo, 'Branded takeaway box', 'Built for the BigGrillz experience']
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function app() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="site-shell">
      <header class="nav-wrap">
        <nav class="nav container" aria-label="Main navigation">
          <a class="brand" href="#top" aria-label="BigGrillz LASGIDI home">
            <img src="${logo}" alt="BigGrillz LASGIDI logo" />
          </a>
          <div class="nav-links" id="nav-links">
            <a href="#about">About</a><a href="#specialties">Menu</a><a href="#gallery">Gallery</a><a href="#order">Order</a>
          </div>
          <button class="menu-btn" id="menu-btn" aria-label="Open menu" aria-expanded="false">☰</button>
          <a class="nav-cta" href="${whatsapp}" target="_blank" rel="noreferrer">ORDER NOW</a>
        </nav>
      </header>

      <main id="top">
        <section class="hero">
          <div class="hero-bg" style="background-image:linear-gradient(90deg,rgba(5,5,5,.97) 0%,rgba(5,5,5,.76) 48%,rgba(5,5,5,.2) 100%),url('${promo}')"></div>
          <div class="embers"></div>
          <div class="container hero-inner">
            <div class="hero-copy">
              <span class="eyebrow">LASGIDI • CHARCOAL • BIG FLAVOUR</span>
              <h1>BIG FLAVOUR.<br><span>BIG GRILLZ.</span></h1>
              <p>Authentic Lasgidi bole &amp; grilled goodness — <strong>YUMMY DE YUM!</strong></p>
              <div class="hero-actions">
                <a class="btn btn-primary" href="${whatsapp}" target="_blank" rel="noreferrer">ORDER NOW <span>↗</span></a>
                <button class="btn btn-ghost" data-scroll="specialties">VIEW MENU <span>↓</span></button>
              </div>
              <div class="hero-proof"><span>🔥</span> Fire-grilled. Freshly packed. Made for serious cravings.</div>
            </div>
            <div class="hero-logo"><img src="${logo}" alt="BigGrillz LASGIDI — YUMMY DE YUM" /></div>
          </div>
          <div class="hero-bottom"><div class="container scroll-cue"><span>SCROLL TO DISCOVER</span><span class="line"></span><span>↓</span></div></div>
        </section>

        <section class="about section" id="about">
          <div class="container about-grid">
            <div class="section-kicker">01 / THE STORY</div>
            <div>
              <h2>Born from the <em>fire</em>.<br>Built for the craving.</h2>
              <p class="lead">BigGrillz LASGIDI is a modern Nigerian virtual restaurant bringing the spirit of Lasgidi street food to a premium, convenient experience.</p>
              <p>We keep the heart of bole culture close: charcoal heat, roasted plantain, fresh grilled fish, signature pepper sauce and the little finishing touches that make you go back for one more bite.</p>
              <div class="story-tags"><span>SMOKY</span><span>SPICY</span><span>FRESH</span><span>LASGIDI</span></div>
            </div>
          </div>
        </section>

        <section class="specialties section-dark" id="specialties">
          <div class="container">
            <div class="section-head"><div><span class="eyebrow">02 / WHAT WE GRILL</span><h2>Our <span>specialties</span></h2></div><p>Simple ingredients. Serious charcoal flavour. Every detail is there for the YUMMY DE YUM moment.</p></div>
            <div class="cards">${specialties.map(([icon,title,desc], index) => `<article class="food-card"><div class="food-image" style="background-image:linear-gradient(180deg,transparent 35%,rgba(0,0,0,.86)),url('${promo}')"><span class="food-icon">${icon}</span><span class="card-num">0${index + 1}</span></div><div class="food-card-body"><h3>${title}</h3><p>${desc}</p><a href="${whatsapp}" target="_blank" rel="noreferrer">ORDER NOW <span>↗</span></a></div></article>`).join('')}</div>
          </div>
        </section>

        <section class="signature section">
          <div class="container signature-grid">
            <div class="signature-image"><img src="${promo}" alt="BigGrillz signature grilled fish and roasted plantain platter" /><div class="image-stamp">BIG<br>GRILLZ<br><small>LASGIDI</small></div></div>
            <div class="signature-copy"><span class="eyebrow">03 / THE SIGNATURE</span><h2>The platter that says <em>everything.</em></h2><p>Five golden roasted plantain fingers beside a whole charcoal-grilled fish, purple onion rings, fresh utazi and a separate cup of our signature pepper sauce.</p><ul><li><span>01</span> Whole charcoal-grilled fish</li><li><span>02</span> Five roasted plantain fingers</li><li><span>03</span> Purple onion + utazi finish</li><li><span>04</span> Signature pepper sauce</li></ul><a class="btn btn-primary" href="${whatsapp}" target="_blank" rel="noreferrer">GET THE SIGNATURE <span>↗</span></a></div>
          </div>
        </section>

        <section class="packaging section-dark">
          <div class="container packaging-grid"><div><span class="eyebrow">04 / PACKED WITH PURPOSE</span><h2>From our grill<br>to your <span>table.</span></h2><p>Our custom kraft takeaway experience keeps the meal warm, protected and unmistakably BigGrillz. Exterior branding carries the identity; the inside lid stays clean kraft.</p><div class="pack-list"><span>FOIL-WRAPPED</span><span>SECURE SAUCE CUP</span><span>CUSTOM KRAFT BOX</span></div></div><div class="pack-visual"><div class="box-card box-open"><img src="${promo}" alt="BigGrillz open takeaway packaging" /></div><div class="box-card box-closed"><img src="${promo}" alt="BigGrillz branded takeaway packaging" /></div></div></div>
        </section>

        <section class="why section">
          <div class="container"><div class="center-head"><span class="eyebrow">05 / WHY BIGGRILLZ</span><h2>Big grill. <span>Big reason.</span></h2></div><div class="benefits">${benefits.map(([icon,title,desc]) => `<div class="benefit"><span class="benefit-icon">${icon}</span><div><h3>${title}</h3><p>${desc}</p></div></div>`).join('')}</div></div>
        </section>

        <section class="gallery section-dark" id="gallery">
          <div class="container"><div class="section-head"><div><span class="eyebrow">06 / FOOD PORN, RESPECTFULLY</span><h2>See the <span>YUM.</span></h2></div><p>Professional food imagery with the warmth, smoke and texture of a real charcoal grill.</p></div><div class="gallery-grid">${gallery.map(([src,title,desc],i) => `<figure class="gallery-item gallery-${i+1}"><img src="${src}" alt="${title}" loading="lazy" /><figcaption><span>${title}</span><small>${desc}</small></figcaption></figure>`).join('')}</div></div>
        </section>

        <section class="order section" id="order">
          <div class="order-bg" style="background-image:linear-gradient(rgba(5,5,5,.78),rgba(5,5,5,.9)),url('${promo}')"></div>
          <div class="container order-inner"><span class="eyebrow">07 / LET'S EAT</span><h2>READY FOR SOME<br><span>YUMMY DE YUM?</span></h2><p>Order your favourite bole, grilled fish and signature pepper sauce from BigGrillz LASGIDI.</p><div class="order-options"><a class="order-card whatsapp" href="${whatsapp}" target="_blank" rel="noreferrer"><span class="order-icon">◉</span><div><strong>WHATSAPP</strong><b>Order directly on WhatsApp</b><small>07049500615</small></div><span class="order-arrow">↗</span></a><a class="order-card" href="${glovo}" target="_blank" rel="noreferrer"><span class="order-icon">G</span><div><strong>GLOVO</strong><b>Find us on Glovo</b><small>Search: Big Grillz LASGIDI</small></div><span class="order-arrow">↗</span></a><a class="order-card" href="${chowdeck}" target="_blank" rel="noreferrer"><span class="order-icon">C</span><div><strong>CHOWDECK</strong><b>Find us on Chowdeck</b><small>Search: Big Grillz LASGIDI</small></div><span class="order-arrow">↗</span></a></div></div>
        </section>
      </main>

      <footer class="footer"><div class="container footer-grid"><div><img src="${logo}" alt="BigGrillz LASGIDI logo" class="footer-logo" /><p>Authentic Lasgidi Grilled Goodness</p></div><div class="footer-links"><a href="#about">About</a><a href="#specialties">Menu</a><a href="#gallery">Gallery</a><a href="#order">Order</a></div><div class="footer-social"><span>Instagram</span><span>Facebook</span><span>TikTok</span><span>WhatsApp</span></div><div class="footer-contact"><span>YUMMY DE YUM</span><a href="${whatsapp}" target="_blank" rel="noreferrer">07049500615</a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} BigGrillz LASGIDI</span><span>Virtual restaurant • Social links are editable placeholders</span></div></footer>
    </div>`;

  document.querySelectorAll<HTMLElement>('[data-scroll]').forEach((el) => el.addEventListener('click', () => scrollToId(el.dataset.scroll || 'top')));
  document.querySelector<HTMLButtonElement>('#menu-btn')?.addEventListener('click', () => {
    const links = document.querySelector<HTMLElement>('#nav-links');
    const button = document.querySelector<HTMLButtonElement>('#menu-btn');
    const open = links?.classList.toggle('open') ?? false;
    if (button) button.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((link) => link.addEventListener('click', () => document.querySelector('#nav-links')?.classList.remove('open')));
}

app();
