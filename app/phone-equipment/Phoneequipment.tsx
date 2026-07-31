"use client";
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const ITEMS_PER_PAGE = 8;

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;

  images: {
    image: string;
    is_main: boolean;
  }[];

  variants: {
    id: number;
    duration: string;
    duration_display: string;
    sale_price: string;
    regular_price: string;
  }[];
}

const getDisplayPrice = (
  product: Product,
  durationFilter: string
) => {
  if (!product.variants?.length) {
    return "Coming Soon";
  }

  // No filter selected -> show range
  if (durationFilter === "All Options") {
    const prices = product.variants.map((v) =>
      Number(v.sale_price)
    );

    const min = Math.min(...prices);
    const max = Math.max(...prices);

    return min === max
      ? `£${min.toFixed(2)}`
      : `£${min.toFixed(2)} - £${max.toFixed(2)}`;
  }

  // Filter selected -> show matching variant price
  const selectedVariant = product.variants.find(
    (variant) =>
      variant.duration_display === durationFilter
  );

  if (!selectedVariant) {
    return "Coming Soon";
  }

  return `£${Number(
    selectedVariant.sale_price
  ).toFixed(2)}`;
};

// Numeric price for the cart (handles ranges + the active duration filter).
const getNumericPrice = (
  product: Product,
  durationFilter: string
): number => {
  if (!product.variants?.length) return 0;

  if (durationFilter !== "All Options") {
    const selected = product.variants.find(
      (v) => v.duration_display === durationFilter
    );
    if (selected) return Number(selected.sale_price || selected.regular_price) || 0;
  }
  // Default to the cheapest variant.
  const prices = product.variants.map((v) => Number(v.sale_price || v.regular_price) || 0);
  return prices.length ? Math.min(...prices) : 0;
};

export default function PhoneEquipment() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [durationFilter, setDurationFilter] = useState("All Options");
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/products/?category=phone-equipment`
        );

        const data = await response.json();

        setProducts(data.results || []);
      } catch (error) {
        console.error(error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* SEARCH FILTER */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDuration =
        durationFilter === "All Options" ||
        product.variants.some(
          (variant) =>
            variant.duration_display === durationFilter
        );

      return matchesSearch && matchesDuration;
    });
  }, [products, search, durationFilter]);

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

  // Write into the shared localStorage cart (checkout reads localStorage["cart"]
  // and saves planType === "phone_equipment" as its own order type).
  const handleBuyNow = (product: Product) => {
    const image =
      product.images.find((img) => img.is_main)?.image ||
      product.images[0]?.image ||
      "/Images/placeholder.png";

    const selectedVariant =
      durationFilter !== "All Options"
        ? product.variants.find((v) => v.duration_display === durationFilter)
        : undefined;

    const rawItem = {
      id: selectedVariant?.id ?? product.id,
      variantId: selectedVariant?.id ?? null,
      planType: "phone_equipment",
      category: "phone-equipment",
      name: product.name,
      planName: product.name,
      slug: product.slug,
      image,
      price: getNumericPrice(product, durationFilter),
      planDuration: selectedVariant?.duration_display ?? durationFilter,
      quantity: 1,
      qty: 1,
    };

    try {
      const existing = JSON.parse(localStorage.getItem("cart") ?? "[]");
      const cartArr = Array.isArray(existing) ? existing : [];
      cartArr.push(rawItem);
      localStorage.setItem("cart", JSON.stringify(cartArr));
      window.dispatchEvent(new Event("cart-updated"));
    } catch {
      localStorage.setItem("cart", JSON.stringify([rawItem]));
    }

    console.log("Added to cart:", rawItem);
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading products...
      </div>
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
            Phone & Equipment
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-[#F7F5FA] dark:bg-[#0F172A] py-14 lg:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SEARCH BAR */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* SEARCH */}
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

              {/* DURATION FILTER */}
              <div
                className="
        h-14
        rounded-xl
        border border-[#E5DFF0]
        dark:border-white/10
        bg-white dark:bg-[#111827]
        px-4
      "
              >
                <select
                  value={durationFilter}
                  onChange={(e) => {
                    setDurationFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="
          w-full
          h-full
          bg-transparent
          text-sm
          outline-none
          text-[#1A1831]
          dark:text-white
          cursor-pointer
        "
                >
                  <option value="All Options">
                    All Options
                  </option>

                  <option value="12 Months">
                    12 Months
                  </option>

                  <option value="24 Months">
                    24 Months
                  </option>

                  <option value="36 Months">
                    36 Months
                  </option>

                  <option value="60 Months">
                    60 Months
                  </option>

                  <option value="Pay As You Go">
                    Pay As You Go
                  </option>
                </select>
              </div>

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
                          
                        "
                >
                  <Image
                    src={
                      product.images?.[0]?.image ||
                      "/Images/placeholder.png"
                    }
                    alt={product.name}
                    unoptimized
                    width={300}
                    height={300}
                    className="
                            w-full h-full
                            object-cover
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
                    {product.name}
                  </h3>

                  {/* PRICE */}
                  <div
                    className="
                            mt-2
                            text-3xl
                            font-bold
                            text-[#1A1831]
                            dark:text-white
                          "
                  >
                    {getDisplayPrice(
                      product,
                      durationFilter
                    )}
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-2 space-y-3">

                    {/* VIEW DETAILS */}
                    <Link href={`/product/${product.slug}`}>
                      <span
                        className="
                                mb-2
                                flex items-center justify-center
                                w-full h-11
                                rounded-full
                                border border-fuchsia-600
                                text-fuchsia-600
                                text-sm font-semibold
                                "
                      >
                        View Details
                      </span>
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
                      onClick={() => {
                        handleBuyNow(product);
                        router.push("/checkout");
                      }}
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
          {filteredProducts.length > 8 && (
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