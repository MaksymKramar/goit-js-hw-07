// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);   
    
    
function onInputChange (event) {    

    if (event.currentTarget.value.length < 1) {
        refs.nameLabel.textContent = "незнакомец";
    } else {
        refs.nameLabel.textContent = event.currentTarget.value;
    }
};

