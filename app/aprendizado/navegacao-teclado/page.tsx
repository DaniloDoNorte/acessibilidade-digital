import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function NavegacaoTecladoPage() {
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
            Navegação por Teclado: Um Guia Completo
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em: 12 de Junho de 2023 • Tempo de leitura: 12 minutos
          </p>
        </div>

        <div className="prose prose-green dark:prose-invert max-w-none">
          <h2>Por que a Navegação por Teclado é Importante?</h2>
          <p>A navegação por teclado é essencial para muitos usuários, incluindo:</p>
          <ul>
            <li>
              <strong>Pessoas com deficiências motoras</strong> que não podem usar um mouse ou touchpad
            </li>
            <li>
              <strong>Pessoas com deficiências visuais</strong> que usam leitores de tela
            </li>
            <li>
              <strong>Usuários avançados</strong> que preferem a eficiência do teclado
            </li>
            <li>
              <strong>Pessoas com lesões temporárias</strong> como síndrome do túnel do carpo
            </li>
          </ul>

          <p>
            Além disso, garantir que seu site seja navegável por teclado é um requisito para conformidade com as
            diretrizes WCAG (critério de sucesso 2.1.1, nível A).
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
            <p className="m-0 text-yellow-800 dark:text-yellow-200">
              <strong>Importante:</strong> Se seu site não for acessível por teclado, você está efetivamente excluindo
              uma parte significativa de seus usuários potenciais.
            </p>
          </div>

          <h2>Comandos Básicos de Navegação por Teclado</h2>
          <p>Estes são os comandos de teclado fundamentais que os usuários utilizam para navegar na web:</p>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tecla</TableHead>
                  <TableHead>Função</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Tab</TableCell>
                  <TableCell>
                    Move o foco para o próximo elemento interativo (links, botões, campos de formulário, etc.)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Shift + Tab</TableCell>
                  <TableCell>Move o foco para o elemento interativo anterior</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Enter</TableCell>
                  <TableCell>Ativa o elemento em foco (clica em links, botões, etc.)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Espaço</TableCell>
                  <TableCell>
                    Ativa botões, marca/desmarca checkboxes e radiobuttons, e às vezes ativa outros controles
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Setas</TableCell>
                  <TableCell>
                    Navega entre opções em menus, listas suspensas, radiobuttons e outros componentes
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Esc</TableCell>
                  <TableCell>Fecha diálogos, menus e outros elementos sobrepostos</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Home / End</TableCell>
                  <TableCell>Move para o início/fim de uma página ou dentro de um campo de texto</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Page Up / Page Down</TableCell>
                  <TableCell>Rola a página para cima/baixo</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2>Implementando Navegação por Teclado Acessível</h2>
          <p>Siga estas práticas para garantir que seu site seja totalmente navegável por teclado:</p>

          <h3>1. Ordem de Tabulação Lógica</h3>
          <p>
            A ordem de tabulação deve seguir o fluxo visual e lógico da página, geralmente de cima para baixo e da
            esquerda para a direita (em culturas ocidentais).
          </p>
         
          <br />

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- Ordem de tabulação natural baseada na ordem do DOM -->
<header>
  <a href="/" tabindex="0">Home</a>
  <nav>
    <a href="/produtos" tabindex="0">Produtos</a>
    <a href="/servicos" tabindex="0">Serviços</a>
    <a href="/contato" tabindex="0">Contato</a>
  </nav>
</header>

<main>
  <h1>Bem-vindo ao nosso site</h1>
  <form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" tabindex="0">
    
    <label for="email">Email:</label>
    <input type="email" id="email" tabindex="0">
    
    <button type="submit" tabindex="0">Enviar</button>
  </form>
</main>`}
            </code>
          </pre>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
            <p className="m-0 text-blue-800 dark:text-blue-200">
              <strong>Dica:</strong> Na maioria dos casos, você não precisa definir explicitamente o atributo{" "}
              <code>tabindex="0"</code>, pois elementos interativos como links, botões e campos de formulário já são
              naturalmente focáveis. Use o atributo tabindex com cautela.
            </p>
          </div>

          <h3>2. Indicador de Foco Visível</h3>
          <p>
            Os usuários precisam ver claramente qual elemento está em foco. Nunca remova o contorno de foco padrão sem
            fornecer uma alternativa visível.
          </p>

          <br />

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`/* CSS - Ruim: remove o indicador de foco sem substituição */
a:focus {
  outline: none; /* Não faça isso! */
}

/* CSS - Bom: estiliza o indicador de foco para combinar com o design */
a:focus {
  outline: 2px solid #4CAF50;
  outline-offset: 2px;
  border-radius: 2px;
}`}
            </code>
          </pre>

          <br />

          <h3>3. Links de Salto (Skip Links)</h3>
          <p>
            Forneça links de salto para permitir que usuários de teclado pulem blocos repetitivos, como menus de
            navegação.
          </p>

          <br />

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- HTML -->
<a href="#conteudo-principal" class="skip-link">Pular para o conteúdo principal</a>

<header>
  <!-- Navegação e outros elementos de cabeçalho -->
</header>

<main id="conteudo-principal">
  <!-- Conteúdo principal -->
</main>

/* CSS */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #4CAF50;
  color: white;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}`}
            </code>
          </pre>

          <br /> 

          <h3>4. Gerenciamento de Foco em Conteúdo Dinâmico</h3>
          <p>
            Quando o conteúdo muda dinamicamente, gerencie o foco do teclado para garantir que os usuários não se
            percam.
          </p>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`// JavaScript para abrir um modal e mover o foco para ele
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

// JavaScript para fechar um modal e retornar o foco
function fecharModal(botaoAbertura) {
  const modal = document.getElementById('meu-modal');
  
  // Esconder o modal
  modal.hidden = true;
  
  // Retornar o foco ao elemento que abriu o modal
  if (botaoAbertura) {
    botaoAbertura.focus();
  }
}`}
            </code>
          </pre>

          <br />
          
          <h3>5. Armadilha de Foco (Focus Trap)</h3>
          <p>
            Em modais e outros elementos sobrepostos, mantenha o foco dentro do elemento para evitar que os usuários
            interajam acidentalmente com o conteúdo oculto.
          </p>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`// JavaScript para criar uma armadilha de foco em um modal
function armadilhaFoco(e) {
  const modal = document.getElementById('meu-modal');
  if (!modal.hidden) {
    const elementosFocaveis = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const primeiro = elementosFocaveis[0];
    const ultimo = elementosFocaveis[elementosFocaveis.length - 1];
    
    // Se pressionar Shift+Tab no primeiro elemento, vá para o último
    if (e.shiftKey && e.key === 'Tab' && document.activeElement === primeiro) {  vá para o último
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

          <br /> 

          <h2>Testando a Navegação por Teclado</h2>
          <p>Siga estes passos para testar a acessibilidade por teclado do seu site:</p>

          <ol>
            <li>
              <strong>Desconecte seu mouse</strong> ou simplesmente não o use durante o teste
            </li>
            <li>
              <strong>Comece no topo da página</strong> e pressione Tab para navegar
            </li>
            <li>
              <strong>Verifique se o indicador de foco</strong> é claramente visível em todos os elementos
            </li>
            <li>
              <strong>Confirme que todos os elementos interativos</strong> podem ser acessados e ativados
            </li>
            <li>
              <strong>Teste todas as funcionalidades</strong>, incluindo formulários, menus suspensos, modais, etc.
            </li>
            <li>
              <strong>Verifique se não há armadilhas de teclado</strong> indesejadas (exceto em modais)
            </li>
            <li>
              <strong>Teste em diferentes navegadores</strong>, pois o comportamento do foco pode variar
            </li>
          </ol>

          <h2>Problemas Comuns e Soluções</h2>

          <h3>Problema: Elementos não focáveis</h3>
          <p>Elementos personalizados como divs estilizados como botões não são naturalmente focáveis.</p>
          <p>
            <strong>Solução:</strong> Use elementos nativos (button, a) ou adicione tabindex="0" e role apropriado.
          </p>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- Ruim -->
<div class="botao" onclick="minhaFuncao()">Clique Aqui</div>

<!-- Bom -->
<button type="button" onclick="minhaFuncao()">Clique Aqui</button>

<!-- Alternativa (menos preferida) -->
<div class="botao" tabindex="0" role="button" onclick="minhaFuncao()" onkeydown="if(event.key==='Enter'||event.key===' ')minhaFuncao()">
  Clique Aqui
</div>`}
            </code>
          </pre>

          <br /> 

          <h3>Problema: Conteúdo oculto ainda focável</h3>
          <p>
            Elementos ocultos com display: none ou visibility: hidden são corretamente removidos da ordem de tabulação,
            mas elementos ocultos com outros métodos (opacity: 0, position: absolute, etc.) ainda podem receber foco.
          </p>
          <p>
            <strong>Solução:</strong> Use display: none ou visibility: hidden para ocultar conteúdo, ou adicione
            tabindex="-1" para remover da ordem de tabulação.
          </p>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- Ruim: ainda focável mesmo quando "oculto" -->
