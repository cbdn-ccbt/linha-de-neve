fetch('atletas.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    lines.shift(); // remove cabeçalho

    const container = document.getElementById('athletes-container');

    lines.forEach(line => {
      if (!line.trim()) return;

      const [
        nome,
        categoria,
        participacao,
        tecnica,
        competicao,
        multimodal
      ] = line.split(',');

      container.innerHTML += `
        <section class="athlete">
          <h2>${nome}</h2>
          <div class="category">${categoria}</div>

          ${createTrack('Participação', participacao, 4)}
          ${createTrack('Desenvolvimento Técnico', tecnica, 3)}
          ${createTrack('Experiência Competitiva', competicao, 3)}
          ${createTrack('Multimodalidade', multimodal, 2)}
        </section>
      `;
    });
  });

function createTrack(title, doneSteps, totalSteps) {
  let stepsHTML = '';

  for (let i = 1; i <= totalSteps; i++) {
    stepsHTML += `<div class="step ${i <= doneSteps ? 'done' : ''}"></div>`;
  }

  return `
    <div class="track">
      <div class="track-title">${title}</div>
      <div class="steps">${stepsHTML}</div>
    </div>
  `;
}
