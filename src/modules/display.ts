import { isStockLow } from "./utils.ts";
import { Product } from "./api.ts";

import * as utils from "./utils.ts";

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
  }
  card.appendChild(stock);

  const category = utils.generateHTMLElement(
    "p",
    `Category: ${utils.capitalizeFirstLetter(product.category)}`
  );
  card.appendChild(category);

  const buyButton = utils.generateHTMLBuyButton();
  card.appendChild(buyButton);

  return card;
}
