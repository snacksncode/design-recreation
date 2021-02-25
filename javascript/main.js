// find all elements with data-img attribute and give them backgrounds
const elements = document.querySelectorAll("[data-img]");

for (let element of elements) {
  const url = element.getAttribute("data-img");
  element.style.backgroundImage = `url(${url})`;
  element.removeAttribute("data-img");
}
