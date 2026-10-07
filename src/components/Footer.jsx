import { asset } from "../asset";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "On-Demand Drivers", href: "#services" },
      { label: "Corporate Solutions", href: "#services" },
      { label: "Hospital Assistance", href: "#services" },
      { label: "Car Pickup & Drop", href: "#services" },
      { label: "Designated Driver", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ORD", href: "#about" },
      { label: "Why Choose Us", href: "#why-ORD" },
      { label: "Careers", href: "#contact" },
      { label: "Press", href: "#contact" },
      { label: "Partner With Us", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "#faq" },
      { label: "Book a Driver", href: "#contact" },
      { label: "Driver Login", href: "#contact" },
      { label: "Cancellation Policy", href: "#faq" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo-link" href="#home">
              <img
                className="footer__logo"
                src={asset("ORDlogo.png")}
                alt="On Road Driver"
                width="87"
                height="60"
              />
            </a>
            <p className="footer__tagline">
              Your Journey. Our Driver. Reliable drivers on demand, whenever you
              need them.
            </p>
            <a className="footer__cta" href="#contact">
              Book a Driver
            </a>
          </div>

          {COLUMNS.map((column) => (
            <nav
              key={column.title}
              className="footer__col"
              aria-label={column.title}
            >
              <h2 className="footer__col-title">{column.title}</h2>
              <ul className="footer__links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {CURRENT_YEAR} On Road Driver. All rights reserved.
          </p>
          <ul className="footer__legal">
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
