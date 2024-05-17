/*let giraBtn = document.getElementById('girar');
let rueda = document.getElementById('rueda');
const value = Math.floor(Math.random()*3600);
let element = document.querySelector();

function girarBtn()
{
  var deg = 
  rueda.style.transition= 'transform 10s ease-out';
  rueda.style.transform = 'rotate(' +deg + 'deg)';
};*/


let wheel = document.querySelector('.rueda');
let girarBtn = document.querySelector('.girarBtn');
let isSpinning = false;
let arrow = document.querySelector('.arrow');
let selectedElement = document.querySelector('.selected-element');

girarBtn.onclick = function() {
  if (!isSpinning) {
    isSpinning = true;
    selectedElement.style.display = 'none';
    let value = Math.floor(Math.random() * 3600);
    let initialAngle = value;
    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${value}deg)`;

    setTimeout(() => {
      const finalAngle = parseFloat(wheel.style.transform.replace(/[^0-9.-]+/g, ''));
      const rotationDiff = finalAngle - initialAngle;
      const selectedIndex = Math.round(rotationDiff / 36) % 10;
      const selectedDiv = document.querySelectorAll('.elemento1')[selectedIndex];

      if (selectedDiv) {
        showSelectedElement(selectedDiv);
        selectedElement.style.display = 'block';
      }
      isSpinning = false;
    }, 5000);
  }
};

function showSelectedElement(selectedDiv) {
  const rect = selectedDiv.getBoundingClientRect();

  if (rect.width > 0 && rect.height > 0) {
    arrow.style.left = `${rect.left + rect.width / 2 - arrow.offsetWidth / 2}px`;
    arrow.style.top = `${rect.top - arrow.offsetHeight}px`;

    const selectedElementClone = selectedDiv.cloneNode(true);
    selectedElement.innerHTML = '';
    selectedElement.appendChild(selectedElementClone);
    selectedElement.style.left = `${rect.left}px`;
    selectedElement.style.top = `${rect.top}px`;
    selectedElement.style.width = `${rect.width}px`;
    selectedElement.style.height = `${rect.height}px`;
  }
}