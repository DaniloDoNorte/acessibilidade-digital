import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoresContrastePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/aprendizado" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Aprendizado
            </Link>
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Cores e Contraste na Acessibilidade Web
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em: 18 de Junho de 2023 • Tempo de leitura: 8 minutos • Tipo: Vídeo
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg mb-8 p-6">
          <p className="text-lg mb-4 text-center font-semibold">
            Vídeo: Cores e Contraste na Acessibilidade Web
          </p>

          <div className="relative w-full pb-[56.25%] rounded-md overflow-hidden mb-6">
            <iframe
              src="https://www.youtube.com/embed/jsgVJsY4_WM?si=SRLdSxjQcBMdo8aM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="prose prose-green dark:prose-invert max-w-none">
          <h2>A Importância do Contraste de Cores</h2>
          <p>
            O contraste adequado entre texto e fundo é essencial para garantir que o conteúdo seja legível para todos os
            usuários, especialmente para:
          </p>
          <ul>
            <li>Pessoas com baixa visão</li>
            <li>Pessoas com daltonismo</li>
            <li>Usuários em condições de iluminação desafiadoras (luz solar direta)</li>
            <li>Pessoas que usam dispositivos com telas de baixo contraste</li>
            <li>Usuários idosos (a percepção de contraste diminui com a idade)</li>
          </ul>

          <h2>Requisitos de Contraste WCAG</h2>
          <p>
            As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) estabelecem requisitos específicos para contraste:
          </p>

          <Tabs defaultValue="aa" className="mb-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
              <TabsTrigger value="aa">Nível AA (Recomendado)</TabsTrigger>
              <TabsTrigger value="aaa">Nível AAA (Ideal)</TabsTrigger>
            </TabsList>
            <TabsContent value="aa" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">Nível AA (WCAG 2.1)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Texto normal (menos de 18pt):</strong> Razão de contraste mínima de 4.5:1
                </li>
                <li>
                  <strong>Texto grande (18pt ou 14pt em negrito ou maior):</strong> Razão de contraste mínima de 3:1
                </li>
                <li>
                  <strong>Componentes de interface e gráficos:</strong> Razão de contraste mínima de 3:1 contra cores
                  adjacentes
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="aaa" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">Nível AAA (WCAG 2.1)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Texto normal (menos de 18pt):</strong> Razão de contraste mínima de 7:1
                </li>
                <li>
                  <strong>Texto grande (18pt ou 14pt em negrito ou maior):</strong> Razão de contraste mínima de 4.5:1
                </li>
              </ul>
            </TabsContent>
          </Tabs>

          <h2>Exemplos de Contraste</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contraste Insuficiente</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-200 rounded-md">
                  <p className="text-gray-500 m-0">Texto cinza claro em fundo cinza claro (1.5:1)</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-md">
                  <p className="text-blue-300 m-0">Texto azul claro em fundo azul claro (1.8:1)</p>
                </div>
                <div className="p-4 bg-yellow-200 rounded-md">
                  <p className="text-orange-300 m-0">Texto laranja em fundo amarelo (2.5:1)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Contraste Adequado</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-md">
                  <p className="text-gray-900 m-0">Texto preto em fundo cinza claro (15:1)</p>
                </div>
                <div className="p-4 bg-blue-700 rounded-md">
                  <p className="text-white m-0">Texto branco em fundo azul escuro (8:1)</p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-md">
                  <p className="text-green-800 m-0">Texto verde escuro em fundo amarelo claro (10:1)</p>
                </div>
              </div>
            </div>
          </div>

          <h2>Daltonismo e Percepção de Cores</h2>
          <p>
            Aproximadamente 8% dos homens e 0,5% das mulheres têm alguma forma de daltonismo. Os tipos mais comuns são:
          </p>

          <ul>
            <li>
              <strong>Protanopia:</strong> Dificuldade para perceber a cor vermelha
            </li>
            <li>
              <strong>Deuteranopia:</strong> Dificuldade para perceber a cor verde
            </li>
            <li>
              <strong>Tritanopia:</strong> Dificuldade para perceber a cor azul (mais rara)
            </li>
          </ul>

          <h3>Dicas para Design Acessível para Daltonismo</h3>
          <ol>
            <li>
              <strong>Não dependa apenas da cor</strong> para transmitir informações importantes
            </li>
            <li>
              <strong>Use padrões, texturas ou ícones</strong> junto com cores para diferenciar elementos
            </li>
            <li>
              <strong>Escolha combinações de cores</strong> que funcionem bem para pessoas com daltonismo (evite
              vermelho/verde sem diferença de luminosidade)
            </li>
            <li>
              <strong>Teste seu design</strong> com simuladores de daltonismo
            </li>
          </ol>

          <div className="not-prose mb-8">
            <h3 className="text-lg font-semibold mb-4">Exemplos de Uso de Cor com Elementos Adicionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Apenas Cor (Problemático)</h4>
                <div className="border rounded-md overflow-hidden">
                  <div className="p-3 bg-red-100 text-red-800">Erro: Formulário inválido</div>
                  <div className="p-3 bg-yellow-100 text-yellow-800">Aviso: Dados incompletos</div>
                  <div className="p-3 bg-green-100 text-green-800">Sucesso: Formulário enviado</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Cor + Ícones + Texto (Acessível)</h4>
                <div className="border rounded-md overflow-hidden">
                  <div className="p-3 bg-red-100 text-red-800 flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>
                      <strong>Erro:</strong> Formulário inválido
                    </span>
                  </div>
                  <div className="p-3 bg-yellow-100 text-yellow-800 flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                    <span>
                      <strong>Aviso:</strong> Dados incompletos
                    </span>
                  </div>
                  <div className="p-3 bg-green-100 text-green-800 flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>
                      <strong>Sucesso:</strong> Formulário enviado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>Ferramentas para Verificar Contraste</h2>
          <p>
            Existem várias ferramentas que podem ajudar a verificar se suas combinações de cores atendem aos requisitos
            de contraste:
          </p>

          <ul>
            <li>
              <a
                href="https://webaim.org/resources/contrastchecker/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                WebAIM Contrast Checker <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://contrast-ratio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Contrast Ratio <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://color.a11y.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Color Contrast Accessibility Validator <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Figma Plugin: A11y - Color Contrast Checker <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>

          <h2>Simuladores de Daltonismo</h2>
          <p>Para testar como seu site aparece para pessoas com daltonismo, você pode usar estas ferramentas:</p>

          <ul>
            <li>
              <a
                href="https://www.toptal.com/designers/colorfilter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Toptal Color Blind Filter <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://colororacle.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Color Oracle <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Extensão Chrome: Colorblindly <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>

          <h2>Melhores Práticas para Uso de Cores</h2>
          <ol>
            <li>
              <strong>Verifique o contraste</strong> entre texto e fundo usando as ferramentas mencionadas
            </li>
            <li>
              <strong>Não dependa apenas da cor</strong> para transmitir informações importantes
            </li>
            <li>
              <strong>Forneça um modo de alto contraste</strong> ou tema escuro como opção
            </li>
            <li>
              <strong>Teste seu design</strong> com simuladores de daltonismo
            </li>
            <li>
              <strong>Use combinações de cores seguras</strong> que funcionem bem para todos os tipos de daltonismo
            </li>
            <li>
              <strong>Adicione padrões ou texturas</strong> para diferenciar áreas em gráficos e mapas
            </li>
            <li>
              <strong>Inclua rótulos e legendas</strong> em gráficos e visualizações de dados
            </li>
          </ol>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Próximos Passos</h3>
            <p className="mb-4">
              Agora que você entende a importância do contraste e uso de cores, recomendamos explorar os seguintes
              recursos:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/aprendizado/testando-acessibilidade"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Testando a Acessibilidade do Seu Site
                </Link>
              </li>
              <li>
                <Link
                  href="/aprendizado/diretrizes-wcag"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Entendendo as Diretrizes WCAG 2.1
                </Link>
              </li>
              <li>
                <Link href="/ferramentas" className="text-green-600 dark:text-green-400 hover:underline">
                  Ferramentas de Simulação
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
