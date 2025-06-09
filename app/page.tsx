import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BookOpen, Code, Users, Lightbulb, Accessibility } from "lucide-react"
import AccessibilityControls from "@/components/accessibility-controls"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Banner de acessibilidade */}
      <div className="bg-green-700 text-white p-4 text-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base">Este site segue as diretrizes WCAG 2.1 para acessibilidade digital</p>
          <AccessibilityControls />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Tornando a Web Acessível para Todos
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Recursos, ferramentas e conhecimento para desenvolvedores e familiares criarem experiências digitais
                mais inclusivas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/aprendizado">Comece a Aprender</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/guia-desenvolvedor">Guia para Desenvolvedores</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl w-full h-full aspect-w-16 aspect-h-9">
                <img
                  src="webparatodos.png"
                  alt="Imagem de uma tela de computador com elementos de acessibilidade"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Recursos para Acessibilidade Digital
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Área de Aprendizado</CardTitle>
                <CardDescription>Artigos, vídeos e tutoriais sobre acessibilidade digital</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aprenda sobre diferentes tipos de deficiências e como criar conteúdo acessível para cada necessidade.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/aprendizado" className="flex items-center justify-between">
                    Explorar recursos <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Guia para Desenvolvedores</CardTitle>
                <CardDescription>Implementação técnica de acessibilidade em projetos web</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Aprenda a usar HTML semântico, ARIA, e JavaScript para criar interfaces acessíveis.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/guia-desenvolvedor" className="flex items-center justify-between">
                    Ver guia técnico <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Ferramentas de Simulação</CardTitle>
                <CardDescription>Experimente como pessoas com deficiências navegam na web</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Simuladores de deficiência visual, auditiva e motora para entender diferentes experiências.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/ferramentas" className="flex items-center justify-between">
                    Testar ferramentas <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Tecnologias Assistivas */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Tecnologias Assistivas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-green-600" />
                Leitores de Tela
              </h3>
              <p className="mb-4">
                Os leitores de tela são essenciais para pessoas com deficiência visual navegarem na web. Conheça os
                principais:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>NVDA (NonVisual Desktop Access) - Gratuito e open source para Windows</li>
                <li>JAWS (Job Access With Speech) - Solução profissional para Windows</li>
                <li>VoiceOver - Integrado aos dispositivos Apple (macOS, iOS)</li>
                <li>TalkBack - Integrado aos dispositivos Android</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Navegação por Teclado
              </h3>
              <p className="mb-4">
                Muitos usuários com deficiências motoras dependem exclusivamente do teclado para navegar:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Tab e Shift+Tab - Navegar entre elementos interativos</li>
                <li>Enter - Ativar links e botões</li>
                <li>Teclas de seta - Navegar em menus e listas</li>
                <li>Espaço - Alternar checkboxes e botões</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Junte-se à nossa comunidade de acessibilidade</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Compartilhe conhecimento, faça perguntas e conecte-se com outros desenvolvedores e familiares comprometidos
            com a inclusão digital.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-green-700 hover:bg-gray-100" asChild>
            <Link href="/contato">Entrar em Contato</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
