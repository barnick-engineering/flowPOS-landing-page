import { Play } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getYoutubeEmbedSrc } from '@/lib/youtube'

const defaultVideoUrl = 'https://www.youtube.com/watch?v=3eQCigYvj3E'
const videoUrl =
  import.meta.env.VITE_DEMO_VIDEO_URL?.trim() || defaultVideoUrl
const embedSrc = getYoutubeEmbedSrc(videoUrl)

export function HeroVideo() {
  return (
    <section className='border-b border-border/60 bg-gradient-to-b from-amber-500/8 via-background to-background pt-8 pb-12 md:pt-10 md:pb-16'>
      <div className='container flex flex-col items-center text-center'>
        <Badge className='mb-4'>Restaurant POS SaaS</Badge>

        <div className='mx-auto w-full max-w-3xl'>
          <div className='overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-amber-500/10'>
            <div className='relative aspect-video w-full bg-muted'>
              {embedSrc ? (
                <iframe
                  title='YouTube video player'
                  src={embedSrc}
                  className='absolute inset-0 size-full border-0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
              ) : (
                <div className='flex size-full flex-col items-center justify-center gap-2 text-muted-foreground'>
                  <Play className='size-10 opacity-40' />
                  <p className='text-sm'>Invalid YouTube URL in VITE_DEMO_VIDEO_URL</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <h1 className='mt-8 max-w-3xl text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl'>
          Run orders, kitchen, payments, and staff —{' '}
          <span className='text-amber-600'>one cloud platform</span>
        </h1>
        <p className='mt-4 max-w-2xl text-base text-muted-foreground text-pretty md:text-lg'>
          FlowPOS is built for restaurants and food businesses in Bangladesh and
          beyond. Subscribe per branch, onboard your team, and operate from counter
          to back office without juggling separate tools.
        </p>
      </div>
    </section>
  )
}
