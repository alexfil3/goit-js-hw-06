const categoriesList = document.querySelector('#categories');
const numberOfCategories = categoriesList.querySelectorAll('.item').length;
console.log('Number of categories:', numberOfCategories);

categoriesList.querySelectorAll('.item').forEach(category => {
    const nameOfCategory = category.querySelector('h2').textContent;
    const numberOfItemsInCategory = category.querySelectorAll('li').length;
    console.log('Category:', nameOfCategory);
    console.log('Elements:', numberOfItemsInCategory);
})