import { useEffect, useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../../components/store/ProductGrid';
import StorePageShell from '../../components/store/StorePageShell';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const submittedQuery = searchParams.get('q')?.trim();
  const [query, setQuery] = useState(submittedQuery || '');

  useEffect(() => {
    setQuery(submittedQuery || '');
  }, [submittedQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = query.trim();
    setSearchParams(value ? { q: value } : {});
  };

  return (
    <StorePageShell
      eyebrow="XSHOP / SEARCH"
      title="Find a product"
      description="Search will query the published catalog once the Supabase product service is connected."
    >
      <form onSubmit={handleSubmit} className="mb-8 flex max-w-2xl gap-2 rounded-2xl border border-white/10 bg-gray-900/75 p-2 shadow-xl shadow-purple-950/10 focus-within:border-purple-400/40">
        <label htmlFor="store-search" className="sr-only">Search products</label>
        <SearchIcon className="ml-3 h-5 w-5 self-center text-purple-300" aria-hidden="true" />
        <input
          id="store-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products"
          className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-gray-500"
        />
        <button type="submit" className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
          Search
        </button>
      </form>
      <ProductGrid
        products={[]}
        emptyState={{
          icon: SearchIcon,
          title: 'Catalog search is not connected yet',
          description: submittedQuery
            ? `“${submittedQuery}” is ready to search once the published product catalog is connected. No search result is being claimed in this preview.`
            : 'Enter a product name above. Search results will be connected to the catalog in a later phase.',
          actionLabel: 'Browse categories',
          actionTo: '/categories',
        }}
      />
    </StorePageShell>
  );
};

export default SearchPage;
