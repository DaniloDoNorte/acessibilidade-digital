import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function IntroducaoAcessibilidadePage() {
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
            Introdução à Acessibilidade Web
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em: 15 de Maio de 2023 • Tempo de leitura: 8 minutos
          </p>
        </div>

        <div className="prose prose-green dark:prose-invert max-w-none">
          <h2><strong>O que é Acessibilidade Web?</strong></h2>
          
          <br />

          <p><strong>Acessibilidade web significa que sites, ferramentas e tecnologias são projetados e desenvolvidos para que
          pessoas com deficiências possam utilizá-los. Mais especificamente, as pessoas podem:</strong></p>
          <ul>
            <li>Perceber, entender, navegar e interagir com a web</li>
            <li>Contribuir para a web</li>
          </ul>

          <br />

          <p><strong>A acessibilidade web abrange todas as deficiências que afetam o acesso à web, incluindo:</strong></p>
          <ul>
            <li>Deficiências visuais (cegueira, baixa visão, daltonismo)</li>
            <li>Deficiências auditivas (surdez, dificuldade auditiva)</li>
            <li>Deficiências motoras (dificuldade para usar o mouse, tempo de resposta lento)</li>
            <li>Deficiências cognitivas (dificuldades de aprendizagem, distração fácil)</li>
          </ul>

          <br />

          <h2><strong>Por que a Acessibilidade Web é Importante?</strong></h2>
          <p>
            A web é um recurso cada vez mais importante em muitos aspectos da vida: educação, emprego, governo,
            comércio, saúde, recreação e muito mais. É essencial que a web seja acessível para proporcionar igualdade de
            acesso e oportunidades para pessoas com diversas habilidades.
          </p>

          <br />

          <blockquote>
            <p>
              "A força da web está em sua universalidade. O acesso por todos, independentemente da deficiência, é um
              aspecto essencial."
            </p>
            <footer>— Tim Berners-Lee, inventor da World Wide Web</footer>
          </blockquote>

          <br />

          <h2><strong>Benefícios da Acessibilidade Web</strong></h2>
          <p>
            Implementar a acessibilidade web traz benefícios não apenas para pessoas com deficiências, mas para todos:
          </p>

          <br />

          <h3><strong>Para Pessoas com Deficiências</strong></h3>
          <ul>
            <li>Permite participação igualitária na sociedade digital</li>
            <li>Proporciona independência e autonomia</li>
            <li>Melhora a qualidade de vida</li>
          </ul>

          <br />

          <h3><strong>Para Empresas e Organizações</strong></h3>
          <ul>
            <li>Amplia o público-alvo (aproximadamente 15% da população mundial tem alguma deficiência)</li>
            <li>Melhora a experiência do usuário para todos</li>
            <li>Fortalece a marca e demonstra responsabilidade social</li>
            <li>Reduz riscos legais relacionados à discriminação</li>
            <li>Melhora o SEO (otimização para mecanismos de busca)</li>
          </ul>

          <br />

          <h3><strong>Para Desenvolvedores</strong></h3>
          <ul>
            <li>Incentiva boas práticas de codificação</li>
            <li>Melhora a qualidade geral do código</li>
            <li>Aumenta a compatibilidade com diferentes dispositivos e navegadores</li>
          </ul>

          <br />

          <h2><strong>Princípios Básicos da Acessibilidade Web</strong></h2>
          <p>
            As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) são organizadas em quatro princípios fundamentais:
          </p>

<br />

          <h3>1. Perceptível</h3>
          <p>
            As informações e os componentes da interface do usuário devem ser apresentados de maneira que possam ser
            percebidos pelos usuários.
          </p>
          <ul>
            <li>Fornecer alternativas em texto para conteúdo não textual</li>
            <li>Fornecer legendas e outras alternativas para multimídia</li>
            <li>Criar conteúdo que possa ser apresentado de diferentes maneiras</li>
            <li>Facilitar aos usuários ver e ouvir o conteúdo</li>
          </ul>

          <br />

          <h3>2. Operável</h3>
          <p>Os componentes de interface de usuário e a navegação devem ser operáveis.</p>
          <ul>
            <li>Disponibilizar todas as funcionalidades via teclado</li>
            <li>Dar aos usuários tempo suficiente para ler e usar o conteúdo</li>
            <li>Não projetar conteúdo que possa causar convulsões ou reações físicas</li>
            <li>Ajudar os usuários a navegar e encontrar conteúdo</li>
          </ul>

          <br />

          <h3>3. Compreensível</h3>
          <p>As informações e a operação da interface de usuário devem ser compreensíveis.</p>
          <ul>
            <li>Tornar o texto legível e compreensível</li>
            <li>Fazer com que as páginas apareçam e funcionem de maneira previsível</li>
            <li>Ajudar os usuários a evitar e corrigir erros</li>
          </ul>

          <br />

          <h3>4. Robusto</h3>
          <p>
            O conteúdo deve ser robusto o suficiente para ser interpretado de forma confiável por uma ampla variedade de
            agentes de usuário, incluindo tecnologias assistivas.
          </p>
          <ul>
            <li>Maximizar a compatibilidade com ferramentas atuais e futuras</li>
          </ul>

          <h2>Primeiros Passos para Implementar Acessibilidade</h2>
          <ol>
            <li>
              <strong>Eduque-se e à sua equipe</strong> sobre acessibilidade web e suas diretrizes
            </li>
            <li>
              <strong>Avalie seu site atual</strong> usando ferramentas de teste de acessibilidade
            </li>
            <li>
              <strong>Desenvolva um plano</strong> para abordar os problemas identificados
            </li>
            <li>
              <strong>Implemente melhorias</strong> começando pelos problemas mais críticos
            </li>
            <li>
              <strong>Teste com usuários reais</strong> que utilizam tecnologias assistivas
            </li>
            <li>
              <strong>Mantenha-se atualizado</strong> sobre as melhores práticas e diretrizes
            </li>
          </ol>

          <br />

          <h2><strong>Recursos Adicionais</strong></h2>
          <ul>
            <li>
              <a
                href="https://www.w3.org/WAI/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Iniciativa de Acessibilidade Web (WAI) <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Diretrizes de Acessibilidade para Conteúdo Web (WCAG) <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://www.a11yproject.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                The A11Y Project <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Próximos Passos</h3>
            <p className="mb-4">
              Agora que você entende os fundamentos da acessibilidade web, recomendamos explorar os seguintes recursos:
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
                <Link
                  href="/aprendizado/cores-contraste"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Cores e Contraste na Acessibilidade Web
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
