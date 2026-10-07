import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "../site";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-btn"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="whatsapp-btn__badge">
        <WhatsAppIcon className="whatsapp-btn__glyph" />
      </span>
      <span className="whatsapp-btn__label">WhatsApp Us</span>
    </a>
  );
}

export default WhatsAppButton;