document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputContainer = document.getElementById('outputContainer');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');

    function encrypt(text) {
        return text.split('').map(char => char.charCodeAt(0) + 1).join(' ');
    }

    function decrypt(text) {
        return text.split(' ').map(code => String.fromCharCode(code - 1)).join('');
    }

    function updateOutput(content) {
        outputText.innerHTML = content;
        outputContainer.style.justifyContent = 'flex-start';
        copyBtn.style.display = 'block';
    }

    function resetOutput() {
        outputText.innerHTML = `
            <img src="imagen-desafio.png" alt="Diamante" id="imagen-desafio">
            <p>Ningún mensaje fue encontrado</p>
            <p class="subtitle">Ingresa el texto que desees encriptar o desencriptar.</p>
        `;
        outputContainer.style.justifyContent = 'center';
        copyBtn.style.display = 'none';
    }

    encryptBtn.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (text) {
            updateOutput(`<p>${encrypt(text)}</p>`);
        } else {
            resetOutput();
        }
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (text) {
            updateOutput(`<p>${decrypt(text)}</p>`);
        } else {
            resetOutput();
        }
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputText.textContent)
            .then(() => alert('Texto copiado al portapapeles'));
    });

    inputText.addEventListener('input', () => {
        if (!inputText.value.trim()) {
            resetOutput();
        }
    });
});