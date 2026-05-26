
// import {useState} from 'react'
import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    slug: "yealink-t31g-t43u-psu",
    title: "Yealink T31G/T43U PSU",
    price: 14.99,
    image: "/Images/Accessories/item1.png",
    category: "Accessories",
    description:
      "Reliable power supply unit designed for Yealink T31G and T43U business IP phones.",
  },

  {
    id: 2,
    slug: "polycom-psu",
    title: "Polycom PSU",
    price: 19.99,
    image: "/Images/Accessories/item2.png",
    category: "Accessories",
    description:
      "High-quality Polycom compatible PSU for stable and efficient device power delivery.",
  },

  {
    id: 3,
    slug: "jabra-biz-2300-mono",
    title: "Jabra BIZ 2300 – Mono Noise Cancellation/Phone",
    price: 79.99,
    image: "/Images/Accessories/item3.png",
    category: "Headsets",
    description:
      "Professional mono headset with noise cancellation for clear business communication.",
  },

  {
    id: 4,
    slug: "jabra-biz-2300-duo",
    title: "Jabra BIZ 2300 – Duo Noise Cancellation/Phone",
    price: 89.99,
    image: "/Images/Accessories/item4.png",
    category: "Headsets",
    description:
      "Dual-ear professional headset built for high-quality office and call center communication.",
  },

  {
    id: 5,
    slug: "yealink-cp700-speaker",
    title: "Yealink – CP700 Speaker",
    price: 109.99,
    image: "/Images/Accessories/item5.png",
    category: "Speakers",
    description:
      "Portable conference speakerphone optimized for meetings and remote collaboration.",
  },

  {
    id: 6,
    slug: "jabra-speak-510",
    title: "Jabra Speak 510",
    price: 114.99,
    image: "/Images/Accessories/item6.png",
    category: "Speakers",
    description:
      "Compact USB/Bluetooth speakerphone delivering crystal-clear audio for conferencing.",
  },

  {
    id: 7,
    slug: "jabra-pro-920-polycom",
    title: "Jabra PRO 920 – Mono for Polycom",
    price: 129.99,
    image: "/Images/Accessories/item7.png",
    category: "Wireless Headsets",
    description:
      "Wireless professional headset solution designed for Polycom desk phone environments.",
  },

  {
    id: 8,
    slug: "jabra-pro-920-yealink",
    title: "Jabra PRO 920 – Mono for Yealink",
    price: 129.99,
    image: "/Images/Accessories/item8.png",
    category: "Wireless Headsets",
    description:
      "Reliable wireless headset optimized for Yealink business phone systems.",
  },

  {
    id: 9,
    slug: "cisco-ip-phone-adapter",
    title: "Cisco IP Phone Adapter",
    price: 59.99,
    image: "/Images/Accessories/item9.png",
    category: "Accessories",
    description:
      "Business-grade adapter compatible with Cisco IP phone deployment environments.",
  },

  {
    id: 10,
    slug: "business-conference-speaker",
    title: "Business Conference Speaker",
    price: 149.99,
    image: "/Images/Accessories/item10.png",
    category: "Conference Devices",
    description:
      "Premium business conferencing speaker designed for professional meeting rooms.",
  },
  {
    id: 11,
    slug: "wireless-office-headset",
    title: "Wireless Office Headset",
    price: 179.99,
    image: "/Images/Accessories/item11.png",
    category: "Wireless Headsets",
    description:
      "Advanced wireless office headset delivering all-day comfort and superior audio clarity.",
  },
  {
    id: 12,
    slug: "yealink-t31g",
    title: "Yealink T31G",
    price: "£17.50 – £59.99",
    image: "/Images/PhoneEquipment/item1.png",
    category: "Phone & Equipment",
    description:
      "High-quality Polycom compatible PSU for stable and efficient device power delivery.",
  },

  {
    id: 13,
    slug: "yealink-w73p",
    title: "Yealink W73P",
    price: "£17.50 – £69.99",
    image: "/Images/PhoneEquipment/item2.png",
    category: "Phone & Equipment",
    description:
      "Professional DECT cordless phone system with superior audio quality and extended range for business communication.",
  },

  {
    id: 14,
    slug: "cisco-192-ata",
    title: "Cisco 192 ATA",
    price: "£17.50 – £79.99",
    image: "/Images/PhoneEquipment/item3.png",
    category: "Headsets",
    description:
      "Professional mono headset with noise cancellation for clear business communication.",
  },

  {
    id: 15,
    slug: "yealink-w70b",
    title: "Yealink W70B",
    price: "£18.99 – £89.99",
    image: "/Images/PhoneEquipment/item4.png",
    category: "Phone & Equipment",
    description:
      "Dual-ear professional headset built for high-quality office and call center communication.",
  },

  {
    id: 16,
    slug: "cisco-191-ata",
    title: "Cisco 191 ATA",
    price: "£109.99",
    image: "/Images/PhoneEquipment/item3.png",
    category: "Phone & Equipment",
    description:
      "High-quality Polycom compatible PSU for stable and efficient device power delivery.",
  },

  {
    id: 17,
    slug: "yealink-73h",
    title: "Yealink 73H",
    price: "£114.99",
    image: "/Images/PhoneEquipment/item5.png",
    category: "Phone & Equipment",
    description:
      "Professional DECT cordless phone system with superior audio quality and extended range for business communication.",
  },
];

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  /* AWAIT PARAMS */
  const { slug } =  await params;

  /* FIND PRODUCT */
  const product = products.find(
    (item) => item.slug === slug
  );
