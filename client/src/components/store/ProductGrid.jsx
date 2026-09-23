import ProductCard from './ProductCard';
import StoreEmptyState from './StoreEmptyState';

const ProductGrid = ({ products = [], emptyState = {} }) => {
  if (!products.length) {
    return (
      <StoreEmptyState
        title={emptyState.title || 'The catalog is being prepared'}
        description={emptyState.description || 'No product records are currently published. Catalog listings will appear here once the store database is connected and products are approved.'}
        actionLabel={emptyState.actionLabel}
        actionTo={emptyState.actionTo}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default ProductGrid;
