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
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"additional" | "reviews">("reviews");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Reviews
  const [reviews, setReviews] = useState<any[]>([]);
  const [reviewAvg, setReviewAvg] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewError, setReviewError] = useState("");
  const [reviewDone, setReviewDone] = useState(false);
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

  // Add to cart — same shape/behaviour as the Accessories list page: write a
  // planType:"accessories" row into localStorage["cart"] so the checkout saves
  // it as an accessories order and the header badge updates.
  const handleAddToCart = () => {
    if (!product) return;

    const price = Number(
      selectedVariant?.sale_price ??
      selectedVariant?.regular_price ??
      product?.variants?.[0]?.sale_price ??
      product?.variants?.[0]?.regular_price ??
      0
    );

    const image =
      product.images?.find((img: any) => img.is_main)?.image ||
      product.images?.[0]?.image ||
      "/Images/placeholder.png";

    const rawItem = {
      id: selectedVariant?.id ?? product.id,
      variantId: selectedVariant?.id ?? null,
      planType: "accessories",
      category: "accessories",
      name: product.name,
      planName: product.name,
      slug: product.slug,
      image,
      price,
      quantity,
      qty: quantity,
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

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    console.log("Added to cart:", rawItem);
  };

  // Load reviews for this product
  const loadReviews = async (productId: number, productSlug: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews/?product_id=${productId}&product_slug=${productSlug}`
      );
      const data = await res.json();
      setReviews(data.results || []);
      setReviewAvg(data.average || 0);
    } catch (err) {
      console.error("Failed to load reviews", err);
    }
  };

  useEffect(() => {
    if (product?.id) loadReviews(product.id, product.slug);
  }, [product?.id, product?.slug]);

  const handleSubmitReview = async () => {
    setReviewError("");
    if (!rating) return setReviewError("Please select a rating.");
    if (!reviewName.trim()) return setReviewError("Please enter your name.");
    if (!reviewText.trim()) return setReviewError("Please write your review.");

    try {
      setReviewSubmitting(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            product_id: product.id,
            product_slug: product.slug,
            name: reviewName.trim(),
            email: reviewEmail.trim(),
            rating,
            comment: reviewText.trim(),
          }),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        setReviewError(data?.message || "Could not submit your review.");
        return;
      }
      // Reset form + refresh list
      setReviewName("");
      setReviewEmail("");
      setReviewText("");
      setRating(0);
      setReviewDone(true);
      setTimeout(() => setReviewDone(false), 3000);
      await loadReviews(product.id, product.slug);
    } catch {
      setReviewError("Network error. Please try again.");
    } finally {
      setReviewSubmitting(false);
    }
  };

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
            <a href="#" className="text-sm text-[#BC2273] dark:text-[#e05fa0] hover:underline">
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
                      focus:outline-none focus:ring-2 focus:ring-[#BC2273]
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
              <button
                onClick={handleAddToCart}
                className="
                h-11 px-6
                bg-[#BC2273] hover:bg-[#a51d63]
                text-white text-sm font-semibold
                rounded-md
                transition-colors duration-200
              ">
                {added ? "Added ✓" : "Add to cart"}
              </button>
            </div>

            {/* SKU & Category */}
            <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
              {/* <span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">SKU:</span>{" "}
                N/A
              </span> */}
              <span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">Category:</span>{" "}
                <a href="#" className="text-[#BC2273] dark:text-[#e05fa0] hover:underline">
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
                  ? "border-[#BC2273] text-[#BC2273] dark:text-[#e05fa0] dark:border-[#e05fa0]"
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
                  ? "border-[#BC2273] text-[#BC2273] dark:text-[#e05fa0] dark:border-[#e05fa0]"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }
              `}
            >
              Reviews ({reviews.length})
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
                      focus:ring-2 focus:ring-[#BC2273]
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
                        focus:ring-2 focus:ring-[#BC2273]
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
                        focus:ring-2 focus:ring-[#BC2273]
                      "
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-2 mb-6 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-[#BC2273] cursor-pointer"
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
                    bg-[#BC2273] hover:bg-[#a51d63]
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
                    <Link href={`/product/${item.slug}`}>
                    <button className="
                      w-full md:w-auto px-6 py-3
                      bg-[#BC2273] hover:bg-[#a51d63]
                      text-white text-xs md:text-sm font-semibold
                      rounded-md
                      transition-colors duration-200
                    ">
                      Add to cart
                    </button>
                    </Link>
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