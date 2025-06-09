import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DiretrizesWCAGPage() {
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
            Entendendo as Diretrizes WCAG 2.1
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em: 22 de Maio de 2023 • Tempo de leitura: 12 minutos
          </p>
        </div>

        <div className="prose prose-green dark:prose-invert max-w-none">
          <h2><strong>O que são as Diretrizes WCAG?</strong></h2>
          <br />
          <p>
            As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) são desenvolvidas pelo World Wide Web Consortium
            (W3C) através da Iniciativa de Acessibilidade Web (WAI). Estas diretrizes fornecem um padrão internacional
            para tornar o conteúdo web mais acessível para pessoas com deficiências.
          </p>

          <p>
            A versão atual, WCAG 2.1, foi publicada em junho de 2018 e expande as diretrizes WCAG 2.0 de 2008,
            adicionando novos critérios para abordar dispositivos móveis, pessoas com baixa visão e pessoas com
            deficiências cognitivas e de aprendizagem.
          </p>
          
          <br/>

          <h2><strong>Níveis de Conformidade</strong></h2>
          <br />
          <p>
            As WCAG 2.1 têm três níveis de conformidade, cada um representando um nível crescente de acessibilidade:
          </p>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nível</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Recomendação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">A</TableCell>
                  <TableCell>
                    Nível básico de acessibilidade. Aborda as barreiras mais significativas para usuários com
                    deficiências.
                  </TableCell>
                  <TableCell>Mínimo obrigatório para sites básicos</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">AA</TableCell>
                  <TableCell>
                    Nível intermediário que aborda barreiras significativas adicionais. Este é o nível mais comumente
                    visado e referenciado em políticas e legislações.
                  </TableCell>
                  <TableCell>Recomendado para a maioria dos sites</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">AAA</TableCell>
                  <TableCell>Nível mais alto de acessibilidade. Aborda barreiras mais sutis e específicas.</TableCell>
                  <TableCell>Ideal para sites com foco em acessibilidade</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2><strong>Os Quatro Princípios das WCAG</strong></h2>
          <br />
          <p>
            As WCAG são organizadas em torno de quatro princípios fundamentais, frequentemente referidos como POUR:
            Perceptível, Operável, Compreensível e Robusto.
          </p>

          <br />

          <h3><strong>1. Perceptível</strong></h3>
          <p>
            As informações e os componentes da interface do usuário devem ser apresentados de maneira que os usuários
            possam percebê-los.
          </p>

          <br />

          <h4><strong>Principais diretrizes:</strong></h4>
          <ul>
            <li>
              <strong>1.1 Alternativas em Texto:</strong> Fornecer alternativas em texto para qualquer conteúdo não
              textual
            </li>
            <li>
              <strong>1.2 Mídia Baseada em Tempo:</strong> Fornecer alternativas para mídia baseada em tempo (vídeos,
              áudios)
            </li>
            <li>
              <strong>1.3 Adaptável:</strong> Criar conteúdo que possa ser apresentado de diferentes maneiras sem perder
              informação
            </li>
            <li>
              <strong>1.4 Discernível:</strong> Facilitar aos usuários ver e ouvir o conteúdo, incluindo a separação do
              primeiro plano do plano de fundo
            </li>
          </ul>

          <br />

          <h3><strong>2. Operável</strong></h3>
          <p>Os componentes de interface de usuário e a navegação devem ser operáveis por todos os usuários.</p>

          <br />

          <h4><strong>Principais diretrizes:</strong></h4>
          <ul>
            <li>
              <strong>2.1 Acessível por Teclado:</strong> Tornar todas as funcionalidades disponíveis a partir de um
              teclado
            </li>
            <li>
              <strong>2.2 Tempo Suficiente:</strong> Fornecer aos usuários tempo suficiente para ler e usar o conteúdo
            </li>
            <li>
              <strong>2.3 Convulsões e Reações Físicas:</strong> Não projetar conteúdo de uma forma conhecida por causar
              convulsões ou reações físicas
            </li>
            <li>
              <strong>2.4 Navegável:</strong> Fornecer maneiras de ajudar os usuários a navegar, encontrar conteúdo e
              determinar onde estão
            </li>
            <li>
              <strong>2.5 Modalidades de Entrada:</strong> Facilitar aos usuários a operação de funcionalidades através
              de várias entradas além do teclado
            </li>
          </ul>

          <br />

          <h3><strong>3. Compreensível</strong></h3>
          <p>As informações e a operação da interface do usuário devem ser compreensíveis.</p>

          <br />

          <h4><strong>Principais diretrizes:</strong></h4>
          <ul>
            <li>
              <strong>3.1 Legível:</strong> Tornar o conteúdo de texto legível e compreensível
            </li>
            <li>
              <strong>3.2 Previsível:</strong> Fazer com que as páginas da web apareçam e operem de maneira previsível
            </li>
            <li>
              <strong>3.3 Assistência de Entrada:</strong> Ajudar os usuários a evitar e corrigir erros
            </li>
          </ul>

          <br />

          <h3><strong>4. Robusto</strong></h3>
          <p>
            O conteúdo deve ser robusto o suficiente para que possa ser interpretado de forma confiável por uma ampla
            variedade de agentes de usuário, incluindo tecnologias assistivas.
          </p>

          <br />

          <h4><strong>Principais diretrizes:</strong></h4>
          <ul>
            <li>
              <strong>4.1 Compatível:</strong> Maximizar a compatibilidade com agentes de usuário atuais e futuros,
              incluindo tecnologias assistivas
            </li>
          </ul>

          <h2>Critérios de Sucesso Importantes</h2>
          <p>
            Cada diretriz contém critérios de sucesso testáveis. Aqui estão alguns dos critérios mais importantes que
            você deve conhecer:
          </p>

          <br />

          <h3>Nível A (Essencial)</h3>
          <ul>
            <li>
              <strong>1.1.1 Conteúdo Não Textual:</strong> Todo conteúdo não textual tem uma alternativa textual
            </li>
            <li>
              <strong>1.3.1 Informações e Relações:</strong> A estrutura e as relações transmitidas através da
              apresentação podem ser determinadas programaticamente
            </li>
            <li>
              <strong>2.1.1 Teclado:</strong> Toda funcionalidade está disponível a partir de um teclado
            </li>
            <li>
              <strong>2.4.1 Ignorar Blocos:</strong> Existe um mecanismo para ignorar blocos de conteúdo que são
              repetidos
            </li>
            <li>
              <strong>2.4.2 Título da Página:</strong> As páginas web têm títulos que descrevem o tópico ou propósito
            </li>
            <li>
              <strong>3.3.2 Etiquetas ou Instruções:</strong> Etiquetas ou instruções são fornecidas quando o conteúdo
              requer entrada do usuário
            </li>
          </ul>

          <br />

          <h3>Nível AA (Recomendado)</h3>
          <ul>
            <li>
              <strong>1.4.3 Contraste (Mínimo):</strong> A apresentação visual de texto tem uma relação de contraste de
              pelo menos 4.5:1
            </li>
            <li>
              <strong>1.4.4 Redimensionar texto:</strong> O texto pode ser redimensionado sem tecnologia assistiva até
              200% sem perda de conteúdo ou funcionalidade
            </li>
            <li>
              <strong>2.4.6 Cabeçalhos e Rótulos:</strong> Os cabeçalhos e rótulos descrevem o tópico ou propósito
            </li>
            <li>
              <strong>2.4.7 Foco Visível:</strong> Qualquer interface de usuário operável por teclado tem um modo de
              operação onde o indicador de foco do teclado está visível
            </li>
            <li>
              <strong>3.2.3 Navegação Consistente:</strong> Os mecanismos de navegação que são repetidos em múltiplas
              páginas ocorrem na mesma ordem relativa
            </li>
          </ul>

          <br />

          <h3>Nível AAA (Ideal)</h3>
          <ul>
            <li>
              <strong>1.4.6 Contraste (Aprimorado):</strong> A apresentação visual de texto tem uma relação de contraste
              de pelo menos 7:1
            </li>
            <li>
              <strong>2.2.3 Sem Tempo:</strong> O tempo não é uma parte essencial do evento ou atividade apresentada
              pelo conteúdo
            </li>
            <li>
              <strong>2.4.10 Cabeçalhos de Seção:</strong> Os cabeçalhos de seção são usados para organizar o conteúdo
            </li>
            <li>
              <strong>3.1.5 Nível de Leitura:</strong> Quando o texto requer capacidade de leitura mais avançada, está
              disponível conteúdo suplementar ou uma versão que não exige capacidade de leitura mais avançada
            </li>
          </ul>

          <br />

          <h2>Implementando as WCAG em Seu Site</h2>
          <p>Implementar as WCAG pode parecer uma tarefa assustadora, mas você pode abordá-la de forma sistemática:</p>

          <br />

          <ol>
            <li>
              <strong>Avalie seu site atual</strong> usando ferramentas automatizadas como o WAVE, axe ou Lighthouse
            </li>
            <li>
              <strong>Priorize os problemas</strong> começando pelos critérios de nível A, depois AA
            </li>
            <li>
              <strong>Crie um plano de ação</strong> para abordar os problemas identificados
            </li>
            <li>
              <strong>Implemente as correções</strong> e teste novamente
            </li>
            <li>
              <strong>Realize testes com usuários reais</strong> que utilizam tecnologias assistivas
            </li>
            <li>
              <strong>Documente sua conformidade</strong> e crie uma declaração de acessibilidade
            </li>
          </ol>

          <h2>Ferramentas para Verificar Conformidade com WCAG</h2>
          <ul>
            <li>
              <a
                href="https://wave.webaim.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                WAVE (Web Accessibility Evaluation Tool) <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://www.deque.com/axe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                axe DevTools <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/web/tools/lighthouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Google Lighthouse <ExternalLink className="h-3 w-3" />
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
          </ul>

          <h2>Lista de Verificação Rápida WCAG 2.1 AA</h2>
          <p>Use esta lista de verificação para uma avaliação rápida da conformidade com WCAG 2.1 nível AA:</p>

          <div className="space-y-2 mt-4">
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">Todas as imagens têm texto alternativo apropriado</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">Vídeos têm legendas e transcrições</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">O site é totalmente navegável por teclado</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">A ordem de foco do teclado é lógica e intuitiva</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">O indicador de foco é visível</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">O contraste de cores atende aos requisitos mínimos (4.5:1 para texto normal)</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">O texto pode ser redimensionado até 200% sem perda de conteúdo</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">A página tem um título descritivo</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">Os cabeçalhos (h1-h6) são usados corretamente e em ordem hierárquica</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">Os formulários têm labels associados e mensagens de erro claras</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Próximos Passos</h3>
            <p className="mb-4">
              Agora que você entende as diretrizes WCAG 2.1, recomendamos explorar os seguintes recursos:
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
                  href="/aprendizado/formularios-acessiveis"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Formulários Acessíveis: Melhores Práticas
                </Link>
              </li>
              <li>
                <Link href="/guia-desenvolvedor" className="text-green-600 dark:text-green-400 hover:underline">
                  Guia para Desenvolvedores
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
