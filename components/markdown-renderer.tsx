"use client"

import * as React from "react"

interface MarkdownRendererProps {
  contentHtml: string
}

export function MarkdownRenderer({ contentHtml }: MarkdownRendererProps) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none 
      prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-foreground
      prose-h1:hidden
      prose-h2:text-xl md:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-primary/5
      prose-p:text-base md:text-lg prose-p:leading-relaxed prose-p:text-foreground/80 prose-p:my-4
      prose-strong:text-foreground prose-strong:font-bold
      prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
      prose-blockquote:border-l-4 prose-blockquote:border-primary/40 prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-md prose-blockquote:font-sans prose-blockquote:not-italic prose-blockquote:my-8
      prose-code:bg-primary/10 prose-code:text-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:text-[0.9em]
      prose-pre:p-0 prose-pre:bg-transparent prose-pre:my-8
      prose-img:rounded-md prose-img:border-2 prose-img:border-primary/5 prose-img:my-10
      prose-li:text-base md:text-lg prose-li:text-foreground/80 prose-li:my-1
      prose-hr:my-8 prose-hr:border-primary/10
      selection:bg-primary/20 selection:text-primary">
      <div 
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
        className="[&_pre]:border-2 [&_pre]:border-primary/10 [&_pre]:rounded-md [&_pre]:my-10 [&_pre]:shadow-md [&_pre]:relative [&_pre]:pt-8
          [&_pre:before]:content-[attr(data-language)] [&_pre:before]:absolute [&_pre:before]:top-0 [&_pre:before]:right-0 [&_pre:before]:px-3 [&_pre:before]:py-1 [&_pre:before]:bg-white/10 [&_pre:before]:text-white/60 [&_pre:before]:text-[10px] [&_pre:before]:font-black [&_pre:before]:uppercase [&_pre:before]:tracking-widest [&_pre:before]:rounded-bl-md [&_pre:before]:rounded-tr-sm
          [&_.rehype-code-title]:bg-primary/10 [&_.rehype-code-title]:text-[10px] [&_.rehype-code-title]:font-black [&_.rehype-code-title]:uppercase [&_.rehype-code-title]:tracking-[0.2em] [&_.rehype-code-title]:px-4 [&_.rehype-code-title]:py-2 [&_.rehype-code-title]:rounded-t-md [&_.rehype-code-title]:border-b [&_.rehype-code-title]:border-primary/10 [&_.rehype-code-title]:mb-[-32px] [&_.rehype-code-title]:relative [&_.rehype-code-title]:z-10
          [&_.alert-label]:inline-block [&_.alert-label]:text-[10px] [&_.alert-label]:font-black [&_.alert-label]:tracking-[0.2em] [&_.alert-label]:uppercase [&_.alert-label]:px-2 [&_.alert-label]:py-0.5 [&_.alert-label]:bg-primary/20 [&_.alert-label]:text-primary [&_.alert-label]:rounded-sm [&_.alert-label]:mr-2 dark:[&_.alert-label]:bg-primary/10"
      />
    </article>
  )
}
