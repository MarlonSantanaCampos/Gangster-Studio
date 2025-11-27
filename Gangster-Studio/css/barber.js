const botao = document.getElementById('btnQRCode');
const qrCode = document.getElementById('imagemQRCode');

// Cria overlay dinamicamente
let overlay = document.createElement('div');
overlay.id = 'overlayQRCode';
document.body.appendChild(overlay);

// Mostra QR Code
botao.addEventListener('click', function(e) {
    e.preventDefault();
    qrCode.classList.add('show');
    overlay.style.display = 'block';
});

// Fecha QR Code clicando no overlay
overlay.addEventListener('click', function() {
    qrCode.classList.remove('show');
    overlay.style.display = 'none';
});