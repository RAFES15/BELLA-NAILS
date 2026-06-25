/**
 * Bella Nails — script.js
 *
 * Funcionalidade: FAQ acordeão
 * Ao clicar numa pergunta, a resposta é exibida ou ocultada.
 * Somente uma pergunta fica aberta por vez.
 */

function initFAQ() {
  const perguntas = document.querySelectorAll('.faq-question');

  perguntas.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expandido = btn.getAttribute('aria-expanded') === 'true';
      const respostaId = btn.getAttribute('aria-controls');
      const resposta = document.getElementById(respostaId);

      if (!resposta) return;

      // Fecha todas as perguntas antes de abrir a clicada
      perguntas.forEach(function (outraBtn) {
        const outroId = outraBtn.getAttribute('aria-controls');
        const outraResposta = document.getElementById(outroId);
        outraBtn.setAttribute('aria-expanded', 'false');
        if (outraResposta) outraResposta.hidden = true;
      });

      // Se estava fechada, abre. Se estava aberta, já foi fechada acima.
      if (!expandido) {
        btn.setAttribute('aria-expanded', 'true');
        resposta.hidden = false;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initFAQ();
});
