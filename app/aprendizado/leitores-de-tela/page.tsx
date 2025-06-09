import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LeitoresDeTela() {
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
            Como Leitores de Tela Funcionam
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em: 5 de Junho de 2023 • Tempo de leitura: 10 minutos • Tipo: Vídeo
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg mb-8 p-6">
          <p className="text-lg mb-4 text-center font-semibold">
            Vídeo: Como Leitores de Tela Funcionam
          </p>

          <div className="relative w-full pb-[56.25%] rounded-md overflow-hidden mb-6">
            <iframe
              src="https://www.youtube.com/embed/e5RlZcl0jzk?si=Oep0ylEfqCwXyTMG"
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
          <h2>O que são Leitores de Tela?</h2>
          <p>
            Leitores de tela são softwares que permitem que pessoas cegas ou com deficiência visual acessem conteúdo
            digital. Eles funcionam convertendo texto e outros elementos da interface em fala sintetizada ou saída
            Braille, permitindo que os usuários naveguem e interajam com aplicativos e sites sem precisar ver a tela.
          </p>

          <br />

          <h2>Principais Leitores de Tela</h2>

          <Tabs defaultValue="nvda" className="mb-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="nvda">NVDA</TabsTrigger>
              <TabsTrigger value="jaws">JAWS</TabsTrigger>
              <TabsTrigger value="voiceover">VoiceOver</TabsTrigger>
              <TabsTrigger value="talkback">TalkBack</TabsTrigger>
            </TabsList>
            <TabsContent value="nvda" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">NVDA (NonVisual Desktop Access)</h3>
              <p className="mb-2">
                NVDA é um leitor de tela gratuito e de código aberto para Windows. É uma das opções mais populares
                devido à sua qualidade e acessibilidade.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gratuito e open source</li>
                <li>Compatível com Windows</li>
                <li>Suporta saída em Braille</li>
                <li>Pode ser executado a partir de um pendrive</li>
                <li>Comunidade ativa de desenvolvimento</li>
              </ul>
              <p className="mt-2">
                <a
                  href="https://www.nvaccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                >
                  Site oficial do NVDA <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </TabsContent>
            <TabsContent value="jaws" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">JAWS (Job Access With Speech)</h3>
              <p className="mb-2">
                JAWS é um leitor de tela comercial para Windows, conhecido por seu suporte robusto a aplicativos
                empresariais e recursos avançados.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Solução comercial (paga)</li>
                <li>Compatível com Windows</li>
                <li>Amplamente utilizado em ambientes corporativos</li>
                <li>Suporte técnico profissional</li>
                <li>Recursos avançados para usuários profissionais</li>
              </ul>
              <p className="mt-2">
                <a
                  href="https://www.freedomscientific.com/products/software/jaws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                >
                  Site oficial do JAWS <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </TabsContent>
            <TabsContent value="voiceover" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">VoiceOver</h3>
              <p className="mb-2">
                VoiceOver é o leitor de tela integrado aos dispositivos Apple, incluindo Mac, iPhone, iPad e Apple
                Watch.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Integrado aos sistemas operacionais da Apple</li>
                <li>Disponível em macOS, iOS e iPadOS</li>
                <li>Não requer instalação adicional</li>
                <li>Integração profunda com o ecossistema Apple</li>
                <li>Suporte a gestos em dispositivos touchscreen</li>
              </ul>
              <p className="mt-2">
                <a
                  href="https://www.apple.com/accessibility/vision/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                >
                  Informações sobre VoiceOver <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </TabsContent>
            <TabsContent value="talkback" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">TalkBack</h3>
              <p className="mb-2">
                TalkBack é o leitor de tela integrado aos dispositivos Android, permitindo que usuários cegos ou com
                baixa visão utilizem smartphones e tablets com este sistema operacional.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Integrado ao sistema operacional Android</li>
                <li>Disponível na maioria dos dispositivos Android</li>
                <li>Suporte a gestos em tela touchscreen</li>
                <li>Integração com o teclado Braille</li>
                <li>Exploração por toque</li>
              </ul>
              <p className="mt-2">
                <a
                  href="https://support.google.com/accessibility/android/answer/6283677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                >
                  Informações sobre TalkBack <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </TabsContent>
          </Tabs>

          <h2>Como os Leitores de Tela Interpretam o Conteúdo Web</h2>
          <p>
            Os leitores de tela navegam pelo DOM (Document Object Model) de uma página web, anunciando elementos e seu
            conteúdo. Eles dependem fortemente da estrutura semântica do HTML e de atributos de acessibilidade para
            fornecer uma experiência significativa.
          </p>

          <h3>Processo de Interpretação</h3>
          <ol>
            <li>
              <strong>Análise do DOM:</strong> O leitor de tela analisa a estrutura do documento HTML
            </li>
            <li>
              <strong>Criação de uma árvore de acessibilidade:</strong> Transforma o DOM em uma representação que pode
              ser navegada e anunciada
            </li>
            <li>
              <strong>Navegação pelo usuário:</strong> O usuário navega pela árvore de acessibilidade usando comandos de
              teclado específicos
            </li>
            <li>
              <strong>Anúncio de elementos:</strong> O leitor anuncia informações sobre cada elemento, incluindo tipo,
              nome, estado e propriedades
            </li>
          </ol>

          <h2>Como os Usuários Navegam com Leitores de Tela</h2>
          <p>
            Usuários de leitores de tela desenvolvem técnicas específicas para navegar eficientemente pelo conteúdo
            digital:
          </p>

          <h3>Técnicas de Navegação</h3>
          <ul>
            <li>
              <strong>Navegação por cabeçalhos:</strong> Pulando entre elementos h1-h6 para entender a estrutura da
              página
            </li>
            <li>
              <strong>Navegação por landmarks:</strong> Movendo-se entre regiões principais da página (header, nav,
              main, footer)
            </li>
            <li>
              <strong>Navegação por links:</strong> Percorrendo todos os links da página
            </li>
            <li>
              <strong>Navegação por formulários:</strong> Movendo-se entre campos de formulário
            </li>
            <li>
              <strong>Leitura contínua:</strong> Ouvindo todo o conteúdo da página sequencialmente
            </li>
          </ul>

          <h3>Comandos Comuns</h3>
          <p>Cada leitor de tela tem seus próprios comandos, mas alguns padrões são comuns:</p>

          <ul>
            <li>
              <strong>Tab:</strong> Move para o próximo elemento interativo (links, botões, campos de formulário)
            </li>
            <li>
              <strong>H:</strong> Move para o próximo cabeçalho
            </li>
            <li>
              <strong>1-6:</strong> Move para cabeçalhos de nível específico (h1-h6)
            </li>
            <li>
              <strong>F:</strong> Move para o próximo formulário
            </li>
            <li>
              <strong>T:</strong> Move para a próxima tabela
            </li>
            <li>
              <strong>Setas:</strong> Navegação linear pelo conteúdo
            </li>
          </ul>

          <h2>Otimizando seu Site para Leitores de Tela</h2>
          <p>Para garantir que seu site funcione bem com leitores de tela, siga estas práticas recomendadas:</p>

          <h3>HTML Semântico</h3>
          <p>Use elementos HTML com significado semântico em vez de divs genéricos:</p>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- Ruim -->
<div class="header">
  <div class="logo">Meu Site</div>
  <div class="nav">
    <div class="nav-item">Home</div>
    <div class="nav-item">Sobre</div>
  </div>
</div>

<!-- Bom -->
<header>
  <h1>Meu Site</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/sobre">Sobre</a></li>
    </ul>
  </nav>
</header>`}
            </code>
          </pre>

          <br /> 

          <h3>Texto Alternativo para Imagens</h3>
          <p>Forneça descrições significativas para imagens:</p>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- Ruim -->
<img src="grafico.png">

<!-- Bom -->
<img src="grafico.png" alt="Gráfico mostrando o aumento de 30% nas vendas durante o primeiro trimestre de 2023">`}
            </code>
          </pre>

          <br /> 

          <h3>Rótulos para Formulários</h3>
          <p>Associe explicitamente labels aos campos de formulário:</p>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- Ruim -->
