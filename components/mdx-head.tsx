import { allDocuments } from "contentlayer/generated"
import * as z from "zod"

import { absoluteUrl } from "@/lib/utils"

interface MdxHeadProps {
  params: {
    slug?: string[]
  }
}

export default function MdxHead({ params }: MdxHeadProps) {
  const slug = params?.slug?.join("/") || ""
  const mdxDoc = allDocuments.find((doc) => doc.slugAsParams === slug)

  if (!mdxDoc) {
    return null
  }

  const title = `${mdxDoc.title} - Taxonomy`
  const url = process.env.NEXT_PUBLIC_APP_URL

  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={absoluteUrl(mdxDoc.slug)} />
      <meta name="description" content={mdxDoc.description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={mdxDoc.title} />
      <meta property="og:description" content={mdxDoc.description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content="https://pavilion-nv.vercel.app/og.jpg"
      />
      <meta name="twitter:title" content={mdxDoc.title} />
      <meta name="twitter:description" content={mdxDoc.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta
        name="twitter:image"
        content="https://pavilion-nv.vercel.app/og.jpg"
      />
    </>
  )
}
