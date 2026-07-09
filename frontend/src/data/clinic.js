// Central clinic info + shareable constants
export const CLINIC = {
  name: "Mita Physio Cure",
  owner: "Sk Zishan Physio",
  ownerTitle: "DPT, Certified Physiotherapist",
  phone: "+917477707139",
  phoneDisplay: "+91 74777 07139",
  whatsapp: "917477707139",
  email: "zishansk386@gmail.com",
  address: "Birampur, Bagnan, Howrah, West Bengal 711303, India",
  addressShort: "Birampur, Bagnan, Howrah",
  mapEmbed:
    "https://www.google.com/maps?q=Bagnan,+Howrah,+West+Bengal+711303&output=embed",
  mapLink: "https://maps.app.goo.gl/h5ikkFEXd3YodQp76",
  rating: 4.5,
  reviews: 128,
  hours: [
    { day: "Monday – Saturday", slots: ["8:00 AM – 12:00 PM", "4:00 PM – 8:00 PM"] },
    { day: "Sunday", slots: ["8:00 AM – 1:00 PM"] },
  ],
  siteUrl: "https://mitaphysiocure.in",
  logo: "https://customer-assets.emergentagent.com/job_0823103f-dc70-4711-a65b-8d81f30b1770/artifacts/58dpy871_Picsart_26-07-06_21-13-37-686.webp",
  areas: [
    "Bagnan", "Birampur", "Amta", "Uluberia", "Kolaghat", "Mecheda",
    "Panchla", "Domjur", "Shyampur", "Deulti", "Howrah",
  ],
};

export const waLink = (text) =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${CLINIC.phone}`;
