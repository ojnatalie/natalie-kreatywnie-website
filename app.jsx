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
          <a href="#instagram">tutoriale video</a>
          <a href="#porady-ai">porady AI</a>
          <a href="#o-mnie">o mnie</a>
          <a href="#kontakt">kontakt</a>
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
  studio: { src: "img/MS-1.png", label: "Studio · ikonki AI", pos: "center 22%" },
  figma:  { src: "img/hero-main.png", label: "Grafika + AI", pos: "center 30%" },
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
              <span className="tag">Cześć!</span>
              <span className="ast">*</span>
              <span className="mono" style={{ fontSize: 11 }}>natalie.kreatywnie</span>
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
              <span className="hero__meta">Zobacz moje tutoriale</span>
            </div>
          </div>

          <div className="hero__photo">
            <div className="aura"></div>

            <span className="hero__chip --tl">
              <span className="dot"></span>
              między grafiką a AI
            </span>

            <div className="frame">
              <img src={photo.src} alt="Natalia Przybylska — natalie.kreatywnie" style={{ objectPosition: photo.pos }} />
            </div>

            <span className="hero__chip --br">
              ● Grafika x AI dla twórców
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Instagram grid — oficjalne embedy IG

   Jak dodać kolejny post:
   1) Skopiuj link do posta z Instagrama (np. https://www.instagram.com/p/XXXXXXXX/).
   2) Wklej go w "" w pierwszy wolny slot poniżej.
   3) Zapisz plik i odśwież stronę.

   WAŻNE — formaty URL które działają z embed.js:
     ✅ https://www.instagram.com/p/SHORTCODE/         (posty i reelsy)
     ✅ https://www.instagram.com/reel/SHORTCODE/      (reelsy — bez nazwy użytkownika)
     ❌ https://www.instagram.com/UZYTKOWNIK/reel/SHORTCODE/  (NIE działa — embed.js tego nie obsługuje)

   Reelsy skopiowane z aplikacji mobilnej mają często format z nazwą użytkownika.
   Wystarczy zmienić: /natalie.kreatywnie/reel/KOD/ → /reel/KOD/
   ===================================================== */
const IG_EMBEDS = [
  "https://www.instagram.com/p/DYUmyVCspnK/",
  "https://www.instagram.com/p/DXgLatCjBO7/",
  "https://www.instagram.com/p/DXegXYoDNQg/",
  "https://www.instagram.com/reel/DXonS4ajCqA/",
  "https://www.instagram.com/reel/DXtvLqajNsp/",
  "https://www.instagram.com/reel/DXjaGvZjMkz/",
  "https://www.instagram.com/reel/DXjGOBngLTo/",
  "https://www.instagram.com/reel/DXg1SvuDPta/",
  "https://www.instagram.com/reel/DYOxosmA9VX/",
  "", // slot 10
  "", // slot 11
  "", // slot 12
];

