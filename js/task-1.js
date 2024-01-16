const categoriesRef = document.querySelector('ul#categories');
const categoriesItemsRef = Array.from(categoriesRef.children);
console.log(`Number of categories: ${categoriesItemsRef.length}`);

categoriesItemsRef.forEach((item)=>{
  const itemTitle = item.querySelector('h2');
  itemTitle.classList.add('item-title');

  const elementNumber = item.querySelectorAll('li').length;
  console.log(`Category: ${itemTitle.textContent}`);
  console.log(`Elements: ${elementNumber}`);
})
