function openModal() {
    runErrorEffect(500); 
}

// Automatic start with a LONGER error
window.onload = function() {
    runErrorEffect(2000); 
};

function runErrorEffect(duration) {
    const error = document.getElementById("errorOverlay");
    const modal = document.getElementById("catModal");

    error.style.display = "block";
    document.body.classList.add("glitch-active");

    setTimeout(function() {
        error.style.display = "none";
        document.body.classList.remove("glitch-active");
        modal.style.display = "block";
    }, duration);
}

function closeModal() {
    document.getElementById("catModal").style.display = "none";
}