function InstagramSection() {
  const activePosts = IG_EMBEDS.filter((url) => url && url.trim() !== "");

  useEffect(() => {
    const SCRIPT_ID = "instagram-embed-script";

    const processEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      processEmbeds();
    }
  }, [activePosts.join("|")]);

  return (
    <section className="section insta" id="instagram">
      <div className="wrap">
        <div className="section__head">
          <div className="section__head-row">
            <div>
              <div className="insta__byline">
                <img
                  className="insta__avatar"
                  src="img/avatar-ig.jpg"
                  alt="natalie.kreatywnie — avatar Instagram"
                  loading="lazy"
                />
                <span className="mono">z instagrama</span>
              </div>
              <h2 className="h-section">
                Najnowsze z <span className="italic">@natalie.kreatywnie</span>
              </h2>
            </div>
            <span className="section__head-meta">
              ● prosto z instagrama
            </span>
          </div>
        </div>

        <div className="insta__embed-grid">
          {activePosts.map((url, i) => (
            <div className="insta__embed-cell" key={url + i}>
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              >
                <a href={url} target="_blank" rel="noopener">
                  Zobacz post na Instagramie
                </a>
              </blockquote>
            </div>
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
   Tutorials Intro — nagłówek serii sekcji z tutorialami
   ===================================================== */
function TutorialsIntro({ tweaks }) {
  const useItalic = tweaks.italicAccent;
  return (
    <section className="section prompt-teaser tutorials-intro" id="porady-ai">
      <div className="wrap">
        <div className="tutorials-intro__inner">
          <span className="mono">narzędzia · seria</span>
          <h2 className="h-section tutorials-intro__title">
            {useItalic
              ? <>Tutoriale <span className="italic">z AI?</span></>
              : "Tutoriale z AI?"}
          </h2>
          <p className="tutorials-intro__desc">
            Konkretne prompty, rozbiory parametrów, gotowe pliki do skopiowania.
            Wybierz, co Cię interesuje — branding, realistyczna skóra w portretach, klimat zdjęć analogowych.
          </p>
          <div className="tutorials-intro__chips">
            <a href="#prompty" className="tutorials-intro__chip">
              <span className="num">01</span>
              <span>branding marki</span>
            </a>
            <a href="#skora" className="tutorials-intro__chip">
              <span className="num">02</span>
              <span>realistyczna skóra</span>
            </a>
            <a href="#midjourney" className="tutorials-intro__chip">
              <span className="num">03</span>
              <span>analog · midjourney</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   Prompt Teaser — zajawka podstrony z promptem
   ===================================================== */
const PROMPT_PREVIEWS = [
  { src: "img/pedigree.jfif",  alt: "Pedigree brand board",  label: "pedigree"  },
  { src: "img/tymbark.png",    alt: "Tymbark brand board",   label: "tymbark"   },
  { src: "img/milka.jfif",     alt: "Milka brand board",     label: "milka"     },
  { src: "img/wkdzik.jfif",    alt: "WKDZIK brand board",    label: "wkdzik"    },
  { src: "img/nivea.jfif",     alt: "Nivea brand board",     label: "nivea"     },
];

function PromptTeaserSection({ tweaks }) {
  const useItalic = tweaks.italicAccent;

  return (
    <section className="section prompt-teaser" id="prompty">
      <div className="wrap">

        {/* Header */}
        <div className="section__head">
          <div className="section__head-row">
            <div>
              <span className="mono">narzędzia · prompty</span>
              <h2 className="h-section">
                {useItalic
                  ? <><span className="italic">Stwórz </span>koncept marki z AI</>
                  : "Prompt do brandingu AI"}
              </h2>
            </div>
            <span className="section__head-meta">branding ● koncept marki z AI</span>
          </div>
          <p className="prompt-teaser__desc">
            Oto prompt dzięki któremu stworzysz koncept marki. Wklej link do strony www, a AI przeanalizuje markę i zbuduje kompletną planszę brandingową.
            Poniżej kilka przykładów tego, co można uzyskać.
          </p>
        </div>

        {/* Preview strip */}
        <div className="prompt-teaser__strip">
          {PROMPT_PREVIEWS.map((img, i) => (
            <a
              className="prompt-teaser__card"
              href="prompt.html"
              key={i}
              aria-label={`Przykład dla marki ${img.label}`}
            >
              <div className="prompt-teaser__img-wrap">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <span className="prompt-teaser__card-label">{img.label}</span>
            </a>
          ))}
        </div>

        {/* CTA bar */}
        <div className="prompt-teaser__cta-row">
          <div className="prompt-teaser__pill-group">
            <span className="pill"><span className="dot"></span>gotowy do skopiowania</span>
            <span className="pill"><span className="dot"></span>format 1080×1350 px</span>
          </div>
          <a className="cta" href="prompt.html">
            Pobierz prompt
            <span className="arrow"><Icon.ArrowRight style={{ width: 14, height: 14 }} /></span>
          </a>
        </div>

      </div>
    </section>
  );
}

/* =====================================================
   Skora Teaser — zajawka podstrony z tutorialem AI skóra
   ===================================================== */
const SKORA_PREVIEWS = [
  { src: "img/skora/o2.png", alt: "Realistyczna skóra — portret editorial",  label: "editorial" },
  { src: "img/skora/o4.png", alt: "Realistyczna skóra — fujifilm candid",    label: "fujifilm"  },
  { src: "img/skora/o8.png", alt: "Realistyczna skóra — ultra realistic",    label: "ultra"     },
  { src: "img/skora/o1.png", alt: "Realistyczna skóra — no makeup look",     label: "no makeup" },
  { src: "img/skora/o6.png", alt: "Realistyczna skóra — 3/4 morning light",  label: "morning"   },
];

function SkoraTeaserSection({ tweaks }) {
  const useItalic = tweaks.italicAccent;

  return (
    <section className="section prompt-teaser" id="skora">
      <div className="wrap">

        {/* Header */}
        <div className="section__head">
          <div className="section__head-row">
            <div>
              <span className="mono">narzędzia · tutoriale</span>
              <h2 className="h-section">
                {useItalic
                  ? <><span className="italic">Realistyczna skóra</span> w AI</>
                  : "Realistyczna skóra w AI"}
              </h2>
            </div>
            <span className="section__head-meta">portrety AI ● koniec plastikowej skóry</span>
          </div>
          <p className="prompt-teaser__desc">
Twoje zdjęcia AI wciąż wyglądają zbyt idealnie? Oto jak zatrzymać efekt „plastikowej skóry" — 3 konkretne kroki i gotowe prompty do skopiowania.
          </p>
        </div>

        {/* Preview strip */}
        <div className="prompt-teaser__strip">
          {SKORA_PREVIEWS.map((img, i) => (
            <a
              className="prompt-teaser__card"
              href="skora.html"
              key={i}
              aria-label={`Tutorial: realistyczna skóra w AI — ${img.label}`}
            >
              <div className="prompt-teaser__img-wrap">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <span className="prompt-teaser__card-label">{img.label}</span>
            </a>
          ))}
        </div>

        {/* CTA bar */}
        <div className="prompt-teaser__cta-row">
          <div className="prompt-teaser__pill-group">
            <span className="pill"><span className="dot"></span>6 gotowych promptów</span>
            <span className="pill"><span className="dot"></span>midjourney · dall·e · sd</span>
          </div>
          <a className="cta" href="skora.html">
            Otwórz tutorial
            <span className="arrow"><Icon.ArrowRight style={{ width: 14, height: 14 }} /></span>
          </a>
        </div>

      </div>
    </section>
  );
}

/* =====================================================
   Analog Teaser — zajawka podstrony z tutorialem MJ
   ===================================================== */
const ANALOG_PREVIEWS = [
  { src: "img/analog/01.png", alt: "Analog portrait — mohair sweter",   label: "studio"    },
  { src: "img/analog/03.png", alt: "Analog street portrait",            label: "daylight"  },
  { src: "img/analog/05.png", alt: "Analog editorial — krawat",         label: "editorial" },
  { src: "img/analog/06.png", alt: "Analog library portrait",           label: "library"   },
  { src: "img/analog/07.png", alt: "Analog candid 2000s",               label: "2000s"     },
];

function AnalogTeaserSection({ tweaks }) {
  const useItalic = tweaks.italicAccent;

  return (
    <section className="section prompt-teaser" id="midjourney">
      <div className="wrap">

        {/* Header */}
        <div className="section__head">
          <div className="section__head-row">
            <div>
              <span className="mono">narzędzia · tutoriale</span>
              <h2 className="h-section">
                {useItalic
                  ? <><span className="italic">Klimat zdjęć analogowych</span> z Midjourney</>
                  : "Analog z Midjourney"}
              </h2>
            </div>
            <span className="section__head-meta">midjourney ● tutorial ● klimat lat 90.</span>
          </div>
          <p className="prompt-teaser__desc">
            Uzyskałam powtarzalność klimatu analogowych zdjęć w Midjourney. Pokażę Ci, jak to zrobiłam.
          </p>
        </div>

        {/* Preview strip */}
        <div className="prompt-teaser__strip">
          {ANALOG_PREVIEWS.map((img, i) => (
            <a
              className="prompt-teaser__card"
              href="analog.html"
              key={i}
              aria-label={`Tutorial: analog w Midjourney — ${img.label}`}
            >
              <div className="prompt-teaser__img-wrap">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <span className="prompt-teaser__card-label">{img.label}</span>
            </a>
          ))}
        </div>

        {/* CTA bar */}
        <div className="prompt-teaser__cta-row">
          <div className="prompt-teaser__pill-group">
            <span className="pill"><span className="dot"></span>tutorial krok po kroku</span>
            <span className="pill"><span className="dot"></span>midjourney</span>
          </div>
          <a className="cta" href="analog.html">
            Otwórz tutorial
            <span className="arrow"><Icon.ArrowRight style={{ width: 14, height: 14 }} /></span>
          </a>
        </div>

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
            <span className="mono">o mnie</span>
            <h2 className="h-section">
              Między grafiką {useItalic
                ? <span className="italic">a AI</span>
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
                <span>Jak połączyć Claude z Affinity, Adobe i Figmą.</span>
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
              <img src="img/hero-main.png" alt="Natalia przy pracy — Grafika + AI" />
            </div>
            <div className="caption">
              <span className="dot"></span>
              Figma x Claude? ● Tak!
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
    desc: "Tutoriale. Porady. Inspiracje.",
    cta: "Obserwuj",
    href: "https://instagram.com/natalie.kreatywnie",
    icon: <Icon.Instagram />,
  },
  // {
  //   platform: "LinkedIn",
  //   handle: "Natalia Przybylska",
  //   desc: "Bądźmy w kontakcie również tam.",
  //   cta: "Zobacz profil",
  //   href: "https://www.linkedin.com/in/nat-przybylska/",
  //   icon: <Icon.LinkedIn />,
  // },
  {
    platform: "E-mail",
    handle: "natalie.kreatywnie@gmail.com",
    desc: "Współpraca, projekt, pytania.",
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
              <span className="mono">kontakt</span>
              <h2 className="h-section">
                Tu mnie {useItalic ? <span className="italic">znajdziesz</span> : "znajdziesz"}.
              </h2>
            </div>
            <span className="section__head-meta">masz pytania? ● porozmawiajmy</span>
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
        <TutorialsIntro tweaks={tweaks} />
        <PromptTeaserSection tweaks={tweaks} />
        <SkoraTeaserSection tweaks={tweaks} />
        <AnalogTeaserSection tweaks={tweaks} />
        <AboutSection tweaks={tweaks} />
        <ContactSection tweaks={tweaks} />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Tweaks />);