if (!product) {
  notFound();
}
  return (
    <>
    <section className="bg-[#F7F5FA] dark:bg-[#0F172A] py-14 lg:py-20 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TOP SECTION */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

      {/* PRODUCT IMAGE */}
      <div>

        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border border-[#E7E2F0]
            dark:border-white/10
            bg-white dark:bg-[#111827]
            p-6 sm:p-8
            shadow-sm
          "
        >

          {/* ZOOM ICON */}
          <button
            className="
              absolute top-5 right-5
              z-10
              w-10 h-10
              rounded-full
              bg-white dark:bg-[#1F2937]
              border border-[#E7E2F0]
              dark:border-white/10
              flex items-center justify-center
              shadow-md
              transition-all duration-300
              hover:scale-105
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="
                w-5 h-5
                text-[#1A1831]
                dark:text-white
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.65 7.65 0 1 0 5.8 5.8a7.65 7.65 0 0 0 10.85 10.85Z"
              />
            </svg>
          </button>

          {/* IMAGE */}
          <div className="relative aspect-square">

            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              className="
                object-contain
                transition-transform duration-500
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>

      {/* PRODUCT CONTENT */}
      <div>

        {/* BREADCRUMB */}
        <div
          className="
            flex flex-wrap items-center gap-2
            text-sm
            text-gray-500 dark:text-slate-400
          "
        >
          <span>Home</span>

          <span>/</span>

          <span>{product.category}</span>

          <span>/</span>

          <span className="text-[#1A1831] dark:text-white">
            {product.title}
          </span>
        </div>

        {/* CATEGORY */}
        <div
          className="
            mt-5
            text-sm
            font-semibold
            uppercase
            tracking-[0.15em]
            text-pink-600 dark:text-pink-400
          "
        >
          {product.category}
        </div>

        {/* TITLE */}
        <h1
          className="
            mt-4
            text-3xl sm:text-4xl lg:text-5xl
            font-extrabold
            leading-tight
            text-[#1A1831]
            dark:text-white
          "
        >
          {product.title}
        </h1>

        {/* PRICE */}
        <div
          className="
            mt-6
            text-4xl sm:text-5xl
            font-extrabold
            text-[#1A1831]
            dark:text-white
          "
        >
          £{product.price}
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            mt-6
            text-base sm:text-lg
            leading-8
            text-gray-600 dark:text-slate-300
            max-w-2xl
          "
        >
          {product.description}
        </p>

        {/* STOCK */}
        <div className="mt-6 flex items-center gap-3">

          <span className="w-3 h-3 rounded-full bg-green-500" />

          <span
            className="
              text-sm font-medium
              text-green-600 dark:text-green-400
            "
          >
            In Stock
          </span>
        </div>

        {/* QUANTITY + CART */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          {/* QUANTITY */}
          <div
            className="
              flex items-center
              overflow-hidden
              rounded-full
              border border-[#E7E2F0]
              dark:border-white/10
              bg-white dark:bg-[#111827]
              h-14
            "
          >

          </div>

          {/* ADD TO CART */}
          <button
            className="
              h-14 px-10
              rounded-full
              bg-[#BC2273]
              text-white
              font-semibold
              shadow-lg shadow-pink-500/20
              transition-all duration-300
              hover:scale-[1.02]
            "
          >
            Add To Cart
          </button>
        </div>

        {/* PAYMENT BUTTONS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* AMAZON PAY */}
          <button
            className="
              h-12
              rounded-lg
              bg-[#FFD814]
              text-black
              font-bold
              transition-all duration-300
              hover:brightness-95
            "
          >
            amazon pay
          </button>

          {/* PAY WITH LINK */}
          <button
            className="
              h-12
              rounded-lg
              bg-[#00C853]
              text-white
              font-bold
              transition-all duration-300
              hover:brightness-95
            "
          >
            Pay with link
          </button>
        </div>

        {/* META */}
        <div
          className="
            mt-8
            pt-8
            border-t border-[#E7E2F0]
            dark:border-white/10
          "
        >

          <div
            className="
              text-sm
              text-gray-500 dark:text-slate-400
            "
          >
            Category:{" "}

            <span
              className="
                text-[#1A1831]
                dark:text-white
                font-medium
              "
            >
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* REVIEWS SECTION */}
    <div
      className="
        mt-20
        border-t border-[#E7E2F0]
        dark:border-white/10
        pt-14
      "
    >

      {/* TITLE */}
      <h2
        className="
          text-2xl sm:text-3xl
          font-extrabold
          text-[#1A1831]
          dark:text-white
        "
      >
        Reviews (0)
      </h2>

      {/* EMPTY TEXT */}
      <p
        className="
          mt-4
          text-gray-600 dark:text-slate-300
        "
      >
        There are no reviews yet.
      </p>

      {/* REVIEW FORM */}
      <div
        className="
          mt-10
          rounded-[28px]
          border border-[#E7E2F0]
          dark:border-white/10
          bg-white dark:bg-[#111827]
          p-6 sm:p-8 lg:p-10
        "
      >

        {/* FORM TITLE */}
        <h3
          className="
            text-2xl
            font-bold
            text-[#1A1831]
            dark:text-white
          "
        >
          Be the first to review "{product.title}"
        </h3>

        {/* SUBTEXT */}
        <p
          className="
            mt-3
            text-sm
            leading-7
            text-gray-600 dark:text-slate-300
          "
        >
          Your email address will not be published. Required fields
          are marked *
        </p>

        {/* FORM */}
        <form className="mt-8 space-y-6">

          {/* RATING */}
          <div>

            <label
              className="
                block mb-3
                font-semibold
                text-[#1A1831]
                dark:text-white
              "
            >
              Your Rating *
            </label>

            <div className="flex items-center gap-2">

              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="
                    text-2xl
                    text-gray-300
                    hover:text-yellow-400
                    transition-colors duration-300
                  "
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* REVIEW */}
          <div>

            <label
              className="
                block mb-3
                font-semibold
                text-[#1A1831]
                dark:text-white
              "
            >
              Your Review *
            </label>

            <textarea
              rows={6}
              className="
                w-full
                rounded-2xl
                border border-[#E7E2F0]
                dark:border-white/10
                bg-white dark:bg-[#0F172A]
                p-5
                outline-none
                resize-none
                text-[#1A1831]
                dark:text-white
              "
            />
          </div>

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NAME */}
            <div>

              <label
                className="
                  block mb-3
                  font-semibold
                  text-[#1A1831]
                  dark:text-white
                "
              >
                Name *
              </label>

              <input
                type="text"
                className="
                  w-full h-14
                  rounded-2xl
                  border border-[#E7E2F0]
                  dark:border-white/10
                  bg-white dark:bg-[#0F172A]
                  px-5
                  outline-none
                  text-[#1A1831]
                  dark:text-white
                "
              />
            </div>

            {/* EMAIL */}
            <div>

              <label
                className="
                  block mb-3
                  font-semibold
                  text-[#1A1831]
                  dark:text-white
                "
              >
                Email *
              </label>

              <input
                type="email"
                className="
                  w-full h-14
                  rounded-2xl
                  border border-[#E7E2F0]
                  dark:border-white/10
                  bg-white dark:bg-[#0F172A]
                  px-5
                  outline-none
                  text-[#1A1831]
                  dark:text-white
                "
              />
            </div>
          </div>

          {/* CHECKBOX */}
          <label className="flex items-start gap-3 cursor-pointer">

            <input
              type="checkbox"
              className="mt-1 accent-pink-600"
            />

            <span
              className="
                text-sm
                leading-7
                text-gray-600 dark:text-slate-300
              "
            >
              Save my name, email and website in this browser for the
              next time I comment.
            </span>
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              h-14 px-10
              rounded-full
              bg-[#BC2273]
              text-white
              font-semibold
              shadow-lg shadow-pink-500/20
              transition-all duration-300
              hover:scale-[1.02]
            "
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
