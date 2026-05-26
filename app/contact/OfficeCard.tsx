import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

type Office = {
  name: string;
  isHeadOffice: boolean;
  image: string;
  address: string;
  phone: string;
  email: string;
  mapLink: string;
};

export default function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="relative bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 overflow-hidden flex items-center justify-center">
        {/* We can use standard HTML img inside Server Component */}
        <img
          src={office.image}
          alt={`${office.name} Office`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          // In standard Server Components, inline functions like onError won't run, 
          // but we can preserve it if needed or use simple layout.
          // Note: Next.js handles server elements cleanly. We can use a standard fallback or let the image render.
        />
        
        {office.isHeadOffice && (
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-3.5 z-10">
            <span className="bg-white dark:bg-neutral-900 text-[#C12172] dark:text-pink-400 border border-[#C12172]/20 dark:border-pink-500/30 text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Head Office
            </span>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8 pt-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
            {office.name}
          </h3>
          
          <ul className="space-y-3.5 text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-1" />
              <span className="leading-snug">{office.address}</span>
            </li>
            
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-1" />
              <a href={`tel:${office.phone.replace(/[\s()]/g, "")}`} className="hover:text-[#C12172] transition-colors leading-snug">
                {office.phone}
              </a>
            </li>
            
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-1" />
              <a href={`mailto:${office.email}`} className="hover:text-[#C12172] transition-colors leading-snug break-all">
                {office.email}
              </a>
            </li>
          </ul>
        </div>

        <a
          href={office.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C12172] dark:text-pink-400 hover:text-[#931e70] dark:hover:text-pink-300 transition-colors group/link cursor-pointer"
        >
          Get Directions
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
