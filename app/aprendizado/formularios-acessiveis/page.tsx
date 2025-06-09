import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function FormulariosAcessiveisPage() {
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
            Formulários Acessíveis: Melhores Práticas
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Publicado em: 25 de Junho de 2023 • Tempo de leitura: 15 minutos
          </p>
        </div>

        <div className="prose prose-green dark:prose-invert max-w-none">
          <h2>Por que Formulários Acessíveis são Importantes?</h2>
          <p>
            Formulários são pontos de interação críticos em sites e aplicativos. Eles permitem que os usuários realizem
            tarefas essenciais como criar contas, fazer compras, enviar feedback e muito mais. Quando os formulários não
            são acessíveis, pessoas com deficiências podem enfrentar barreiras significativas que as impedem de concluir
            essas tarefas.
          </p>

          <p>
            Um formulário acessível beneficia todos os usuários, não apenas aqueles com deficiências. Formulários bem
            projetados são mais fáceis de entender, preencher e enviar para todos.
          </p>

          <h2>Princípios Fundamentais para Formulários Acessíveis</h2>

          <h3>1. Estrutura e Organização Clara</h3>
          <p>
            Um formulário bem estruturado ajuda todos os usuários a entenderem o que está sendo solicitado e como
            preencher as informações.
          </p>

          <ul>
            <li>
              <strong>Agrupe campos relacionados</strong> usando o elemento <code>&lt;fieldset&gt;</code> com{" "}
              <code>&lt;legend&gt;</code>
            </li>
            <li>
              <strong>Organize o formulário em seções lógicas</strong> para formulários longos
            </li>
            <li>
              <strong>Mantenha uma ordem de tabulação lógica</strong> que siga o fluxo visual do formulário
            </li>
            <li>
              <strong>Use cabeçalhos</strong> para separar seções diferentes
            </li>
          </ul>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<form>
  <h2>Informações Pessoais</h2>
  
  <div>
    <label for="nome">Nome completo:</label>
    <input type="text" id="nome" name="nome" required>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <fieldset>
    <legend>Preferências de contato</legend>
    
    <div>
      <input type="checkbox" id="contato-email" name="contato" value="email">
      <label for="contato-email">Email</label>
    </div>
    
    <div>
      <input type="checkbox" id="contato-telefone" name="contato" value="telefone">
      <label for="contato-telefone">Telefone</label>
    </div>
  </fieldset>
  
  <button type="submit">Enviar</button>
</form>`}
            </code>
          </pre>

          <br /> 

          <h3>2. Labels Claros e Associados</h3>
          <p>
            Cada campo de formulário deve ter um label claro e explicitamente associado que descreva o que deve ser
            inserido.
          </p>

          <ul>
            <li>
              <strong>Use o elemento &lt;label&gt;</strong> com o atributo <code>for</code> que corresponda ao{" "}
              <code>id</code> do campo
            </li>
            <li>
              <strong>Posicione os labels consistentemente</strong>, geralmente acima ou à esquerda dos campos
            </li>
            <li>
              <strong>Seja específico e conciso</strong> nos textos dos labels
            </li>
            <li>
              <strong>Nunca substitua labels</strong> por placeholders
            </li>
          </ul>

          <br /> 

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Ruim: Sem Label</h4>
              <div className="p-4 border rounded-md">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <p className="text-sm text-red-600 mt-2">
                Problema: Sem label associado, usuários de leitores de tela não saberão o propósito deste campo.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Bom: Com Label</h4>
              <div className="p-4 border rounded-md">
                <label htmlFor="nome-demo" className="block mb-1 font-medium">
                  Nome completo:
                </label>
                <input
                  type="text"
                  id="nome-demo"
                  placeholder="Ex: Maria Silva"
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <p className="text-sm text-green-600 mt-2">Correto: Label claramente associado ao campo usando for/id.</p>
            </div>
          </div>

          <h3>3. Instruções e Dicas Claras</h3>
          <p>Forneça instruções claras sobre como preencher o formulário e quais informações são esperadas.</p>

          <ul>
            <li>
              <strong>Indique claramente campos obrigatórios</strong> (não apenas com um asterisco)
            </li>
            <li>
              <strong>Forneça exemplos</strong> do formato esperado para entradas complexas
            </li>
            <li>
              <strong>Use o atributo aria-describedby</strong> para associar instruções adicionais a um campo
            </li>
            <li>
              <strong>Inclua dicas de formato</strong> para campos como telefone, data, etc.
            </li>
          </ul>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<div>
  <label for="telefone">Telefone: <span class="required">Obrigatório</span></label>
  <input 
    type="tel" 
    id="telefone" 
    name="telefone" 
    aria-describedby="telefone-formato" 
    required
  >
  <p id="telefone-formato" class="hint">Formato: (00) 00000-0000</p>
</div>`}
            </code>
          </pre>

          <br /> 

          <h3>4. Validação e Feedback de Erros</h3>
          <p>
            Forneça feedback claro e acessível quando ocorrerem erros, ajudando os usuários a corrigirem suas entradas.
          </p>

          <ul>
            <li>
              <strong>Use validação nativa do HTML</strong> quando possível (required, pattern, etc.)
            </li>
            <li>
              <strong>Forneça mensagens de erro específicas</strong> que expliquem o problema e como corrigi-lo
            </li>
            <li>
              <strong>Posicione mensagens de erro</strong> próximas ao campo relacionado
            </li>
            <li>
              <strong>Use aria-invalid</strong> para indicar campos com erro
            </li>
            <li>
              <strong>Use aria-live</strong> para anunciar erros dinamicamente para usuários de leitores de tela
            </li>
          </ul>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<div>
  <label for="senha">Senha:</label>
  <input 
    type="password" 
    id="senha" 
    name="senha" 
    aria-describedby="senha-requisitos senha-erro"
    aria-invalid="true"
    required
  >
  <p id="senha-requisitos" class="hint">
    A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula e um número.
  </p>
  <p id="senha-erro" class="error" role="alert">
    Erro: A senha não atende aos requisitos mínimos.
  </p>
