import { Layers3 } from 'lucide-react';
import { useParams } from 'react-router-dom';
import StoreEmptyState from '../../components/store/StoreEmptyState';
import StorePageShell from '../../components/store/StorePageShell';

const CategoryDetails = () => {
  const { slug } = useParams();

  return (
    <StorePageShell eyebrow="XSHOP / CATEGORY" title="Category products" description={slug ? `Category: ${slug}` : undefined}>
      <StoreEmptyState
        icon={Layers3}
        title="Category data is not connected yet"
        description="This route will display products from the selected database category after the catalog is configured."
        actionLabel="View all categories"
        actionTo="/categories"
      />
    </StorePageShell>
  );
};

export default CategoryDetails;
