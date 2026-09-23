import ProductGrid from '../../components/store/ProductGrid';
import StorePageShell from '../../components/store/StorePageShell';

const Shop = () => (
  <StorePageShell
    eyebrow="XSHOP / SHOP"
    title="Browse the catalog"
    description="Product records are not connected yet. This page is ready to render published products from the store catalog when Phase 3 is configured."
  >
    <ProductGrid
      products={[]}
      emptyState={{
        title: 'No products are published yet',
        description: 'XSHOP will show active product listings here. No sample or placeholder products are being presented as real inventory.',
        actionLabel: 'Contact support',
        actionTo: '/support',
      }}
    />
  </StorePageShell>
);

export default Shop;
