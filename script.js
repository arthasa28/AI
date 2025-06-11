// Data produk
const products = [
  {
    title: "Obsidian AI",
    description: "Mind-mapping dan konsep riset kompleks",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/obsidian.png",
    websiteUrl: "https://obsidian.md/",
    category: "AI",
  },
  {
    title: "Descript",
    description: "Rekam, transkrip, dan edit audio akademik",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/Descript.png",
    websiteUrl: "https://www.descript.com/",
    category: "AI",
  },
  {
    title: "Otter.ai",
    description: "Rekam kuliah dan buat teks cepat",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/Otter.png",
    websiteUrl: "https://otter.ai/",
    category: "AI",
  },
  {
    title: "Consensus: AI",
    description:
      "Menjawab pertanyaan dengan referensijurnal internasional dengan filtering",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/consensus.png",
    websiteUrl: "https://consensus.app/",
    category: "AI",
  },
  {
    title: "Perplexity AI",
    description:
      "Menjawab pertanyaan akademik ringan dengan referensi langsung",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/perplexity.png",
    websiteUrl: "https://www.perplexity.ai/",
    category: "AI",
  },
  {
    title: "SciSpace",
    description: "Menjawab pertanyaan dengan 5 referensi jurnal teratas",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/scispace.png",
    websiteUrl: "https://scispace.com/",
    category: "AI",
  },
  {
    title: "Google Scholar",
    description: "Mencari jurnal dengan keywword",
    price: "Free",
    rating: 3.9,
    image: "asset/googlescholar.png",
    websiteUrl: "https://scholar.google.com/",
    category: "AI",
  },
  {
    title: "Motion",
    description: "Atur jadwal riset, kuliah, skripsi otomatis",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/motion.png",
    websiteUrl: "https://www.usemotion.com/",
    category: "AI",
  },
  {
    title: "Todoist",
    description: "Buat reminder tugas kuliah sederhana",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/todoist.png",
    websiteUrl: "https://www.todoist.com/",
    category: "AI",
  },
  {
    title: "Quillbot",
    description: "Parafrase akademik kompleks",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/quilbot.png",
    websiteUrl: "https://quillbot.com/",
    category: "AI",
  },
  {
    title: "Paraphraser.io",
    description: "Parafrase sederhana",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/parapharaser.io.png",
    websiteUrl: "https://www.paraphraser.io/",
    category: "AI",
  },
  {
    title: "Gemini",
    description:
      "Terhubung ke google Docs & Web, kuat untuk nulis panjang & riset.",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/gemini.png",
    websiteUrl: "https://gemini.google.com/",
    category: "AI",
  },
  {
    title: "DeepSeek | 深度求索",
    description:
      "Mencari dan menjawab pertanyaan dengan referensi ilmiah dari jurnal terpercaya.",
    price: "Free",
    rating: 4.5,
    image: "asset/deepseek.png",
    websiteUrl: "https://www.deepseek.com/",
    category: "AI",
  },
  {
    title: "ChatGPT",
    description: "Bantu brainstorming, tanya tugas, bikin draft cepat",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/chatgpt.png",
    websiteUrl: "https://chatgpt.com/",
    category: "AI",
  },
  {
    title: "Midjourney",
    description: "AI untuk membuat gambar kreatif dari perintah teks.",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/midjourney.png",
    websiteUrl: "https://www.midjourney.com/home",
    category: "Visual & AI",
  },
  {
    title: "Pinterest",
    description:
      "Berbagi ide visual untuk inspirasi desain, gaya, dan proyek kreatif.",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/pinterest.png",
    websiteUrl: "https://id.pinterest.com/",
    category: "Visual",
  },
  {
    title: "DeepL Translate",
    description:
      "Penerjemah AI akurat untuk berbagai bahasa dengan kualitas alami.",
    price: "Free",
    rating: 4.9,
    image: "asset/deepl.png",
    websiteUrl: "https://www.deepl.com/en/translator",
    category: "Translate & AI",
  },
  {
    title: "Google Translate",
    description:
      "Terjemahan instan untuk teks, ucapan, dan gambar dalam berbagai bahasa.",
    price: "Free",
    rating: 3.9,
    image: "asset/g.translate.png",
    websiteUrl: "https://translate.google.com/",
    category: "Translate",
  },
  {
    title: "Gamma AI",
    description:
      "Presentasi cerdas yang menyusun konten otomatis jadi slide menarik dan interaktif.",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/gamma.png",
    websiteUrl: "https://gamma.app/ai-powerpoint",
    category: "AI Presentations",
  },
  {
    title: "Microsoft PowerPoint",
    description:
      "Perangkat lunak presentasi untuk membuat slide visual, teks, gambar, dan animasi.",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/ppt.png",
    websiteUrl: "https://www.microsoft.com/id-id/microsoft-365/powerpoint",
    category: "Presentations",
  },
  /*
  {
    title: "##",
    description: "#",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/",
    websiteUrl: "##",
    category: "AI",
  },
  {
    title: "##",
    description: "#",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/",
    websiteUrl: "##",
    category: "AI",
  },
  {
    title: "##",
    description: "#",
    price: "Free & Paid",
    rating: 4.9,
    image: "asset/",
    websiteUrl: "##",
    category: "AI",
  },
  {
    title: "##",
    description: "#",
    price: "Free & Paid",
    rating: 3.9,
    image: "asset/",
    websiteUrl: "##",
    category: "AI",
  }, */
];

// Fungsi untuk menampilkan produk
function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card fade-in";
    productCard.style.animationDelay = `${index * 100}ms`;

    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-category">${product.category}</div>
            </div>
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-rating">
                        <span>⭐</span>
                        <span>${product.rating}</span>
                    </div>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="product-button" onclick="redirectToWebsite('${product.websiteUrl}')">
                    <span>Kunjungi Website</span>
                    <span>→</span>
                </button>
            </div>
        `;

    productsGrid.appendChild(productCard);
  });
}

// Fungsi untuk redirect ke website
function redirectToWebsite(url) {
  window.open(url, "_blank");
}

// Fungsi untuk scroll ke produk
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth",
  });
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");

  mobileNav.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
}

// Smooth scrolling untuk navigasi
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });

        // Close mobile menu if open
        const mobileNav = document.getElementById("mobileNav");
        if (mobileNav.classList.contains("active")) {
          toggleMobileMenu();
        }
      }
    });
  });
}

// Intersection Observer untuk animasi fade in
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".fade-in");
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Render produk
  renderProducts();

  // Initialize smooth scrolling
  initSmoothScrolling();

  // Initialize scroll animations
  initScrollAnimations();

  // Mobile menu event listener
  document
    .getElementById("mobileMenuBtn")
    .addEventListener("click", toggleMobileMenu);

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    const mobileNav = document.getElementById("mobileNav");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");

    if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      if (mobileNav.classList.contains("active")) {
        toggleMobileMenu();
      }
    }
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.9)";
    }
  });
});

// Preload images for better performance
function preloadImages() {
  products.forEach((product) => {
    const img = new Image();
    img.src = product.image;
  });
}

// Initialize preloading
preloadImages();
