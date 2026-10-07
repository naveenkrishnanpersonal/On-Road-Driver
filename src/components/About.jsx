import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./icons";
import "./About.css";

/* Company story: who we are, how our drivers are vetted, and where we are
   going. Services and benefits live in their own sections. */

/* ---------- Who We Are ---------- */

const INTRO = [
  "ORD – On Demand Drivers is a professional on-demand driver service operated by Naveen Service Private Limited, based in Kerala.",
  "We connect car owners, families, individuals, and businesses with professional, licensed, trained, and background-verified drivers whenever they need one.",
];

const IDEA_LEAD = "Our core idea is simple:";

const TAGLINE = "Your Car. Our Driver.";

/* ---------- Our Drivers ---------- */

const DRIVERS_LEAD =
  "Safety and trust are at the centre of ORD. Our drivers are selected and assessed with a focus on:";

const DRIVER_CHECKS = [
  "Background verification",
  "Driving licence verification",
  "Driver experience",
  "Training and assessment",
  "Safe driving practices",
  "Professional behaviour",
  "Customer service",
];

const DRIVERS_NOTE =
  "ORD’s drivers are presented as licensed, experienced, trained, uniformed, and professional drivers.";

/* ---------- Mission & Vision ---------- */

const MISSION = [
  "Our mission is to make safe, reliable, and professional driving services easily accessible to customers.",
  "We aim to make booking a driver simple and convenient while maintaining high standards of safety, professionalism, reliability, and customer service.",
  "A driver service should provide more than transportation. It should provide confidence, convenience, safety, and peace of mind.",
];

const VISION_LABEL = "Our vision";

const VISION =
  "To build a trusted professional driver network across Kerala, and to make reliable chauffeur services accessible whenever and wherever customers need them.";

/* ---------- Commitment ---------- */

const COMMITMENT_LINES = [
  "Professional Drivers.",
  "Reliable Service.",
  "Every Journey.",
];

const COMMITMENT =
  "ORD is committed to providing a safer, simpler, and more convenient way for individuals and businesses to access professional drivers.";

const BRAND = "ORD – On Demand Drivers";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <SectionHeading top="About" main="ORD – On Demand Drivers" />

        {/* Lead statement */}
        <div className="about__lead">
          {INTRO.map((para) => (
            <p key={para} className="about__lead-text">
              {para}
            </p>
          ))}

          <p className="about__idea">{IDEA_LEAD}</p>
          <p className="about__pull">
            <span className="about__pull-mark" aria-hidden="true">
              &ldquo;
            </span>
            <span className="about__pull-text">{TAGLINE}</span>
          </p>
        </div>

        {/* Our Drivers */}
        <div className="about__split">
          <div className="about__split-aside">
            <h3 className="about__sub">Our Drivers</h3>
          </div>

          <div className="about__split-body">
            <p className="about__para">{DRIVERS_LEAD}</p>

            <ul className="about__checks">
              {DRIVER_CHECKS.map((item) => (
                <li key={item} className="about__check">
                  <span className="about__check-icon" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="about__note">{DRIVERS_NOTE}</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="about__split">
          <div className="about__split-aside">
            <h3 className="about__sub">Our Mission</h3>
          </div>

          <div className="about__split-body">
            {MISSION.map((para) => (
              <p key={para} className="about__para">
                {para}
              </p>
            ))}

            <p className="about__vision-label">{VISION_LABEL}</p>
            <p className="about__vision">{VISION}</p>
          </div>
        </div>

        {/* Commitment closer */}
        <div className="about__closer">
          <p className="about__closer-label">Our Commitment</p>
          <ul className="about__commit">
            {COMMITMENT_LINES.map((line) => (
              <li key={line} className="about__commit-line">
                {line}
              </li>
            ))}
          </ul>
          <p className="about__closer-text">{COMMITMENT}</p>
          <p className="about__brand">{BRAND}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
