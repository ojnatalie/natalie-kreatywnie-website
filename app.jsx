/* global React */
const { useState, useEffect, useRef } = React;

/* ---------- Icons ---------- */
const Icon = {
  ArrowDown: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  ArrowUpRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
    </svg>
  ),
  Instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor"/>
    </svg>
  ),
  LinkedIn: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7"/><circle cx="8" cy="7.5" r="0.8" fill="currentColor"/>
      <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4"/><path d="M12 10v7"/>
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5"/><polyline points="3.5 7 12 13 20.5 7"/>
    </svg>
  ),
  Sparkle: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"/>
    </svg>
  ),
};

/* =====================================================
   Nav
   ===================================================== */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__brand">
          <span className="glyph">n</span>
          <span>natalie.kreatywnie</span>
        </a>
        <nav className="nav__links" aria-label="Sekcje">
          <a href="#instagram">[ 02 ] z instagrama</a>
          <a href="#o-mnie">[ 03 ] o mnie</a>
          <a href="#kontakt">[ 04 ] kontakt</a>
        </nav>
        <a className="nav__cta" href="#kontakt">
          napisz
          <Icon.ArrowUpRight style={{ width: 14, height: 14 }} />
        </a>
      </div>
    </header>
  );
}

/* =====================================================
   Hero
   ===================================================== */
const HERO_PHOTOS = {
  studio: { src: "img/hero-main.png", label: "Studio · ikonki AI", pos: "center 22%" },
  figma:  { src: "img/figma-claude.png", label: "Figma + Claude", pos: "center 30%" },
  affinity: { src: "img/affinity-claude.png", label: "Affinity + Claude", pos: "center 18%" },
  green: { src: "img/affinity-green.png", label: "Affinity · lime", pos: "center 22%" },
};

