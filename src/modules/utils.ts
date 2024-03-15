// Porpuse: Contains utility functions to be used in the project.

export function formatPrice(price: number) {
  return `$ ${price.toFixed(2)}`;
}
export function isStockLow(stock: number) {
  return stock < 10;
}

export function generateHTMLBuyButton() {
  const btn = document.createElement("button");
  btn.classList.add("add-to-cart-button");
  btn.classList.add("btn");
  btn.textContent = "Add to cart";
  return btn;
}

export function generateHTMLImage(src: string) {
  const img = document.createElement("img");
  img.classList.add("product-image");
  img.src = src;
  return img;
}

export function generateHTMLElement(element: string, text: string) {
  const p = document.createElement(element);
  p.textContent = text;
  return p;
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function clearProductsList() {
  const productContainer = document.querySelector(
    ".main__product-list"
  ) as HTMLElement;
  productContainer.innerHTML = "";
}
