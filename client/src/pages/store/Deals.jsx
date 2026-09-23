import { BadgePercent } from 'lucide-react';
import ProductGrid from '../../components/store/ProductGrid';
import StorePageShell from '../../components/store/StorePageShell';

const Deals = () => (
  <StorePageShell
    eyebrow="XSHOP / OFFERS"
    title="Deals"
    description="Only active offers configured in the catalog should appear here. XSHOP currently has no promotional data to display."
  >
    <ProductGrid
      products={[]}
      emptyState={{
        icon: BadgePercent,
        title: 'No active offers',
        description: 'There are no promotion records configured yet. No discount or sale prices are being invented for the preview.',
        actionLabel: 'Browse the shop',
        actionTo: '/shop',
      }}
    />
  </StorePageShell>
);

export default Deals;