</div>`}
            </code>
          </pre>

          <br /> 

          <h3>5. Tipos de Entrada Apropriados</h3>
          <p>Use o tipo de entrada mais apropriado para cada campo, aproveitando os recursos nativos do HTML5.</p>

          <ul>
            <li>
              <strong>Use input type="email"</strong> para endereços de email
            </li>
            <li>
              <strong>Use input type="tel"</strong> para números de telefone
            </li>
            <li>
              <strong>Use input type="date"</strong> para seleção de datas
            </li>
            <li>
              <strong>Use input type="number"</strong> para entradas numéricas
            </li>
            <li>
              <strong>Use select, radio ou checkbox</strong> para opções predefinidas
            </li>
          </ul>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<!-- Tipos de entrada apropriados -->
<div>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</div>

<div>
  <label for="telefone">Telefone:</label>
  <input type="tel" id="telefone" name="telefone">
</div>

<div>
  <label for="nascimento">Data de nascimento:</label>
  <input type="date" id="nascimento" name="nascimento">
</div>

<div>
  <label for="quantidade">Quantidade:</label>
  <input type="number" id="quantidade" name="quantidade" min="1" max="10">
</div>`}
            </code>
          </pre>

          <br /> 

          <h2>Componentes de Formulário Específicos</h2>

          <h3>Checkboxes e Radio Buttons</h3>
          <p>Checkboxes e radio buttons requerem considerações especiais para acessibilidade:</p>

          <ul>
            <li>
              <strong>Agrupe opções relacionadas</strong> com fieldset e legend
            </li>
            <li>
              <strong>Posicione o label após</strong> o controle (convenção padrão)
            </li>
            <li>
              <strong>Forneça espaçamento adequado</strong> para facilitar o clique
            </li>
            <li>
              <strong>Verifique se os controles são grandes o suficiente</strong> para serem alvos fáceis
            </li>
          </ul>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<fieldset>
  <legend>Método de pagamento</legend>
  
  <div>
    <input type="radio" id="cartao" name="pagamento" value="cartao">
    <label for="cartao">Cartão de crédito</label>
  </div>
  
  <div>
    <input type="radio" id="boleto" name="pagamento" value="boleto">
    <label for="boleto">Boleto bancário</label>
  </div>
  
  <div>
    <input type="radio" id="pix" name="pagamento" value="pix">
    <label for="pix">PIX</label>
  </div>
</fieldset>`}
            </code>
          </pre>

          <br /> 

          <h3>Menus Suspensos (Select)</h3>
          <p>Menus suspensos devem ser implementados de forma acessível:</p>

          <ul>
            <li>
              <strong>Use optgroup</strong> para agrupar opções relacionadas em listas longas
            </li>
            <li>
              <strong>Forneça uma opção padrão significativa</strong> (não apenas "Selecione...")
            </li>
            <li>
              <strong>Considere usar um componente de combobox acessível</strong> para seleções mais complexas
            </li>
          </ul>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<div>
  <label for="estado">Estado:</label>
  <select id="estado" name="estado">
    <option value="">Selecione um estado</option>
    <optgroup label="Região Sudeste">
      <option value="ES">Espírito Santo</option>
      <option value="MG">Minas Gerais</option>
      <option value="RJ">Rio de Janeiro</option>
      <option value="SP">São Paulo</option>
    </optgroup>
    <optgroup label="Região Sul">
      <option value="PR">Paraná</option>
      <option value="RS">Rio Grande do Sul</option>
      <option value="SC">Santa Catarina</option>
    </optgroup>
    <!-- Outras regiões... -->
  </select>
</div>`}
            </code>
          </pre>

          <br /> 

          <h3>Botões de Envio e Ações</h3>
          <p>Botões devem comunicar claramente sua ação:</p>

          <ul>
            <li>
              <strong>Use textos descritivos</strong> que indiquem a ação (ex: "Enviar formulário" em vez de apenas
              "Enviar")
            </li>
            <li>
              <strong>Diferencie visualmente</strong> botões de envio de botões secundários
            </li>
            <li>
              <strong>Use o elemento button</strong> em vez de input type="submit" para maior flexibilidade
            </li>
            <li>
              <strong>Forneça feedback</strong> após o envio do formulário
            </li>
          </ul>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<div class="form-actions">
  <button type="button" class="button-secondary">Cancelar</button>
  <button type="submit" class="button-primary">Enviar formulário</button>
