import { ItemList } from "./itemList";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0" aria-label="Página inicial">
          <img
            src="/logo.png"
            alt="Logotipo"
            className="h-10 w-auto object-contain"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          <ItemList label="#home" href="/" />
          <ItemList label="Pricing" href="/pricing" />
          <ItemList label="Produtos" href="/produtos" />
          <ItemList label="About" href="#about" />
        </ul>

        <a
          href="/contactos"
          className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Entre em contacto
        </a>
      </nav>
    </header>
  );
}
