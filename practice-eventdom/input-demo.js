p = document.querySelector('p#message');
b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    p.textContent = 'こんにちは, ' + i.value + 'さん';
  }