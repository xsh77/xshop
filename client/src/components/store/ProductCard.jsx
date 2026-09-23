import { useState } from 'react';
import { ArrowUpRight, ImageOff, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const formatPrice = (amount, currency) => {
  if (amount == null || !Number.isFinite(Number(amount)) || !currency) return null;
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(Number(amount));
  } catch {
    return `${amount} ${currency}`;
  }
};

const ProductCard = ({ product }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const variants = Array.isArray(product.variants)
    ? product.variants.filter((variant) => variant.active !== false)
    : [];
  const currency = product.currency || variants.find((variant) => variant.currency)?.currency;
  const prices = variants
    .filter((variant) => variant.price != null && (variant.currency || product.currency) === currency)
    .map((variant) => Number(variant.price))
    .filter(Number.isFinite);
  const lowestPrice = prices.length ? Math.min(...prices) : null;
  const priceLabel = formatPrice(lowestPrice, currency);
  const image = product.thumbnail || product.image_url;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#0d0d10] transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_18px_50px_rgba(112,55,170,0.16)]">
      <Link to={`/products/${product.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-900 via-[#101019] to-purple-950/30">
          {image && !imageFailed ? (
            <img
              src={image}
              alt={product.name || 'Digital product'}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-purple-200/70">
              {imageFailed ? <ImageOff className="h-8 w-8" aria-hidden="true" /> : <Package className="h-8 w-8" aria-hidden="true" />}
              <span className="text-xs uppercase tracking-[0.18em]">Product image</span>
            </div>
          )}
          {product.category_name && (
            <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/65 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
              {product.category_name}
            </span>
          )}
        </div>
        <div className="p-5">
          {product.brand && <p className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-purple-300">{product.brand}</p>}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-purple-100">{product.name}</h3>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gray-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300" aria-hidden="true" />
          </div>
          {product.short_description && <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-400">{product.short_description}</p>}
          {priceLabel && <p className="mt-4 text-sm font-semibold text-white">From <span className="text-purple-200">{priceLabel}</span></p>}
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
