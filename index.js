function $(id, slectAll = false) {
  return slectAll ? document.querySelectorAll(id) : document.querySelector(id);
}

let totalSize = 0;
let totalItems = 0;
const items = $(".M3pype", true);

for (let i = 0; i < items.length; i++) {
  let hasAttr = Number(items[i].getAttribute("data-column-field")) == 3;
  if (hasAttr) {
    totalItems++;
    itemSize = parseInt(items[i].textContent, 10);
    !isNaN(itemSize) && (totalSize += itemSize);
  }
}
alert(`The total size of ${totalItems} items is: ${totalSize} `);
