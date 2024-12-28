export function Navbar() {
  return (
    <header className="flex justify-center w-full">
      <div className="max-w-[650px] w-full px-4 sm:px-6 md:px-8">
        <div className="py-2 w-full flex justify-between items-end tracking-tighter">
          <div className="font-mono text-sm font-medium">
            <a
              className="flex h-6 items-center border border-transparent px-3 text-sm transition-colors hover:bg-gray-800 hover:text-white"
              href="/"
            >
              MATT WILDER
            </a>
          </div>
          <nav className="items-center font-mono ml-auto flex gap-4 sm:gap-6">
            <a
              className="flex h-6 items-center border border-transparent px-3 text-sm transition-colors hover:bg-gray-800 hover:text-white"
              href="/"
            >
              HOME
            </a>
            <a
              className="flex h-6 items-center border border-transparent px-3 text-sm transition-colors hover:bg-gray-800 hover:text-white"
              href="/projects"
            >
              PROJECTS
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
