import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, BookOpen, Video, FileText, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecursosFamiliaresPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/aprendizado" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Aprendizado
            </Link>
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Recursos para Familiares
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Guias, ferramentas e informações para ajudar familiares e cuidadores a entender e utilizar tecnologias
            assistivas, criando um ambiente digital mais inclusivo para pessoas com deficiências.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">O Papel Fundamental da Família</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Familiares e cuidadores desempenham um papel crucial no apoio às pessoas com deficiências no uso de
            tecnologias digitais. Seu envolvimento, compreensão e suporte podem fazer toda a diferença na independência
            digital e qualidade de vida de seus entes queridos.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Esta página reúne recursos específicos para ajudá-lo a entender as diferentes tecnologias assistivas
            disponíveis, como configurá-las e utilizá-las, e como criar um ambiente digital acessível em casa.
          </p>
        </div>

        <Tabs defaultValue="visual" className="mb-12">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="visual">Deficiência Visual</TabsTrigger>
            <TabsTrigger value="auditiva">Deficiência Auditiva</TabsTrigger>
            <TabsTrigger value="motora">Deficiência Motora</TabsTrigger>
            <TabsTrigger value="cognitiva">Deficiência Cognitiva</TabsTrigger>
          </TabsList>

          <TabsContent value="visual" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tecnologias Assistivas para Deficiência Visual</CardTitle>
                  <CardDescription>
                    Conheça as principais ferramentas que auxiliam pessoas com deficiência visual a navegar no mundo
                    digital
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Leitores de Tela</h3>
                    <p className="mb-4">
                      Leitores de tela são softwares que convertem texto em fala, permitindo que pessoas cegas ou com
                      baixa visão acessem conteúdo digital. Aqui estão os mais utilizados e como configurá-los:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">NVDA (Windows)</h4>
                        <p className="text-sm mb-3">
                          Leitor de tela gratuito e de código aberto para Windows, amplamente utilizado e com boa
                          compatibilidade.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="https://www.nvaccess.org/download/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <Download className="h-3 w-3" /> Download
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="https://www.nvaccess.org/files/nvda/documentation/userGuide.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <FileText className="h-3 w-3" /> Manual
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">VoiceOver (Apple)</h4>
                        <p className="text-sm mb-3">
                          Leitor de tela integrado aos dispositivos Apple (Mac, iPhone, iPad), não requer instalação
                          adicional.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="https://support.apple.com/pt-br/guide/voiceover/welcome/mac"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <FileText className="h-3 w-3" /> Guia Mac
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="https://support.apple.com/pt-br/guide/iphone/iph3e2e415f/ios"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <FileText className="h-3 w-3" /> Guia iOS
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
                      <h4 className="font-medium mb-2">Guia Rápido: Primeiros Passos com Leitores de Tela</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Instale o leitor de tela apropriado para o sistema operacional</li>
                        <li>Aprenda os comandos básicos de navegação (Tab, setas, Enter)</li>
                        <li>Pratique com sites simples antes de avançar para mais complexos</li>
                        <li>Ajuste a velocidade da fala para um nível confortável</li>
                        <li>Explore as configurações para personalizar a experiência</li>
                      </ol>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-2 mb-6">
                      <p className="italic">
                        "Como familiar, aprendi a usar o leitor de tela junto com minha filha. Isso me ajudou a entender
                        melhor suas dificuldades e a encontrar soluções juntos. Recomendo que todos os familiares
                        experimentem usar um leitor de tela por pelo menos um dia."
                      </p>
                      <p className="text-sm mt-2">— Maria, mãe de Ana (19 anos)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ampliadores de Tela e Ajustes de Contraste</h3>
                    <p className="mb-4">
                      Para pessoas com baixa visão, ampliadores de tela e ajustes de contraste podem melhorar
                      significativamente a experiência digital:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Lupa do Windows</h4>
                        <p className="text-sm mb-3">
                          Ferramenta integrada ao Windows que permite ampliar partes da tela.
                        </p>
                        <p className="text-sm mb-3">
                          <strong>Como ativar:</strong> Pressione a tecla Windows + sinal de mais (+) ou busque "Lupa"
                          no menu Iniciar.
                        </p>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href="https://support.microsoft.com/pt-br/windows/usar-a-lupa-para-facilitar-a-visualiza%C3%A7%C3%A3o-de-itens-na-tela-414948ba-8b1c-d3bd-8615-0e5e32204198"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <FileText className="h-3 w-3" /> Tutorial Completo
                          </a>
                        </Button>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Zoom no Mac</h4>
                        <p className="text-sm mb-3">
                          Recurso de ampliação integrado ao macOS para aumentar partes da tela.
                        </p>
                        <p className="text-sm mb-3">
                          <strong>Como ativar:</strong> Pressione Command + Option + 8 para ativar/desativar o zoom, ou
                          Command + Option + sinal de mais (+) para ampliar.
                        </p>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href="https://support.apple.com/pt-br/guide/mac-help/mh40579/mac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <FileText className="h-3 w-3" /> Tutorial Completo
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
                      <h4 className="font-medium mb-2">Dicas para Ajustes de Contraste e Cores</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Windows:</strong> Acesse Configurações &gt; Facilidade de Acesso &gt; Alto contraste
                        </li>
                        <li>
                          <strong>Mac:</strong> Acesse Preferências do Sistema &gt; Acessibilidade &gt; Exibição &gt;
                          Contraste
                        </li>
                        <li>
                          <strong>Navegadores:</strong> Instale extensões como "Dark Reader" para ajustar contraste em
                          sites
                        </li>
                        <li>
                          <strong>Filtros de cor:</strong> Utilize filtros para daltonismo nas configurações de
                          acessibilidade
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Recursos Adicionais</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Guia de Configuração de Dispositivos</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Instruções passo a passo para configurar recursos de acessibilidade em diferentes
                            dispositivos.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" className="flex items-center gap-1">
                              <Download className="h-3 w-3" /> Baixar PDF
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Vídeos Tutoriais</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Série de vídeos demonstrando como utilizar tecnologias assistivas para deficiência visual.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> Ver Playlist
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="auditiva" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tecnologias Assistivas para Deficiência Auditiva</CardTitle>
                  <CardDescription>
                    Ferramentas e recursos para auxiliar pessoas com deficiência auditiva no ambiente digital
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Legendas e Transcrições</h3>
                    <p className="mb-4">
                      Legendas e transcrições são essenciais para pessoas surdas ou com deficiência auditiva acessarem
                      conteúdo em áudio e vídeo:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Como Ativar Legendas</h4>
                        <p className="text-sm mb-3">
                          A maioria das plataformas de vídeo oferece opções de legendas que podem ser facilmente
                          ativadas:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>YouTube:</strong> Clique no ícone de engrenagem &gt; Legendas/CC &gt; Selecione o
                            idioma
                          </li>
                          <li>
                            <strong>Netflix:</strong> Clique no ícone de diálogo durante a reprodução &gt; Selecione o
                            idioma
                          </li>
                          <li>
                            <strong>Dispositivos móveis:</strong> Ative as legendas nas configurações de acessibilidade
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Ferramentas de Transcrição</h4>
                        <p className="text-sm mb-3">
                          Aplicativos que podem transcrever áudio em tempo real ou converter arquivos de áudio em texto:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Google Live Transcribe:</strong> App para Android que transcreve fala em tempo real
                          </li>
                          <li>
                            <strong>Otter.ai:</strong> Serviço de transcrição para reuniões e entrevistas
                          </li>
                          <li>
                            <strong>Microsoft Translator:</strong> Tradução e transcrição em tempo real para múltiplos
                            idiomas
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
                      <h4 className="font-medium mb-2">Dicas para Familiares</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Verifique sempre se o conteúdo que você compartilha tem legendas ou transcrições disponíveis
                        </li>
                        <li>
                          Ao criar conteúdo familiar (como vídeos de aniversário), adicione legendas usando ferramentas
                          gratuitas
                        </li>
                        <li>
                          Em chamadas de vídeo em família, use aplicativos com recursos de transcrição em tempo real
                        </li>
                        <li>Configure alertas visuais em dispositivos para substituir notificações sonoras</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Aplicativos de Comunicação</h3>
                    <p className="mb-4">
                      Aplicativos que facilitam a comunicação para pessoas com deficiência auditiva:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Apps de Língua de Sinais</h4>
                        <p className="text-sm mb-3">Aplicativos para aprender e praticar língua de sinais:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Hand Talk (Libras)</li>
                          <li>ProDeaf Tradutor</li>
                          <li>SignSchool (ASL)</li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Conversão Fala-Texto</h4>
                        <p className="text-sm mb-3">Apps que convertem fala em texto para comunicação em tempo real:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Live Transcribe</li>
                          <li>Speechnotes</li>
                          <li>Transcribe - Speech to Text</li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Alertas Visuais</h4>
                        <p className="text-sm mb-3">Apps que transformam sons em alertas visuais ou vibratórios:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Sound Alert</li>
                          <li>Flash Alert</li>
                          <li>Visualfy</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-2 mb-6">
                      <p className="italic">
                        "Usar aplicativos de transcrição em tempo real mudou completamente nossas interações familiares.
                        Meu pai, que tem perda auditiva severa, agora consegue participar ativamente das conversas em
                        grupo."
                      </p>
                      <p className="text-sm mt-2">— Carlos, filho de Roberto (67 anos)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Configurando Dispositivos</h3>
                    <p className="mb-4">
                      Como configurar dispositivos para melhor atender às necessidades de pessoas com deficiência
                      auditiva:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Smartphones</h4>
                        <p className="text-sm mb-2">
                          <strong>Android:</strong>
                        </p>
                        <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                          <li>Acesse Configurações &gt; Acessibilidade &gt; Audição</li>
                          <li>Ative "Legendas" e "Notificações por flash"</li>
                          <li>Configure "Áudio mono" e "Balanço de som" se necessário</li>
                        </ol>
                        <p className="text-sm mb-2">
                          <strong>iPhone:</strong>
                        </p>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                          <li>Acesse Ajustes &gt; Acessibilidade &gt; Recursos Auditivos</li>
                          <li>Ative "LED Flash para Alertas" e "Legendas e Subtítulos"</li>
                          <li>Configure "Áudio Mono" e ajustes de volume se necessário</li>
                        </ol>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Computadores</h4>
                        <p className="text-sm mb-2">
                          <strong>Windows:</strong>
                        </p>
                        <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                          <li>Acesse Configurações &gt; Facilidade de Acesso &gt; Audição</li>
                          <li>Ative "Legendas" e configure suas preferências</li>
                          <li>Configure "Áudio mono" e notificações visuais</li>
                        </ol>
                        <p className="text-sm mb-2">
                          <strong>Mac:</strong>
                        </p>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                          <li>Acesse Preferências do Sistema &gt; Acessibilidade &gt; Audição</li>
                          <li>Ative "Piscar a tela quando um alerta sonoro ocorrer"</li>
                          <li>Configure "Áudio para um canal" se necessário</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Recursos Adicionais</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Guia de Comunicação Familiar</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Estratégias e dicas para melhorar a comunicação familiar com pessoas surdas ou com
                            deficiência auditiva.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" className="flex items-center gap-1">
                              <Download className="h-3 w-3" /> Baixar PDF
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Curso Básico de Libras Online</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Curso introdutório de Língua Brasileira de Sinais para familiares.</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" className="flex items-center gap-1">
                              <BookOpen className="h-3 w-3" /> Acessar Curso
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="motora" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tecnologias Assistivas para Deficiência Motora</CardTitle>
                  <CardDescription>
                    Ferramentas e recursos para auxiliar pessoas com deficiência motora a utilizar dispositivos digitais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Alternativas de Entrada</h3>
                    <p className="mb-4">
                      Dispositivos e configurações que oferecem alternativas ao mouse e teclado convencionais:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Configurações de Acessibilidade</h4>
                        <p className="text-sm mb-3">
                          Ajustes disponíveis nos sistemas operacionais para facilitar o uso:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Teclas de Aderência:</strong> Permite pressionar teclas de modificação (Ctrl, Alt,
                            Shift) uma de cada vez
                          </li>
                          <li>
                            <strong>Teclas de Filtro:</strong> Ignora pressionamentos repetidos ou acidentais
                          </li>
                          <li>
                            <strong>Teclas do Mouse:</strong> Controla o cursor usando o teclado numérico
                          </li>
                          <li>
                            <strong>Controle por Voz:</strong> Permite controlar o computador com comandos de voz
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Dispositivos Alternativos</h4>
                        <p className="text-sm mb-3">Hardware especializado para diferentes necessidades motoras:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Trackballs:</strong> Alternativas ao mouse onde apenas o polegar ou dedos movem uma
                            bola
                          </li>
                          <li>
                            <strong>Joysticks adaptados:</strong> Para controle preciso com movimentos limitados
                          </li>
                          <li>
                            <strong>Switches:</strong> Botões grandes que podem ser acionados com diferentes partes do
                            corpo
                          </li>
                          <li>
                            <strong>Teclados adaptados:</strong> Com teclas maiores, espaçadas ou com proteções
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
                      <h4 className="font-medium mb-2">Como Configurar Alternativas de Entrada</h4>
                      <p className="text-sm mb-2">
                        <strong>Windows:</strong>
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
                        <li>Acesse Configurações &gt; Facilidade de Acesso &gt; Teclado/Mouse</li>
                        <li>Ative as opções necessárias como "Teclas de Aderência" ou "Teclas do Mouse"</li>
                        <li>Ajuste a velocidade do cursor e sensibilidade conforme necessário</li>
                      </ol>
                      <p className="text-sm mb-2">
                        <strong>Mac:</strong>
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-sm">
                        <li>Acesse Preferências do Sistema &gt; Acessibilidade &gt; Motor</li>
                        <li>Configure opções como "Teclas Lentas", "Teclas de Mouse" ou "Controle Alternativo"</li>
                        <li>Ajuste as configurações para atender às necessidades específicas</li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Controle por Voz e Rastreamento Ocular</h3>
                    <p className="mb-4">Tecnologias avançadas que permitem controlar dispositivos sem usar as mãos:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Controle por Voz</h4>
                        <p className="text-sm mb-3">
                          Sistemas que permitem controlar o computador ou dispositivo móvel usando comandos de voz:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Windows:</strong> Fala do Windows (Windows Speech Recognition)
                          </li>
                          <li>
                            <strong>Mac:</strong> Controle por Voz (Voice Control)
                          </li>
                          <li>
                            <strong>Android:</strong> Acesso por Voz (Voice Access)
                          </li>
                          <li>
                            <strong>iOS:</strong> Controle por Voz (Voice Control)
                          </li>
                        </ul>
                        <Button size="sm" variant="outline" asChild className="mt-3">
                          <a
                            href="https://support.microsoft.com/pt-br/windows/usar-o-reconhecimento-de-fala-no-windows-10-8a94a18b-d9a6-452f-8622-997380ec0560"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <FileText className="h-3 w-3" /> Tutorial Windows
                          </a>
                        </Button>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Rastreamento Ocular</h4>
                        <p className="text-sm mb-3">
                          Tecnologia que permite controlar o cursor usando apenas o movimento dos olhos:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Windows:</strong> Eye Control (requer hardware compatível)
                          </li>
                          <li>
                            <strong>Dispositivos especializados:</strong> Tobii Dynavox, EyeTech
                          </li>
                          <li>
                            <strong>Aplicações:</strong> Navegação web, comunicação, controle ambiental
                          </li>
                        </ul>
                        <Button size="sm" variant="outline" asChild className="mt-3">
                          <a
                            href="https://support.microsoft.com/pt-br/windows/usar-o-controle-de-olho-no-windows-10-1a170a20-1083-2d1a-3a66-7e6baae57f0f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <FileText className="h-3 w-3" /> Sobre Eye Control
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-2 mb-6">
                      <p className="italic">
                        "O controle por voz transformou a independência digital do meu irmão. Ele tem paralisia cerebral
                        e agora consegue usar o computador, enviar mensagens e até jogar alguns jogos apenas com
                        comandos de voz."
                      </p>
                      <p className="text-sm mt-2">— Juliana, irmã de Pedro (28 anos)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Adaptações para Dispositivos Móveis</h3>
                    <p className="mb-4">
                      Configurações e acessórios para tornar smartphones e tablets mais acessíveis:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Configurações de Toque</h4>
                        <p className="text-sm mb-3">Ajustes que facilitam o uso da tela sensível ao toque:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Toque Assistido (iOS):</strong> Facilita tocar em áreas específicas da tela
                          </li>
                          <li>
                            <strong>Tempo de Toque (Android):</strong> Ajusta o tempo necessário para registrar um toque
                          </li>
                          <li>
                            <strong>Gestos Personalizados:</strong> Crie atalhos para ações comuns
                          </li>
                          <li>
                            <strong>Teclados Adaptados:</strong> Com teclas maiores ou layouts alternativos
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Acessórios Adaptativos</h4>
                        <p className="text-sm mb-3">Dispositivos físicos que facilitam o uso de dispositivos móveis:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Suportes e Montagens:</strong> Para posicionar o dispositivo em ângulos acessíveis
                          </li>
                          <li>
                            <strong>Stylus Adaptados:</strong> Canetas especiais que podem ser seguradas de diferentes
                            formas
                          </li>
                          <li>
                            <strong>Capas com Alças:</strong> Facilitam segurar o dispositivo com firmeza
                          </li>
                          <li>
                            <strong>Botões Bluetooth:</strong> Switches externos que podem ser programados para
                            diferentes funções
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Recursos Adicionais</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Guia de Adaptações Caseiras</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Instruções para criar adaptações de baixo custo para dispositivos digitais.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" className="flex items-center gap-1">
                              <Download className="h-3 w-3" /> Baixar PDF
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Vídeos: Configurando Acessibilidade</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Tutoriais em vídeo sobre como configurar recursos de acessibilidade motora em diferentes
                            dispositivos.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" className="flex items-center gap-1">
                              <Video className="h-3 w-3" /> Ver Playlist
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cognitiva" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tecnologias Assistivas para Deficiência Cognitiva</CardTitle>
                  <CardDescription>
                    Ferramentas e recursos para auxiliar pessoas com deficiências cognitivas, de aprendizagem ou
                    neurodesenvolvimento
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Simplificação e Organização</h3>
                    <p className="mb-4">
                      Ferramentas que ajudam a simplificar a experiência digital e organizar informações:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Leitores e Simplificadores de Texto</h4>
                        <p className="text-sm mb-3">Ferramentas que tornam o conteúdo textual mais acessível:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Bionic Reading:</strong> Destaca partes de palavras para facilitar a leitura
                          </li>
                          <li>
                            <strong>Readability:</strong> Remove distrações e simplifica páginas web
                          </li>
                          <li>
                            <strong>Text-to-Speech:</strong> Lê o texto em voz alta para melhor compreensão
                          </li>
                          <li>
                            <strong>Dicionários integrados:</strong> Explicam palavras difíceis instantaneamente
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Organizadores Visuais</h4>
                        <p className="text-sm mb-3">Ferramentas que ajudam a organizar informações visualmente:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Mapas Mentais:</strong> MindMeister, XMind, Coggle
                          </li>
                          <li>
                            <strong>Organizadores Gráficos:</strong> Canva, Popplet
                          </li>
                          <li>
                            <strong>Calendários Visuais:</strong> Google Calendar com códigos de cores
                          </li>
                          <li>
                            <strong>Listas de Tarefas Visuais:</strong> Trello, Microsoft To Do
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
                      <h4 className="font-medium mb-2">Dicas para Familiares</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Configure o dispositivo para mostrar apenas os aplicativos essenciais na tela inicial</li>
                        <li>Use códigos de cores consistentes para diferentes tipos de atividades</li>
                        <li>Crie rotinas digitais previsíveis com horários específicos para diferentes atividades</li>
                        <li>Divida tarefas complexas em etapas menores e use listas de verificação visuais</li>
                        <li>Reduza distrações desativando notificações desnecessárias e usando modos de foco</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Aplicativos de Apoio</h3>
                    <p className="mb-4">
                      Aplicativos específicos para auxiliar pessoas com diferentes necessidades cognitivas:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Apoio à Memória e Rotina</h4>
                        <p className="text-sm mb-3">Aplicativos que ajudam a lembrar tarefas e seguir rotinas:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Alarmed:</strong> Lembretes com persistência e repetição
                          </li>
                          <li>
                            <strong>Routinery:</strong> Guias passo a passo para rotinas diárias
                          </li>
                          <li>
                            <strong>Our Pact:</strong> Gerenciamento de tempo de tela e rotinas
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Comunicação Alternativa</h4>
                        <p className="text-sm mb-3">Apps de Comunicação Aumentativa e Alternativa (CAA):</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Livox:</strong> Comunicação por símbolos em português
                          </li>
                          <li>
                            <strong>LetMe Talk:</strong> Comunicação por imagens gratuita
                          </li>
                          <li>
                            <strong>Proloquo2Go:</strong> CAA abrangente (iOS)
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Apoio Emocional</h4>
                        <p className="text-sm mb-3">Apps para gerenciamento emocional e autorregulação:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Calm Counter:</strong> Ferramenta visual para acalmar
                          </li>
                          <li>
                            <strong>Zones of Regulation:</strong> Identificação e gestão emocional
                          </li>
                          <li>
                            <strong>Breathe, Think, Do:</strong> Estratégias de resolução de problemas
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-2 mb-6">
                      <p className="italic">
                        "Os aplicativos de rotina visual fizeram uma diferença enorme para minha filha com autismo. Ela
                        agora consegue seguir sua rotina matinal com muito mais independência, e a ansiedade diminuiu
                        significativamente porque ela sempre sabe o que esperar."
                      </p>
                      <p className="text-sm mt-2">— Patrícia, mãe de Luísa (12 anos)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Configurações de Acessibilidade</h3>
                    <p className="mb-4">
                      Ajustes nos dispositivos para torná-los mais acessíveis para pessoas com deficiências cognitivas:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Redução de Distrações</h4>
                        <p className="text-sm mb-3">Configurações para minimizar elementos distrativos:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Modo Foco (iOS/Android):</strong> Limita aplicativos disponíveis durante períodos
                            específicos
                          </li>
                          <li>
                            <strong>Redução de Movimento:</strong> Diminui animações e efeitos visuais
                          </li>
                          <li>
                            <strong>Modo Escuro:</strong> Reduz o cansaço visual e pode melhorar o foco
                          </li>
                          <li>
                            <strong>Bloqueadores de Anúncios:</strong> Removem elementos distrativos de páginas web
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Simplificação de Interface</h4>
                        <p className="text-sm mb-3">Configurações para tornar a interface mais simples e direta:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Modo Fácil (Android):</strong> Interface simplificada com ícones maiores
                          </li>
                          <li>
                            <strong>Controle Guiado (iOS):</strong> Limita o dispositivo a um único aplicativo
                          </li>
                          <li>
                            <strong>Tempo de Tela:</strong> Define limites de uso para aplicativos específicos
                          </li>
                          <li>
                            <strong>Leitores de Tela:</strong> Podem ajudar pessoas com dificuldades de leitura
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
                      <h4 className="font-medium mb-2">Como Configurar um Ambiente Digital Adequado</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>
                          <strong>Avalie as necessidades específicas:</strong> Cada pessoa tem desafios únicos que
                          requerem soluções personalizadas
                        </li>
                        <li>
                          <strong>Comece com o básico:</strong> Configure primeiro as funções essenciais antes de
                          adicionar complexidade
                        </li>
                        <li>
                          <strong>Seja consistente:</strong> Use os mesmos ícones, cores e layouts em todos os
                          dispositivos
                        </li>
                        <li>
                          <strong>Pratique juntos:</strong> Dedique tempo para praticar o uso das ferramentas com seu
                          familiar
                        </li>
                        <li>
                          <strong>Revise e ajuste:</strong> Observe o que funciona e faça ajustes conforme necessário
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Recursos Adicionais</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Guia de Tecnologias para TEA</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Guia completo sobre tecnologias assistivas para pessoas com Transtorno do Espectro Autista.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" className="flex items-center gap-1">
                              <Download className="h-3 w-3" /> Baixar PDF
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Comunidade de Apoio Online</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Grupo de apoio para familiares de pessoas com deficiências cognitivas, com foco em
                            tecnologias assistivas.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" className="flex items-center gap-1">
                              <ExternalLink className="h-3 w-3" /> Acessar Comunidade
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Grupos de Apoio e Comunidades</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Conecte-se com outros familiares e cuidadores para compartilhar experiências, dicas e apoio mútuo:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Grupos Online</CardTitle>
                <CardDescription>Comunidades virtuais para troca de experiências</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Fórum Acessibilidade Digital <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Grupo Facebook: Tecnologia Assistiva Brasil <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Comunidade WhatsApp: Familiares em Ação <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Organizações de Apoio</CardTitle>
                <CardDescription>Instituições que oferecem suporte e recursos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Associação Brasileira de Acessibilidade Digital <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Instituto de Tecnologia Social <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Rede Nacional de Ensino e Pesquisa em TA <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eventos e Workshops</CardTitle>
                <CardDescription>Oportunidades de aprendizado e networking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Calendário de Eventos 2023 <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Webinars Mensais: Tecnologia para Todos <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                      Workshop: Configurando Tecnologias Assistivas <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Perguntas Frequentes</h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">
                Por onde devo começar ao introduzir tecnologias assistivas para meu familiar?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Comece identificando as necessidades específicas e interesses do seu familiar. Introduza uma tecnologia
                de cada vez, começando pelas mais simples e avançando gradualmente. Pratique junto com ele e seja
                paciente durante o processo de aprendizado. Consulte profissionais como terapeutas ocupacionais que
                podem fornecer orientações personalizadas.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Como posso financiar tecnologias assistivas que são caras?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Existem várias opções para financiamento: verifique se há cobertura por planos de saúde, procure
                programas governamentais de assistência, entre em contato com ONGs e fundações que oferecem doações ou
                empréstimos de equipamentos, e explore alternativas de baixo custo ou gratuitas, como aplicativos e
                configurações nativas dos dispositivos.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">
                Como equilibrar o tempo de tela com o uso de tecnologias assistivas?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                É importante diferenciar o uso recreativo de tecnologia do uso de tecnologias assistivas. Estabeleça
                horários específicos para diferentes tipos de atividades, use ferramentas de gerenciamento de tempo de
                tela para aplicativos não essenciais, e crie pausas regulares para atividades físicas e interação
                social. Lembre-se que tecnologias assistivas são ferramentas para aumentar a independência e
                participação.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">
                Como posso aprender mais sobre tecnologias assistivas específicas?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Além dos recursos disponíveis neste site, você pode participar de grupos de apoio online, seguir blogs e
                canais especializados, entrar em contato com associações relacionadas à deficiência específica, e
                consultar profissionais como terapeutas ocupacionais e fonoaudiólogos que trabalham com tecnologia
                assistiva.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Precisa de Ajuda Personalizada?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Se você precisa de orientação específica para a situação do seu familiar, estamos aqui para ajudar. Nossa
            equipe pode fornecer suporte personalizado para encontrar e configurar as tecnologias assistivas mais
            adequadas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contato" className="flex items-center gap-2">
                Entre em Contato
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/aprendizado" className="flex items-center gap-2">
                Explorar Mais Recursos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
