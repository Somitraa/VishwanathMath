"use client";

import { useLang } from "@/context/LanguageProvider";

export default function Gaushala() {
  const { lang } = useLang();

  return (
    <section
      id="gaushala"
      className="py-20 md:py-32 bg-white border-t border-border/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {lang === "hi" ? "विश्वनाथ मठ गौशाला" : "Vishwanath Math Gaushala"}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {lang === "hi" ? (
              <>
                विश्वनाथ मठ की गौशाला केवल एक सेवा स्थल नहीं, बल्कि{" "}
                <span className="font-semibold text-primary">
                  भारतीय संस्कृति, करुणा और धर्म
                </span>{" "}
                का जीवंत प्रतीक है। यहाँ गौ सेवा को परम कर्तव्य और साधना का एक महत्वपूर्ण
                अंग माना जाता है।
              </>
            ) : (
              <>
                The Gaushala at Vishwanath Math is not merely a place of service, but a living
                embodiment of{" "}
                <span className="font-semibold text-primary">
                  Indian culture, compassion, and faith
                </span>
                . Here, cow service is regarded as a sacred duty and an essential form of
                spiritual practice.
              </>
            )}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-primary/20">
            <img
              src="/c17.jpg"
              alt={lang === "hi" ? "विश्वनाथ मठ गौशाला" : "Vishwanath Math Gaushala"}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Description */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            {lang === "hi" ? (
              <>
                <p>
                  इस गौशाला की एक अद्भुत विशेषता यह होगी कि यहाँ{" "}
                  <span className="font-semibold text-primary">
                    भारत के हर प्रांत की गौवंश
                  </span>{" "}
                  की उपस्थिति रहेगी। उत्तर से दक्षिण, पूर्व से पश्चिम — देश की प्रत्येक गौ
                  जाति का प्रतिनिधित्व इस पवित्र स्थल पर होगा।
                </p>
                <p>
                  इसका उद्देश्य केवल संरक्षण नहीं, बल्कि{" "}
                  <span className="font-semibold text-primary">
                    गौ माता की विविधता, सेवा और वैज्ञानिक महत्व
                  </span>{" "}
                  के प्रति जन-जन में जागरूकता फैलाना है।
                </p>
                <p>
                  गौशाला में{" "}
                  <span className="font-semibold text-primary">
                    नियमित सेवा, चिकित्सा, और गो-सेवक प्रशिक्षण कार्यक्रम
                  </span>{" "}
                  आयोजित किए जाएंगे, जिससे युवा पीढ़ी गौ संरक्षण के महत्व को समझ सके।
                </p>
                <p>
                  विश्वनाथ मठ की यह गौशाला भारतवर्ष के{" "}
                  <span className="font-semibold text-primary">
                    गौरव, श्रद्धा और करुणा
                  </span>{" "}
                  का एक जीवंत केंद्र बनेगी।
                </p>
              </>
            ) : (
              <>
                <p>
                  One remarkable feature of this Gaushala is that it will host{" "}
                  <span className="font-semibold text-primary">
                    cow breeds from every region of India
                  </span>
                  . From north to south, east to west — every Indian breed will be represented at
                  this sacred center.
                </p>
                <p>
                  Its purpose is not only protection but also to spread awareness about the{" "}
                  <span className="font-semibold text-primary">
                    diversity, service, and scientific importance
                  </span>{" "}
                  of the holy cow.
                </p>
                <p>
                  The Gaushala will conduct{" "}
                  <span className="font-semibold text-primary">
                    regular service activities, medical care, and cow caretaker training programs
                  </span>
                  , helping the younger generation understand the significance of cow protection.
                </p>
                <p>
                  This Gaushala at Vishwanath Math will stand as a living symbol of{" "}
                  <span className="font-semibold text-primary">
                    pride, devotion, and compassion
                  </span>{" "}
                  in Indian culture.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Closing Highlight */}
        <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 shadow-sm">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {lang === "hi"
              ? "विश्वनाथ मठ की गौशाला केवल पशु सेवा नहीं, बल्कि ईश्वर सेवा का जीवंत उदाहरण है।"
              : "The Vishwanath Math Gaushala is not merely animal care, but a living example of divine service."}
          </p>
        </div>
      </div>
    </section>
  );
}
