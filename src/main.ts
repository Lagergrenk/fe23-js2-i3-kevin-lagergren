import { getAllProducts, getProductBySearchString } from "./modules/api.ts";
import { generateProductCard } from "./modules/display.ts";
import { initEventListners } from "./modules/eventhandler.ts";

getAllProducts().then((products) => {
  const productContainer = document.querySelector(
    ".main__product-list"
  ) as HTMLElement;
  products.forEach((product) => {
    const card = generateProductCard(product);
    productContainer.appendChild(card);
  });
});

initEventListners();
