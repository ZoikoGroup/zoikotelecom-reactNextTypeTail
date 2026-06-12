"use client"
import { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"additional" | "reviews">("reviews");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/products/`
        );
        const data = await response.json();
        const foundProduct = data.results.find(
          (item: any) => item.slug === slug
        );
        if (!foundProduct) {
          setLoading(false);
          return;
        }
        setProduct(foundProduct);
        if (foundProduct.variants?.length) {
          setSelectedVariant(foundProduct.variants[0]);
        }
        const related = data.results.filter(
          (item: any) =>
            item.id !== foundProduct.id &&
            item.category.slug === foundProduct.category.slug
        );
        setRelatedProducts(related);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  const isPhoneEquipment = product?.category?.slug === "phone-equipment";

  const prices = product?.variants?.map((v: any) =>
    Number(v.sale_price || v.regular_price)
  ) || [];
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  const displayPrice = isPhoneEquipment
    ? selectedVariant
      ? `£${Number(selectedVariant.sale_price || selectedVariant.regular_price).toFixed(2)}`
      : `£${minPrice.toFixed(2)} – £${maxPrice.toFixed(2)}`
    : `£${Number(product?.variants?.[0]?.sale_price || product?.variants?.[0]?.regular_price || 0).toFixed(2)}`;

  const relatedDisplayPrice = (item: any) => {
    const isPhone = item.category.slug === "phone-equipment";
    const vPrices = item.variants?.map((v: any) => Number(v.sale_price || v.regular_price)) || [];
    if (isPhone && vPrices.length > 1) {
      return `£${Math.min(...vPrices).toFixed(2)} – £${Math.max(...vPrices).toFixed(2)}`;
    }
    return `£${Number(item.variants?.[0]?.sale_price || item.variants?.[0]?.regular_price || 0).toFixed(2)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-gray-500 dark:text-gray-400 text-lg">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-gray-500 dark:text-gray-400 text-lg">Product not found</div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── TOP PRODUCT SECTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT: Product Image */}
          <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            {/* Zoom icon */}
            <button className="absolute top-3 right-3 z-10 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m0 0A7.65 7.65 0 1 0 5.8 5.8a7.65 7.65 0 0 0 10.85 10.85Z" />
              </svg>
            </button>
            <div className="relative aspect-square w-full">
              <Image
                src={product.images?.[0]?.image || "/placeholder.png"}
                alt={product.name}
                unoptimized
                fill
                className="object-contain p-6"
              />
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span>Home</span>
              <span className="mx-1">/</span>
              <span>{product.category.name}</span>
              <span className="mx-1">/</span>
              <span className="text-gray-800 dark:text-gray-200">{product.name}</span>
            </nav>

            {/* Category link */}
            <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              {product.category.name}
            </a>

            {/* Product Title */}
            <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {displayPrice}
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Duration selector (phone-equipment only) */}
            {isPhoneEquipment && product.variants?.length > 0 && (
              <div className="mt-5">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Months
                </label>
                <div className="relative">
                  <select
                    value={selectedVariant?.id || ""}
                    onChange={(e) => {
                      const variant = product.variants.find(
                        (v: any) => v.id === Number(e.target.value)
                      );
                      setSelectedVariant(variant || null);
                    }}
                    className="
                      w-full h-11 border border-gray-300 dark:border-gray-600
                      rounded-md px-3 pr-10
                      bg-white dark:bg-gray-800
                      text-gray-900 dark:text-white
                      text-sm
                      appearance-none
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      cursor-pointer
                    "
                  >
                    {product.variants.map((variant: any) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.duration_display}
                      </option>
                    ))}
                  </select>
                  {/* Custom chevron */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="mt-1 text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  CLEAR
                </button>
              </div>
            )}

            {/* Selected price (after variant pick) */}
            {isPhoneEquipment && selectedVariant && (
              <div className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                £{Number(selectedVariant.sale_price || selectedVariant.regular_price).toFixed(2)}
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="mt-5 flex items-center gap-3">
              {/* Quantity box */}
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden h-11">
               <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden h-11">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="
                    w-10 h-full flex items-center justify-center
                    text-gray-600 dark:text-gray-300
                    bg-white dark:bg-gray-800
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    disabled:opacity-30 disabled:cursor-not-allowed
                    transition-colors duration-150
                    text-lg font-medium select-none
                  "
                >
                  −
                </button>
                <span className="
                  w-10 h-full flex items-center justify-center
                  text-sm font-semibold
                  text-gray-900 dark:text-white
                  bg-white dark:bg-gray-800
                  border-x border-gray-300 dark:border-gray-600
                  select-none
                ">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="
                    w-10 h-full flex items-center justify-center
                    text-gray-600 dark:text-gray-300
                    bg-white dark:bg-gray-800
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    transition-colors duration-150
                    text-lg font-medium select-none
                  "
                >
                  +
                </button>
              </div>
              </div>

              {/* Add to cart */}
              <button className="
                h-11 px-6
                bg-blue-600 hover:bg-blue-700
                text-white text-sm font-semibold
                rounded-md
                transition-colors duration-200
              ">
                Add to cart
              </button>
            </div>

            {/* Payment Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {/* Apple Pay */}
              <button className="
                h-11
                bg-black hover:bg-gray-900
                text-white text-sm font-semibold
                rounded-md
                flex items-center justify-center gap-2
                transition-colors duration-200
              ">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Pay
              </button>

              {/* Amazon Pay */}
              <button className="
                h-11
                bg-[#FFD814] hover:bg-[#F7CA00]
                text-black text-sm font-bold
                rounded-md
                flex items-center justify-center gap-1
                transition-colors duration-200
              ">
                <svg className="h-5" viewBox="0 0 603 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M373.2 144.6c-34.9 25.7-85.5 39.4-129 39.4-61 0-115.9-22.6-157.5-60.1-3.3-3 .3-7 3.6-4.7 44.8 26.1 100.3 41.7 157.5 41.7 38.6 0 81.1-8 120.2-24.6 5.9-2.5 10.8 3.8 5.2 8.3z" fill="#F90"/>
                  <path d="M386.8 129.1c-4.4-5.7-29.4-2.7-40.6-1.4-3.4.4-3.9-2.6-.9-4.7 19.9-14 52.5-9.9 56.3-5.3 3.8 4.7-1 37.3-19.6 52.8-2.9 2.4-5.6 1.1-4.3-2 4.2-10.4 13.6-33.7 9.1-39.4z" fill="#F90"/>
                  <path d="M347.5 20.5V7.2c0-2 1.5-3.3 3.3-3.3h58.8c1.9 0 3.4 1.4 3.4 3.3v11.4c0 1.9-1.6 4.3-4.4 8.2l-30.5 43.5c11.3-.3 23.3 1.4 33.6 7.1 2.3 1.3 2.9 3.2 3.1 5.1v14.2c0 1.9-2.1 4.1-4.3 3-18-9.4-41.9-10.4-61.8.1-2 1.1-4.2-1.1-4.2-3V83.4c0-2.1 0-5.7 2.2-8.9l35.3-50.6h-30.7c-1.9 0-3.3-1.4-3.3-3.3v-.1z" fill="#221F1F"/>
                  <path d="M124.5 100.9H107c-1.7-.1-3.1-1.4-3.2-3.1V7.4c0-1.9 1.6-3.4 3.5-3.4h16.3c1.8.1 3.2 1.5 3.3 3.2v11.8h.3c4.2-11.5 12.3-16.9 23.1-16.9 11 0 17.8 5.4 22.8 16.9 4.2-11.5 13.8-16.9 24.1-16.9 7.3 0 15.3 3 20.2 9.8 5.5 7.5 4.4 18.4 4.4 28v56.5c0 1.9-1.6 3.4-3.5 3.4H203c-1.8-.1-3.2-1.6-3.2-3.4V46.1c0-3.8.3-13.2-.5-16.8-1.3-6-5.2-7.7-10.2-7.7-4.2 0-8.6 2.8-10.4 7.3-1.8 4.5-1.6 12-.1 16.5v52c0 1.9-1.6 3.4-3.5 3.4h-17.3c-1.9-.1-3.2-1.6-3.2-3.4l-.1-52c0-10.9 1.8-27-11-27-12.9 0-12.4 15.7-12.4 27v52c0 1.9-1.6 3.4-3.5 3.4h-.1z" fill="#221F1F"/>
                  <path d="M458.2 2c26.7 0 41.1 22.9 41.1 52.1 0 28.2-16 50.6-41.1 50.6-26.2 0-40.4-22.9-40.4-51.5C417.7 24.6 432.1 2 458.2 2zm.1 18.7c-13.2 0-14.1 18-14.1 29.2 0 11.3-.2 35.4 13.9 35.4 14 0 14.6-19.3 14.6-31.1 0-7.8-.3-17-2.8-24.4-2.2-6.4-6.4-9.1-11.6-9.1z" fill="#221F1F"/>
                  <path d="M538.4 100.9h-17.2c-1.9-.1-3.2-1.6-3.2-3.4l-.1-90.3c.1-1.8 1.6-3.2 3.5-3.2h16c1.6.1 2.9 1.2 3.2 2.7v13.8h.3c4.9-12.4 11.6-18.3 23.6-18.3 7.8 0 15.3 2.8 20.2 10.6 4.5 7.3 4.5 19.5 4.5 28.3v57.1c-.2 1.7-1.7 3.1-3.5 3.1h-17.3c-1.7-.1-3-1.4-3.2-3.1V45.2c0-10.7 1.2-26.4-11.2-26.4-4.3 0-8.3 2.9-10.3 7.2-2.5 5.5-2.8 11-2.8 19.2v52.4c0 1.9-1.6 3.4-3.5 3.4l.1-.1z" fill="#221F1F"/>
                  <path d="M305.6 56.9c0 7.4.2 13.6-3.6 20.2-3 5.3-7.8 8.6-13.1 8.6-7.3 0-11.5-5.5-11.5-13.7 0-16.1 14.5-19 28.2-19v3.9zm19.1 46.2c-1.2 1.1-3.1 1.2-4.5.4-6.3-5.3-7.5-7.7-10.9-12.7-10.5 10.7-17.9 13.9-31.5 13.9-16.1 0-28.6-9.9-28.6-29.8 0-15.5 8.4-26.1 20.4-31.3 10.4-4.6 24.9-5.4 36-6.7V34c0-5-.4-10.9-2.6-15.2-1.9-3.9-5.6-5.5-8.9-5.5-6 0-11.4 3.1-12.7 9.6-.3 1.4-1.3 2.8-2.7 2.8l-15.1-1.6c-1.3-.3-2.7-1.3-2.3-3.2C264.8 6.3 282 0 297.5 0c7.9 0 18.3 2.1 24.6 8.1 7.9 7.4 7.1 17.2 7.1 27.9v25.3c0 7.6 3.1 10.9 6.1 15 1 1.5 1.3 3.2-.1 4.3l-10.5 8.8v-.3z" fill="#221F1F"/>
                  <path d="M60.9 56.9c0 7.4.2 13.6-3.5 20.2-3 5.3-7.8 8.6-13.1 8.6-7.2 0-11.5-5.5-11.5-13.7 0-16.1 14.5-19 28.1-19v3.9zm19.2 46.2c-1.3 1.1-3.1 1.2-4.6.4-6.3-5.3-7.4-7.7-10.9-12.7-10.4 10.7-17.9 13.9-31.5 13.9C17 104.7 4.5 94.8 4.5 74.9c0-15.5 8.4-26.1 20.4-31.3 10.4-4.6 24.9-5.4 36-6.7V34c0-5-.4-10.9-2.6-15.2-1.9-3.9-5.6-5.5-8.9-5.5-6.1 0-11.4 3.1-12.7 9.6-.3 1.4-1.3 2.8-2.7 2.8L18.9 24.1c-1.3-.3-2.7-1.3-2.3-3.2C20.1 6.3 37.4 0 52.9 0 60.7 0 71.1 2.1 77.4 8.1c7.9 7.4 7.1 17.2 7.1 27.9v25.3c0 7.6 3.1 10.9 6.1 15 1.1 1.5 1.3 3.2-.1 4.3l-10.4 8.8v-.3z" fill="#221F1F"/>
                </svg>
              </button>
            </div>

            {/* SKU & Category */}
            <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
              <span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">SKU:</span>{" "}
                N/A
              </span>
              <span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">Category:</span>{" "}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {product.category.name}
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* ── TABS: Additional Information / Reviews ── */}
        <div className="mt-16 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab("additional")}
              className={`
                px-5 py-3 text-sm font-semibold border-b-2 transition-colors duration-200
                ${activeTab === "additional"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }
              `}
            >
              Additional information
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`
                px-5 py-3 text-sm font-semibold border-b-2 transition-colors duration-200
                ${activeTab === "reviews"
                  ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }
              `}
            >
              Reviews (0)
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "additional" ? (
            /* Additional Information Tab */
            isPhoneEquipment && product.variants?.length > 0 ? (
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-md">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 w-32">
                        Months
                      </td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                        {product.variants.map((v: any) => v.duration_display).join(", ")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No additional information available.
              </p>
            )
          ) : (
            /* Reviews Tab */
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
                There are no reviews yet.
              </p>

              {/* Review Form */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  Be the first to review &ldquo;{product.name}&rdquo;
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                  Your email address will not be published. Required fields are marked *
                </p>

                {/* Star Rating */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Your rating *
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className={`text-2xl transition-colors duration-150 ${
                          star <= (hoverRating || rating)
                            ? "text-yellow-400"
                            : "text-orange-200 dark:text-gray-600"
                        }`}
                      >
                        ☆
                      </button>
                    ))}
                  </div>
                </div>

                {/* Your Review */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Your review *
                  </label>
                  <textarea
                    rows={6}
                    className="
                      w-full border border-gray-300 dark:border-gray-600
                      rounded-md p-3 text-sm
                      bg-white dark:bg-gray-800
                      text-gray-900 dark:text-white
                      outline-none resize-none
                      focus:ring-2 focus:ring-blue-500
                    "
                  />
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="
                        w-full h-10 border border-gray-300 dark:border-gray-600
                        rounded-md px-3 text-sm
                        bg-white dark:bg-gray-800
                        text-gray-900 dark:text-white
                        outline-none
                        focus:ring-2 focus:ring-blue-500
                      "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="
                        w-full h-10 border border-gray-300 dark:border-gray-600
                        rounded-md px-3 text-sm
                        bg-white dark:bg-gray-800
                        text-gray-900 dark:text-white
                        outline-none
                        focus:ring-2 focus:ring-blue-500
                      "
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-2 mb-6 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Save my name, email, and website in this browser for the next time I comment.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="button"
                  className="
                    h-10 px-6
                    bg-blue-600 hover:bg-blue-700
                    text-white text-sm font-semibold
                    rounded-md
                    transition-colors duration-200
                  "
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── RELATED PRODUCTS ── */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Related products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.slice(0, 4).map((item: any) => (
                <Link
                  key={item.id}
                  href={`/product/${item.slug}`}
                  className="group block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-md transition-shadow duration-200"
                >
                  {/* Image */}
                  <div className="relative h-52 bg-gray-100 dark:bg-gray-700">
                    {/* Cart icon overlay */}
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-8 h-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                    </div>
                    <Image
                      src={item.images?.[0]?.image || "/placeholder.png"}
                      alt={item.name}
                      unoptimized
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {item.category.name}
                    </p>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                      {relatedDisplayPrice(item)}
                    </p>
                    <button className="
                      w-full h-8
                      bg-blue-600 hover:bg-blue-700
                      text-white text-xs font-semibold
                      rounded-md
                      transition-colors duration-200
                    ">
                      Select options
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}