<div>
  Nome:
  <input type="text">
</div>

<!-- Bom -->
<div>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
</div>`}
            </code>
          </pre>

          <br /> 

          <h3>ARIA quando necessário</h3>
          <p>Use atributos ARIA para complementar o HTML semântico quando necessário:</p>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- Menu expansível -->
<button aria-expanded="false" aria-controls="menu">
  Menu
</button>
<ul id="menu" hidden>
  <li><a href="/">Home</a></li>
  <li><a href="/produtos">Produtos</a></li>
</ul>`}
            </code>
          </pre>

          <br /> 

          <h2>Testando seu Site com Leitores de Tela</h2>
          <p>É essencial testar seu site com leitores de tela reais para garantir uma boa experiência:</p>

          <ol>
            <li>
              <strong>Aprenda os básicos:</strong> Familiarize-se com os comandos básicos do leitor de tela que você
              está testando
            </li>
            <li>
              <strong>Teste a navegação:</strong> Verifique se é possível navegar por toda a página usando apenas o
              teclado
            </li>
            <li>
              <strong>Verifique a estrutura:</strong> Navegue pelos cabeçalhos para verificar se a hierarquia faz
              sentido
            </li>
            <li>
              <strong>Teste formulários:</strong> Verifique se todos os campos têm labels e se as mensagens de erro são
              anunciadas
            </li>
            <li>
              <strong>Verifique imagens:</strong> Confirme se as imagens têm texto alternativo apropriado
            </li>
            <li>
              <strong>Teste componentes interativos:</strong> Verifique se widgets personalizados (carrosséis, abas,
              menus) são utilizáveis
            </li>
          </ol>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Próximos Passos</h3>
            <p className="mb-4">
              Agora que você entende como os leitores de tela funcionam, recomendamos explorar os seguintes recursos:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/aprendizado/navegacao-teclado"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Navegação por Teclado: Um Guia Completo
                </Link>
              </li>
              <li>
                <Link
                  href="/aprendizado/testando-acessibilidade"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Testando a Acessibilidade do Seu Site
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
