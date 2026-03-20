# 📝 To-Do List com HTML, CSS e JavaScript

## Descrição

Uma aplicação web moderna e intuitiva para gerenciamento de tarefas do dia a dia. **To-Do List** resolve o problema de desorganização pessoal permitindo que você crie, visualize e organize suas tarefas em um único lugar. Perfeita para produtividade e organização de atividades pessoais e profissionais.

---

## 🎨 Visuals

<img width="1863" height="920" alt="image" src="https://github.com/user-attachments/assets/1310fc39-5380-4542-aae1-8a22c9c91a63" />

---

## ✨ Funcionalidades

- ✅ **Adicionar Tarefas**: Crie novas tarefas de forma rápida e simples
- 🗑️ **Deletar Tarefas**: Remova tarefas concluídas ou desnecessárias com um clique
- 🎯 **Interface Intuitiva**: Design limpo e responsivo para melhor experiência do usuário
- 🎨 **Tema Escuro**: Interface com cores vibrantes em tema escuro para conforto visual
- 🌌 **Fundo Animado**: Efeito de partículas e movimentação dinâmica no plano de fundo (novo)
- 🖌️ **Estilização Melhorada**: Botões, cards de tarefa e tipografia atualizados para maior contraste e usabilidade
- 📱 **Responsivo**: Funciona perfeitamente em diferentes tamanhos de tela

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **HTML5** | Latest | Estrutura da aplicação |
| **CSS3** | Latest | Estilização e layout responsivo |
| **JavaScript** | ES6+ | Lógica e interatividade |

---

## 📋 Pré-requisitos e Instalação

### Pré-requisitos

- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência externa necessária

### Como executar localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/DomingosMt/To-Do-List-com-HTML-CSS-e-JavaScript.git
   cd To-Do-List-com-HTML-CSS-e-JavaScript
   ```

2. **Abra o arquivo HTML**
   - Double-click no arquivo `index.html`, ou
   - Use um servidor local (recomendado):
     ```bash
     python -m http.server 8000
     ```
   - Acesse `http://localhost:8000` no seu navegador

---

## 🚀 Como Usar

### Adicionando uma Tarefa

1. Digite sua tarefa no campo de entrada
2. Clique no botão **"Adicionar"** ou pressione Enter
3. A tarefa aparecerá na lista abaixo

### Deletando uma Tarefa

1. Localize a tarefa que deseja remover
2. Clique no botão ❌ (vermelho) ao lado da tarefa
3. A tarefa será removida instantaneamente

### Exemplo de Uso

```html
<!-- Digite aqui -->
<input placeholder="Digite a sua tarefa">

<!-- Clique aqui para adicionar -->
<button onclick="adicionarTarefa()">Adicionar</button>

<!-- Clique no ❌ para deletar -->
<li>Minha tarefa <span onclick="delatarTarefa(this)">❌</span></li>
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir com este projeto:

1. **Faça um Fork** do repositório
2. **Crie uma branch** para sua feature
   ```bash
   git checkout -b feature/MinhaNovaFuncionalidade
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/MinhaNovaFuncionalidade
   ```
5. **Abra um Pull Request** descrevendo suas alterações

### Melhorias Sugeridas

- [ ] Salvar tarefas no LocalStorage
- [ ] Marcar tarefas como concluídas
- [ ] Filtrar tarefas por status
- [ ] Editar tarefas existentes
- [ ] Temas customizáveis
- [ ] Dados em BD (Firebase, MongoDB, etc)

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

Dúvidas ou sugestões? Entre em contato através do repositório GitHub ou abra uma issue!

**Autor**: [DomingosMt](https://github.com/DomingosMt)

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**
