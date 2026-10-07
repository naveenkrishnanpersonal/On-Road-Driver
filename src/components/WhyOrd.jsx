import SectionHeading from "./SectionHeading";
import { CheckIcon, ClockIcon, RupeeIcon, SteeringWheelIcon } from "./icons";
import "./WhyOrd.css";

const WHY_ICONS = [SteeringWheelIcon, ClockIcon, RupeeIcon, CheckIcon];

const REASONS = [
  { title: "Professional and", title2: "Experienced Drivers" },
  { title: "24/7 Customer", title2: "Support" },
  { title: "Affordable", title2: "Rates" },
  { title: "Convenient", title2: "Booking" },
];

function WhyOrd() {
  return (
    <section id="why-ORD" className="why">
      <div className="why__inner">
        <SectionHeading
          top="Why"
          main="Choose ORD ?"
          color="#e6b968"
          ruleColor="#e6b968"
        />

        <ul className="why__grid">
          {REASONS.map((reason, index) => {
            const Icon = WHY_ICONS[index];
            return (
              <li key={reason.title} className="why__item">
                <span className="why__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="why__label">
                  {reason.title}
                  <br />
                  {reason.title2}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default WhyOrd;
