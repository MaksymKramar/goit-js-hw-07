// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const getCounterSelector = document.querySelector('#counter');

const getcounterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

getCounterSelector.style.textAlign = 'center';

let counterValue = 0;


decrementBtn.addEventListener('click', () => {
    counterValue -= 1;

    getcounterValue.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
   
    counterValue += 1;
    
    getcounterValue.textContent = counterValue;    
});


