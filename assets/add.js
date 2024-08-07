console.log('Hola mundo');

document.addEventListener('DOMContentLoaded', () => {
  const bt1 = document.getElementById('btn_1');
  const bt2 = document.querySelector('#btn_2');
  const bt3 = document.getElementById('btn_3');
  console.log(bt1);
  bt1.addEventListener('click', () => {
    console.log(bt1.dataset);
    console.log(`mi producto: ${bt1.dataset.name} y el precio es: ${bt1.dataset.price}`);
  });
  bt3.addEventListener('click', () => {
    console.log(bt3.dataset);
    console.log(`mi producto: ${bt3.dataset.name} y el precio es: ${bt3.dataset.price}`);
  });
});
