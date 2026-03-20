export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Tom{"á"}s Rodr{"í"}guez</span>
            <span className="text-gray-300 hidden sm:inline">·</span>
            <a
              href="mailto:torodriguezt@unal.edu.co"
              className="hover:text-gray-900 transition-colors"
            >
              torodriguezt@unal.edu.co
            </a>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/torodriguezt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tomasrodriguezt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
