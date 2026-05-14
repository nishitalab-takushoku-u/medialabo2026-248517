p = document.querySelector('span#answer');
b = document.querySelector('button#calc');
b.addEventListener('click', tashizan);
function tashizan() {
    let i1 = document.querySelector('input[name="left"]');
    let i2 = document.querySelector('input[name="right"]');
    let n1 = Number(i1.value);
    let n2 = Number(i2.value);
    p.textContent = n1 + n2;
  }