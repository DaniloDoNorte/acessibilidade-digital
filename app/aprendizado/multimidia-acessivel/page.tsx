import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function MultimidiaAcessivelPage() {
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
            Acessibilidade para Conteúdo Multimídia
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em: 2 de Julho de 2023 • Tempo de leitura: 10 minutos
          </p>
        </div>

        <div className="prose prose-green dark:prose-invert max-w-none">
          <h2>Tornando Conteúdo Multimídia Acessível</h2>
          <p>
            Vídeos, áudios e outros conteúdos multimídia são componentes importantes da web moderna, mas podem
            apresentar barreiras significativas para pessoas com deficiências se não forem implementados de forma
            acessível. Este guia aborda as melhores práticas para tornar seu conteúdo multimídia acessível a todos.
          </p>

          <h2>Legendas para Vídeos</h2>
          <p>
            Legendas são transcrições textuais do diálogo e descrições de sons importantes que aparecem sincronizadas
            com o vídeo. Elas são essenciais para pessoas surdas ou com deficiência auditiva.
          </p>

          <h3>Tipos de Legendas</h3>
          <ul>
            <li>
              <strong>Legendas fechadas (Closed Captions - CC):</strong> Podem ser ativadas ou desativadas pelo usuário
            </li>
            <li>
              <strong>Legendas abertas:</strong> Sempre visíveis, incorporadas ao vídeo
            </li>
          </ul>

          <h3>Melhores Práticas para Legendas</h3>
          <ul>
            <li>
              <strong>Inclua todo o diálogo</strong> e sons importantes (como [Telefone tocando] ou [Música dramática])
            </li>
            <li>
              <strong>Identifique os falantes</strong> quando houver múltiplas pessoas
            </li>
            <li>
              <strong>Sincronize precisamente</strong> com o áudio
            </li>
            <li>
              <strong>Use contraste adequado</strong> para garantir legibilidade
            </li>
            <li>
              <strong>Limite a 2-3 linhas</strong> por vez na tela
            </li>
            <li>
              <strong>Forneça uma maneira de ativar/desativar</strong> as legendas
            </li>
          </ul>

          <br /> 

          <div className="not-prose bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-2">Exemplo de Implementação de Legendas</h4>
            <pre className="text-sm overflow-x-auto">
              <code>
                {`<video controls>
  <source src="meu-video.mp4" type="video/mp4">
  <track 
    kind="captions" 
    src="legendas-pt.vtt" 
    srclang="pt-BR" 
    label="Português" 
    default
  >
  <track 
    kind="captions" 
    src="legendas-en.vtt" 
    srclang="en" 
    label="English"
  >
</video>`}
              </code>
            </pre>
          </div>

          <h2>Audiodescrição</h2>
          <p>
            Audiodescrição é uma narração adicional que descreve elementos visuais importantes que não são compreendidos
            apenas pelo áudio principal. É essencial para pessoas cegas ou com baixa visão.
          </p>

          <h3>O que Incluir na Audiodescrição</h3>
          <ul>
            <li>
              <strong>Ações importantes</strong> que ocorrem em silêncio
            </li>
            <li>
              <strong>Expressões faciais</strong> e linguagem corporal significativas
            </li>
            <li>
              <strong>Mudanças de cenário</strong> e localização
            </li>
            <li>
              <strong>Texto na tela</strong> que não é lido em voz alta
            </li>
            <li>
              <strong>Identificação de novos falantes</strong> quando não estão claramente identificados no áudio
            </li>
          </ul>

          <h3>Métodos de Implementação</h3>
          <ul>
            <li>
              <strong>Faixa de áudio alternativa</strong> com audiodescrição integrada
            </li>
            <li>
              <strong>Faixa de audiodescrição separada</strong> que pode ser ativada pelo usuário
            </li>
            <li>
              <strong>Pausas estendidas</strong> no vídeo original para acomodar descrições adicionais
            </li>
          </ul>

          <br /> 

          <div className="not-prose bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-2">Exemplo de Implementação de Audiodescrição</h4>
            <pre className="text-sm overflow-x-auto">
              <code>
                {`<video controls>
  <source src="video-padrao.mp4" type="video/mp4">
  <source src="video-com-audiodescricao.mp4" type="video/mp4" data-desc="true">
  <track kind="captions" src="legendas.vtt" srclang="pt-BR" label="Português" default>
</video>

<button onclick="toggleAudioDescription()">Ativar/Desativar Audiodescrição</button>

<script>
function toggleAudioDescription() {
  const video = document.querySelector('video');
  const sources = video.querySelectorAll('source');
  const currentTime = video.currentTime;
  const isPaused = video.paused;
  
  // Troca entre as versões do vídeo
  const standardSrc = sources[0].src;
  const descSrc = sources[1].src;
  
  sources[0].src = descSrc;
  sources[1].src = standardSrc;
  
  // Recarrega o vídeo e restaura o estado
  video.load();
  video.currentTime = currentTime;
  if (!isPaused) video.play();
}
</script>`}
              </code>
            </pre>
          </div>

          <h2>Transcrições</h2>
          <p>
            Transcrições são versões textuais completas do conteúdo de áudio ou vídeo. Elas beneficiam pessoas surdas,
            com deficiência auditiva, e também aquelas que preferem ler em vez de assistir ou ouvir.
          </p>

          <h3>Benefícios das Transcrições</h3>
          <ul>
            <li>
              <strong>Acessibilidade</strong> para pessoas com deficiências auditivas
            </li>
            <li>
              <strong>Preferências de consumo</strong> para pessoas que preferem ler
            </li>
            <li>
              <strong>Situações de uso</strong> onde áudio não é prático (ambientes barulhentos, silenciosos)
            </li>
            <li>
              <strong>SEO melhorado</strong> com conteúdo indexável por mecanismos de busca
            </li>
            <li>
              <strong>Tradução facilitada</strong> para outros idiomas
            </li>
          </ul>

          <h3>Melhores Práticas para Transcrições</h3>
          <ul>
            <li>
              <strong>Inclua todo o conteúdo falado</strong> e informações sonoras relevantes
            </li>
            <li>
              <strong>Identifique os falantes</strong> quando houver múltiplas pessoas
            </li>
            <li>
              <strong>Descreva elementos visuais importantes</strong> para vídeos
            </li>
            <li>
              <strong>Formate para facilitar a leitura</strong> com parágrafos, cabeçalhos, etc.
            </li>
            <li>
              <strong>Disponibilize a transcrição</strong> próxima ao conteúdo multimídia
            </li>
          </ul>

          <br /> 

          <div className="not-prose bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-2">Exemplo de Implementação de Transcrição</h4>
            <div className="mb-4">
              <iframe
                className="murf-embed w-full"
                width="560"
                height="102"
                src="https://murf.ai/embeds/index.html?embedId=maskttrz"
                allowFullScreen
                title="Murf Embed Player"
                style={{ border: "none" }}
              ></iframe>
              <script src="https://murf.ai/embeds/widget.js"></script>
            </div>
            <details>
              <summary className="cursor-pointer font-medium mb-2">Transcrição Completa (Clique para expandir)</summary>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-md">
                <p>
                  <strong>Apresentador:</strong> Bem-vindos ao nosso podcast sobre acessibilidade digital. Hoje vamos
                  falar sobre a importância das transcrições.
                </p>
                <p>
                  <strong>Convidada:</strong> Obrigada por me receber. As transcrições são fundamentais não apenas para
                  pessoas com deficiência auditiva, mas para todos que preferem consumir conteúdo em formato de texto.
                </p>
                <p>
                  <strong>Apresentador:</strong> Exatamente! E também ajudam na indexação do conteúdo pelos mecanismos
                  de busca, aumentando o alcance do seu material.
                </p>
                <p>
                  <strong>Convidada:</strong> Sem dúvida. E não podemos esquecer que muitas pessoas estão em situações
                  onde não podem ouvir áudio, como em transporte público sem fones de ouvido ou em ambientes de
                  trabalho.
                </p>
                <p>
                  <strong>Apresentador:</strong> [Risos] Já me salvei muitas vezes com transcrições nessas situações!
                </p>
                <p>
                  <strong>Convidada:</strong> É por isso que recomendamos sempre incluir transcrições completas para
                  todo conteúdo de áudio e vídeo.
                </p>
                <p>
                  <em>[Som de notificação]</em>
                </p>
                <p>
                  <strong>Apresentador:</strong> Parece que recebemos uma pergunta de um ouvinte. Vamos responder isso
                  no próximo bloco.
                </p>
              </div>
            </details>
          </div>

          <h2>Controles de Reprodução Acessíveis</h2>
          <p>
            Os controles de reprodução para conteúdo multimídia devem ser acessíveis para todos os usuários, incluindo
            aqueles que usam tecnologias assistivas ou navegam apenas por teclado.
          </p>

          <h3>Requisitos para Controles Acessíveis</h3>
          <ul>
            <li>
              <strong>Operáveis por teclado</strong> - todos os controles devem ser acessíveis via teclado
            </li>
            <li>
              <strong>Claramente rotulados</strong> - use texto ou ícones com texto alternativo
            </li>
            <li>
              <strong>Tamanho adequado</strong> - botões grandes o suficiente para serem alvos fáceis
            </li>
            <li>
              <strong>Contraste suficiente</strong> - controles visíveis contra o fundo do vídeo
            </li>
            <li>
              <strong>Funcionalidade completa</strong> - play/pause, volume, legendas, velocidade de reprodução
            </li>
          </ul>

          <h3>Implementação de Controles Personalizados</h3>
          <p>Se você implementar controles de reprodução personalizados, certifique-se de:</p>

          <ul>
            <li>
              <strong>Usar roles ARIA apropriados</strong> para comunicar a função dos controles
            </li>
            <li>
              <strong>Fornecer feedback sobre o estado atual</strong> (pausado, reproduzindo, mudo)
            </li>
            <li>
              <strong>Testar com tecnologias assistivas</strong> como leitores de tela
            </li>
          </ul>

          <br /> 

          <div className="not-prose bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-2">Exemplo de Controles Acessíveis</h4>
            <pre className="text-sm overflow-x-auto">
              <code>
                {`<div class="video-container">
  <video id="meu-video" src="video.mp4"></video>
  
  <div class="controles" aria-label="Controles de vídeo">
    <button 
      id="play-pause" 
      aria-label="Reproduzir" 
      aria-pressed="false"
      onclick="togglePlay()"
    >
      <span class="icon-play" aria-hidden="true"></span>
    </button>
    
    <div class="volume-container">
      <button 
        id="mute" 
        aria-label="Mudo" 
        aria-pressed="false"
        onclick="toggleMute()"
      >
        <span class="icon-volume" aria-hidden="true"></span>
      </button>
      
      <label for="volume-slider" class="sr-only">Volume</label>
      <input 
        type="range" 
        id="volume-slider" 
        min="0" 
        max="100" 
        value="100"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="100"
        oninput="changeVolume(this.value)"
      >
    </div>
    
    <div class="progress-container">
      <label for="progress-bar" class="sr-only">Progresso do vídeo</label>
      <input 
        type="range" 
        id="progress-bar" 
        min="0" 
        max="100" 
        value="0"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0"
        oninput="seekVideo(this.value)"
      >
    </div>
    
    <button 
      id="cc-button" 
      aria-label="Legendas" 
      aria-pressed="false"
      onclick="toggleCaptions()"
    >
      <span class="icon-cc" aria-hidden="true"></span>
    </button>
  </div>
</div>`}
              </code>
            </pre>
          </div>

          <h2>Reprodução Automática e Conteúdo em Movimento</h2>
          <p>
            Conteúdo que inicia automaticamente ou tem movimento pode causar problemas para vários grupos de usuários:
          </p>

          <ul>
            <li>
              <strong>Pessoas com deficiências cognitivas</strong> podem se distrair facilmente
            </li>
            <li>
              <strong>Pessoas com epilepsia fotossensível</strong> podem ter convulsões com conteúdo piscante
            </li>
            <li>
              <strong>Usuários de leitores de tela</strong> podem ter sua experiência interrompida
            </li>
            <li>
              <strong>Pessoas com conexões limitadas</strong> podem ter consumo de dados não desejado
            </li>
          </ul>

          <h3>Melhores Práticas</h3>
          <ul>
            <li>
              <strong>Evite reprodução automática</strong> com áudio
            </li>
            <li>
              <strong>Forneça controles para pausar, parar ou ocultar</strong> conteúdo em movimento
            </li>
            <li>
              <strong>Limite a duração</strong> de animações automáticas para no máximo 5 segundos
            </li>
            <li>
              <strong>Evite conteúdo que pisca</strong> mais de 3 vezes por segundo
            </li>
            <li>
              <strong>Respeite as preferências do sistema</strong> para movimento reduzido (prefers-reduced-motion)
            </li>
          </ul>

          <br /> 

          <div className="not-prose bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-2">Exemplo de Respeito à Preferência de Movimento Reduzido</h4>
            <pre className="text-sm overflow-x-auto">
              <code>
                {`/* CSS */
@media (prefers-reduced-motion: reduce) {
  /* Remover ou reduzir animações */
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Parar reprodução automática de vídeos */
  video[autoplay] {
    display: none;
  }
}

/* JavaScript */
const video = document.querySelector('video');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  video.removeAttribute('autoplay');
  video.pause();
}`}
              </code>
            </pre>
          </div>

          <h2>Áudio em Segundo Plano</h2>
          <p>Áudio em segundo plano pode interferir com leitores de tela e causar distração. Siga estas diretrizes:</p>

          <ul>
            <li>
              <strong>Evite áudio que inicia automaticamente</strong> ou reproduz continuamente
            </li>
            <li>
              <strong>Forneça controles para pausar, parar ou ajustar o volume</strong> do áudio
            </li>
            <li>
              <strong>Considere iniciar o áudio em volume baixo</strong> se ele for iniciar automaticamente
            </li>
          </ul>

          <h2>Mídia Responsiva</h2>
          <p>Conteúdo multimídia deve ser acessível em diferentes dispositivos e tamanhos de tela:</p>

          <ul>
            <li>
              <strong>Use design responsivo</strong> para players de mídia
            </li>
            <li>
              <strong>Garanta que controles sejam utilizáveis</strong> em dispositivos touchscreen
            </li>
            <li>
              <strong>Considere tamanhos de arquivo alternativos</strong> para diferentes larguras de banda
            </li>
            <li>
              <strong>Teste em diferentes dispositivos</strong> e orientações de tela
            </li>
          </ul>

          <br /> 

          <div className="not-prose bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-2">Exemplo de Vídeo Responsivo</h4>
            <pre className="text-sm overflow-x-auto">
              <code>
                {`<!-- HTML -->
<div class="video-container">
  <video controls>
    <source src="video-alta-qualidade.mp4" type="video/mp4" media="(min-width: 800px)">
    <source src="video-media-qualidade.mp4" type="video/mp4" media="(min-width: 400px) and (max-width: 799px)">
    <source src="video-baixa-qualidade.mp4" type="video/mp4">
    <track kind="captions" src="legendas.vtt" srclang="pt-BR" label="Português" default>
  </video>
</div>

/* CSS */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Proporção 16:9 */
  height: 0;
  overflow: hidden;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Para controles maiores em dispositivos touch */
@media (pointer: coarse) {
  .video-container .controles button {
    min-height: 44px;
    min-width: 44px;
  }
}`}
              </code>
            </pre>
          </div>

          <h2>Lista de Verificação para Mídia Acessível</h2>
          <ul>
            <li>Vídeos têm legendas sincronizadas</li>
            <li>Conteúdo visual importante é descrito por audiodescrição</li>
            <li>Transcrições completas estão disponíveis</li>
            <li>Controles de mídia são acessíveis por teclado</li>
            <li>Controles têm rótulos claros e são facilmente visíveis</li>
            <li>Não há reprodução automática com áudio</li>
            <li>Conteúdo em movimento pode ser pausado</li>
            <li>Não há conteúdo que pisca mais de 3 vezes por segundo</li>
            <li>O player de mídia é responsivo e funciona em diferentes dispositivos</li>
            <li>Preferências de movimento reduzido são respeitadas</li>
          </ul>

          <h2>Recursos Adicionais</h2>
          <ul>
            <li>
              <a
                href="https://www.w3.org/WAI/media/av/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                W3C Web Accessibility Initiative (WAI) - Making Audio and Video Media Accessible{" "}
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                MDN - Adding captions and subtitles to HTML5 video <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://www.3playmedia.com/blog/how-to-create-an-audio-description/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                3Play Media - How to Create an Audio Description <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Próximos Passos</h3>
            <p className="mb-4">
              Agora que você entende como tornar conteúdo multimídia acessível, recomendamos explorar os seguintes
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
                  href="/aprendizado/cores-contraste"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Cores e Contraste na Acessibilidade Web
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
