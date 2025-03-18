const API_KEY = "275d58779ccf4e22af03e792e8819fff"
const recipeList = document.querySelector('.recipe-list');

const displayRecipes = (recipes) => {
    recipeList.innerHTML = "";

    recipes.forEach((recipe) => {
        const recipeItem = document.createElement('li');
        recipeItem.classList.add('recipe-item');
        if (recipes.indexOf(recipe) % 2 == 0) {
            recipeItem.classList.add('even');
        }
        else {
            recipeItem.classList.add('odd');
            if (recipes.indexOf(recipe) === 9) {
                recipeItem.classList.add('last-recipe-item')
            }
        }
        // console.log(recipeItem);

        const recipeItemImage = document.createElement('img');
        recipeItemImage.src = recipe.image;
        recipeItemImage.alt = 'recipe image';

        const div = document.createElement('div');
        div.classList.add('text');

        const recipeItemTitle = document.createElement('h2');
        recipeItemTitle.innerText = recipe.title;

        const recipeItemIngredients = document.createElement('p');
        recipeItemIngredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;

        const recipeItemLink = document.createElement('a');
        recipeItemLink.href = recipe.sourceUrl;
        recipeItemLink.innerText = "View Recipe";

        div.appendChild(recipeItemTitle)
        div.appendChild(recipeItemIngredients)
        div.appendChild(recipeItemLink)
        recipeItem.appendChild(div)
        recipeItem.appendChild(recipeItemImage)
        recipeList.appendChild(recipeItem)
    });
}

const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json();

    return data.recipes;
}

const init = async () => {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();