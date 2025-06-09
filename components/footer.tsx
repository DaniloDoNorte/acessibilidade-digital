import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Acessibilidade Digital</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Recursos, ferramentas e conhecimento para desenvolvedores e familiares criarem experiências digitais mais
              inclusivas.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Links Rápidos</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/aprendizado"
                  className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  Área de Aprendizado
                </Link>
              </li>
              <li>
                <Link
                  href="/guia-desenvolvedor"
                  className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  Guia para Desenvolvedores
                </Link>
              </li>
              <li>
                <Link
                  href="/ferramentas"
                  className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  Ferramentas de Simulação
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recursos Externos</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  WCAG 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/WAI/ARIA/apg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  ARIA Authoring Practices
                </a>
              </li>
              <li>
                <a
                  href="https://www.a11yproject.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  The A11Y Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Acessibilidade Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