</div>`}
            </code>
          </pre>

          <br /> 

          <h2>Considerações Avançadas</h2>

          <h3>Formulários Longos</h3>
          <p>Para formulários longos, considere estas estratégias adicionais:</p>

          <ul>
            <li>
              <strong>Divida em múltiplas etapas</strong> com indicação clara do progresso
            </li>
            <li>
              <strong>Permita salvar o progresso</strong> para continuar mais tarde
            </li>
            <li>
              <strong>Forneça resumos</strong> das informações inseridas antes do envio final
            </li>
            <li>
              <strong>Agrupe campos relacionados</strong> em seções com cabeçalhos claros
            </li>
          </ul>

          <h3>Autofill e Autocomplete</h3>
          <p>Aproveite os recursos de preenchimento automático do navegador:</p>

          <ul>
            <li>
              <strong>Use o atributo autocomplete</strong> com valores apropriados (name, email, tel, etc.)
            </li>
            <li>
              <strong>Mantenha nomes de campos consistentes</strong> com convenções comuns
            </li>
          </ul>

          <br /> 

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`<div>
  <label for="nome-completo">Nome completo:</label>
  <input type="text" id="nome-completo" name="nome" autocomplete="name">
</div>

<div>
  <label for="email-contato">Email:</label>
  <input type="email" id="email-contato" name="email" autocomplete="email">
</div>

<div>
  <label for="tel-celular">Celular:</label>
  <input type="tel" id="tel-celular" name="celular" autocomplete="tel">
</div>

<div>
  <label for="endereco">Endereço:</label>
  <input type="text" id="endereco" name="endereco" autocomplete="street-address">
</div>`}
            </code>
          </pre>

          <br /> 

          <h3>Tempo Limite e Sessões</h3>
          <p>Considere usuários que podem precisar de mais tempo para preencher formulários:</p>

          <ul>
            <li>
              <strong>Evite tempos limite curtos</strong> para sessões de formulário
            </li>
            <li>
              <strong>Avise os usuários</strong> antes que uma sessão expire
            </li>
            <li>
              <strong>Ofereça a opção de estender</strong> o tempo da sessão
            </li>
            <li>
              <strong>Salve os dados inseridos</strong> para que não sejam perdidos
            </li>
          </ul>

          <h2>Testando a Acessibilidade de Formulários</h2>
          <p>Para garantir que seus formulários sejam realmente acessíveis, realize estes testes:</p>

          <ol>
            <li>
              <strong>Navegue pelo formulário usando apenas o teclado</strong> (Tab, Shift+Tab, Enter, Espaço)
            </li>
            <li>
              <strong>Teste com um leitor de tela</strong> como NVDA, JAWS ou VoiceOver
            </li>
            <li>
              <strong>Verifique o contraste</strong> entre texto e fundo
            </li>
            <li>
              <strong>Teste com zoom de 200%</strong> para verificar se o formulário ainda é utilizável
            </li>
            <li>
              <strong>Verifique se as mensagens de erro</strong> são anunciadas por leitores de tela
            </li>
            <li>
              <strong>Teste em dispositivos móveis</strong> para verificar a usabilidade em telas pequenas
            </li>
          </ol>

          <h2>Lista de Verificação para Formulários Acessíveis</h2>
          <ul>
            <li>Todos os campos têm labels associados explicitamente</li>
            <li>Campos obrigatórios são claramente indicados</li>
            <li>Instruções e dicas são fornecidas quando necessário</li>
            <li>Mensagens de erro são claras e específicas</li>
            <li>O formulário pode ser navegado e preenchido usando apenas o teclado</li>
            <li>Campos relacionados são agrupados com fieldset e legend</li>
            <li>A ordem de tabulação segue um fluxo lógico</li>
            <li>Os tipos de entrada apropriados são usados para cada campo</li>
            <li>O contraste de cores é suficiente</li>
            <li>O formulário funciona bem com zoom de 200%</li>
            <li>Botões têm textos descritivos</li>
            <li>O atributo autocomplete é usado quando apropriado</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Próximos Passos</h3>
            <p className="mb-4">
              Agora que você entende como criar formulários acessíveis, recomendamos explorar os seguintes recursos:
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
                  href="/aprendizado/navegacao-teclado"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Navegação por Teclado: Um Guia Completo
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