<div class="menu" style="opacity: 0; position: absolute;">
  <a href="/pagina1">Página 1</a>
  <a href="/pagina2">Página 2</a>
</div>

<!-- Bom -->
<div class="menu" style="display: none;">
  <a href="/pagina1">Página 1</a>
  <a href="/pagina2">Página 2</a>
</div>

<!-- Alternativa -->
<div class="menu" style="opacity: 0; position: absolute;" aria-hidden="true">
  <a href="/pagina1" tabindex="-1">Página 1</a>
  <a href="/pagina2" tabindex="-1">Página 2</a>
</div>`}
            </code>
          </pre>

          <br /> 

          <h3>Problema: Ordem de tabulação ilógica</h3>
          <p>
            Posicionamento CSS (float, position, flexbox, grid) pode criar uma ordem visual diferente da ordem do DOM,
            resultando em uma navegação por teclado confusa.
          </p>
          <p>
            <strong>Solução:</strong> Estruture seu HTML para corresponder à ordem visual desejada, ou use tabindex para
            controlar a ordem (com cautela).
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg my-6 border-l-4 border-red-500">
            <p className="m-0 text-red-800 dark:text-red-200">
              <strong>Aviso:</strong> Usar valores positivos de tabindex (tabindex="1", tabindex="2", etc.) geralmente
              não é recomendado, pois cria uma ordem de tabulação separada que precede a ordem natural e pode ser
              difícil de manter.
            </p>
          </div>

          <h2>Recursos Adicionais</h2>
          <ul>
            <li>
              <a
                href="https://webaim.org/techniques/keyboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                WebAIM: Acessibilidade por Teclado <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Entendendo o Critério de Sucesso 2.1.1: Teclado <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                MDN: Widgets JavaScript Navegáveis por Teclado <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Próximos Passos</h3>
            <p className="mb-4">
              Agora que você entende a navegação por teclado, recomendamos explorar os seguintes recursos:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/aprendizado/leitores-de-tela"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Como Leitores de Tela Funcionam
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
