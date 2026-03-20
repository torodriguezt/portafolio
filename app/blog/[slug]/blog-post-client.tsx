"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react"
import Link from "next/link"

export default function BlogPostClient({ post, content }: { post: any; content: any }) {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#8b949e] hover:text-[#7ee787] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#e6edf3] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#8b949e] mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} read</span>
            </div>
            <button className="flex items-center gap-2 hover:text-[#7ee787] transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#7ee787]/10 text-[#7ee787] border border-[#7ee787]/20"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: content?.content
                .split("\n")
                .map((line: string) => {
                  if (line.startsWith("## ")) {
                    return `<h2 class="text-2xl font-bold text-[#e6edf3] mt-8 mb-4">${line.slice(3)}</h2>`
                  }
                  if (line.startsWith("### ")) {
                    return `<h3 class="text-xl font-bold text-[#e6edf3] mt-6 mb-3">${line.slice(4)}</h3>`
                  }
                  if (line.startsWith("```")) {
                    return line.includes("```python")
                      ? '<pre class="bg-[#161b22] border border-[#21262d] rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm text-[#e6edf3]">'
                      : line.includes("```r")
                      ? '<pre class="bg-[#161b22] border border-[#21262d] rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm text-[#e6edf3]">'
                      : "</code></pre>"
                  }
                  if (line.startsWith("- ")) {
                    return `<li class="text-[#8b949e] ml-6">${line.slice(2)}</li>`
                  }
                  if (line.match(/^\d+\. /)) {
                    return `<li class="text-[#8b949e] ml-6">${line.replace(/^\d+\. /, "")}</li>`
                  }
                  if (line.trim() === "") {
                    return "<br/>"
                  }
                  return `<p class="text-[#8b949e] leading-relaxed mb-4">${line}</p>`
                })
                .join(""),
            }}
          />
        </motion.article>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-[#21262d]"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7ee787] to-[#39d353] flex items-center justify-center text-[#0d1117] font-bold text-xl">
              TR
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#e6edf3] mb-1">Tomás Rodríguez</h3>
              <p className="text-[#8b949e]">
                Data Scientist & Machine Learning Engineer. Passionate about sharing knowledge
                about ML, statistics, and data science.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
