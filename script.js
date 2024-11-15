// Canlı saat işlevi
function showTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    document.getElementById("saat").textContent = `Saat: ${hours}:${minutes}:${seconds}`;
}
setInterval(showTime, 1000);

// "Daha Fazla Göster / Daha Az Göster" işlevi
function toggleDescription(button) {
    const shortDescription = button.previousElementSibling.previousElementSibling;
    const fullDescription = button.previousElementSibling;
    const isHidden = fullDescription.style.display === "none";

    if (isHidden) {
        shortDescription.style.display = "none";
        fullDescription.style.display = "block";
        button.textContent = "Daha Az Göster";
    } else {
        shortDescription.style.display = "block";
        fullDescription.style.display = "none";
        button.textContent = "Daha Fazla Göster";
    }
}
