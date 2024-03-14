const t="https://dummyjson.com/products";async function e(e){try{let r=await fetch(`${t}/search?q=${e}`);if(!r.ok)throw Error(`$Error: ${r.status}`);return(await r.json()).products}catch(t){return console.error(t),[]}}function r(t,e){let r=document.createElement(t);return r.textContent=e,r}function n(t){var e;let n=document.createElement("div");n.classList.add("product-card");let o=function(t){let e=document.createElement("img");return e.classList.add("product-image"),e.src=t,e}(t.thumbnail);n.appendChild(o);let c=r("h2",t.title);n.appendChild(c);let a=r("p",t.description);n.appendChild(a);let d=r("p",`Rating: ${t.rating}`);n.appendChild(d);let l=r("p",`Stock: ${t.stock}`);t.stock<10&&l.classList.add("low-stock"),n.appendChild(l);let u=r("p",`Category: ${(e=t.category).charAt(0).toUpperCase()+e.slice(1)}`);n.appendChild(u);let i=function(){let t=document.createElement("button");return t.classList.add("add-to-cart-button"),t.classList.add("btn"),t.textContent="Add to cart",t}();return n.appendChild(i),n}(async function(){try{let e=await fetch(t);if(!e.ok)throw Error(`Error: ${e.status}`);return(await e.json()).products}catch(t){return console.error(t),[]}})().then(t=>{let e=document.querySelector(".main__product-list");t.forEach(t=>{let r=n(t);e.appendChild(r)})}),function(){let t=document.querySelector(".navbar__search"),o=document.querySelector(".navbar__search-input");t.addEventListener("submit",t=>{t.preventDefault();let c=o.value;document.querySelector(".main__product-list").innerHTML="";let a=document.querySelector(".main__product-list");e(c).then(t=>{if(console.log(t),0==t.length){let t=r("h2","No products found");a.appendChild(t);return}t.forEach(t=>{let e=n(t);a.appendChild(e)})})})}();
//# sourceMappingURL=index.21480cb2.js.map
