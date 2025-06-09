"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Eye, Ear, EarOff, MousePointer, Keyboard, Headphones } from "lucide-react"
import ScreenReaderSimulator from "@/components/screen-reader-simulator"

export default function ToolsPage() {
  // Estado para simulador de deficiência visual
  const [blurLevel, setBlurLevel] = useState(0)
  const [contrastLevel, setContrastLevel] = useState(100)
  const [isColorblind, setIsColorblind] = useState(false)
  const [colorblindType, setColorblindType] = useState("protanopia")

  // Estado para simulador de deficiência motora
  const [tremor, setTremor] = useState(0)
  const [delay, setDelay] = useState(0)

  // Função para resetar simulações
  const resetVisualSimulation = () => {
    setBlurLevel(0)
    setContrastLevel(100)
    setIsColorblind(false)
  }

  const resetMotorSimulation = () => {
    setTremor(0)
    setDelay(0)
  }

  // Estilos para simulação visual
  const visualSimulationStyle = {
    filter: `
      blur(${blurLevel * 2}px) 
      contrast(${contrastLevel}%) 
      ${isColorblind ? `url(#${colorblindType})` : ""}
    `,
    transition: "filter 0.3s ease",
  }

  // Estilos para simulação motora
  const getMotorSimulationStyle = () => {
    if (tremor === 0) return {}

    return {
      animation: `tremor ${Math.max(0.5, 1 - tremor * 0.05)}s infinite`,
      animationTimingFunction: "ease-in-out",
      animationDirection: "alternate",
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ferramentas de Simulação</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Experimente como pessoas com diferentes deficiências navegam na web. Estas ferramentas de simulação ajudam a
          criar empatia e entender a importância da acessibilidade.
        </p>

        <Tabs defaultValue="visual" className="mb-12">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="visual" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>Deficiência Visual</span>
            </TabsTrigger>
            <TabsTrigger value="hearing" className="flex items-center gap-2">
              <Ear className="h-4 w-4" />
              <span>Deficiência Auditiva</span>
            </TabsTrigger>
            <TabsTrigger value="motor" className="flex items-center gap-2">
              <MousePointer className="h-4 w-4" />
              <span>Deficiência Motora</span>
            </TabsTrigger>
            <TabsTrigger value="screenreader" className="flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              <span>Leitor de Tela</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visual" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Simulador de Deficiência Visual</CardTitle>
                <CardDescription>
                  Experimente como pessoas com diferentes deficiências visuais enxergam o conteúdo web
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="blur">Visão Embaçada</Label>
                        <span>{blurLevel * 10}%</span>
                      </div>
                      <Slider
                        id="blur"
                        min={0}
                        max={10}
                        step={1}
                        value={[blurLevel]}
                        onValueChange={(value) => setBlurLevel(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="contrast">Contraste</Label>
                        <span>{contrastLevel}%</span>
                      </div>
                      <Slider
                        id="contrast"
                        min={0}
                        max={100}
                        step={5}
                        value={[contrastLevel]}
                        onValueChange={(value) => setContrastLevel(value[0])}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="colorblind" checked={isColorblind} onCheckedChange={setIsColorblind} />
                      <Label htmlFor="colorblind">Daltonismo</Label>
                    </div>

                    {isColorblind && (
                      <div className="space-y-2">
                        <Label htmlFor="colorblind-type">Tipo de Daltonismo</Label>
                        <select
                          id="colorblind-type"
                          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                          value={colorblindType}
                          onChange={(e) => setColorblindType(e.target.value)}
                        >
                          <option value="protanopia">Protanopia (vermelho)</option>
                          <option value="deuteranopia">Deuteranopia (verde)</option>
                          <option value="tritanopia">Tritanopia (azul)</option>
                        </select>
                      </div>
                    )}

                    <Button onClick={resetVisualSimulation}>Resetar Simulação</Button>
                  </div>

                  <div>
                    <div className="border rounded-lg overflow-hidden">
                      <div style={visualSimulationStyle} className="p-6">
                        <h3 className="text-xl font-bold mb-4">Exemplo de Conteúdo</h3>
                        <p className="mb-4">
                          Este é um exemplo de como o conteúdo pode aparecer para pessoas com deficiências visuais.
                          Ajuste os controles para simular diferentes condições.
                        </p>
                        <div className="flex space-x-4 mb-4">
                          <div className="w-12 h-12 bg-red-500 rounded-md"></div>
                          <div className="w-12 h-12 bg-green-500 rounded-md"></div>
                          <div className="w-12 h-12 bg-blue-500 rounded-md"></div>
                        </div>
                        <Button variant="outline">Botão de Exemplo</Button>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      Nota: Esta é uma simulação simplificada. Experiências reais podem variar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hearing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Simulador de Deficiência Auditiva</CardTitle>
                <CardDescription>
                  Experimente como pessoas com deficiência auditiva percebem conteúdo multimídia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="volume">Volume</Label>
                        <span>0%</span>
                      </div>
                      <Slider id="volume" min={0} max={100} step={5} value={[0]} disabled />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Esta simulação mostra conteúdo sem áudio para demonstrar a importância de legendas e
                        transcrições.
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="captions" checked={true} />
                      <Label htmlFor="captions">Mostrar Legendas</Label>
                    </div>
                  </div>

                  <div>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gray-900 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <EarOff className="h-16 w-16 text-white opacity-50" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2 text-white text-center">
                          [Legendas: Esta é uma demonstração de como legendas são essenciais para pessoas com
                          deficiência auditiva]
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      Sem áudio, as legendas se tornam a única forma de acessar o conteúdo falado.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p>Sempre forneça legendas e transcrições para conteúdo de áudio e vídeo.</p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="motor" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Simulador de Deficiência Motora</CardTitle>
                <CardDescription>
                  Experimente as dificuldades motoras que algumas pessoas enfrentam ao usar o computador
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="tremor">Tremor</Label>
                        <span>{tremor * 10}%</span>
                      </div>
                      <Slider
                        id="tremor"
                        min={0}
                        max={10}
                        step={1}
                        value={[tremor]}
                        onValueChange={(value) => setTremor(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="delay">Atraso de Resposta</Label>
                        <span>{delay * 100}ms</span>
                      </div>
                      <Slider
                        id="delay"
                        min={0}
                        max={10}
                        step={1}
                        value={[delay]}
                        onValueChange={(value) => setDelay(value[0])}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="keyboard-only" />
                      <Label htmlFor="keyboard-only">Apenas Teclado</Label>
                    </div>

                    <Button onClick={resetMotorSimulation}>Resetar Simulação</Button>
                  </div>

                  <div>
                    <div className="border rounded-lg overflow-hidden">
                      <div style={getMotorSimulationStyle()} className="p-6">
                        <h3 className="text-xl font-bold mb-4">Interaja com estes elementos</h3>
                        <p className="mb-4">Tente clicar nos botões abaixo com as configurações atuais:</p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <Button
                            variant="outline"
                            className="h-8 text-xs"
                            style={{ transitionDelay: `${delay * 100}ms` }}
                          >
                            Botão Pequeno
                          </Button>
                          <Button
                            variant="outline"
                            className="h-8 text-xs"
                            style={{ transitionDelay: `${delay * 100}ms` }}
                          >
                            Botão Pequeno
                          </Button>
                          <Button
                            variant="outline"
                            className="h-8 text-xs"
                            style={{ transitionDelay: `${delay * 100}ms` }}
                          >
                            Botão Pequeno
                          </Button>
                          <Button
                            variant="outline"
                            className="h-8 text-xs"
                            style={{ transitionDelay: `${delay * 100}ms` }}
                          >
                            Botão Pequeno
                          </Button>
                        </div>

                        <Button className="w-full h-16" style={{ transitionDelay: `${delay * 100}ms` }}>
                          Botão Grande
                        </Button>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      Observe como elementos maiores e bem espaçados são mais fáceis de usar.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Keyboard className="h-4 w-4" />
                    Dica: Navegação por Teclado
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Muitas pessoas com deficiências motoras dependem exclusivamente do teclado. Tente navegar nesta
                    página usando apenas Tab, Shift+Tab, Enter e as teclas de seta.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="screenreader" className="mt-6">
            <ScreenReaderSimulator />
          </TabsContent>
        </Tabs>

        <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Por que usar simuladores?</h2>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Os simuladores de deficiência ajudam desenvolvedores e designers a:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Desenvolver empatia com usuários com deficiências</li>
              <li>Identificar problemas de acessibilidade que podem passar despercebidos</li>
              <li>Testar soluções de acessibilidade em diferentes cenários</li>
              <li>Demonstrar a importância da acessibilidade para stakeholders</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              Lembre-se: Estas simulações são aproximações e não substituem testes com usuários reais que possuem
              deficiências.
            </p>
          </div>
        </section>
      </div>

      {/* SVG Filters para simulação de daltonismo */}
      <svg
        className="absolute"
        style={{ width: 0, height: 0, position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="protanopia">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.567, 0.433, 0, 0, 0
                      0.558, 0.442, 0, 0, 0
                      0, 0.242, 0.758, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.625, 0.375, 0, 0, 0
                      0.7, 0.3, 0, 0, 0
                      0, 0.3, 0.7, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="tritanopia">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.95, 0.05, 0, 0, 0
                      0, 0.433, 0.567, 0, 0
                      0, 0.475, 0.525, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
        </defs>
      </svg>

      {/* CSS para animação de tremor */}
      <style jsx global>{`
        @keyframes tremor {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(${tremor * 2}px, ${tremor * 1}px) rotate(${tremor * 0.5}deg); }
          50% { transform: translate(-${tremor * 1}px, ${tremor * 2}px) rotate(-${tremor * 0.5}deg); }
          75% { transform: translate(${tremor * 1.5}px, -${tremor * 1}px) rotate(${tremor * 0.25}deg); }
          100% { transform: translate(-${tremor * 1}px, -${tremor * 1.5}px) rotate(-${tremor * 0.25}deg); }
        }
      `}</style>
    </main>
  )
}
