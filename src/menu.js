export function menuPage() {
  const menuBtn = document.getElementById("menu");
  const content = document.getElementById("content");

  menuBtn.addEventListener("click", (e) => {
    const menu = document.createElement("div");
    const heading = document.createElement("h2");
    heading.classList.toggle("menu-heading");
    heading.textContent = "Menu Items";
    const menuItems = document.createElement("div");
  });
}
