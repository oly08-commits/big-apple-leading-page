import React from "react";

export function Footer() {
  return (
    <footer id="about" className="border-t border-blue-100 bg-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="/" aria-label="Página inicial">
              <img src="/logo.png" alt="Logotipo" className="h-12 w-auto" />
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              Simplificamos as tuas tarefas para que possas focar no que
              realmente importa. Uma solução simples, rápida e eficiente.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Navegação</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-gray-600 transition hover:text-blue-600"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="text-sm text-gray-600 transition hover:text-blue-600"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="/produtos"
                  className="text-sm text-gray-600 transition hover:text-blue-600"
                >
                  Produtos
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-600 transition hover:text-blue-600"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contactos</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:contacto@empresa.com"
                  className="transition hover:text-blue-600"
                >
                  contacto@empresa.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+244000000000"
                  className="transition hover:text-blue-600"
                >
                  +244 000 000 000
                </a>
              </li>

              <li>Angola</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-blue-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="text-sm text-gray-500 transition hover:text-blue-600"
            >
              Privacidade
            </a>

            <a
              href="/terms"
              className="text-sm text-gray-500 transition hover:text-blue-600"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
