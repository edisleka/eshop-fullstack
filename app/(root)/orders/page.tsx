import { requiredUser } from '@/hooks/requiredUser'

const OrdersPage = async () => {
  await requiredUser()

  return <div>OrdersPage</div>
}
export default OrdersPage
