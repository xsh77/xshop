import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/store/ProductGrid';
import StoreHero from '../components/store/StoreHero';

const Home = () => (
  <>
    <StoreHero />
    <section className="relative overflow-hidden bg-[#F6F6F6] px-4 py-20 text-black sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-purple-300/20 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-700">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> The XSHOP catalog
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">Explore digital products</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">Only published catalog records will be shown here. No demo products, prices, or stock claims are being presented as live inventory.</p>
          </div>
          <Link to="/shop" className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 hover:shadow-lg sm:self-auto">
            View all <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ProductGrid
          products={[]}
          emptyState={{
            title: 'The catalog is being prepared',
            description: 'Products will appear once real catalog data has been configured and approved. Until then, this storefront will not display invented listings.',
            actionLabel: 'Browse categories',
            actionTo: '/categories',
          }}
        />
      </div>
    </section>

    <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/85 via-black to-purple-950/20 p-7 shadow-2xl shadow-purple-950/15 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">A considered storefront</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">Built around clear product details and a careful purchase flow.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">This foundation phase does not accept payments or deliver products. Store policies, payment verification, and digital fulfillment will be added only after their data and authorization paths are configured.</p>
        </div>
        <Link to="/support" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-300/40 hover:bg-white/10">
          Store information <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  </>
);

export default Home;
