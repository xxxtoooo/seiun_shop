let cart = [];

function addToCart(productName) {
  cart.push(productName);

  document.getElementById("cart-count").textContent = cart.length;

  alert("「" + productName + "」をカートに追加しました！☁️");
}


function openCart() {
  const modal = document.getElementById("cart-modal");
  const items = document.getElementById("cart-items");

  modal.style.display = "flex";

  if (cart.length === 0) {
    items.innerHTML = "<p>カートは空です。</p>";
    return;
  }

  items.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `
      <strong>${item}</strong>
      <br>
      <small>¥0（税込）</small>
    `;

    items.appendChild(div);
  });
}


function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}


function orderComplete() {
  if (cart.length === 0) {
    alert("カートに商品がありません！");
    return;
  }

  const orderNumber =
    "SEIUN-" +
    Math.floor(100000 + Math.random() * 900000);

  alert(
    "🎉 ご注文ありがとうございます！\n\n" +
    "注文番号：" + orderNumber + "\n\n" +
    "合計金額：¥0\n\n" +
    "※本サイトは架空のショップです。"
  );
}


function filterItems(category) {
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {

    if (
      category === "all" ||
      product.dataset.category === category
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });
}

function showPage(page) {

  const pages = [
    "home-page",
    "goods-page",
    "voice-page",
    "digital-page"
  ];

  pages.forEach(id => {
    document.getElementById(id).style.display = "none";
  });

  if (page === "home") {
    document.getElementById("home-page").style.display = "block";
  }

  if (page === "goods") {
    document.getElementById("goods-page").style.display = "block";
  }

  if (page === "voice") {
    document.getElementById("voice-page").style.display = "block";
  }

  if (page === "digital") {
    document.getElementById("digital-page").style.display = "block";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
