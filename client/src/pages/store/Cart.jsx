import { ShoppingBag } from 'lucide-react';
import StoreEmptyState from '../../components/store/StoreEmptyState';
import StorePageShell from '../../components/store/StorePageShell';

const Cart = () => (
  <StorePageShell
    eyebrow="XSHOP / CART"
    title="Your cart"
    description="The cart interface is in place. Cart persistence, product validation, and price calculation will be connected in Phase 4."
  >
    <StoreEmptyState
      icon={ShoppingBag}
      title="Your cart is empty"
      description="There are no items in this session. Product add-to-cart actions are not active yet, so no order or price has been created."
      actionLabel="Browse the shop"
      actionTo="/shop"
    />
  </StorePageShell>
);

export default Cart;
