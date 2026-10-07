/* Contact details live here so the hero button, contact section and floating
   button can never drift apart. Update the values below in one place. */

export const SITE = {
  name: "On Road Driver",
  /* Placeholder contact details - replace before launch. */
  phoneDisplay: "+91 90000 12345",
  phoneHref: "tel:+919000012345",
  /* Digits only, with country code: no +, spaces or dashes. */
  whatsappNumber: "919000012345",
  email: "support@onroaddriver.com",
  address: "Kochi, Kerala",
};

/** Builds a wa.me deep link with an optional pre-filled message. */
export function whatsappLink(message = "Hi ORD, I'd like to book a driver.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
