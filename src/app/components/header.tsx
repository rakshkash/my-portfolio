export default function Header() {
  return (
    <header className="p-6 shadow-md">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Logo Section */}
        <div className="text-3xl font-bold text-rose-400 tracking-wider flex items-center space-x-1">
          <span className="text-teal-400 animate-pulse">&lt;</span>
          <span>RakshKash</span>
          <span className="text-teal-500 animate-bounce">/</span>
          <span className="text-teal-400 animate-pulse">&gt;</span>
        </div>

        {/* Right-side Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-left">
          <a
            href="mailto:mrakshith.08@gmail.com?subject=Portfolio Inquiry&body=Hi Rakshith"
            target="_blank"
            className="hover:text-rose-400 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/rakshith-manjunath/"
            target="_blank"
            className="hover:text-rose-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
