import { PackageSearch } from 'lucide-react';
import { useParams } from 'react-router-dom';
import StoreEmptyState from '../../components/store/StoreEmptyState';
import StorePageShell from '../../components/store/StorePageShell';

const ProductDetails = () => {
  const { slug } = useParams();

  return (
    <StorePageShell eyebrow="XSHOP / PRODUCT" title="Product details" description={slug ? `Product: ${slug}` : undefined}>
      <StoreEmptyState
        icon={PackageSearch}
        title="This product is not available in the catalog"
        description="Product details, prices, variants, restrictions, availability, and delivery terms will be rendered from an approved product record. No product has been seeded or assumed."
        actionLabel="Return to the shop"
        actionTo="/shop"
      />
    </StorePageShell>
  );
};

export default ProductDetails;
