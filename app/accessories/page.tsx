"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ITEMS_PER_PAGE = 8;

// const products = [
//   {
//     id: 1,
//     slug: "yealink-t31g-t43u-psu",
//     title: "Yealink T31G/T43U PSU",
//     price: 14.99,
//     image: "/Images/Accessories/item1.png",
//     category: "Accessories",
//     description:
//       "Reliable power supply unit designed for Yealink T31G and T43U business IP phones.",
//   },

//   {
//     id: 2,
//     slug: "polycom-psu",
//     title: "Polycom PSU",
//     price: 19.99,
//     image: "/Images/Accessories/item2.png",
//     category: "Accessories",
//     description:
//       "High-quality Polycom compatible PSU for stable and efficient device power delivery.",
//   },

//   {
//     id: 3,
//     slug: "jabra-biz-2300-mono",
//     title: "Jabra BIZ 2300 – Mono Noise Cancellation/Phone",
//     price: 79.99,
//     image: "/Images/Accessories/item3.png",
//     category: "Headsets",
//     description:
//       "Professional mono headset with noise cancellation for clear business communication.",
//   },

//   {
//     id: 4,
//     slug: "jabra-biz-2300-duo",
//     title: "Jabra BIZ 2300 – Duo Noise Cancellation/Phone",
//     price: 89.99,
//     image: "/Images/Accessories/item4.png",
//     category: "Headsets",
//     description:
//       "Dual-ear professional headset built for high-quality office and call center communication.",
//   },

//   {
//     id: 5,
//     slug: "yealink-cp700-speaker",
//     title: "Yealink – CP700 Speaker",
//     price: 109.99,
//     image: "/Images/Accessories/item5.png",
//     category: "Speakers",
//     description:
//       "Portable conference speakerphone optimized for meetings and remote collaboration.",
//   },

//   {
//     id: 6,
//     slug: "jabra-speak-510",
//     title: "Jabra Speak 510",
//     price: 114.99,
//     image: "/Images/Accessories/item6.png",
//     category: "Speakers",
//     description:
//       "Compact USB/Bluetooth speakerphone delivering crystal-clear audio for conferencing.",
//   },

//   {
//     id: 7,
//     slug: "jabra-pro-920-polycom",
//     title: "Jabra PRO 920 – Mono for Polycom",
//     price: 129.99,
//     image: "/Images/Accessories/item7.png",
//     category: "Wireless Headsets",
//     description:
//       "Wireless professional headset solution designed for Polycom desk phone environments.",
//   },

//   {
//     id: 8,
//     slug: "jabra-pro-920-yealink",
//     title: "Jabra PRO 920 – Mono for Yealink",
//     price: 129.99,
//     image: "/Images/Accessories/item8.png",
//     category: "Wireless Headsets",
//     description:
//       "Reliable wireless headset optimized for Yealink business phone systems.",
//   },

//   {
//     id: 9,
//     slug: "cisco-ip-phone-adapter",
//     title: "Cisco IP Phone Adapter",
//     price: 59.99,
//     image: "/Images/Accessories/item9.png",
//     category: "Accessories",
//     description:
//       "Business-grade adapter compatible with Cisco IP phone deployment environments.",
//   },

//   {
//     id: 10,
//     slug: "business-conference-speaker",
//     title: "Business Conference Speaker",
//     price: 149.99,
//     image: "/Images/Accessories/item10.png",
//     category: "Conference Devices",
//     description:
//       "Premium business conferencing speaker designed for professional meeting rooms.",
//   },

//   {
//     id: 11,
//     slug: "wireless-office-headset",
//     title: "Wireless Office Headset",
//     price: 179.99,
//     image: "/Images/Accessories/item11.png",
//     category: "Wireless Headsets",
//     description:
//       "Advanced wireless office headset delivering all-day comfort and superior audio clarity.",
//   },
// ];

