"use client";

import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { useLang } from "@/context/LanguageProvider";

export default function Guruji() {
  const { lang } = useLang();

  return (
    <section id="guruji" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {lang === "hi"
              ? "शिवऋषि आचार्य मनीष द्विवेदी जी"
              : "ShivRishi Acharya Manish Dwivedi Ji"}
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {lang === "hi" ? (
              <>
                तंत्र और वेद परंपरा के प्रख्यात साधक —{" "}
                <span className="font-semibold text-primary">
                  शिवऋषि आचार्य मनीष द्विवेदी जी
                </span>
                , आध्यात्मिक साधना और शास्त्र ज्ञान के माध्यम से समाज में चेतना,
                समरसता और धर्म के प्रति श्रद्धा जागृत करने का कार्य कर रहे हैं।
                उनका उद्देश्य मानव जीवन को आत्मज्ञान और दिव्यता की अनुभूति की
                दिशा में ले जाना है।
              </>
            ) : (
              <>
                Renowned practitioner of Tantra and Vedic traditions —{" "}
                <span className="font-semibold text-primary">
                  ShivRishi Acharya Manish Dwivedi Ji
                </span>{" "}
                is dedicated to awakening consciousness, harmony, and devotion to
                Dharma through spiritual practice and sacred knowledge. His
                mission is to guide humanity toward self-realization and divine
                awareness.
              </>
            )}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Guruji Photo */}
          <div className="flex justify-center">
            <div className="rounded-2xl shadow-md hover:shadow-xl border-2 border-transparent hover:border-primary/20 transition p-4">
              <img
                src="/guruji.jpg"
                alt={
                  lang === "hi"
                    ? "शिवऋषि आचार्य मनीष द्विवेदी जी"
                    : "ShivRishi Acharya Manish Dwivedi Ji"
                }
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Description Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:border-primary/20 border-2 border-transparent transition">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {lang === "hi" ? (
                  <>
                    शिवऋषि आचार्य मनीष द्विवेदी जी ने बाल्यकाल से ही वेद, तंत्र और साधना
                    के गूढ़ मार्ग में दीक्षा प्राप्त की। वे जीवन को केवल भौतिक उपलब्धियों का
                    नहीं, बल्कि आध्यात्मिक उन्नति का साधन मानते हैं।
                  </>
                ) : (
                  <>
                    From an early age, Acharya Manish Dwivedi Ji received
                    initiation into the deep paths of Veda, Tantra, and spiritual
                    discipline. He views life not merely as a pursuit of material
                    success, but as a means of inner spiritual evolution.
                  </>
                )}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:border-primary/20 border-2 border-transparent transition">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {lang === "hi" ? (
                  <>
                    दशाश्वमेध घाट, वाराणसी से वे अपने उपदेशों और अनुष्ठानों द्वारा जन-जन तक
                    तांत्रिक साधना का सार पहुँचा रहे हैं। वे बताते हैं कि तंत्र केवल शक्ति की
                    साधना नहीं, बल्कि जीवन के हर क्षेत्र में संतुलन और जागृति का विज्ञान है।
                  </>
                ) : (
                  <>
                    From Dashashwamedh Ghat, Varanasi, he shares the essence of
                    Tantric practices through teachings and rituals. He explains
                    that Tantra is not merely worship of power, but a science of
                    balance and awakening in every aspect of life.
                  </>
                )}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:border-primary/20 border-2 border-transparent transition">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {lang === "hi" ? (
                  <>
                    आचार्य जी का उद्देश्य केवल आध्यात्मिक शिक्षा देना नहीं, बल्कि प्रत्येक
                    व्यक्ति के भीतर निहित दिव्यता को जागृत करना है। वे आधुनिक समाज को यह
                    सिखाते हैं कि विज्ञान और अध्यात्म विरोधी नहीं।
                  </>
                ) : (
                  <>
                    His goal is not just to impart spiritual knowledge, but to
                    awaken the divinity that lies within every individual. He
                    teaches modern society that science and spirituality are not
                    opposites, but complementary paths to truth.
                  </>
                )}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="https://www.instagram.com/tantrachary_jai_visvhnath_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-xl font-medium flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                {lang === "hi" ? "इंस्टाग्राम" : "Instagram"}
              </a>

              <a
                href="https://www.facebook.com/tantracarya.jaya.visvanatha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-xl font-medium flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                {lang === "hi" ? "फेसबुक" : "Facebook"}
              </a>

              <a
                href="https://wa.me/+918319423896"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-xl font-medium flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {lang === "hi" ? "व्हाट्सएप" : "WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
