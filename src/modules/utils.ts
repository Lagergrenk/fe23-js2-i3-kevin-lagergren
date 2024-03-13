export function isStockLow(stock: number) {
  return stock < 10;
}

export function generateHTMLBuyButton() {
  const btn = document.createElement("button");
  btn.classList.add("buy-button");
  btn.textContent = "Buy Now";
  return btn;
}

export function generateHTMLImage(src: string) {
  const img = document.createElement("img");
  img.classList.add("product-image");
  img.src = src;
  return img;
}

export function generateHTMLParagraph(text: string) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}
