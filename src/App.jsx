//Trazem o React e o gerenciador de rotas (navegação)
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

//NAVBAR
const Navbar = () => (
  // O menu usa estilos do Bootstrap (bg-body-tertiary, navbar-expand-lg, data-bs-theme="dark")
  <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-secondary" data-bs-theme="dark">
    <div className="container">
      {/* Link para a página inicial ao clicar no nome do site */}
      <Link className="navbar-brand text-light" to="/">Meu Currículo</Link>
      
      {/* Botão "hambúrguer" que aparece em telas pequenas (celulares) */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Lista de links de navegação */}
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav me-auto">
          {/* O componente <Link> muda a página sem dar 'refresh' no navegador */}
          <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-light" to="/experiencia">Experiência</Link></li>
          <li className="nav-item"><Link className="nav-link text-light" to="/portfolio">Portfólio</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

//FOOTER
const Footer = () => (
  // mt-auto faz o rodapé ser empurrado para o final da tela caso o conteúdo seja pequeno
  <footer className="bg-body-tertiary text-white mt-auto py-4 border-top border-secondary" data-bs-theme="dark">
    <div className="container text-center">
      {/* Ícones de redes sociais com links externos (abrem em nova aba com target="_blank") */}
      <div className="d-flex justify-content-center gap-4 fs-4 mb-2">
        <a href="https://www.instagram.com/eu__jaxx" target="_blank" rel="noreferrer" className="text-white"><i className="bi bi-instagram"></i></a>
        <a href="https://wa.me/5514991475250" target="_blank" rel="noreferrer" className="text-white"><i className="bi bi-whatsapp"></i></a>
        <a href="https://github.com/jaxx_vnss" target="_blank" rel="noreferrer" className="text-white"><i className="bi bi-github"></i></a>
      </div>
      <p className="small text-secondary m-0">Vênus Oliveira Vicente © 2024</p>
    </div>
  </footer>
);

//HOME
const Home = () => (
  <div className="container my-5 text-light">
    {/* Sistema de Grid do Bootstrap para dividir em colunas */}
    <div className="row">
      {/* Coluna da Esquerda: Cartão com Foto e Dados Básicos */}
      <div className="col-lg-3 col-md-4 mb-4">
        <div className="card bg-body-tertiary border-secondary text-light text-center p-3">
      <img
          src={`${import.meta.env.BASE_URL}imagens/venus.png`}
          className="card-img-top rounded-circle mx-auto d-block mb-3"
          alt="Perfil"
          style={{ width: '160px', height: '160px', objectFit: 'cover' }}
          />
          <h3 className="card-title fs-4">Maísa Oliveira Vicente</h3>
          <p className="text-body-secondary small">
            17 anos <br />
            Estudante de Desenvolvimento de Sistemas <br />
            Botucatu - SP
          </p>
        </div>
      </div>

      {/* Coluna da Direita: Cartão "Sobre Mim" com a biografia */}
      <div className="col-lg-9 col-md-8">
        <div className="card bg-body-tertiary border-secondary text-light p-4 mb-4">
          <h2>Sobre Mim</h2>
          <p>
            Meu nome de registro é Maísa Oliveira Vicente, tenho 17 anos e atualmente estou no
            último ano do ensino médio e Curso de Desenvolvimento de Sistemas.
            Sou uma pessoa Não-Binário, com preferencia em pronomes masculinos por mais que não me
            importe com pronomes femininos.
            Mesmo não sendo formalizado em meus documentos ainda por conta de minha idade, possuo um
            nome social, sendo ele Vênus Oliveira Vicente.
            Sou uma pessoa dedicada, tenho interesse por desenho, atuação (Mesmo sem expêriencia
            profissional), programação, leitura e escrita, o que me permite poder explorar diferentes áreas e perspectivas.
            Fazia Karatê estilo Shotokan, porém infelizmente tive que parar com o treino por conta de uma lesão que tive no joelho durante um treino, parei na faixa amarela.
            Tenho grande interesse em aprender coisas novas, Atualmente estou aprendendo a língua
            Russa e tenho conhecimento em inglês intermediário.
            Embora ansiosa com interações sociais, busco sempre ser educada e respeitosa.
          </p>
        </div>
      </div>
    </div>
  </div>
);

//EXPERIÊNCIA 
const Experiencia = () => {
  return (
    <div className="container my-5 text-light">
      <h2 className="text-warning mb-4">Experiência & Qualificações</h2>

      {/* Card Simples de Experiência */}
      <div className="card bg-body-tertiary border-secondary text-light mb-4">
        <div className="card-body">
          <h5 className="card-title text-info">Projetos Acadêmicos & Indústria</h5>
          <p className="card-text text-body-secondary">
            Participação em projetos acadêmicos utilizando HTML, CSS, JavaScript, Bootstrap e Banco de Dados, 
            vinculado à indústria açucareira de São Manoel e experiência média em cozinha de restaurante.
          </p>
        </div>
      </div>

      {/* Accordion (Menu Retrátil / Sanfona) do Bootstrap */}
      <div className="card bg-body-tertiary border-secondary text-light mb-4">
        <div className="card-body">
          <div className="accordion accordion-flush" id="accordionDetalhes">
            
            {/* Item 1 do Accordion: Habilidades */}
            <div className="accordion-item bg-body-tertiary border-secondary text-light">
              <h2 className="accordion-header">
                {/* O atributo data-bs-target aponta para o ID do conteúdo que deve abrir */}
                <button
                  className="accordion-button collapsed bg-body-tertiary text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#habilidades"
                >
                  Habilidades (Skills)
                </button>
              </h2>
              <div id="habilidades" className="accordion-collapse collapse" data-bs-parent="#accordionDetalhes">
                <div className="accordion-body">
                  <div className="row">
                    {/* Lista de Hard Skills */}
                    <div className="col-md-6 mb-3">
                      <h5 className="text-info">Hard Skills</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent text-light border-secondary">HTML</li>
                        <li className="list-group-item bg-transparent text-light border-secondary">Backend</li>
                        <li className="list-group-item bg-transparent text-light border-secondary">JavaScript</li>
                        <li className="list-group-item bg-transparent text-light border-secondary">Python</li>
                        <li className="list-group-item bg-transparent text-light border-secondary">MySQL</li>
                      </ul>
                    </div>

                    {/* Lista de Soft Skills */}
                    <div className="col-md-6">
                      <h5 className="text-info">Soft Skills</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent text-light border-secondary">Comunicação</li>
                        <li className="list-group-item bg-transparent text-light border-secondary">Trabalho em equipe</li>
                        <li className="list-group-item bg-transparent text-light border-secondary">Criatividade</li>
                        <li className="list-group-item bg-transparent text-light border-secondary">Organização</li>
                        <li className="list-group-item bg-transparent text-light border-secondary">Facilidade de aprender coisas novas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 do Accordion: Formações e Cursos */}
            <div className="accordion-item bg-body-tertiary border-secondary text-light">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-body-tertiary text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#formacoes"
                >
                  Formações & Cursos
                </button>
              </h2>
              <div id="formacoes" className="accordion-collapse collapse" data-bs-parent="#accordionDetalhes">
                <div className="accordion-body text-body-secondary">
                  <p className="fw-bold text-light mb-1">Formação Acadêmica:</p>
                  <p className="mb-1">• Ensino Médio em andamento</p>
                  <p className="mb-3">• Curso de Desenvolvimento de Sistemas (HTML, Backend, JavaScript e Banco de Dados)</p>

                  <hr className="border-secondary" />

                  <p className="fw-bold text-light mb-1">Cursos EAD pelo SENAI:</p>
                  <ul className="list-unstyled">
                    <li>• Excel Básico</li>
                    <li>• Competência Transversal - Segurança no Trabalho</li>
                    <li>• Por dentro da Segurança Cibernética</li>
                    <li>• FLUÊNCIA - Fundamentos da Inteligência Artificial</li>
                    <li>• Desvendando a Descarbonização</li>
                    <li>• Ética na Inteligência Artificial</li>
                    <li>• Desvendando a Indústria 4.0</li>
                    <li>• Empreender SENAI</li>
                    <li>• Desvendando o ESG</li>
                    <li>• Fundamentos da Gestão de Projetos Aplicados na Indústria</li>
                    <li>• Design Thinking</li>
                    <li>• Gestão do tempo</li>
                    <li>• Geração de Valor Circular e Modelos de Negócios</li>
                    <li>• Cidadania Digital e Uso Consciente da Internet</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

//PORTFÓLIO
const Portfolio = () => {
  // Lista (Array) de Objetos com os dados dos Projetos
  const projetos = [
  { id: 1, img: `${import.meta.env.BASE_URL}imagens/p1.png`, titulo: 'Galeria', desc: 'Projeto desenvolvido em aula de frontEnd, utilizando Html, Css e React.' },
  { id: 2, img: `${import.meta.env.BASE_URL}imagens/p2.png`, titulo: 'Catálogo de Filmes', desc: 'Sistema de cadastro de filmes para computador e celular.' },
  { id: 3, img: `${import.meta.env.BASE_URL}imagens/p3.png`, titulo: 'Cadastro de Filmes', desc: 'Interface de cadastro com upload de posters.' },
  { id: 4, img: `${import.meta.env.BASE_URL}imagens/p4.png`, titulo: 'Cadastro de Perfil', desc: 'Projeto vinculado ao banco de dados.' },
  { id: 5, img: `${import.meta.env.BASE_URL}imagens/p5.png`, titulo: 'Sistema de Voto', desc: 'Projeto para dispositivos móveis.' },
  { id: 6, img: `${import.meta.env.BASE_URL}imagens/p6.png`, titulo: 'Quitanda', desc: 'Desenvolvimento em Python com backend.' },
];

const artes = [
  { id: 11, img: `${import.meta.env.BASE_URL}imagens/p11.png`, titulo: 'Yasmin - 2026', desc: 'Desenho feito pelo celular à mão de personagem para RPG.' },
  { id: 12, img: `${import.meta.env.BASE_URL}imagens/p12.png`, titulo: 'Heidi e Nitchs', desc: 'Desenho feito no computador com Paint.' },
  { id: 13, img: `${import.meta.env.BASE_URL}imagens/p13.png`, titulo: 'So-min', desc: 'Desenho digital de personagem.' },
  { id: 14, img: `${import.meta.env.BASE_URL}imagens/p14.png`, titulo: 'Naya e Furfur', desc: 'Desenho feito para projeto autoral.' },
  { id: 15, img: `${import.meta.env.BASE_URL}imagens/p15.png`, titulo: 'Olhos - 2025', desc: 'Estudo de expressões e estilo de arte.' },
  { id: 16, img: `${import.meta.env.BASE_URL}imagens/p16.png`, titulo: 'Mizu - Cyberpunk', desc: 'Personagem inspirada na estética Cyberpunk.' },
];

  // Junta os dois arrays em um só usando o operador Spread (...)
  const todosOsItens = [...projetos, ...artes];

  return (
    <div className="container py-5 text-light">
      {/* Bloco de CSS embutido para personalizar imagens e efeitos de hover */}
      <style>{`
        .carousel-item img {
          height: 450px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
        }
        .gallery-grid img {
          height: 130px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          border: 2px solid #343a40;
          transition: transform 0.2s;
        }
        .gallery-grid img:hover {
          transform: scale(1.05);
          border-color: #0d6efd;
        }
      `}</style>

      <h1 className="text-primary text-center mb-4">Meu Portfólio</h1>

      {/* CARROSSEL PRINCIPAL DO BOOTSTRAP */}
      <div id="portfolioCarousel" className="carousel slide mx-auto shadow-lg border border-secondary rounded p-2" data-bs-ride="carousel" style={{ maxWidth: '800px' }}>
        <div className="carousel-inner">

          {/* Renderiza dinamicamente as imagens dos projetos usando .map() */}
          {projetos.map((item, index) => (
            // Apenas o primeiro slide (index 0) ganha a classe 'active' para iniciar visível
            <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={item.img}
                className="d-block w-100"
                alt={item.titulo}
                data-bs-toggle="modal"
                data-bs-target={`#modal-${item.id}`} // Aponta para o Modal correspondente
              />
            </div>
          ))}

          {/* Slide Extra no Carrossel: Galeria de Artes em Formato de Grade (Grid) */}
          <div className="carousel-item p-3 bg-dark">
            <h5 className="text-center text-info mb-3">Galeria de Artes Pessoais</h5>
            <div className="row g-2 gallery-grid">
              {/* Mapeia e exibe as artes como thumbnails */}
              {artes.map((item) => (
                <div key={item.id} className="col-4">
                  <img
                    src={item.img}
                    className="w-100"
                    alt={item.titulo}
                    data-bs-toggle="modal"
                    data-bs-target={`#modal-${item.id}`}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Botões de Avançar e Voltar do Carrossel */}
        <button className="carousel-control-prev" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="text-center mt-3 text-secondary">
        <p>Clique em qualquer imagem para abrir em detalhes.</p>
      </div>

      {/* POP-UPS / MODAIS (Mapeia 'todosOsItens' para criar uma caixa de diálogo para cada item) */}
      {todosOsItens.map((item) => (
        <div key={item.id} className="modal fade" id={`modal-${item.id}`} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-light border-secondary">
              <div className="modal-header border-secondary">
                <h5 className="modal-title">{item.titulo}</h5>
                {/* Botão de fechar (X) do modal */}
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body text-center">
                <img src={item.img} className="img-fluid rounded mb-3" alt={item.titulo} style={{ maxHeight: '70vh' }} />
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

function App() {
  // useEffect é executado uma vez quando o componente é montado no navegador
  useEffect(() => {
    // Aplica um fundo com gradiente escuro diretamente no elemento <body>
    document.body.style.background = 'linear-gradient(135deg, #121212, #1e1e2f)';
    document.body.style.minHeight = '100vh';
    document.body.className = 'text-light';
  }, []);

  return (
    // Configura o Roteador Principal da Aplicação
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        {/* Navbar fica sempre visível no topo */}
        <Navbar />

        {/* O conteúdo do meio muda dinamicamente de acordo com a URL */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>

        {/* Footer fica sempre visível na parte inferior */}
        <Footer />
      </div>
    </Router>
  );
}

// Exporta o componente App para ser renderizado pelo React
export default App;
