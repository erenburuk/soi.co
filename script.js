document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document
    .getElementById("nav-menu")
    .querySelector("ul")
    .classList.toggle("show");
});
ent.getElementById("menu").scrollIntoView({ behavior: "smooth" });

// Menüyü filtreleme işlemi
function filterMenu(category) {
  let items = document.getElementsByClassName("menu-item");

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    // 'all' kategorisine tıklandığında tüm ürünler görünür olur
    if (category === "all") {
      item.style.display = "block";
    } else {
      // Eğer ürün belirtilen kategoriye aitse göster, değilse gizle
      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  }
}
