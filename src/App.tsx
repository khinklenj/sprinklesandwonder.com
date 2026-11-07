import { useState } from "react";
import "./index.css";

const bakedGoods = [
  "Blueberry banana muffins",
  "Mini pumpkin bread loaves",
  "Candy brownies",
  "Chocolate chip cookies",
  "Mini blueberry banana bread loaves",
  "Blueberry crumble bars",
];

const paintKits = [
  "Build-your-own paint kits",
  "Choose a figurine size",
  "Pick up to 3 paint pods",
  "Includes a paint brush",
  "Perfect for gifts, parties, and creative fun",
];

const highlights = [
  { icon: "♡", title: "Homemade", text: "Made with care, family love, and sweet little details." },
  { icon: "✿", title: "Family Run", text: "A granddaughter, her mom, and Nana bringing a dream to life together." },
  { icon: "❀", title: "Creative Fun", text: "Baked goods and paint kits that feel joyful, cozy, and special." },
];

function Flower({ children = "✿", className = "" }: { children?: string; className?: string }) {
  return <span className={`flower-mark ${className}`} aria-hidden="true">{children}</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="top-ribbon">✿ BAKED GOODS &nbsp; • &nbsp; HANDMADE CRAFTS &nbsp; • &nbsp; MADE WITH LOVE ✿</div>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" onClick={closeMenu}>
            <Flower /> Sprinkles <span className="wordmark-and">&amp;</span> Wonder
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
            <a href="#story" onClick={closeMenu}>Our Story</a>
            <a href="#offerings" onClick={closeMenu}>What We Offer</a>
            <a href="#gallery" onClick={closeMenu}>Homestead Style</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact ♡</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero gingham-panel">
          <div className="hero-framing">
            <div className="hero-card">
              <div className="corner-vines top-left" aria-hidden="true">❀ ❧ ✿</div>
              <div className="corner-vines top-right" aria-hidden="true">✿ ❧ ❀</div>
              <p className="eyebrow">A cozy little corner of homemade happiness</p>
              <img
                src="/logo.png"
                alt="Sprinkles and Wonder — baked goods and handmade crafts"
                className="hero-logo"
              />
              <div className="ornament" aria-hidden="true">❧ ♡ ❧</div>
              <h1>Homemade sweetness,<br /><em>sprinkled with wonder</em></h1>
              <p className="hero-copy">
                Homemade baked goods, creative paint kits, and sweet little touches inspired by
                family, farmhouse charm, and three generations of women creating together.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#offerings">See What We Offer</a>
                <a className="button button-secondary" href="#story">Read Our Story</a>
              </div>
            </div>
          </div>
        </section>

        <section className="highlight-band">
          <div className="section-container highlights-grid">
            {highlights.map((item) => (
              <article key={item.title} className="highlight-card">
                <div className="highlight-icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="section-container story-grid">
            <div className="story-photo-stack">
              <div className="photo-card large-photo">
                <img src="/homestead-table.jpg" alt="A cozy homestead kitchen table with baked goods and flowers" />
              </div>
              <div className="photo-card small-photo">
                <img src="/fresh-cookies.jpg" alt="Fresh baked cookies on a farmhouse table with flowers" />
              </div>
            </div>

            <div className="story-copy">
              <p className="eyebrow">Our Story · Three generations of heart</p>
              <h2>Three Generations.<br /><em>One Sweet Dream.</em></h2>
              <div className="small-rule">✿</div>
              <p>
                Sprinkles &amp; Wonder began with a little girl’s big idea and a whole lot of heart.
                Our granddaughter came up with the dream, and with the love, encouragement, and
                helping hands of her mom and Nana, that sweet idea began to blossom.
              </p>
              <p>
                Today, three generations of strong women are working together to bring that vision
                to life through homemade baked goods, handmade crafts, and creative little moments
                that make people smile.
              </p>
              <p>
                Every treat we bake and every kit we put together carries a little piece of our
                family’s love — from our family to yours, made with love, sprinkled with joy, and
                filled with wonder.
              </p>
            </div>
          </div>
        </section>

        <section className="offerings-section" id="offerings">
          <div className="section-container">
            <div className="section-heading boxed-heading">
              <div className="tiny-ornaments" aria-hidden="true">✿ ♡ ✿</div>
              <p className="eyebrow">What we offer</p>
              <h2>Sweet treats &amp; creative fun</h2>
              <p className="section-intro">
                We do not list prices on the site, but here are some of the homemade goodies and
                creative items we offer.
              </p>
            </div>

            <div className="offerings-grid">
              <article className="offering-card baked-card">
                <div className="card-ribbon">Homemade Baked Goods</div>
                <div className="card-graphic" aria-hidden="true">🧁 🍪 🍞</div>
                <p className="card-copy">
                  Homemade baked items with cozy, made-from-scratch charm.
                </p>
                <ul className="item-list">
                  {bakedGoods.map((item) => (
                    <li key={item}>♥ {item}</li>
                  ))}
                </ul>
              </article>

              <article className="offering-card craft-card">
                <div className="card-ribbon green">Paint Kits</div>
                <div className="card-graphic" aria-hidden="true">🎨 🖌️ ✿</div>
                <p className="card-copy">
                  Fun and creative paint kits with a handmade, giftable feel.
                </p>
                <ul className="item-list">
                  {paintKits.map((item) => (
                    <li key={item}>♥ {item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-container">
            <div className="section-heading center-heading">
              <p className="eyebrow">Homestead style</p>
              <h2>A cozy farmhouse feel</h2>
              <p className="section-intro">
                Soft florals, warm kitchens, simple joys, and homemade goodness inspire everything
                we create.
              </p>
            </div>

            <div className="gallery-grid">
              <div className="gallery-card tall">
                <img src="/homestead-table.jpg" alt="Homestead table with baked goods and flowers" />
              </div>
              <div className="gallery-card quote-card">
                <div className="quote-card-inner">
                  <div className="quote-ornament" aria-hidden="true">✿ ♡ ✿</div>
                  <h3>Homestead Homemade</h3>
                  <p>
                    Warm wood, soft gingham, florals, baked treats, and little handmade touches —
                    that is the feeling behind Sprinkles &amp; Wonder.
                  </p>
                </div>
              </div>
              <div className="gallery-card wide">
                <img src="/fresh-cookies.jpg" alt="Fresh baked cookies on a rustic farmhouse table" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-container">
            <div className="contact-panel">
              <div className="contact-heading">
                <p className="eyebrow">Say hello</p>
                <h2>We’d love to hear from you</h2>
                <p>
                  Reach out to learn more, ask about an order, or follow along with Sprinkles &amp; Wonder.
                </p>
              </div>

              <div className="contact-grid">
                <a className="contact-card" href="mailto:info@sprinklesandwonder.com">
                  <span className="contact-icon" aria-hidden="true">✉</span>
                  <h3>Email</h3>
                  <p>info@sprinklesandwonder.com</p>
                </a>
                <a
                  className="contact-card"
                  href="https://www.facebook.com/profile.php?id=61595190183049"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon" aria-hidden="true">f</span>
                  <h3>Facebook</h3>
                  <p>Follow us on Facebook</p>
                </a>
                <a
                  className="contact-card"
                  href="https://www.instagram.com/sprinklesandwonder/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon" aria-hidden="true">◎</span>
                  <h3>Instagram</h3>
                  <p>Follow us on Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container footer-inner">
          <div>
            <p className="footer-brand">Sprinkles &amp; Wonder</p>
            <p className="footer-sub">Baked Goods &amp; Handmade Crafts</p>
          </div>
          <div className="footer-links">
            <a href="mailto:info@sprinklesandwonder.com">info@sprinklesandwonder.com</a>
            <a href="https://www.facebook.com/profile.php?id=61595190183049" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/sprinklesandwonder/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Sprinkles &amp; Wonder · Homemade with love</p>
      </footer>
    </div>
  );
}
