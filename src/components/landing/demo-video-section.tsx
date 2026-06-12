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
    <section className='border-b border-border/60 pb-12 md:pb-16'>
      <div className='container'>
        <div className='mx-auto w-full max-w-[60rem]'>
          <div className='overflow-hidden rounded-xl border border-border bg-card shadow-sm ring-1 ring-border/60'>
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
                  <p className='text-sm'>
                    {language === 'en'
                      ? 'Invalid YouTube URL in VITE_DEMO_VIDEO_URL'
                      : 'VITE_DEMO_VIDEO_URL-এ সঠিক YouTube URL দিন'}
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className='mt-3 text-center text-sm text-muted-foreground'>
            {getLandingText(copy.hero.videoCaption, language)}
          </p>
        </div>
      </div>
    </section>
  )
}
