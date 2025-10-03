

    
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

    