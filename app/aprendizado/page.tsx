import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, ChevronRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Introdução à Acessibilidade Web",
    description: "Entenda os princípios básicos da acessibilidade web e por que ela é importante.",
    type: "article",
    level: "iniciante",
    href: "/aprendizado/introducao-acessibilidade",
  },
  {
    id: 2,
    title: "Entendendo as Diretrizes WCAG 2.1",
    description: "Um guia completo sobre as Diretrizes de Acessibilidade para Conteúdo Web.",
    type: "article",
    level: "intermediário",
    href: "/aprendizado/diretrizes-wcag",
  },
  {
    id: 3,
    title: "Como Leitores de Tela Funcionam",
    description: "Aprenda como os leitores de tela interpretam seu site e como otimizá-lo.",
    type: "video",
    level: "intermediário",
    href: "/aprendizado/leitores-de-tela",
  },
  {
    id: 4,
    title: "Navegação por Teclado: Um Guia Completo",
    description: "Tudo o que você precisa saber para garantir que seu site seja navegável por teclado.",
    type: "article",
    level: "intermediário",
    href: "/aprendizado/navegacao-teclado",
  },
  {
    id: 5,
    title: "Cores e Contraste na Acessibilidade Web",
    description: "Aprenda a escolher cores acessíveis e verificar o contraste adequado.",
    type: "video",
    level: "iniciante",
    href: "/aprendizado/cores-contraste",
  },
  {
    id: 6,
    title: "Formulários Acessíveis: Melhores Práticas",
    description: "Como criar formulários que todos possam usar, independentemente de suas habilidades.",
    type: "article",
    level: "avançado",
    href: "/aprendizado/formularios-acessiveis",
  },
  {
    id: 7,
    title: "Acessibilidade para Conteúdo Multimídia",
    description: "Aprenda a tornar vídeos, áudios e outros conteúdos multimídia acessíveis.",
    type: "article",
    level: "intermediário",
    href: "/aprendizado/multimidia-acessivel",
  },
  {
    id: 8,
    title: "Testando a Acessibilidade do Seu Site",
    description: "Ferramentas e métodos para avaliar e melhorar a acessibilidade do seu site.",
    type: "video",
    level: "avançado",
    href: "/aprendizado/testando-acessibilidade",
  },
]

export default function LearningPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Área de Aprendizado</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Explore nossos recursos educacionais sobre acessibilidade digital e tecnologias assistivas. Temos conteúdo
          para todos os níveis, desde iniciantes até desenvolvedores experientes.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline" className="rounded-full">
            Todos
          </Button>
          <Button variant="outline" className="rounded-full">
            Artigos
          </Button>
          <Button variant="outline" className="rounded-full">
            Vídeos
          </Button>
          <Button variant="outline" className="rounded-full">
            Iniciante
          </Button>
          <Button variant="outline" className="rounded-full">
            Intermediário
          </Button>
          <Button variant="outline" className="rounded-full">
            Avançado
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col h-full">
              <CardHeader>
                {article.type === "article" ? (
                  <FileText className="h-8 w-8 text-green-600 mb-2" />
                ) : article.type === "video" ? (
                  <Video className="h-8 w-8 text-green-600 mb-2" />
                ) : (
                  <BookOpen className="h-8 w-8 text-green-600 mb-2" />
                )}
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 capitalize">
                    {article.level}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{article.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={article.href} className="flex items-center justify-between">
                    Ler mais <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recursos para Familiares</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Se você é familiar ou cuidador de uma pessoa com deficiência, temos recursos específicos para ajudá-lo a
            entender e utilizar tecnologias assistivas.
          </p>
          <Button asChild>
            <Link href="/aprendizado/recursos-familiares">Ver recursos para familiares</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
