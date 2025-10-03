

    
(function() {

    
    const el = (tag, attrs = {}, children = []) => {
      const node = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === 'text') node.textContent = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k in node) node[k] = v;
        else node.setAttribute(k, v);
      });
      const append = (c) => {
        if (Array.isArray(c)) c.forEach(append);
        else if (c instanceof Node) node.appendChild(c);
        else if (typeof c === 'string') node.appendChild(document.createTextNode(c));
      };
      append(children);
      return node;
    };

    
    const titulo = el('h1', { text: 'JavaScript Básico' });
    const intro = el('p', { text: 'Este arquivo demonstra conceitos básicos de JavaScript. Abra o console do navegador (F12) para ver os logs.' });

   
    const btnMensagem = el('button', { id: 'btnMensagem', text: 'Alterar mensagem' });
    const mensagem = el('p', { id: 'mensagem', text: 'Mensagem inicial' });
    const secDom = el('section', {}, [el('h2', { text: 'Eventos e DOM' }), btnMensagem, mensagem]);

    
    const inputNome = el('input', { id: 'nome', placeholder: 'Seu nome' });
    const btnSaudar = el('button', { id: 'btnSaudar', text: 'Saudar' });
    const saudacao = el('p', { id: 'saudacao' });
    const secInput = el('section', {}, [el('h2', { text: 'Interação com Input' }), inputNome, btnSaudar, saudacao]);

    
    const btnLista = el('button', { id: 'btnLista', text: 'Gerar lista' });
    const lista = el('ul', { id: 'lista' });
    const secLista = el('section', {}, [el('h2', { text: 'Lista (Array)' }), btnLista, lista]);

    
    document.body.appendChild(titulo);
    document.body.appendChild(intro);
    document.body.appendChild(secDom);
    document.body.appendChild(secInput);
    document.body.appendChild(secLista);

    
    console.log('=== Variáveis e Tipos ===');
    const pi = 3.14159;      
    let contador = 0;       
    let texto = 'Olá';       
    let ligado = true;       
    console.log({ pi, contador, texto, ligado, tipoPi: typeof pi });

    
    console.log('=== Funções ===');
    function soma(a, b = 0) {
      return a + b;
    }
    const multiplicar = (a, b) => a * b;
    console.log('soma(2, 3) =', soma(2, 3));
    console.log('multiplicar(4, 5) =', multiplicar(4, 5));

    console.log('=== Arrays ===');
    const numeros = [1, 2, 3, 4, 5];
    const pares = numeros.filter((n) => n % 2 === 0);
    const dobrados = numeros.map((n) => n * 2);
    console.log({ numeros, pares, dobrados });

    
    console.log('=== Objetos ===');
    const pessoa = { nome: 'Ana', idade: 25, ativo: true };
    const { nome, idade } = pessoa;
    console.log('Pessoa:', pessoa, 'nome:', nome, 'idade:', idade);

    
    console.log('=== Promises/async ===');
    function esperar(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
    async function exemploAsync() {
      console.log('Esperando 500ms...');
      await esperar(500);
      console.log('Pronto!');
    }
    exemploAsync();


    btnMensagem.addEventListener('click', () => {
      contador++;
      mensagem.textContent = `Botão clicado ${contador} vez(es).`;
    });

    btnSaudar.addEventListener('click', () => {
      const n = inputNome.value.trim() || 'Visitante';
      saudacao.textContent = `Olá, ${n}!`;
    });

    btnLista.addEventListener('click', () => {
      lista.innerHTML = '';
      numeros.forEach((n) => {
        const li = document.createElement('li');
        li.textContent = `Número ${n}`;
        lista.appendChild(li);
      });
    });

})();
