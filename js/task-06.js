// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.


const getIdInput = document.querySelector('#validation-input');

getIdInput.addEventListener('input', onBorderColorChange);

function onBorderColorChange(event) {
   
    if (Number(getIdInput.dataset.length) === event.currentTarget.value.length) {
        getIdInput.classList.remove('invalid');
        getIdInput.classList.add('valid');
       
    } else {
        getIdInput.classList.add('invalid');
        getIdInput.classList.remove('valid');
    }
    
}

