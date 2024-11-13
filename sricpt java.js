function showMessage() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        const messageDiv = document.getElementById('message');
        const message = `SELAMAT ULANG TAHUN ${name.toUpperCase()} DI TAHUN 2024 INI! SEMOGA KEINGINANMU DAPAT DIKABULKAN OLEH ALLAH SWT`;
        
        messageDiv.innerText = message;
        messageDiv.classList.remove('hidden');
        
        animateText(messageDiv);
    }
}

function animateText(element) {
    const colors = ['#ff6347', '#32cd32', '#00bfff', '#ffa500', '#ff69b4'];
    let index = 0;

    setInterval(() => {
        element.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 500);
}
