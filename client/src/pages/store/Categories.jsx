import { Layers3 } from 'lucide-react';
import StoreEmptyState from '../../components/store/StoreEmptyState';
import StorePageShell from '../../components/store/StorePageShell';

const Categories = () => (
  <StorePageShell
    eyebrow="XSHOP / DISCOVER"
    title="Categories"
    description="Categories will be loaded from the store database so the storefront only shows the taxonomy configured by the business."
  >
    <StoreEmptyState
      icon={Layers3}
      title="Categories are not configured yet"
      description="No category data is available in this repository. Categories will appear after the Supabase catalog is configured."
      actionLabel="Browse the shop"
      actionTo="/shop"
    />
  </StorePageShell>
);

export default Categories;
