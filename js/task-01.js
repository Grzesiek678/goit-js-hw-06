const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;

  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
