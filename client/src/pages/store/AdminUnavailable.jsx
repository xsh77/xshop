import { LockKeyhole } from 'lucide-react';
import StoreEmptyState from '../../components/store/StoreEmptyState';
import StorePageShell from '../../components/store/StorePageShell';

const AdminUnavailable = () => (
  <StorePageShell
    eyebrow="XSHOP / ADMIN"
    title="Admin tools are not enabled"
    description="No administrative data or operations are exposed in this foundation phase."
  >
    <StoreEmptyState
      icon={LockKeyhole}
      title="Authorization is not configured"
      description="The Phase 2 database role and RLS foundation is in place, but no admin operations or role-protected admin service has been implemented. This placeholder grants no elevated access."
      actionLabel="Return to the storefront"
      actionTo="/"
    />
  </StorePageShell>
);

export default AdminUnavailable;
