// =========================================================
// Ano no rodapé
// =========================================================
document.getElementById('build-year').textContent = new Date().getFullYear();

// =========================================================
// Efeito de digitação no terminal do hero
// =========================================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typedLine = document.getElementById('typed-line');
const fullCommand = 'npm run build && npm run deploy';

function typeEffect() {
  if (prefersReducedMotion) {
    typedLine.textContent = fullCommand;
    return;
  }
  let i = 0;
  const speed = 45;
  function step() {
    if (i <= fullCommand.length) {
      typedLine.textContent = fullCommand.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}
typeEffect();

const stageEls = document.querySelectorAll('.stage');
const sections = document.querySelectorAll('.stage-section[id]');
const trackerStatus = document.getElementById('tracker-status');

const stageStatusText = {
  build: 'Apresentação',
  test: 'Competências',
  deploy: 'Projetos',
  monitor: 'Contatos'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');

      stageEls.forEach((stage) => {
        const stageId = stage.getAttribute('data-stage');
        // Marca como ativo o estágio atual e todos os anteriores (como um pipeline progredindo)
        const order = ['build', 'test', 'deploy', 'monitor'];
        if (order.indexOf(stageId) <= order.indexOf(id)) {
          stage.classList.add('active');
        }
      });

      if (trackerStatus) {
        const strong = trackerStatus.querySelector('strong');
        strong.textContent = stageStatusText[id] || 'idle';
      }
    }
  });
}, { threshold: 0.35, rootMargin: '-80px 0px -40% 0px' });

sections.forEach((section) => observer.observe(section));
