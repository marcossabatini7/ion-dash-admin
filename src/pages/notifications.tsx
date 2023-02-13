import Layout from '@/components/template/Layout'
import useAppData from '@/data/hook/useAppData'

export default function Notifications() {
  const { name } = useAppData()

  return (
    <>
      <Layout title="Notificações" subtitle="Página de notificações">
        {name}
      </Layout>
    </>
  )
}
