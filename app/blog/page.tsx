"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, BookOpen, Tag } from "lucide-react"
import Link from "next/link"

// Blog posts
const blogPosts = [
  {
    slug: "introduction-to-machine-learning",
    title: "Introduction to Machine Learning: From Theory to Practice",
    description:
      "A complete journey through the fundamental concepts of machine learning, from classic algorithms to modern neural networks. We explore real use cases and best practices.",
    date: "2026-01-07",
    readTime: "12 min",
    tags: ["Machine Learning", "Python", "Data Science"],
    year: 2026,
  },
  {
    slug: "bayesian-spatial-analysis",
    title: "Bayesian Spatial Analysis with R-INLA",
    description:
      "Learn to implement Bayesian spatial models to analyze geographic data. Includes practical examples with environmental data and reproducible code.",
    date: "2026-01-05",
    readTime: "15 min",
    tags: ["Bayesian Statistics", "R", "Spatial Analysis"],
    year: 2026,
  },
  {
    slug: "transformers-nlp",
    title: "Transformers and NLP: The Language Processing Revolution",
    description:
      "We explore how transformers changed NLP forever. From BERT to GPT, we analyze the architecture, applications, and how to implement them in your projects.",
    date: "2026-01-03",
    readTime: "10 min",
    tags: ["NLP", "Transformers", "Deep Learning"],
    year: 2026,
  },
]

// Group posts by year
const postsByYear = blogPosts.reduce((acc, post) => {
  const year = post.year
  if (!acc[year]) acc[year] = []
  acc[year].push(post)
  return acc
}, {} as Record<number, typeof blogPosts>)

// Sort years descending
const sortedYears = Object.keys(postsByYear)
  .map(Number)
  .sort((a, b) => b - a)

export default function BlogPage() {

  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8b949e] hover:text-[#7ee787] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[#8b949e] max-w-2xl">
            Reflections, tutorials, and deep dives into Machine Learning, Data Science,
            and my projects. Sharing knowledge and experiences from the world of data science.
          </p>
        </motion.div>

        {/* Blog Posts Grouped by Year */}
        <div className="space-y-12">
          {sortedYears.map((year, yearIndex) => (
            <motion.section
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (yearIndex + 2) }}
            >
              {/* Year Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-[#e6edf3] mb-2">{year}</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#7ee787] to-[#39d353] rounded-full"></div>
              </div>

              {/* Posts for this year */}
              <div className="space-y-6">
                {postsByYear[year].map((post, postIndex) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * postIndex }}
                    className="group bg-[#161b22] rounded-xl border border-[#21262d] hover:border-[#7ee787]/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-[#7ee787]/5"
                  >
                    <Link href={`/blog/${post.slug}`} className="block p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-[#e6edf3] mb-2 group-hover:text-[#7ee787] transition-colors">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-[#8b949e] mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime} read</span>
                            </div>
                          </div>
                        </div>
                        <BookOpen className="w-6 h-6 text-[#7ee787] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      </div>

                      <p className="text-[#8b949e] mb-4 leading-relaxed">
                        {post.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#7ee787]/10 text-[#7ee787] border border-[#7ee787]/20"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}
