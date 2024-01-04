// Definir a data de destino (05/02/2024 07:10)
const targetDate = new Date('2024-02-05T07:10:00');
    
function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    document.getElementById('countdown').innerHTML = 'As aulas ja iniciarão';
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

// Atualizar a cada segundo
setInterval(updateCountdown, 1000);

// Atualizar imediatamente ao carregar a página
updateCountdown();


function openFullscreenIframe(pdfSrc) {
    var fullscreenIframeContainer = document.getElementById('fullscreenIframeContainer');
    var fullscreenIframe = document.getElementById('fullscreenIframe');

    fullscreenIframe.src = pdfSrc;
    fullscreenIframeContainer.style.display = 'block';
}

function closeFullscreenIframe() {
    var fullscreenIframeContainer = document.getElementById('fullscreenIframeContainer');
    var fullscreenIframe = document.getElementById('fullscreenIframe');

    fullscreenIframe.src = '';
    fullscreenIframeContainer.style.display = 'none';
}