type Product = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  price: string | number;
};
export default function page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/products/?category=accessories`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch products (${response.status})`
          );
        }

        const data = await response.json();
        console.log("API Results:", data.results.length);
        console.log(data.results);

        const transformedProducts = (data.results || []).map(
          (item: any) => ({
            id: item.id,
            slug: item.slug,
            title: item.name,
            description: item.description,
            image:
              item.images?.find((img: any) => img.is_main)
                ?.image ||
              item.images?.[0]?.image ||
              "/Images/placeholder.png",
            price:
              item.variants?.[0]?.sale_price ||
              item.variants?.[0]?.regular_price ||
              "0.00",
          })
        );

        setProducts(transformedProducts);
      } catch (err: any) {
        console.error(err);

        setError(
          err.message ||
          "Something went wrong while fetching products."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* SEARCH FILTER */
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [products, search]);

  /* PAGINATION */
  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* PAGE CHANGE */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* SEARCH RESET PAGE */
  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // console.log(products[0]?.image)
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#F7F5FA] dark:bg-[#0F172A]">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#BC2273] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-[#1A1831] dark:text-white">
            Loading products...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#F7F5FA] dark:bg-[#0F172A]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-500">
            Failed to load products
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="
            mt-5
            px-5
            py-2
            rounded-lg
            bg-[#BC2273]
            text-white
          "
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C12172] to-[#782984] dark:bg-gradient-to-r dark:from-[#3E1542] dark:to-[#7B2983] py-8 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1
            className="
        text-white
        text-3xl
        font-bold
        leading-[1.1]
        tracking-tight
        md:text-5xl
        lg:text-6xl
      "
          >
            Accessories
          </h1>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-14 lg:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SEARCH BAR */}
          <div className="mb-8">
            <div
              className="
              flex items-center
              h-14
              rounded-xl
              border border-[#E5DFF0]
              dark:border-white/10
              bg-white dark:bg-[#111827]
              px-4
            "
            >

              {/* SEARCH ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="
                w-5 h-5
                text-gray-400
                dark:text-slate-500
              "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m0 0A7.65 7.65 0 1 0 5.8 5.8a7.65 7.65 0 0 0 10.85 10.85Z"
                />
              </svg>

              {/* INPUT */}
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search products"
                className="
                w-full
                bg-transparent
                px-3
                text-sm
                outline-none
                text-[#1A1831]
                dark:text-white
                placeholder:text-gray-400
              "
              />
            </div>
          </div>

          {/* PRODUCTS GRID */}
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
          >

            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="
                group
                overflow-hidden
                rounded-2xl
                border border-[#E7E2F0]
                dark:border-white/10
                bg-white dark:bg-[#111827]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-pink-500/10
              "
              >

                {/* IMAGE */}
                <div
                  className="
                  aspect-square
                  overflow-hidden
                  bg-white
                  // p-4
                "
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    unoptimized
                    width={300}
                    height={300}
                    className="
                    w-full h-full
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* TITLE */}
                  <h3
                    className="
                    min-h-[56px]
                    text-base
                    font-semibold
                    leading-7
                    text-[#1A1831]
                    dark:text-white
                  "
                  >
                    {product.title}
                  </h3>

                  {/* PRICE */}
                  <div
                    className="
                    mt-2
                    text-3xl
                    font-extrabold
                    text-[#1A1831]
                    dark:text-white
                  "
                  >
                    £{product.price}
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-2 space-y-3">

                    {/* VIEW DETAILS */}
                    <Link href={`/product/${product.slug}`}>
                      <button
                        className="
                        mb-2
                        w-full h-11
                        rounded-full
                        border border-fuchsia-600
                        text-fuchsia-600
                        text-sm font-semibold
                        "
                      >
                        View Details
                      </button>
                    </Link>

                    {/* BUY NOW */}
                    <button
                      className="
                      w-full h-11
                      rounded-full
                      bg-[#BC2273]
                      text-white
                      text-sm font-semibold
                      shadow-lg shadow-pink-500/20
                      transition-all duration-300
                      hover:scale-[1.01]
                    "
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <h3
                className="
                text-2xl
                font-bold
                text-[#1A1831]
                dark:text-white
              "
              >
                No products found
              </h3>

              <p
                className="
                mt-3
                text-gray-600
                dark:text-slate-400
              "
              >
                Try searching with another keyword.
              </p>
            </div>
          )}

          {/* PAGINATION */}
          {filteredProducts.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">

              {/* PREVIOUS */}
              <button
                disabled={currentPage === 1}
                onClick={() =>
                  handlePageChange(currentPage - 1)
                }
                className="
                h-10 px-4
                rounded-lg
                border border-[#E7E2F0]
                dark:border-white/10
                bg-white dark:bg-[#111827]
                text-sm font-medium
                text-[#1A1831]
                dark:text-white
                disabled:opacity-40
                disabled:cursor-not-allowed
                hover:border-fuchsia-500
                transition-all duration-300
              "
              >
                Prev
              </button>

              {/* PAGE NUMBERS */}
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`
                    w-10 h-10
                    rounded-lg
                    text-sm font-semibold
                    transition-all duration-300
                    ${currentPage === page
                        ? "bg-[#BC2273] text-white shadow-lg shadow-pink-500/20"
                        : "border border-[#E7E2F0] dark:border-white/10 bg-white dark:bg-[#111827] text-[#1A1831] dark:text-white hover:border-[#BC2273]"
                      }
                  `}
                  >
                    {page}
                  </button>
                );
              })}

              {/* NEXT */}
              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  handlePageChange(currentPage + 1)
                }
                className="
                h-10 px-4
                rounded-lg
                border border-[#E7E2F0]
                dark:border-white/10
                bg-white dark:bg-[#111827]
                text-sm font-medium
                text-[#1A1831]
                dark:text-white
                disabled:opacity-40
                disabled:cursor-not-allowed
                hover:border-fuchsia-500
                transition-all duration-300
              "
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
