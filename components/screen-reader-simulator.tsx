"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowDown, ArrowUp, ArrowRight, ArrowLeft, Play, Pause, Volume2, VolumeX } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

export default function ScreenReaderSimulator() {
  // Estado para controlar o elemento atualmente focado
  const [currentFocus, setCurrentFocus] = useState<number>(0)
  // Estado para controlar se o leitor de tela está "falando"
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)
  // Estado para controlar se o som está ativado
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true)
  // Estado para armazenar o texto que está sendo "falado"
  const [spokenText, setSpokenText] = useState<string>("")
  // Estado para controlar o exemplo selecionado
  const [selectedExample, setSelectedExample] = useState<string>("basic")

  // Referência para o sintetizador de voz
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null

  // Função para falar o texto usando a API Web Speech
  const speakText = (text: string) => {
    if (!synth) return

    // Cancelar qualquer fala anterior
    synth.cancel()

    // Criar um novo objeto de fala
    const utterance = new SpeechSynthesisUtterance(text)

    // Configurar a voz (opcional)
    const voices = synth.getVoices()
    const ptVoice = voices.find((voice) => voice.lang.includes("pt") || voice.lang.includes("PT"))
    if (ptVoice) {
      utterance.voice = ptVoice
    }

    // Configurar outras propriedades
    utterance.rate = 1.0 // Velocidade normal
    utterance.pitch = 1.0 // Tom normal
    utterance.volume = soundEnabled ? 1.0 : 0.0 // Volume baseado na configuração

    // Evento para quando a fala terminar
    utterance.onend = () => {
      setIsSpeaking(false)
    }

    // Iniciar a fala
    synth.speak(utterance)
  }

  // Exemplos de conteúdo HTML para demonstração
  const examples = {
    basic: {
      title: "Página Básica",
      elements: [
        {
          type: "heading",
          level: 1,
          content: "Bem-vindo ao nosso site",
          ariaLabel: "Cabeçalho nível 1: Bem-vindo ao nosso site",
        },
        {
          type: "paragraph",
          content: "Este é um exemplo de como um leitor de tela navega por uma página web simples.",
          ariaLabel: "Este é um exemplo de como um leitor de tela navega por uma página web simples.",
        },
        {
          type: "link",
          content: "Saiba mais sobre acessibilidade",
          url: "#",
          ariaLabel: "Link: Saiba mais sobre acessibilidade",
        },
        { type: "heading", level: 2, content: "Nossos serviços", ariaLabel: "Cabeçalho nível 2: Nossos serviços" },
        {
          type: "list",
          items: ["Consultoria em acessibilidade", "Desenvolvimento web acessível", "Treinamento em WCAG"],
          ariaLabel: "Lista com 3 itens",
        },
        { type: "button", content: "Entre em contato", ariaLabel: "Botão: Entre em contato" },
      ],
    },
    form: {
      title: "Formulário",
      elements: [
        {
          type: "heading",
          level: 1,
          content: "Formulário de Contato",
          ariaLabel: "Cabeçalho nível 1: Formulário de Contato",
        },
        { type: "form", ariaLabel: "Formulário com 4 campos" },
        { type: "label", content: "Nome:", for: "nome", ariaLabel: "Rótulo: Nome" },
        {
          type: "input",
          id: "nome",
          placeholder: "Digite seu nome",
          required: true,
          ariaLabel: "Campo de texto editável, obrigatório, Nome",
        },
        { type: "label", content: "Email:", for: "email", ariaLabel: "Rótulo: Email" },
        {
          type: "input",
          id: "email",
          placeholder: "Digite seu email",
          required: true,
          ariaLabel: "Campo de texto editável, obrigatório, Email",
        },
        { type: "label", content: "Mensagem:", for: "mensagem", ariaLabel: "Rótulo: Mensagem" },
        {
          type: "textarea",
          id: "mensagem",
          placeholder: "Digite sua mensagem",
          ariaLabel: "Área de texto editável, Mensagem",
        },
        { type: "button", content: "Enviar", ariaLabel: "Botão: Enviar" },
      ],
    },
    image: {
      title: "Conteúdo com Imagens",
      elements: [
        {
          type: "heading",
          level: 1,
          content: "Galeria de Imagens",
          ariaLabel: "Cabeçalho nível 1: Galeria de Imagens",
        },
        {
          type: "paragraph",
          content: "Confira algumas de nossas fotos:",
          ariaLabel: "Confira algumas de nossas fotos:",
        },
        {
          type: "image1",
          src: "/paisagemmontanhosacomlago.png?height=150&width=200",
          alt: "Paisagem montanhosa com lago",
          ariaLabel: "Imagem: Paisagem montanhosa com lago",
        },
        {
          type: "image2",
          src: "/placeholder.svg?height=150&width=200",
          alt: "",
          ariaLabel: "Imagem sem texto alternativo",
        },
        {
          type: "image3",
          src: "/pordosolnapraia.png?height=150&width=200",
          alt: "Pôr do sol na praia",
          ariaLabel: "Imagem: Pôr do sol na praia",
        },
        { type: "button", content: "Ver mais fotos", ariaLabel: "Botão: Ver mais fotos" },
      ],
    },
    complex: {
      title: "Layout Complexo",
      elements: [
        {
          type: "heading",
          level: 1,
          content: "Portal de Notícias",
          ariaLabel: "Cabeçalho nível 1: Portal de Notícias",
        },
        { type: "navigation", ariaLabel: "Navegação principal com 4 links" },
        { type: "link", content: "Home", url: "#", ariaLabel: "Link: Home" },
        { type: "link", content: "Notícias", url: "#", ariaLabel: "Link: Notícias" },
        { type: "link", content: "Esportes", url: "#", ariaLabel: "Link: Esportes" },
        { type: "link", content: "Entretenimento", url: "#", ariaLabel: "Link: Entretenimento" },
        {
          type: "heading",
          level: 2,
          content: "Notícias em Destaque",
          ariaLabel: "Cabeçalho nível 2: Notícias em Destaque",
        },
        { type: "article", ariaLabel: "Artigo" },
        {
          type: "heading",
          level: 3,
          content: "Nova tecnologia promete revolucionar acessibilidade web",
          ariaLabel: "Cabeçalho nível 3: Nova tecnologia promete revolucionar acessibilidade web",
        },
        {
          type: "paragraph",
          content:
            "Uma nova ferramenta desenvolvida por pesquisadores promete tornar a web mais acessível para todos...",
          ariaLabel:
            "Uma nova ferramenta desenvolvida por pesquisadores promete tornar a web mais acessível para todos...",
        },
        { type: "link", content: "Leia mais", url: "#", ariaLabel: "Link: Leia mais" },
      ],
    },
  }

  // Função para "falar" o texto do elemento atual
  const speakElement = (index: number) => {
    const currentExample = examples[selectedExample as keyof typeof examples]
    if (index >= 0 && index < currentExample.elements.length) {
      const element = currentExample.elements[index]
      const textToSpeak = element.ariaLabel || ""

      setSpokenText(textToSpeak)
      setIsSpeaking(true)

      // Usar a síntese de voz se estiver ativada
      if (soundEnabled) {
        speakText(textToSpeak)
      } else {
        // Se o som estiver desativado, apenas simular o tempo de fala
        setTimeout(() => {
          setIsSpeaking(false)
        }, 2000)
      }
    }
  }

  // Navegar para o próximo elemento
  const navigateNext = () => {
    const currentExample = examples[selectedExample as keyof typeof examples]
    const nextIndex = Math.min(currentFocus + 1, currentExample.elements.length - 1)
    setCurrentFocus(nextIndex)
    speakElement(nextIndex)
  }

  // Navegar para o elemento anterior
  const navigatePrevious = () => {
    const prevIndex = Math.max(currentFocus - 1, 0)
    setCurrentFocus(prevIndex)
    speakElement(prevIndex)
  }

  // Navegar para o primeiro elemento
  const navigateFirst = () => {
    setCurrentFocus(0)
    speakElement(0)
  }

  // Navegar para o último elemento
  const navigateLast = () => {
    const currentExample = examples[selectedExample as keyof typeof examples]
    const lastIndex = currentExample.elements.length - 1
    setCurrentFocus(lastIndex)
    speakElement(lastIndex)
  }

  // Alternar o som
  const toggleSound = () => {
    const newSoundEnabled = !soundEnabled
    setSoundEnabled(newSoundEnabled)

    // Se estiver desativando o som e estiver falando, cancelar a fala
    if (!newSoundEnabled && synth && isSpeaking) {
      synth.cancel()
      setIsSpeaking(false)
    }
  }

  // Carregar as vozes disponíveis quando o componente for montado
  useEffect(() => {
    if (synth) {
      // Algumas vezes as vozes não estão disponíveis imediatamente
      const loadVoices = () => {
        synth.getVoices()
      }

      // Tentar carregar as vozes
      loadVoices()

      // Adicionar um listener para quando as vozes forem carregadas
      if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = loadVoices
      }

      // Limpar quando o componente for desmontado
      return () => {
        if (synth) {
          synth.cancel()
        }
      }
    }
  }, [])

  // Resetar o foco quando o exemplo muda
  useEffect(() => {
    // Cancelar qualquer fala em andamento
    if (synth) {
      synth.cancel()
    }

    setCurrentFocus(0)
    setSpokenText("")
    setIsSpeaking(false)
  }, [selectedExample])

  // Renderizar o elemento atual
  const renderElement = (element: any, index: number) => {
    const isFocused = index === currentFocus
    const focusClass = isFocused ? "ring-2 ring-green-500 bg-green-50 dark:bg-green-900/20" : ""

    switch (element.type) {
      case "heading":
        const HeadingTag = `h${element.level}` as keyof JSX.IntrinsicElements
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <HeadingTag className={`text-${element.level === 1 ? "2xl" : element.level === 2 ? "xl" : "lg"} font-bold`}>
              {element.content}
            </HeadingTag>
          </div>
        )
      case "paragraph":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <p>{element.content}</p>
          </div>
        )
      case "link":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <a href={element.url} className="text-green-600 dark:text-green-400 hover:underline">
              {element.content}
            </a>
          </div>
        )
      case "list":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <ul className="list-disc pl-5">
              {element.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )
      case "button":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <Button>{element.content}</Button>
          </div>
        )
      case "image1":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <img
              src={element.src || "/paisagemmontanhosacomlago.png"}
              alt={element.alt}
              className="max-w-full h-auto rounded"
              style={{ maxHeight: "150px" }}
            />
            {!element.alt && (
              <div className="mt-1 text-red-500 text-sm">⚠️ Esta imagem não possui texto alternativo</div>
            )}
          </div>
        )
        case "image2":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <img
              src={element.src || "/placeholder.svg"}
              alt={element.alt}
              className="max-w-full h-auto rounded"
              style={{ maxHeight: "150px" }}
            />
            {!element.alt && (
              <div className="mt-1 text-red-500 text-sm">⚠️ Esta imagem não possui texto alternativo</div>
            )}
          </div>
        )
        case "image3":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <img
              src={element.src || "/pordosolnapraia.png"}
              alt={element.alt}
              className="max-w-full h-auto rounded"
              style={{ maxHeight: "150px" }}
            />
            {!element.alt && (
              <div className="mt-1 text-red-500 text-sm">⚠️ Esta imagem não possui texto alternativo</div>
            )}
          </div>
        )
      case "form":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <form className="border p-4 rounded">
              {/* O conteúdo do formulário será renderizado por outros elementos */}
            </form>
          </div>
        )
      case "label":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <label htmlFor={element.for} className="block font-medium">
              {element.content}
            </label>
          </div>
        )
      case "input":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <input
              type="text"
              id={element.id}
              placeholder={element.placeholder}
              required={element.required}
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
        )
      case "textarea":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <textarea
              id={element.id}
              placeholder={element.placeholder}
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              rows={4}
            ></textarea>
          </div>
        )
      case "navigation":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <nav className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
              {/* O conteúdo da navegação será renderizado por outros elementos */}
              <span className="text-sm text-gray-500 dark:text-gray-400">Navegação principal</span>
            </nav>
          </div>
        )
      case "article":
        return (
          <div className={`p-2 my-2 rounded ${focusClass}`} key={index}>
            <article className="border p-4 rounded">
              {/* O conteúdo do artigo será renderizado por outros elementos */}
            </article>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Simulador de Leitor de Tela</CardTitle>
        <CardDescription>Experimente como um leitor de tela interpreta e navega pelo conteúdo web</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Escolha um exemplo de conteúdo:</h3>
              <Tabs value={selectedExample} onValueChange={setSelectedExample} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="basic">Básico</TabsTrigger>
                  <TabsTrigger value="form">Formulário</TabsTrigger>
                  <TabsTrigger value="image">Imagens</TabsTrigger>
                  <TabsTrigger value="complex">Complexo</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 min-h-[400px] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">{examples[selectedExample as keyof typeof examples].title}</h2>
              {examples[selectedExample as keyof typeof examples].elements.map((element, index) =>
                renderElement(element, index),
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="sound-toggle" checked={soundEnabled} onCheckedChange={toggleSound} />
              <Label htmlFor="sound-toggle" className="flex items-center gap-2">
                {soundEnabled ? (
                  <>
                    <Volume2 className="h-4 w-4" />
                    <span>Som ativado</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="h-4 w-4" />
                    <span>Som desativado</span>
                  </>
                )}
              </Label>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Controles de Navegação</h3>
              <p className="mb-4">
                Use estes controles para simular a navegação com um leitor de tela. Na vida real, os usuários geralmente
                usam teclas de atalho para navegar.
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6">
                <div></div>
                <Button onClick={navigatePrevious} aria-label="Elemento anterior">
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <div></div>
                <Button onClick={navigateFirst} aria-label="Primeiro elemento">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button onClick={() => speakElement(currentFocus)} aria-label="Ler elemento atual">
                  {isSpeaking ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button onClick={navigateLast} aria-label="Último elemento">
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <div></div>
                <Button onClick={navigateNext} aria-label="Próximo elemento">
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <div></div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6">
                <h4 className="font-medium mb-2">Comandos comuns em leitores de tela reais:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Tab:</strong> Navegar para o próximo elemento interativo
                  </li>
                  <li>
                    <strong>Shift + Tab:</strong> Navegar para o elemento interativo anterior
                  </li>
                  <li>
                    <strong>Setas:</strong> Navegar entre elementos
                  </li>
                  <li>
                    <strong>H:</strong> Pular para o próximo cabeçalho
                  </li>
                  <li>
                    <strong>B:</strong> Pular para o próximo botão
                  </li>
                  <li>
                    <strong>F:</strong> Pular para o próximo formulário
                  </li>
                  <li>
                    <strong>L:</strong> Pular para a próxima lista
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Saída do Leitor de Tela</h3>
              <div
                className={`border rounded-lg p-4 min-h-[100px] flex items-center justify-center text-center ${
                  isSpeaking ? "bg-green-50 dark:bg-green-900/20" : "bg-gray-50 dark:bg-gray-800"
                }`}
                aria-live="polite"
              >
                {isSpeaking ? (
                  <p className="font-medium">{spokenText}</p>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">
                    {spokenText ? "Concluído" : "Use os controles de navegação para começar"}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Importante</h3>
          <p>
            Este é um simulador simplificado para fins educacionais. Leitores de tela reais como NVDA, JAWS e VoiceOver
            são muito mais sofisticados e oferecem uma variedade maior de comandos e funcionalidades. Para uma
            experiência autêntica, recomendamos testar com um leitor de tela real.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
