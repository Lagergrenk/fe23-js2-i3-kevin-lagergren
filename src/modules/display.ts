import { isStockLow } from "./utils.ts";
import { Product } from "./api.ts";

import * as utils from "./utils.ts";

// Purpose: To generate a product card with the given product
// Generates a product card with the given product
export function generateProductCard(product: Product): HTMLElement {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const img = utils.generateHTMLImage(product.thumbnail);
  card.appendChild(img);

  const title = utils.generateHTMLElement("h2", product.title);
  card.appendChild(title);

  const description = utils.generateHTMLElement("p", product.description);
  card.appendChild(description);

  const rating = utils.generateHTMLElement("p", `Rating: ${product.rating}`);
  card.appendChild(rating);

  const stock = utils.generateHTMLElement("p", `Stock: ${product.stock}`);
  if (isStockLow(product.stock)) {
    stock.classList.add("low-stock");
    stock.textContent += " (Low stock)";
  }
  card.appendChild(stock);

  const category = utils.generateHTMLElement(
    "p",
    `Category: ${utils.capitalizeFirstLetter(product.category)}`
  );
  card.appendChild(category);
  const price = utils.generateHTMLElement(
    "p",
    utils.formatPrice(product.price)
  );
  card.appendChild(price);

  const buyButton = utils.generateHTMLBuyButton();
  card.appendChild(buyButton);

  return card;
}
