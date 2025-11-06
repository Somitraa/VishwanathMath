export type LangKey = "hi" | "en";

export const translations: Record<LangKey, Record<string, string>> = {
  hi: {
    // Header & Navigation
    title: "विश्वनाथ मठ",
    about: "हमारे बारे में",
    services: "सेवाएँ",
    events: "कार्यक्रम",
    contact: "संपर्क करें",

    // Hero Section
    hero_heading: "विश्वनाथ मठ में आपका स्वागत है",
    hero_sub: "आध्यात्मिकता और सेवा का संगम",

    // About Section
    about_heading: "हमारे बारे में",
    about_content:
      "विश्वनाथ मठ एक पवित्र स्थान है जहाँ श्रद्धालु आध्यात्मिक शांति, ज्ञान और सेवा का अनुभव करते हैं। हमारा उद्देश्य समाज में धर्म, करुणा और भक्ति के मूल्यों को बढ़ावा देना है।",

    // Services Section
    services_heading: "हमारी सेवाएँ",
    services_content:
      "हम गौशाला सेवा, वेद अध्ययन, धार्मिक अनुष्ठान और सामाजिक सहयोग जैसी कई सेवाएँ प्रदान करते हैं।",

    // Events Section
    events_heading: "आगामी कार्यक्रम",
    events_content:
      "हमारे मठ में नियमित रूप से धार्मिक, सांस्कृतिक और सामाजिक कार्यक्रम आयोजित किए जाते हैं। सभी भक्तों का स्वागत है।",

    // Contact Section
    contact_heading: "संपर्क करें",
    contact_sub:
      "कोई प्रश्न है या हमसे मिलना चाहते हैं? हमें आपसे सुनकर खुशी होगी। नीचे दिए गए किसी भी माध्यम से हमसे संपर्क करें।",
    location_label: "स्थान",
    phone_label: "फ़ोन",
    email_label: "ईमेल",
    send_message: "संदेश भेजें",
    sending: "भेजा जा रहा है...",
    success_message: "आपका संदेश सफलतापूर्वक भेज दिया गया है!",
  },

  en: {
    // Header & Navigation
    title: "Vishwanath Math",
    about: "About Us",
    services: "Services",
    events: "Events",
    contact: "Contact",

    // Hero Section
    hero_heading: "Welcome to Vishwanath Math",
    hero_sub: "A divine place of spirituality and service",

    // About Section
    about_heading: "About Us",
    about_content:
      "Vishwanath Math is a sacred place where devotees experience peace, devotion, and selfless service. Our mission is to spread the values of faith, compassion, and spirituality in society.",

    // Services Section
    services_heading: "Our Services",
    services_content:
      "We offer a variety of services including cow shelter care, Vedic studies, religious ceremonies, and community support.",

    // Events Section
    events_heading: "Upcoming Events",
    events_content:
      "We regularly organize spiritual, cultural, and social events at the Math. Everyone is welcome to participate.",

    // Contact Section
    contact_heading: "Contact Us",
    contact_sub:
      "Have questions or want to meet? We’d love to hear from you. Reach out via any method below.",
    location_label: "Location",
    phone_label: "Phone",
    email_label: "Email",
    send_message: "Send Message",
    sending: "Sending...",
    success_message: "Your message was sent successfully!",
  },
};
