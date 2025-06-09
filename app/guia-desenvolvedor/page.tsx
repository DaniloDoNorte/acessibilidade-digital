import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, FileCode, Keyboard, Eye, Volume2, Brain } from "lucide-react"

export default function DeveloperGuidePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Guia para Desenvolvedores</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Este guia fornece orientações práticas para implementar acessibilidade em seus projetos web, seguindo as
          diretrizes WCAG 2.1 e as melhores práticas do setor.
        </p>

        <Tabs defaultValue="html" className="mb-12">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="html" className="flex items-center gap-2">
              <FileCode className="h-4 w-4" />
              <span>HTML Semântico</span>
            </TabsTrigger>
            <TabsTrigger value="aria" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>ARIA</span>
            </TabsTrigger>
            <TabsTrigger value="js" className="flex items-center gap-2">
              <Keyboard className="h-4 w-4" />
              <span>JavaScript</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>HTML Semântico</CardTitle>
                <CardDescription>
                  Usando elementos HTML com significado semântico para melhorar a acessibilidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Estrutura do Documento</h3>
                  <p className="mb-4">Use elementos semânticos para estruturar seu documento:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Página</title>
</head>
<body>
  <header>
    <nav aria-label="Navegação principal">
      <!-- Navegação -->
    </nav>
  </header>
  
  <main>
    <h1>Título Principal</h1>
    <!-- Conteúdo principal -->
  </main>
  
  <footer>
    <!-- Rodapé -->
  </footer>
</body>
</html>`}
                    </code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Hierarquia de Cabeçalhos</h3>
                  <p className="mb-4">Use cabeçalhos (h1-h6) para criar uma estrutura hierárquica clara:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`<h1>Título Principal da Página</h1>

<section>
  <h2>Seção Principal</h2>
  <p>Conteúdo da seção...</p>
  
  <article>
    <h3>Subseção</h3>
    <p>Conteúdo da subseção...</p>
    
    <div>
      <h4>Tópico dentro da subseção</h4>
      <p>Conteúdo do tópico...</p>
    </div>
  </article>
</section>`}
                    </code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Formulários Acessíveis</h3>
                  <p className="mb-4">Use elementos de formulário com labels associados:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`<form>
  <div>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <p id="email-hint" class="hint">Formato: exemplo@dominio.com</p>
  </div>
  
  <fieldset>
    <legend>Preferências de contato:</legend>
    
    <div>
      <input type="checkbox" id="email-pref" name="contato" value="email">
      <label for="email-pref">Email</label>
    </div>
    
    <div>
      <input type="checkbox" id="telefone-pref" name="contato" value="telefone">
      <label for="telefone-pref">Telefone</label>
    </div>
  </fieldset>
  
  <button type="submit">Enviar</button>
</form>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aria" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>ARIA (Accessible Rich Internet Applications)</CardTitle>
                <CardDescription>
                  Usando atributos ARIA para melhorar a acessibilidade de componentes interativos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Landmarks (Pontos de Referência)</h3>
                  <p className="mb-4">Use roles ARIA para definir regiões importantes da página:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`<!-- Usando elementos semânticos com roles implícitos -->
<header>
  <nav aria-label="Navegação principal">
    <!-- Navegação -->
  </nav>
</header>

<main>
  <!-- Conteúdo principal -->
</main>

<aside aria-label="Informações relacionadas">
  <!-- Conteúdo secundário -->
</aside>

<footer>
  <!-- Rodapé -->
</footer>

<!-- Usando roles explícitos quando necessário -->
<div role="search">
  <!-- Formulário de busca -->
</div>`}
                    </code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Estados e Propriedades</h3>
                  <p className="mb-4">Use atributos ARIA para comunicar estados e propriedades:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`<!-- Botão de alternância -->
<button 
  aria-pressed="false" 
  id="modo-escuro"
>
  Ativar modo escuro
</button>

<!-- Menu expansível -->
<button 
  aria-expanded="false" 
  aria-controls="menu-principal"
>
  Menu
</button>
<ul id="menu-principal" hidden>
  <!-- Itens do menu -->
</ul>

<!-- Indicador de carregamento -->
<div 
  role="progressbar" 
  aria-valuenow="75" 
  aria-valuemin="0" 
  aria-valuemax="100"
>
  75%
</div>`}
                    </code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Live Regions</h3>
                  <p className="mb-4">Use regiões ao vivo para anunciar atualizações dinâmicas:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`<!-- Anúncios importantes -->
<div 
  aria-live="assertive" 
  aria-atomic="true"
>
  <!-- Conteúdo que será anunciado imediatamente -->
</div>

<!-- Atualizações menos urgentes -->
<div 
  aria-live="polite" 
  aria-atomic="true"
>
  <!-- Conteúdo que será anunciado quando o usuário estiver ocioso -->
</div>

<!-- Status de um formulário -->
<div 
  role="status" 
  aria-live="polite"
>
  <!-- Mensagens de status do formulário -->
</div>

<!-- Mensagens de alerta -->
<div 
  role="alert"
>
  <!-- Mensagens de erro ou alerta -->
</div>`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="js" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>JavaScript Acessível</CardTitle>
                <CardDescription>Implementando interatividade acessível com JavaScript</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gerenciamento de Foco</h3>
                  <p className="mb-4">Gerencie o foco do teclado em componentes interativos:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// Abrir um modal e mover o foco para ele
