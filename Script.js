
let activeCategory = "all";
let searchQuery = "";

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");

function renderGallery() {
  const filtered = images.filter(img => {
    const matchCat = activeCategory === "all" || img.category === activeCategory;
    const matchSearch =
      img.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCat && matchSearch;
  });

  gallery.innerHTML = "";

  if (filtered.length === 0) {
    gallery.innerHTML = `<div class="no-results">No images found.</div>`;
    return;
  }

  filtered.forEach(img => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
<img src="${img.url}" alt="${img.caption}" />
<div class="caption">${img.caption}</div>
    `;

    card.addEventListener("click", () => openLightbox(img));
    gallery.appendChild(card);
  });
}

function openLightbox(img) {
  lbImg.src = img.url;
  lbCaption.textContent = img.caption;
  lightbox.classList.add("open");
}

document.getElementById("lbClose").onclick = () =>
  lightbox.classList.remove("open");

lightbox.onclick = (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
};

// Filters
document.getElementById("filterBtns").onclick = (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  document.querySelectorAll(".filter-btns button")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  renderGallery();
};

// Search
document.getElementById("searchInput").oninput = (e) => {
  searchQuery = e.target.value;
  renderGallery();
};

// Add image
document.getElementById("addBtn").onclick = () => {
  const url = document.getElementById("imgUrl").value;
  const caption = document.getElementById("imgCaption").value;
  const category = document.getElementById("imgCategory").value;

  if (!url) return alert("Please enter an image URL.");

  images.push({
    url,
    caption: caption || "New Image",
    category
  });
  renderGallery();
};

renderGallery();
