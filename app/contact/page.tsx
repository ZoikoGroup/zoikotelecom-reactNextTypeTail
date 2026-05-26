import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import ContactForm from "./ContactForm";
import OfficeCard from "./OfficeCard";
import FAQSection from "./FAQSection";

const offices = [
  {
    name: "London",
    isHeadOffice: true,
    image: "/Images/Contact/london-office.png",
    address: "35 Berkeley Square, Mayfair, London W1J 5BF",
    phone: "+44 (0) 207 164 6399",
    email: "info@zoikotelecom.com",
    mapLink: "https://www.google.com/maps/search/?api=1&query=35+Berkeley+Square+Mayfair+London+W1J+5BF",
  },
  {
    name: "Glasgow",
    isHeadOffice: false,
    image: "/Images/Contact/glasgow.png",
    address: "2nd Floor, 48 West George Street, Glasgow G2 1BP",
    phone: "+44 141 530 1560",
    email: "glasgow@zoikotelecom.com",
    mapLink: "https://www.google.com/maps/search/?api=1&query=48+West+George+Street+Glasgow+G2+1BP",
  },
  {
    name: "Cardiff",
    isHeadOffice: false,
    image: "/Images/Contact/cardiff.png",
    address: "113-116 Blue Street, Cardiff CF10 5EQ",
    phone: "+44 292 000 1374",
    email: "cardiff@zoikotelecom.com",
    mapLink: "https://www.google.com/maps/search/?api=1&query=113-116+Blue+Street+Cardiff+CF10+5EQ",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive telecom solutions including EE Mobile plans, BT Broadband, IoT connectivity, VoIP services and enterprise business solutions.",
  },
  {
    question: "How quickly can you set up service?",
    answer: "Most services can be activated within 24-48 hours. Complex enterprise solutions may take 3-5 business days depending on requirements.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes! Our customer support team is available 24/7 via phone, email and live chat to assist with any issues or questions.",
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment options including monthly billing, annual contracts, and custom payment plans for enterprise customers.",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans">
      
      <section className="relative min-h-[calc(100vh-95px)] w-full flex items-center justify-center py-12 sm:py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Images/Contact/hero-contact.png')",
          }}
        />
        
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[#C12172]/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#7B2983]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1320px] w-full px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Get in Touch
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-xl">
                We're here to help with any questions about our telecom solutions. Reach out to our team and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-[#C12172]/20 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#931e70] text-white shadow-md group-hover:scale-105 transition-transform">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#931e70]">
                    CALL US
                  </span>
                  <a 
                    href="tel:+442071646399" 
                    className="block text-base sm:text-lg font-bold text-neutral-800 hover:text-[#931e70] transition-colors"
                  >
                    +44 207 164 6399
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-[#C12172]/20 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#931e70] text-white shadow-md group-hover:scale-105 transition-transform">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#931e70]">
                    EMAIL US
                  </span>
                  <a 
                    href="mailto:info@zoikotelecom.com" 
                    className="block text-base sm:text-lg font-bold text-neutral-800 hover:text-[#931e70] transition-colors break-all"
                  >
                    info@zoikotelecom.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-[#C12172]/20 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#931e70] text-white shadow-md group-hover:scale-105 transition-transform">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#931e70]">
                    WORKING HOURS
                  </span>
                  <span className="block text-base sm:text-lg font-bold text-neutral-800">
                    Mon - Fri, 9:00 - 18:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <ContactForm />
          </div>

        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
        <div className="mx-auto max-w-[1320px] px-5">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block bg-[#C12172]/10 dark:bg-[#C12172]/20 text-[#C12172] dark:text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Our Offices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-3">
              Visit Us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base mt-2">
              Find our offices across the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <OfficeCard key={office.name} office={office} />
            ))}
          </div>

        </div>
      </section>

      <FAQSection faqs={faqs} />

    </div>
  );
}
