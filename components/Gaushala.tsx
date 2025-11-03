export default function Gaushala() {
  return (
    <section id="gaushala" className="py-20 md:py-32 bg-gradient-to-br from-secondary/20 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            विश्वनाथ मठ गौशाला
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            विश्वनाथ मठ की गौशाला केवल एक सेवा स्थल नहीं, बल्कि 
            <span className="font-semibold text-primary"> भारतीय संस्कृति, करुणा और धर्म</span> का जीवंत प्रतीक है।  
            यहाँ गौ सेवा को परम कर्तव्य और साधना का एक महत्वपूर्ण अंग माना जाता है।
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-primary/20">
            <img
              src="/c17.jpg"
              alt="विश्वनाथ मठ गौशाला"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              इस गौशाला की एक अद्भुत विशेषता यह होगी कि यहाँ <span className="font-semibold text-primary"> भारत के हर प्रांत की गौवंश </span> की उपस्थिति रहेगी।
              उत्तर से दक्षिण, पूर्व से पश्चिम — देश की प्रत्येक गौ जाति का प्रतिनिधित्व इस पवित्र स्थल पर होगा।
            </p>
            <p>
              इसका उद्देश्य केवल संरक्षण नहीं, बल्कि <span className="font-semibold text-primary"> गौ माता की विविधता, सेवा और वैज्ञानिक महत्व </span> के प्रति जन-जन में
              जागरूकता फैलाना है। 
            </p>
            <p>
              गौशाला में<span className="font-semibold text-primary"> नियमित सेवा, चिकित्सा, और गो-सेवक प्रशिक्षण कार्यक्रम </span>  आयोजित किए जाएंगे, 
              जिससे युवा पीढ़ी गौ संरक्षण के महत्व को समझ सके।
            </p>
            <p>
              विश्वनाथ मठ की यह गौशाला भारतवर्ष के <span className="font-semibold text-primary"> गौरव, श्रद्धा और करुणा </span> का एक जीवंत केंद्र बनेगी।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
