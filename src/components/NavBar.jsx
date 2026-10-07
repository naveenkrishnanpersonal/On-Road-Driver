import { useEffect, useState } from "react";
import { asset } from "../asset";
import "./NavBar.css";

const ANNOUNCEMENT = {
  badge: "NEW",
  text: "Now live in 12 cities — flexible hours, daily payouts for drivers.",
  linkText: "Join now",
  linkHref: "#contact",
};

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why ORD", href: "#why-ORD" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* Distance from the top of the viewport at which a section counts as current.
   Roughly the sticky header height plus a little breathing room. */
const ACTIVE_OFFSET = 140;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(NAV_LINKS[0].label);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const line = window.scrollY + ACTIVE_OFFSET;
      let current = NAV_LINKS[0].label;
      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= line) current = link.label;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (label) => {
    setActive(label);
    closeMenu();
  };

  return (
    <header className={`navbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="navbar__announce">
        <p className="navbar__announce-text">
          <span className="navbar__announce-badge">{ANNOUNCEMENT.badge}</span>
          <span>{ANNOUNCEMENT.text}</span>
          <a className="navbar__announce-link" href={ANNOUNCEMENT.linkHref}>
            {ANNOUNCEMENT.linkText}
            <span aria-hidden="true"> →</span>
          </a>
        </p>
      </div>

      <nav className="navbar__inner" aria-label="Main navigation">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          <img
            className="navbar__brand-logo"
            src={asset("ORDlogo.png")}
            alt="On Road Driver"
            width="102"
            height="70"
          />
        </a>

        <ul className={`navbar__links${menuOpen ? " is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={active === link.label ? "is-active" : ""}
                onClick={() => handleLinkClick(link.label)}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="navbar__mobile-actions">
            <a className="navbar__login" href="#contact" onClick={closeMenu}>
              Log In
            </a>
            <a className="navbar__cta" href="#contact" onClick={closeMenu}>
              Get Started
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a className="navbar__login" href="#contact">
            Log In
          </a>
          <a className="navbar__cta" href="#contact">
            Get Started
          </a>
        </div>

        <button
          type="button"
          className={`navbar__toggle${menuOpen ? " is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
