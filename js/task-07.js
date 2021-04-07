// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.



const refs = {
    fontSizeId: document.querySelector('#font-size-control'),
    changeText: document.querySelector('#text')
}


refs.fontSizeId.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    refs.changeText.style.fontSize = event.currentTarget.value + "px";

}

