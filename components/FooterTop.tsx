import { FooterTopProps } from '@/PropTypes/FooterTopProps'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const data: FooterTopProps[] = [
  {
    title: 'Visit Us',
    subtitle: 'New Orleans, USA',
    icon: (
      <MapPin className='text-gray-600 group-hover:text-darkColor transition-colors' />
    ),
  },
  {
    title: 'Call Us',
    subtitle: '+1 504-555-0155',
    icon: (
      <Phone className='text-gray-600 group-hover:text-darkColor transition-colors' />
    ),
  },
  {
    title: 'Working Hours',
    subtitle: 'Mon - Fri: 9:00 - 17:00',
    icon: (
      <Clock className='text-gray-600 group-hover:text-darkColor transition-colors' />
    ),
  },
  {
    title: 'Email Us',
    subtitle: 'shopz@gmail.com',
    icon: (
      <Mail className='text-gray-600 group-hover:text-darkColor transition-colors' />
    ),
  },
]

const FooterTop = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b'>
      {data?.map((item, index) => (
        <ContactItem
          key={index}
          icon={item?.icon}
          title={item?.title}
          subtitle={item?.subtitle}
        />
      ))}
    </div>
  )
}

const ContactItem = ({ icon, title, subtitle }: FooterTopProps) => {
  return (
    <div className='flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors'>
      {icon}
      <div>
        <h3 className='font-semibold text-gray-900 group-hover:text-darkColor transition-colors'>
          {title}
        </h3>
        <p className='text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default FooterTop
