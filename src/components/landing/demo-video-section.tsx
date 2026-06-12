import { Play } from 'lucide-react'
import { getYoutubeEmbedSrc } from '@/lib/youtube'
import { getLandingText, landingCopy } from '@/data/site-content'
import type { Language } from '@/lib/preferences'

const defaultVideoUrl = 'https://www.youtube.com/watch?v=3eQCigYvj3E'
const videoUrl =
  import.meta.env.VITE_DEMO_VIDEO_URL?.trim() || defaultVideoUrl
const embedSrc = getYoutubeEmbedSrc(videoUrl)

export function DemoVideoSection({
  copy,
  language,
}: {
  copy: typeof landingCopy
  language: Language
}) {
  return (
    <section
      id='demo-video'
      className='scroll-mt-20 border-b border-border/60 bg-muted/30 py-12 md:py-16'
    >
      <div className='container'>
        <div className='mx-auto mb-8 max-w-2xl text-center'>
          <p className='text-sm font-medium text-amber-700'>
            {getLandingText(copy.video.kicker, language)}
          </p>
          <h2 className='mt-2 text-2xl font-bold tracking-tight md:text-3xl'>
            {getLandingText(copy.video.title, language)}
          </h2>
          <p className='mt-3 text-sm text-muted-foreground md:text-base'>
            {getLandingText(copy.video.caption, language)}
          </p>
        </div>

        <div className='mx-auto w-full max-w-4xl'>
          <div className='overflow-hidden rounded-xl border border-border bg-black'>
            <div className='relative aspect-video w-full'>
              {embedSrc ? (
                <iframe
                  title='FlowPOS product demo'
                  src={embedSrc}
                  className='absolute inset-0 size-full border-0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                  loading='lazy'
                />
              ) : (
                <div className='flex size-full flex-col items-center justify-center gap-2 bg-muted text-muted-foreground'>
                  <Play className='size-10 opacity-40' />
                  <p className='text-sm'>
                    {language === 'en'
                      ? 'Invalid YouTube URL in VITE_DEMO_VIDEO_URL'
                      : 'VITE_DEMO_VIDEO_URL-এ সঠিক YouTube URL দিন'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