function abrirModal() {
  const modal = document.getElementById('meu-modal');
  const primeiroElementoFocavel = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  
  // Exibir o modal
  modal.hidden = false;
  
  // Mover o foco para o primeiro elemento focável
  if (primeiroElementoFocavel) {
    primeiroElementoFocavel.focus();
  }
}

// Armadilha de foco para manter o foco dentro do modal
function armadilhaFoco(e) {
  const modal = document.getElementById('meu-modal');
  if (!modal.hidden) {
    const elementosFocaveis = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const primeiro = elementosFocaveis[0];
    const ultimo = elementosFocaveis[elementosFocaveis.length - 1];
    
    // Se pressionar Shift+Tab no primeiro elemento, vá para o último
    if (e.shiftKey && e.key === 'Tab' && document.activeElement === primeiro) {
      e.preventDefault();
      ultimo.focus();
    }
    
    // Se pressionar Tab no último elemento, vá para o primeiro
    else if (!e.shiftKey && e.key === 'Tab' && document.activeElement === ultimo) {
      e.preventDefault();
      primeiro.focus();
    }
  }
}`}
                    </code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Suporte a Teclado</h3>
                  <p className="mb-4">Implemente controles de teclado para componentes personalizados:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// Implementando um menu dropdown acessível
const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu');
const itensMenu = menu.querySelectorAll('[role="menuitem"]');

// Alternar o menu
botaoMenu.addEventListener('click', () => {
  const expandido = botaoMenu.getAttribute('aria-expanded') === 'true';
  botaoMenu.setAttribute('aria-expanded', !expandido);
  menu.hidden = expandido;
  
  if (!expandido) {
    // Focar no primeiro item quando abrir
    itensMenu[0].focus();
  }
});

// Navegação por teclado dentro do menu
menu.addEventListener('keydown', (e) => {
  const indiceAtual = Array.from(itensMenu).indexOf(document.activeElement);
  
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      // Mover para o próximo item ou voltar ao início
      const proximoIndice = (indiceAtual + 1) % itensMenu.length;
      itensMenu[proximoIndice].focus();
      break;
      
    case 'ArrowUp':
      e.preventDefault();
      // Mover para o item anterior ou ir para o final
      const indiceAnterior = (indiceAtual - 1 + itensMenu.length) % itensMenu.length;
      itensMenu[indiceAnterior].focus();
      break;
      
    case 'Escape':
      // Fechar o menu e retornar o foco ao botão
      botaoMenu.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
      botaoMenu.focus();
      break;
  }
});`}
                    </code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Atualizando Regiões Dinâmicas</h3>
                  <p className="mb-4">Atualize regiões ao vivo para anunciar mudanças:</p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// Função para atualizar uma mensagem de status
