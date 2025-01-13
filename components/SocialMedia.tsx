import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react'
import Link from 'next/link'

interface SocialMediaProps {
  className?: string
  iconClassName?: string
  toolTipClassName?: string
}

const socialLinks = [
  {
    title: 'Github',
    href: 'https://github.com',
    icon: <Github className='w-5 h-5' />,
  },
  {
    title: 'Youtube',
    href: 'https://youtube.com',
    icon: <Youtube className='w-5 h-5' />,
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <Linkedin className='w-5 h-5' />,
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    icon: <Facebook className='w-5 h-5' />,
  },
  {
    title: 'Slack',
    href: 'https://slack.com',
    icon: <Slack className='w-5 h-5' />,
  },
]

const SocialMedia = ({
  className,
  iconClassName,
  toolTipClassName,
}: SocialMediaProps) => {
  return (
    <TooltipProvider>
      <div className={cn('flex gap-3.5 items-center', className)}>
        {socialLinks?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  'p-2 border rounded-full hover:text-white hover:border-white hoverEffect',
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                'bg-white text-darkColor font-semibold',
                toolTipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
export default SocialMedia
