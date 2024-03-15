const t="https://dummyjson.com/products";async function e(e){try{let r=await fetch(`${t}/search?q=${e}`);if(!r.ok)throw Error(`$Error: ${r.status}`);return(await r.json()).products}catch(t){return console.error(t),[]}}function r(t,e){let r=document.createElement(t);return r.textContent=e,r}function n(t){var e,n;let o=document.createElement("div");o.classList.add("product-card");let c=function(t){let e=document.createElement("img");return e.classList.add("product-image"),e.src=t,e}(t.thumbnail);o.appendChild(c);let a=r("h2",t.title);o.appendChild(a);let d=r("p",t.description);o.appendChild(d);let l=r("p",`Rating: ${t.rating}`);o.appendChild(l);let i=r("p",`Stock: ${t.stock}`);t.stock<10&&(i.classList.add("low-stock"),i.textContent+=" (Low stock)"),o.appendChild(i);let u=r("p",`Category: ${(e=t.category).charAt(0).toUpperCase()+e.slice(1)}`);o.appendChild(u);let s=r("p",(n=t.price,`$ ${n.toFixed(2)}`));o.appendChild(s);let p=function(){let t=document.createElement("button");return t.classList.add("add-to-cart-button"),t.classList.add("btn"),t.textContent="Add to cart",t}();return o.appendChild(p),o}(async function(){try{let e=await fetch(t);if(!e.ok)throw Error(`Error: ${e.status}`);let r=await e.json();return console.log(r.products),r.products}catch(t){return console.error(t),[]}})().then(t=>{let e=document.querySelector(".main__product-list");t.forEach(t=>{let r=n(t);e.appendChild(r)})}),function(){let t=document.querySelector(".navbar__search"),o=document.querySelector(".navbar__search-input");t.addEventListener("submit",t=>{t.preventDefault();let c=o.value;if(""===c){alert("You need to enter a search!");return}document.querySelector(".main__product-list").innerHTML="";let a=document.querySelector(".main__product-list");e(c).then(t=>{if(console.log(t),0==t.length){let t=r("h2","No products found");a.appendChild(t);return}t.forEach(t=>{let e=n(t);a.appendChild(e)})})})}();
//# sourceMappingURL=index.d860457e.js.map
