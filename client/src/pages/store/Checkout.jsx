import { CreditCard } from 'lucide-react';
import StoreEmptyState from '../../components/store/StoreEmptyState';
import StorePageShell from '../../components/store/StorePageShell';

const Checkout = () => (
  <StorePageShell
    eyebrow="XSHOP / CHECKOUT"
    title="Checkout"
    description="Checkout is reserved for authenticated customers. No payment or order is created in this foundation phase."
  >
    <StoreEmptyState
      icon={CreditCard}
      title="Checkout is not connected yet"
      description="The cart, server-side price validation, order service, and configured payment methods must be in place before checkout can accept a purchase."
      actionLabel="Return to the shop"
      actionTo="/shop"
    />
  </StorePageShell>
);

export default Checkout;
