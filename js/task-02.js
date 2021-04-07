const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


const ingredientsLists = document.querySelector("#ingredients");
// const ingredient = document.createElement('li');

// console.log(ingredientsLists.appendChild(ingredient));


// const ingredient = document.createElement('li');
// console.log(ingredient);

ingredients.forEach(ing => {
    const ingredient = document.createElement('li');
    
    ingredient.textContent = ing;

    ingredientsLists.appendChild(ingredient);    
});


