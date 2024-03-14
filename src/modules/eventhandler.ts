import { clearProductsList, generateHTMLElement } from "./utils.ts";
import { generateProductCard } from "./display.ts";
import { getProductBySearchString } from "./api.ts";

export function initEventListners() {
  submitSearchListner();
}

function submitSearchListner() {
  const searchForm = document.querySelector(
    ".navbar__search"
  ) as HTMLFormElement;
  const searchInput = document.querySelector(
    ".navbar__search-input"
  ) as HTMLInputElement;

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchString = searchInput.value;
    clearProductsList();
    const productContainer = document.querySelector(
      ".main__product-list"
    ) as HTMLElement;
    getProductBySearchString(searchString).then((products) => {
      console.log(products);

      if (products.length == 0) {
        const errorElement = generateHTMLElement("h2", "No products found");
        productContainer.appendChild(errorElement);
        return;
      }

      products.forEach((product) => {
        const card = generateProductCard(product);
        productContainer.appendChild(card);
      });
    });
  });
}
