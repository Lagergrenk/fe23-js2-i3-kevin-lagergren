/**
 * Generate card for each item
 * including 
 * Image
 * Title
 * Description
 * Rating
 * Stock, visa även en varning om stock är mindre än 10
 * Category
 * Knapp för att lägga till i kundvagnen (Knappen behöver inte fungera)

 */

import { isStockLow } from "./utils.ts";
import { Product } from "./api.ts";

import * as utils from "./utils.ts";

export function generateProductCard(product: Product): HTMLElement {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const img = utils.generateHTMLImage(product.thumbnail);
  card.appendChild(img);

  const title = utils.generateHTMLParagraph(product.title);
  card.appendChild(title);

  const description = utils.generateHTMLParagraph(product.description);
  card.appendChild(description);

  const rating = utils.generateHTMLParagraph(`Rating: ${product.rating}`);
  card.appendChild(rating);

  const stock = utils.generateHTMLParagraph(`Stock: ${product.stock}`);
  if (isStockLow(product.stock)) {
    stock.classList.add("low-stock");
  }
  card.appendChild(stock);

  const category = utils.generateHTMLParagraph(`Category: ${product.category}`);
  card.appendChild(category);

  const buyButton = utils.generateHTMLBuyButton();
  card.appendChild(buyButton);

  return card;
}
