import { fetchData, populateGallery, populateBanner} from "./getData.js";
const url = "scripts/data/products.json";
fetchData(url, populateBanner);
fetchData(url, populateGallery);

const selectedCateg = document.querySelector('input[name="product-type"]:checked');
const vCateg = selectedCateg.value;

selectedCateg.addEventListener("change", () => {
  fetchData(url, populateGallery, vCateg);
});

// ==================== show filter panel =======================
const svg = document.querySelector('#filter-icon>svg');
const filtres = document.querySelector("#filter-products");
svg.addEventListener('click', () => {
  filtres.classList.toggle('active');
})