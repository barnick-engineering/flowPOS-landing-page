/** Convert watch / youtu.be URLs to embed-friendly video id. */
export function getYoutubeEmbedId(url: string): string | null {
  try {
    const parsed = new URL(url.trim())
    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.replace('/', '')
      return id || null
    }
    if (parsed.hostname.includes('youtube.com')) {
      const v = parsed.searchParams.get('v')
      if (v) return v
      const embedMatch = parsed.pathname.match(/\/embed\/([^/]+)/)
      if (embedMatch?.[1]) return embedMatch[1]
    }
  } catch {
    return null
  }
  return null
}

export function getYoutubeEmbedSrc(url: string): string | null {
  const id = getYoutubeEmbedId(url)
  if (!id) return null
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`
}
