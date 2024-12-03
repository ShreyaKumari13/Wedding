import QualityService from '../components/service/qualityservice'
import ServiceHome from '../components/service/servicehome'
import ServicesSection from '../components/service/servicesection'
import ShopSection from '../components/service/shopsection'

export default function ServicesPage() {
  return (
    <>
      <ServiceHome />
      <ServicesSection/>
      <ShopSection/>
      <QualityService/>
    </>
  )
}