function atualizarStatus(mensagem) {
  const statusRegion = document.getElementById('status-mensagem');
  
  // Limpar conteúdo existente
  statusRegion.textContent = '';
  
  // Adicionar nova mensagem após um breve atraso
  // Isso garante que leitores de tela anunciem a mudança
  setTimeout(() => {
    statusRegion.textContent = mensagem;
  }, 50);
}

// Exemplo de uso após enviar um formulário
document.getElementById('meu-formulario').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  try {
    // Lógica para enviar o formulário
    await enviarFormulario();
    
    // Atualizar o status com sucesso
    atualizarStatus('Formulário enviado com sucesso!');
  } catch (erro) {
    // Atualizar o status com erro
    atualizarStatus('Erro ao enviar formulário. Por favor, tente novamente.');
  }
});`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Testando Acessibilidade</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-600" />
                  Testes Automatizados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Ferramentas para testes automatizados de acessibilidade:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a
                      href="https://www.deque.com/axe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      axe DevTools
                    </a>{" "}
                    - Extensão de navegador e biblioteca para testes
                  </li>
                  <li>
                    <a
                      href="https://wave.webaim.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      WAVE
                    </a>{" "}
                    - Avaliador de acessibilidade web
                  </li>
                  <li>
                    <a
                      href="https://playwright.dev/docs/accessibility-testing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Playwright
                    </a>{" "}
                    - Testes de acessibilidade automatizados [^3]
                  </li>
                  <li>
                    <a
                      href="https://github.com/pa11y/pa11y"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Pa11y
                    </a>{" "}
                    - Ferramenta de linha de comando para testes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-green-600" />
                  Testes Manuais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Técnicas para testes manuais de acessibilidade:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Navegação por teclado</strong>: Navegue pelo site usando apenas Tab, Shift+Tab, Enter e
                    teclas de seta
                  </li>
                  <li>
                    <strong>Leitores de tela</strong>: Teste com NVDA (Windows), VoiceOver (macOS/iOS) ou TalkBack
                    (Android)
                  </li>
                  <li>
                    <strong>Zoom do navegador</strong>: Teste com zoom de 200% para verificar a legibilidade
                  </li>
                  <li>
                    <strong>Modo de alto contraste</strong>: Verifique se o conteúdo é visível em modo de alto contraste
                  </li>
                  <li>
                    <strong>Desativar estilos</strong>: Verifique se o conteúdo mantém uma ordem lógica sem CSS
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Considerações por Tipo de Deficiência
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-green-600" />
                  Deficiência Visual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use texto alternativo descritivo para imagens</li>
                  <li>Garanta contraste de cores suficiente (mínimo 4.5:1 para texto normal)</li>
                  <li>Não transmita informações apenas por cores</li>
                  <li>Permita redimensionamento de texto até 200% sem perda de conteúdo</li>
                  <li>Forneça descrições para gráficos e visualizações complexas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-green-600" />
                  Deficiência Auditiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Forneça legendas para vídeos</li>
                  <li>Ofereça transcrições para conteúdo de áudio</li>
                  <li>Use linguagem clara e simples</li>
                  <li>Forneça alternativas visuais para alertas sonoros</li>
                  <li>Considere incluir vídeos em língua de sinais para conteúdo importante</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Keyboard className="h-5 w-5 text-green-600" />
                  Deficiência Motora
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Garanta que toda funcionalidade seja acessível via teclado</li>
                  <li>Crie áreas clicáveis grandes o suficiente (mínimo 44x44px)</li>
                  <li>Forneça atalhos de teclado para ações frequentes</li>
                  <li>Evite ações que dependam de tempo ou precisão motora fina</li>
                  <li>Implemente navegação por salto (skip links) para conteúdo principal</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-green-600" />
                  Deficiência Cognitiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use linguagem clara e direta</li>
                  <li>Divida conteúdo complexo em partes menores e gerenciáveis</li>
                  <li>Forneça ilustrações e diagramas para complementar o texto</li>
                  <li>Minimize distrações e animações</li>
                  <li>Mantenha layouts consistentes e previsíveis</li>
                  <li>Ofereça tempo suficiente para ler e interagir com o conteúdo</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
