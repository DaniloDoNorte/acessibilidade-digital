import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TestandoAcessibilidadePage() {
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
            Testando a Acessibilidade do Seu Site
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em: 10 de Julho de 2023 • Tempo de leitura: 12 minutos • Tipo: Vídeo
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg mb-8 p-6">
          <p className="text-lg mb-4 text-center font-semibold">
            Vídeo: Testando a Acessibilidade do Seu Site
          </p>

          <div className="relative w-full pb-[56.25%] rounded-md overflow-hidden mb-6">
            <iframe
              src="https://www.youtube.com/embed/pzGkeEiVNso?si=Rev2-I4RM3v27uhW"
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
          <h2>A Importância de Testar a Acessibilidade</h2>
          <p>
            Testar a acessibilidade do seu site é um passo crucial para garantir que ele seja utilizável por pessoas com
            diferentes habilidades e necessidades. Assim como testamos funcionalidades, desempenho e compatibilidade com
            navegadores, devemos testar a acessibilidade como parte integral do processo de desenvolvimento.
          </p>

          <p>
            Um processo de teste abrangente combina métodos automatizados e manuais, além de testes com usuários reais
            quando possível. Cada abordagem tem seus pontos fortes e limitações, e juntas fornecem uma visão mais
            completa da acessibilidade do seu site.
          </p>
          
          <br /> 

          <h2>Abordagens para Testes de Acessibilidade</h2>
          <p>
            Existem várias abordagens para testar a acessibilidade de um site. Cada uma tem suas vantagens e
            desvantagens, e é importante entender como cada uma funciona para escolher a melhor combinação para o seu
            projeto.
            </p>

            <br /> 

          <Tabs defaultValue="automatizados" className="mb-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="automatizados">Testes Automatizados</TabsTrigger>
              <TabsTrigger value="manuais">Testes Manuais</TabsTrigger>
              <TabsTrigger value="usuarios">Testes com Usuários</TabsTrigger>
            </TabsList>

            <TabsContent value="automatizados" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">Testes Automatizados</h3>
              <p className="mb-4">
                Ferramentas automatizadas podem identificar rapidamente muitos problemas de acessibilidade, como
                contraste de cores inadequado, falta de texto alternativo em imagens, e problemas de estrutura HTML.
              </p>

              <h4 className="font-medium mb-2">Vantagens:</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Rápidos e eficientes para verificar grandes volumes de conteúdo</li>
                <li>Consistentes e objetivos na aplicação de regras</li>
                <li>Podem ser integrados ao fluxo de desenvolvimento contínuo</li>
                <li>Bom ponto de partida para identificar problemas óbvios</li>
              </ul>

              <h4 className="font-medium mb-2">Limitações:</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Não podem avaliar aspectos subjetivos (como se um texto alternativo é adequado)</li>
                <li>Não detectam todos os problemas de acessibilidade</li>
                <li>Podem gerar falsos positivos ou falsos negativos</li>
                <li>Não avaliam a experiência real do usuário</li>
              </ul>

              <h4 className="font-medium mb-2">Ferramentas Populares:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <a
                    href="https://wave.webaim.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                  >
                    WAVE (Web Accessibility Evaluation Tool) <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.deque.com/axe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                  >
                    axe DevTools <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/web/tools/lighthouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                  >
                    Google Lighthouse <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pa11y/pa11y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                  >
                    Pa11y <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="manuais" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">Testes Manuais</h3>
              <p className="mb-4">
                Testes manuais envolvem a verificação humana de aspectos de acessibilidade que as ferramentas
                automatizadas não conseguem avaliar adequadamente. Isso inclui a navegação por teclado, o uso de
                leitores de tela, e a avaliação da lógica e clareza do conteúdo.
              </p>

              <h4 className="font-medium mb-2">Vantagens:</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Podem avaliar aspectos subjetivos e contextuais</li>
                <li>Identificam problemas que ferramentas automatizadas não detectam</li>
                <li>Fornecem uma perspectiva mais próxima da experiência do usuário</li>
                <li>Ajudam a desenvolver empatia e compreensão das barreiras de acessibilidade</li>
              </ul>

              <h4 className="font-medium mb-2">Limitações:</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Consomem mais tempo que testes automatizados</li>
                <li>Podem ser inconsistentes dependendo do avaliador</li>
                <li>Requerem conhecimento e treinamento em acessibilidade</li>
                <li>Difíceis de escalar para sites grandes</li>
              </ul>

              <h4 className="font-medium mb-2">Técnicas de Teste Manual:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Navegação por teclado:</strong> Navegar pelo site usando apenas Tab, Shift+Tab, Enter e teclas
                  de seta
                </li>
                <li>
                  <strong>Teste com leitores de tela:</strong> Usar NVDA, JAWS, VoiceOver ou TalkBack para navegar pelo
                  site
                </li>
                <li>
                  <strong>Teste de zoom:</strong> Aumentar o zoom do navegador para 200% e verificar a usabilidade
                </li>
                <li>
                  <strong>Teste de contraste:</strong> Verificar visualmente se o texto é legível em diferentes
                  condições
                </li>
                <li>
                  <strong>Teste de formulários:</strong> Verificar se os formulários são utilizáveis e fornecem feedback
                  adequado
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="usuarios" className="mt-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold mb-2">Testes com Usuários</h3>
              <p className="mb-4">
                Testes com usuários reais que têm deficiências fornecem insights valiosos sobre como seu site funciona
                em condições reais. Esses testes revelam problemas que podem não ser detectados por outros métodos.
              </p>

              <h4 className="font-medium mb-2">Vantagens:</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Fornecem feedback direto de pessoas que realmente usam tecnologias assistivas</li>
                <li>Revelam problemas de usabilidade específicos para diferentes deficiências</li>
                <li>Ajudam a entender o impacto real dos problemas de acessibilidade</li>
                <li>Podem identificar soluções inovadoras baseadas na experiência dos usuários</li>
              </ul>

              <h4 className="font-medium mb-2">Limitações:</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Podem ser caros e demorados para organizar</li>
                <li>Requerem recrutamento de participantes com diferentes deficiências</li>
                <li>As experiências individuais podem não representar todos os usuários com deficiências similares</li>
                <li>Podem ser logisticamente desafiadores, especialmente para equipes remotas</li>
              </ul>

              <h4 className="font-medium mb-2">Como Conduzir Testes com Usuários:</h4>
              <ol className="list-decimal pl-5 space-y-1">
                <li>
                  <strong>Recrute participantes</strong> com diferentes deficiências e que usam diferentes tecnologias
                  assistivas
                </li>
                <li>
                  <strong>Crie cenários de teste</strong> que reflitam tarefas reais que os usuários realizariam no site
                </li>
                <li>
                  <strong>Observe sem interferir</strong> enquanto os participantes tentam completar as tarefas
                </li>
                <li>
                  <strong>Colete feedback</strong> sobre dificuldades encontradas e sugestões de melhoria
                </li>
                <li>
                  <strong>Documente os problemas</strong> e priorize-os para correção
                </li>
              </ol>
            </TabsContent>
          </Tabs>

          <h2><strong>Processo de Teste de Acessibilidade:</strong></h2>
          <p>
            Um processo de teste de acessibilidade eficaz combina diferentes abordagens e é integrado ao ciclo de
            desenvolvimento. Aqui está um fluxo de trabalho recomendado:
          </p>

          <ol>
            <li>
              <strong>Testes automatizados iniciais:</strong> Execute ferramentas automatizadas para identificar
              problemas básicos
            </li>
            <li>
              <strong>Correção de problemas óbvios:</strong> Resolva os problemas identificados pelas ferramentas
              automatizadas
            </li>
            <li>
              <strong>Testes manuais:</strong> Realize testes manuais para identificar problemas que as ferramentas
              automatizadas não detectaram
            </li>
            <li>
              <strong>Testes com tecnologias assistivas:</strong> Teste o site com leitores de tela e outras tecnologias
              assistivas
            </li>
            <li>
              <strong>Testes com usuários:</strong> Quando possível, realize testes com usuários reais que têm
              deficiências
            </li>
            <li>
              <strong>Documentação e priorização:</strong> Documente os problemas encontrados e priorize-os com base na
              gravidade e impacto
            </li>
            <li>
              <strong>Correção e verificação:</strong> Corrija os problemas e verifique se as soluções funcionam
              adequadamente
            </li>
            <li>
              <strong>Monitoramento contínuo:</strong> Implemente testes de acessibilidade contínuos como parte do
              processo de desenvolvimento
            </li>
          </ol>

          <h2>Testando Componentes Específicos</h2>

          <br /> 

          <h3><strong>Navegação:</strong></h3>
          <ul>
            <li>Verifique se todos os links têm texto descritivo</li>
            <li>Teste a navegação usando apenas o teclado</li>
            <li>Confirme se o indicador de foco é visível</li>
            <li>Verifique se há links de salto (skip links) para o conteúdo principal</li>
            <li>Teste a estrutura de cabeçalhos com um leitor de tela</li>
          </ul>

          <br /> 

          <h3><strong>Formulários:</strong></h3>
          <ul>
            <li>Verifique se todos os campos têm labels associados</li>
            <li>Teste o preenchimento e envio usando apenas o teclado</li>
            <li>Confirme se as mensagens de erro são claras e acessíveis</li>
            <li>Verifique se os campos obrigatórios são claramente indicados</li>
            <li>Teste com um leitor de tela para confirmar se as instruções são anunciadas</li>
          </ul>

          <br /> 

          <h3><strong>Imagens e Mídia:</strong></h3>
          <ul>
            <li>Verifique se todas as imagens têm texto alternativo apropriado</li>
            <li>Confirme se vídeos têm legendas e transcrições</li>
            <li>Teste os controles de mídia usando apenas o teclado</li>
            <li>Verifique se o conteúdo em movimento pode ser pausado</li>
            <li>Confirme se não há conteúdo que pisca mais de 3 vezes por segundo</li>
          </ul>

          <br /> 

          <h3><strong>Estrutura e Semântica:</strong></h3>
          <ul>
            <li>Verifique se o HTML é semântico e bem estruturado</li>
            <li>Teste a hierarquia de cabeçalhos (h1-h6)</li>
            <li>Confirme se as landmarks ARIA são usadas corretamente</li>
            <li>Verifique se as listas são marcadas corretamente</li>
            <li>Teste a estrutura da página com um leitor de tela</li>
          </ul>

          <br /> 

          <h2 className="text-lg font-semibold mb-1">Ferramentas de Teste Detalhadas</h2>

          <br /> 

          <h3><strong>Ferramentas Automatizadas</strong></h3>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">WAVE</h4>
              <p className="mb-2">
                Ferramenta de avaliação de acessibilidade web que fornece feedback visual sobre problemas de
                acessibilidade diretamente na página.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Disponível como extensão de navegador</li>
                <li>Identifica erros, alertas e recursos de acessibilidade</li>
                <li>Fornece informações sobre contraste de cores</li>
                <li>Mostra a estrutura da página e landmarks</li>
              </ul>
              <a
                href="https://wave.webaim.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
              >
                Acessar WAVE <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">axe DevTools</h4>
              <p className="mb-2">
                Conjunto de ferramentas de teste de acessibilidade que pode ser integrado ao processo de
                desenvolvimento.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Disponível como extensão de navegador e biblioteca JavaScript</li>
                <li>Pode ser integrado a frameworks de teste automatizado</li>
                <li>Fornece orientações para correção de problemas</li>
                <li>Baixa taxa de falsos positivos</li>
              </ul>
              <a
                href="https://www.deque.com/axe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
              >
                Acessar axe DevTools <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <h3><strong>Leitores de Tela para Testes</strong></h3>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">NVDA</h4>
              <p className="mb-2">
                Leitor de tela gratuito e de código aberto para Windows, amplamente utilizado para testes de
                acessibilidade.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Gratuito e open source</li>
                <li>Compatível com Windows</li>
                <li>Comandos básicos relativamente fáceis de aprender</li>
                <li>Pode ser executado a partir de um pendrive</li>
              </ul>
              <a
                href="https://www.nvaccess.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
              >
                Baixar NVDA <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">VoiceOver</h4>
              <p className="mb-2">
                Leitor de tela integrado aos dispositivos Apple, útil para testar em macOS, iOS e iPadOS.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Integrado aos sistemas operacionais da Apple</li>
                <li>Não requer instalação adicional</li>
                <li>Bom para testar em Safari e dispositivos móveis Apple</li>
                <li>Comandos diferentes de outros leitores de tela</li>
              </ul>
              <a
                href="https://www.apple.com/accessibility/vision/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
              >
                Informações sobre VoiceOver <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <h3><strong>Outras Ferramentas Úteis</strong></h3>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Verificadores de Contraste</h4>
              <p className="mb-2">
                Ferramentas para verificar se o contraste entre texto e fundo atende aos requisitos WCAG.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  <a
                    href="https://webaim.org/resources/contrastchecker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    WebAIM Contrast Checker
                  </a>
                </li>
                <li>
                  <a
                    href="https://contrast-ratio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Contrast Ratio
                  </a>
                </li>
                <li>
                  <a
                    href="https://color.a11y.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Color Contrast Accessibility Validator
                  </a>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Simuladores de Deficiência</h4>
              <p className="mb-2">
                Ferramentas que simulam como pessoas com diferentes deficiências percebem seu site.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>
                  <a
                    href="https://www.toptal.com/designers/colorfilter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Toptal Color Blind Filter
                  </a>
                </li>
                <li>
                  <a
                    href="https://chrome.google.com/webstore/detail/funkify-disability-simula/ojcijjdchelkddboickefhnbdpeajdjg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Funkify (Simulador de Deficiências)
                  </a>
                </li>
                <li>
                  <a href="/ferramentas" className="text-green-600 dark:text-green-400 hover:underline">
                    Nossas Ferramentas de Simulação
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <h2>Lista de Verificação de Acessibilidade</h2>
          <p>Use esta lista de verificação como ponto de partida para avaliar a acessibilidade do seu site:</p>

          <div className="space-y-2 mt-4 not-prose">
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
              <p className="m-0">O site é totalmente navegável por teclado</p>
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
              <p className="m-0">A estrutura de cabeçalhos (h1-h6) é lógica e hierárquica</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">O contraste de cores atende aos requisitos mínimos</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">Formulários têm labels associados e mensagens de erro claras</p>
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
              <p className="m-0">O site funciona bem com zoom de 200%</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">O HTML é semântico e bem estruturado</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">Não há conteúdo que pisca mais de 3 vezes por segundo</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">O site é responsivo e funciona em diferentes dispositivos</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <p className="m-0">As instruções não dependem apenas de características sensoriais</p>
            </div>
          </div>
          
          <br /> 


          <h2><strong>Documentando e Corrigindo Problemas</strong></h2>
          <p>
            Após identificar problemas de acessibilidade, é importante documentá-los e corrigi-los de forma sistemática:
          </p>
          
          <br /> 

          <ol>
            <li>
              <strong>Documente cada problema</strong> com detalhes sobre onde ocorre e como reproduzi-lo
            </li>
            <li>
              <strong>Classifique a gravidade</strong> com base no impacto para os usuários e no nível WCAG violado
            </li>
            <li>
              <strong>Priorize as correções</strong> começando pelos problemas mais graves e de maior impacto
            </li>
            <li>
              <strong>Atribua responsabilidades</strong> para correção de cada problema
            </li>
            <li>
              <strong>Verifique as correções</strong> para garantir que resolveram o problema sem criar novos
            </li>
            <li>
              <strong>Mantenha um registro</strong> de problemas corrigidos e pendentes
            </li>
          </ol>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Próximos Passos</h3>
            <p className="mb-4">
              Agora que você sabe como testar a acessibilidade do seu site, recomendamos explorar os seguintes recursos:
            </p>
            <ul className="space-y-2">
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
