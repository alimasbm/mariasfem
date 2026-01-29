import './css/variables.css'
import './css/reset.css'
import './css/typography.css'
import './css/layout.css'
import './css/components.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container">
      <div class="logo">
        <a href="#" style="text-decoration:none;">
          <h1 style="font-size: 1.8rem; margin:0;">Marias Store</h1>
        </a>
      </div>
      <nav class="site-nav">
        <ul>
          <li><a href="/metodos-contraceptivos.html">Métodos Contraceptivos</a></li>
          <li><a href="/ciclo-hormonios.html">Ciclo e Hormônios</a></li>
          <li><a href="/saude-intima.html">Saúde Íntima</a></li>
          <li><a href="/pos-parto.html">Pós-Parto</a></li>
          <li><a href="/privacidade.html">Privacidade</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container">
    <!-- AdSense In-feed Placeholder -->
    <div class="ad-slot"></div>

    <section class="hero text-center" style="padding: 4rem 0;">
      <h2 style="font-size: 2.5rem; color: var(--color-primary); margin-bottom: 1rem;">Saúde Feminina com Acolhimento e Ciência</h2>
      <p style="max-width: 600px; margin: 0 auto; color: var(--color-text-light);">
        Informação segura sobre contracepção, ciclo menstrual e bem-estar íntimo. 
        Conteúdo revisado para cuidar de você em todas as fases.
      </p>
    </section>

    <!-- Categories Grid -->
    <section id="categorias">
      <div class="section-title text-center" style="width: 100%;">
        <h3>Principais Temas</h3>
      </div>
      
      <div class="category-grid">
        <!-- Métodos Contraceptivos -->
        <article class="card">
          <div style="height: 150px; background-color: var(--color-accent); display: flex; align-items: center; justify-content: center; color: var(--color-primary);">
            <!-- Image Placeholder -->
            <span style="font-size: 3rem;">💊</span>
          </div>
          <div class="card-content">
            <h4 class="card-title">Métodos Contraceptivos</h4>
            <p style="font-size: 0.9rem;">Entenda as diferenças entre pílula, DIU, implantes e preservativos. Escolha com segurança e orientação médica.</p>
            <a href="/metodos-contraceptivos.html" class="btn btn-primary" style="margin-top: 1rem; font-size: 0.8rem;">Ler Guia Completo</a>
          </div>
        </article>

        <!-- Ciclo e Hormônios -->
        <article class="card">
          <div style="height: 150px; background-color: #ffe4e1; display: flex; align-items: center; justify-content: center; color: var(--color-primary);">
            <span style="font-size: 3rem;">📅</span>
          </div>
          <div class="card-content">
            <h4 class="card-title">Ciclo e Hormônios</h4>
            <p style="font-size: 0.9rem;">Como funciona seu ciclo menstrual? Desvende a TPM, ovulação e o equilíbrio hormonal natural.</p>
            <a href="/ciclo-hormonios.html" class="btn btn-primary" style="margin-top: 1rem; font-size: 0.8rem;">Entender Meu Ciclo</a>
          </div>
        </article>

        <!-- AdSense In-feed Middle Placeholder -->
        <div class="card ad-slot" style="min-height: auto; border: 1px dashed var(--color-primary);">
           <span style="color: #999;">Publicidade em Destaque</span>
        </div>

        <!-- Saúde Íntima -->
        <article class="card">
          <div style="height: 150px; background-color: #e0ffff; display: flex; align-items: center; justify-content: center; color: var(--color-primary);">
            <span style="font-size: 3rem;">🌸</span>
          </div>
          <div class="card-content">
            <h4 class="card-title">Saúde Íntima</h4>
            <p style="font-size: 0.9rem;">Prevenção de infecções, cuidados diários e tudo sobre a saúde da sua região íntima sem tabus.</p>
            <a href="/saude-intima.html" class="btn btn-primary" style="margin-top: 1rem; font-size: 0.8rem;">Ver Dicas de Cuidado</a>
          </div>
        </article>

        <!-- Pós-Parto -->
        <article class="card">
          <div style="height: 150px; background-color: #fffacd; display: flex; align-items: center; justify-content: center; color: var(--color-primary);">
            <span style="font-size: 3rem;">👶</span>
          </div>
          <div class="card-content">
            <h4 class="card-title">Pós-Parto</h4>
            <p style="font-size: 0.9rem;">Apoio para o puerpério, recuperação física e emocional, e retorno à vida sexual saudável.</p>
            <a href="/pos-parto.html" class="btn btn-primary" style="margin-top: 1rem; font-size: 0.8rem;">Guia de Recuperação</a>
          </div>
        </article>
      </div>
    </section>

    <!-- AdSense Bottom Placeholder -->
    <div class="ad-slot" style="margin-top: 4rem;"></div>

    <!-- Mandatory Pages Section (AdSense Requirement) -->
    <section id="sobre" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-border);">
        <div class="section-title text-center" style="width: 100%;">
            <h3>Sobre & Privacidade</h3>
        </div>
        <div style="background: var(--color-white); padding: 2rem; border-radius: var(--border-radius-md); box-shadow: var(--shadow-soft);">
            <h4>Sobre o Marias Store</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-light);">
                O Marias Store nasceu com a missão de empoderar mulheres através do conhecimento. 
                Nossos conteúdos são produzidos com base em evidências científicas e revisados para garantir precisão e acolhimento.
            </p>
            
            <h4 style="margin-top: 1.5rem;">Política de Privacidade</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-light);">
                Levamos sua privacidade a sério. Não coletamos dados pessoais sensíveis sem seu consentimento. 
                Utilizamos cookies apenas para melhorar a experiência de navegação e exibir anúncios relevantes.
            </p>
        </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-links" style="margin-bottom: 2rem;">
        <a href="#" style="margin: 0 10px; color: var(--color-text);">Sobre</a>
        <a href="#" style="margin: 0 10px; color: var(--color-text);">Contato</a>
        <a href="/privacidade.html" style="margin: 0 10px; color: var(--color-text);">Política de Privacidade</a>
      </div>
      <div class="disclaimer-medical" style="max-width: 800px; margin: 0 auto; padding: 1rem; border-top: 1px solid #ddd;">
        <p style="font-size: 0.8rem; color: #777;">
          <strong>AVISO MÉDICO IMPORTANTE:</strong> O conteúdo deste site (Marias Store) tem caráter meramente informativo e educacional. 
          Nenhuma informação aqui substitui a consulta, diagnóstico ou tratamento por um profissional de saúde qualificado. 
          Em caso de dúvidas sobre sua saúde, consulte sempre seu médico ou ginecologista.
        </p>
      </div>
      <p style="margin-top: 1rem;">&copy; 2026 Marias Store. Todos os direitos reservados.</p>
    </div>
  </footer>
`