function Hero({ tweaks }) {
  const photo = HERO_PHOTOS[tweaks.heroPhoto] || HERO_PHOTOS.studio;
  const useItalic = tweaks.italicAccent;

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <div className="hero__label">
              <span className="tag">[ 01 / hero ]</span>
              <span className="ast">*</span>
              <span className="mono" style={{ fontSize: 11 }}>natalie.kreatywnie ● kraków, pl</span>
            </div>

            <h1 className="h-display hero__h1">
              Pokazuję, jak AI zmienia <br className="hide-mobile" />
              pracę {useItalic
                ? <span className="italic marker">kreatywną</span>
                : <span className="marker">kreatywną</span>}
            </h1>

            <div className="hero__badges">
              <span className="pill"><span className="dot"></span>AI dla grafików i twórców</span>
              <span className="pill"><span className="dot"></span>Pomagam odnaleźć się twórcom w świecie AI</span>
            </div>

            <div className="hero__cta-row">
              <a className="cta" href="#instagram">
                Zobacz, co robię
                <span className="arrow"><Icon.ArrowDown style={{ width: 14, height: 14 }} /></span>
              </a>
              <span className="hero__meta">scroll → [ 02 ]</span>
            </div>
          </div>

          <div className="hero__photo">
            <div className="aura"></div>

            <span className="hero__chip --tl">
              <span className="dot"></span>
              między promptem a&nbsp;enterem
            </span>

            <div className="frame">
              <img src={photo.src} alt="Natalia Przybylska — natalie.kreatywnie" style={{ objectPosition: photo.pos }} />
            </div>

            <span className="hero__chip --br">
              ● {photo.label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Instagram grid
   ===================================================== */
const IG_POSTS = [
  { src: "img/figma-claude.png", caption: "Projektowanie w Figmie z Claude", url: "https://instagram.com/natalie.kreatywnie" },
  { src: "img/affinity-green.png", caption: "Affinity × AI — flow", url: "https://instagram.com/natalie.kreatywnie" },
  { src: "img/ps-banana.png", caption: "Photoshop × Nano Banana", url: "https://instagram.com/natalie.kreatywnie" },
  { src: "img/affinity-claude.png", caption: "Affinity + Claude tutorial", url: "https://instagram.com/natalie.kreatywnie" },
  { src: "img/hero-main.png", caption: "Stos narzędzi AI 2026", url: "https://instagram.com/natalie.kreatywnie" },
  { src: null, caption: "Reels: prompt → grafika", url: "https://instagram.com/natalie.kreatywnie" },
];

function InstagramSection() {
  return (
    <section className="section insta" id="instagram">
      <div className="wrap">
        <div className="section__head">
          <div className="section__head-row">
            <div>
              <span className="mono">[ 02 / z instagrama ]</span>
              <h2 className="h-section">
                Najnowsze z <span className="italic">@natalie.kreatywnie</span>
              </h2>
            </div>
            <span className="section__head-meta">aktualizacja co tydzień ● 6 / ostatnich</span>
          </div>
        </div>

        <div className="insta__grid">
          {IG_POSTS.map((p, i) => (
            <a
              key={i}
              className="insta__tile"
              href={p.url}
              target="_blank"
              rel="noopener"
              aria-label={p.caption}
            >
              {p.src ? (
                <img src={p.src} alt={p.caption} />
              ) : (
                <div className="insta__placeholder">
                  <span className="num">06</span>
                  <span>najnowszy post</span>
                  <span>● ig: @natalie.kreatywnie</span>
                </div>
              )}
              <div className="corner" aria-hidden="true">
                <Icon.Instagram style={{ width: 16, height: 16, color: "#0A0A0A" }} />
              </div>
              <div className="insta__overlay">
                <span>{p.caption}</span>
                <span className="ig-badge">
                  otwórz na instagramie
                  <Icon.ArrowUpRight style={{ width: 12, height: 12 }} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          className="insta__more"
          href="https://instagram.com/natalie.kreatywnie"
          target="_blank"
          rel="noopener"
        >
          zobacz wszystko na instagramie
          <Icon.ArrowRight style={{ width: 14, height: 14 }} />
        </a>
      </div>
    </section>
  );
}

/* =====================================================
   About
   ===================================================== */
function AboutSection({ tweaks }) {
  const useItalic = tweaks.italicAccent;
  return (
    <section className="section about" id="o-mnie">
      <div className="wrap">
        <div className="about__grid">
          <div>
            <span className="mono">[ 03 / o mnie ]</span>
            <h2 className="h-section">
              Między promptem {useItalic
                ? <span className="italic">a enterem</span>
                : <span>a enterem</span>}
            </h2>

            <p className="about__intro">
              Technologia powinna być narzędziem również dla twórców, dlatego
              eksperymentuję z AI, by sprawdzić, w czym <span className="marker">może pomóc</span>.
            </p>

            <h3 className="about__list-title">
              <span className="emoji">🟢</span> O czym opowiadam?
            </h3>

            <ol className="about__list">
              <li>
                <span className="num">01</span>
                <span>Jak stworzyć grafiki reklamowe we wszystkich formatach w&nbsp;Gemini z&nbsp;JSON.</span>
              </li>
              <li>
                <span className="num">02</span>
                <span>Jak nauczyć Claude pisać jak Ty.</span>
              </li>
              <li>
                <span className="num">03</span>
                <span>Projektowanie w&nbsp;Figmie z&nbsp;poziomu Claude.</span>
              </li>
              <li>
                <span className="num">04</span>
                <span>Tworzenie stron z&nbsp;pomocą AI&nbsp;— bez kodowania.</span>
              </li>
              <li className="--soft">
                <span className="num">05</span>
                <span>…i inne, o&nbsp;których opowiem niebawem.</span>
              </li>
            </ol>

            <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.55, maxWidth: "56ch" }}>
              Jeśli tak jak ja kochasz proces tworzenia i&nbsp;chcesz, by technologia
              Cię w&nbsp;tym wspierała&nbsp;— <strong>zostań ze mną</strong>.
            </p>

            <div className="about__sep" aria-hidden="true">
              <span>* * *</span>
            </div>

            <p className="about__manifest">
              Korzystam z&nbsp;AI, ale traktuję to jako <strong>rozszerzenie mojej
              kreatywności</strong>, nie jej zastępstwo. Każdy projekt przechodzi
              przez mój filtr estetyczny, gust i&nbsp;moje ręce. Nie generuję
              masowo, a&nbsp;projekty nigdy nie są wynikiem jednego promptu.
              Tworzę rzeczy, które pokazują moją wrażliwość, nawet jeśli AI
              mnie wspiera.
            </p>
          </div>

          <div className="about__photo">
            <div className="tape" aria-hidden="true"></div>
            <div className="frame">
              <img src="img/figma-claude.png" alt="Natalia przy pracy — Figma + Claude" />
            </div>
            <div className="caption">
              <span className="dot"></span>
              behind the scenes ● 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Contact
   ===================================================== */
const CONTACT = [
  {
    platform: "Instagram",
    handle: "@natalie.kreatywnie",
    desc: "Codzienne treści. Reels, karuzele, kulisy.",
    cta: "Obserwuj",
    href: "https://instagram.com/natalie.kreatywnie",
    icon: <Icon.Instagram />,
  },
  {
    platform: "LinkedIn",
    handle: "Natalia Przybylska",
    desc: "Długie wpisy, projekty, refleksje.",
    cta: "Połącz się",
    href: "https://linkedin.com/in/natalia-przybylska",
    icon: <Icon.LinkedIn />,
  },
  {
    platform: "E-mail",
    handle: "natalie.kreatywnie@gmail.com",
    desc: "Współpraca, projekt, pytanie konkretne.",
    cta: "Napisz",
    href: "mailto:natalie.kreatywnie@gmail.com",
    icon: <Icon.Mail />,
  },
];

function ContactSection({ tweaks }) {
  const useItalic = tweaks.italicAccent;
  return (
    <section className="section contact" id="kontakt">
      <div className="wrap">
        <div className="section__head">
          <div className="section__head-row">
            <div>
              <span className="mono">[ 04 / kontakt ]</span>
              <h2 className="h-section">
                Tu mnie {useItalic ? <span className="italic">znajdziesz</span> : "znajdziesz"}.
              </h2>
            </div>
            <span className="section__head-meta">zostań ze mną ● odpowiadam w ~48h</span>
          </div>
        </div>

        <div className="contact__grid">
          {CONTACT.map((c, i) => (
            <a className="contact__card" key={i} href={c.href} target="_blank" rel="noopener">
              <div className="contact__card-icon">{c.icon}</div>
              <div className="contact__card-platform">{c.platform}</div>
              <div className="contact__card-handle">{c.handle}</div>
              <p className="contact__card-desc">{c.desc}</p>
              <div className="contact__card-cta">
                <span>{c.cta}</span>
                <span className="arrow"><Icon.ArrowRight style={{ width: 18, height: 18 }} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Footer
   ===================================================== */
function Footer() {
  return (
    <footer className="footer wrap">
      <span>© 2026 · natalie.kreatywnie · <a href="https://nprzybylska.pl" target="_blank" rel="noopener">nprzybylska.pl</a></span>
      <span>made with <span style={{ color: "var(--lime)" }}>●</span> ai &amp; human craft</span>
    </footer>
  );
}

/* =====================================================
   Tweaks
   ===================================================== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroPhoto": "studio",
  "italicAccent": true,
  "markerColor": "#FFE600",
  "limeColor": "#51F500"
}/*EDITMODE-END*/;

function Tweaks() {
  const { TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSelect, TweakToggle, TweakColor } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply color tokens live
  useEffect(() => {
    document.documentElement.style.setProperty("--marker", t.markerColor);
    document.documentElement.style.setProperty("--lime", t.limeColor);
  }, [t.markerColor, t.limeColor]);

  return (
    <>
      <App tweaks={t} />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero photo">
          <TweakSelect
            label="Wariant zdjęcia"
            value={t.heroPhoto}
            onChange={(v) => setTweak("heroPhoto", v)}
            options={[
              { value: "studio", label: "Studio · ikonki w tle" },
              { value: "figma", label: "Figma + Claude" },
              { value: "affinity", label: "Affinity + Claude" },
              { value: "green", label: "Affinity · lime" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Typografia">
          <TweakToggle
            label="Italic accent (Instrument Serif)"
            value={t.italicAccent}
            onChange={(v) => setTweak("italicAccent", v)}
          />
        </TweakSection>
        <TweakSection label="Kolory">
          <TweakColor
            label="Marker"
            value={t.markerColor}
            onChange={(v) => setTweak("markerColor", v)}
            options={["#FFE600", "#FFD166", "#C8F76B", "#FF8FA3"]}
          />
          <TweakColor
            label="Lime akcent"
            value={t.limeColor}
            onChange={(v) => setTweak("limeColor", v)}
            options={["#51F500", "#7DD64A", "#00C853", "#84CC16"]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

/* =====================================================
   App
   ===================================================== */
function App({ tweaks }) {
  return (
    <>
      <Nav />
      <main>
        <Hero tweaks={tweaks} />
        <InstagramSection />
        <AboutSection tweaks={tweaks} />
        <ContactSection tweaks={tweaks} />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Tweaks />);
