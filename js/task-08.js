// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const refs = {
    inputControls: document.querySelector('#controls > input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    thanksBtn: document.querySelector('[data-action="thanks"]'),
};

boxes.style.backgroundColor = 'tomato';
boxes.style.width = '30px';
boxes.style.height = '30px';
boxes.style.position = 'relative';


refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.thanksBtn.addEventListener('click', thanks);

function thanks() {
    console.log('Дима Письменный, большое спасибо за помощь!!!');
    alert('Дима Письменный, большое спасибо за помощь!!!');
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
    // const createBoxId = document.querySelector('#createBox');
    // refs.boxes.removeChild(createBoxId);
    // createBoxId.remove();
}

function createBoxes(amount) {
    refs.inputControls.value;
    console.log(refs.inputControls.value);

    // console.log(amount)

    let size = 30;
    let position = 10;

    for (let i = 1; i <= refs.inputControls.value; i += 1) {
        

        const box = document.createElement('div');
        box.id = 'createBox';

        box.style.width = size + 'px';
        box.style.height = size +'px';
        // box.style.backgroundColor = 'black';
        box.style.position = 'absolute';
        box.style.left = position + 'px';
        box.style.top = position + 'px';
        

        // Одолжив код в інтернеті https://qna.habr.com/q/577802
        box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

            function getRandom(min, max){
                return Math.ceil(Math.random() * (max - min) + min)
            };

        size += 10;
        position += 10;

        boxes.append(box);
        

    };       
};




