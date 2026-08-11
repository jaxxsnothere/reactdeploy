import React from 'react';

const Experiencia = () => {
  return (
    <div className="container my-5 text-light">
      <h2 className="text-warning mb-4">Experiência & Qualificações</h2>

      {/* CARD DE EXPERIÊNCIA ANTERIOR */}
      <div className="card bg-body-tertiary border-secondary text-light mb-4">
        <div className="card-body">
          <h5 className="card-title text-info">Projetos Acadêmicos & Indústria</h5>
          <p className="card-text text-body-secondary">
            Participação em projetos acadêmicos utilizando HTML, CSS, JavaScript, Bootstrap e Banco de Dados, 
            vinculado à indústria açucareira de São Manoel e experiência média em cozinha de restaurante.
          </p>
        </div>
      </div>

      {/* ACCORDION DE HABILIDADES E FORMAÇÕES */}
      <div className="card bg-body-tertiary border-secondary text-light mb-4">
        <div className="card-body">
          <div className="accordion accordion-flush" id="accordionDetalhes">
            
            {/* ITEM 1: HABILIDADES */}
            <div className="accordion-item bg-body-tertiary border-secondary text-light">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-body-tertiary text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#habilidades"
                >
                  Habilidades (Skills)
                </button>
              </h2>
              <div
                id="habilidades"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionDetalhes"
              >
                <div className="accordion-body">
                  <div className="row">
                    {/* HARD SKILLS */}
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

                    {/* SOFT SKILLS */}
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

            {/* ITEM 2: FORMAÇÕES */}
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
              <div
                id="formacoes"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionDetalhes"
              >
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

export default Experiencia;