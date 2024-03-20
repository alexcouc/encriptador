function criptografar() {
  const inputText = document.getElementById('inputText').value;
  const outputText = inputText.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
  document.getElementById('outputText').value = outputText;
}

function descriptografar() {
  const inputText = document.getElementById('inputText').value;
  const outputText = inputText.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
  document.getElementById('outputText').value = outputText;
}

function copiarTexto() {
  const outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
  alert('Texto copiado para a área de transferência!');
}
