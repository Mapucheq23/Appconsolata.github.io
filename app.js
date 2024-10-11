

function openLink(url) {
    window.open(url, '_blank');
}

function searchWeb() {
    var query = document.getElementById('searchBox').value;
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);

    var frame = document.getElementById('searchFrame');
    frame.src = searchUrl;
    frame.style.display = "block";
}
// Función para abrir un enlace en una nueva pestaña
function openLink(url) {
    window.open(url, '_blank');
}

// Función para mostrar el mensaje de "Próximamente"
function showComingSoon() {
    document.getElementById('comingSoonMessage').style.display = 'block';
}

// Función para cerrar el mensaje de "Próximamente"
function closeComingSoon() {
    document.getElementById('comingSoonMessage').style.display = 'none';
}