const categories = document.querySelector('#categories');
const items = categories.children;
console.log('Number of categories:', items.length);

for (let item of items) {
    const nameOfCategory = item.firstElementChild.textContent;
    const numberOfItemsInCategory = item.lastElementChild.children.length;
    console.log('Category:', nameOfCategory);
    console.log('Elements:', numberOfItemsInCategory);
}