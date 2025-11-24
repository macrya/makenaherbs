// Product data for Makena Herbs
const herbProducts = [
    {
        id: 1,
        name: "Chamomile",
        category: "tea",
        icon: "🌼",
        description: "Calming and soothing herb perfect for relaxation and better sleep.",
        benefits: "Promotes relaxation, aids digestion, supports sleep quality"
    },
    {
        id: 2,
        name: "Lavender",
        category: "medicinal",
        icon: "💜",
        description: "Aromatic herb known for its calming properties and delightful fragrance.",
        benefits: "Reduces anxiety, improves sleep, relieves headaches"
    },
    {
        id: 3,
        name: "Peppermint",
        category: "tea",
        icon: "🌿",
        description: "Refreshing herb that aids digestion and provides natural energy.",
        benefits: "Aids digestion, relieves nausea, boosts energy"
    },
    {
        id: 4,
        name: "Turmeric",
        category: "medicinal",
        icon: "🟡",
        description: "Golden spice with powerful anti-inflammatory properties.",
        benefits: "Reduces inflammation, supports joint health, boosts immunity"
    },
    {
        id: 5,
        name: "Basil",
        category: "culinary",
        icon: "🌱",
        description: "Aromatic herb that adds fresh flavor to any dish.",
        benefits: "Rich in antioxidants, supports heart health, antibacterial properties"
    },
    {
        id: 6,
        name: "Ginger",
        category: "medicinal",
        icon: "🫚",
        description: "Warming root that supports digestion and reduces inflammation.",
        benefits: "Aids digestion, reduces nausea, anti-inflammatory"
    },
    {
        id: 7,
        name: "Rosemary",
        category: "culinary",
        icon: "🌿",
        description: "Fragrant herb that enhances memory and adds flavor to dishes.",
        benefits: "Improves memory, boosts circulation, rich in antioxidants"
    },
    {
        id: 8,
        name: "Echinacea",
        category: "medicinal",
        icon: "🌸",
        description: "Immune-boosting herb that helps fight off colds and infections.",
        benefits: "Boosts immunity, reduces cold symptoms, anti-viral properties"
    },
    {
        id: 9,
        name: "Green Tea",
        category: "tea",
        icon: "🍵",
        description: "Antioxidant-rich tea that promotes overall wellness.",
        benefits: "High in antioxidants, boosts metabolism, improves brain function"
    },
    {
        id: 10,
        name: "Oregano",
        category: "culinary",
        icon: "🌿",
        description: "Robust herb with powerful antimicrobial properties.",
        benefits: "Antibacterial, antioxidant-rich, supports digestion"
    },
    {
        id: 11,
        name: "Holy Basil",
        category: "medicinal",
        icon: "🍃",
        description: "Sacred herb known for stress relief and adaptogenic properties.",
        benefits: "Reduces stress, supports mental clarity, adaptogenic"
    },
    {
        id: 12,
        name: "Lemon Balm",
        category: "tea",
        icon: "🍋",
        description: "Citrus-scented herb that calms the mind and uplifts the spirit.",
        benefits: "Reduces anxiety, improves mood, aids sleep"
    },
    {
        id: 13,
        name: "Thyme",
        category: "culinary",
        icon: "🌿",
        description: "Aromatic herb with strong antimicrobial properties.",
        benefits: "Supports respiratory health, antibacterial, rich in vitamins"
    },
    {
        id: 14,
        name: "Ashwagandha",
        category: "medicinal",
        icon: "🌾",
        description: "Powerful adaptogen that helps the body manage stress.",
        benefits: "Reduces stress, boosts energy, supports cognitive function"
    },
    {
        id: 15,
        name: "Hibiscus",
        category: "tea",
        icon: "🌺",
        description: "Vibrant flower tea that supports heart health and is rich in vitamin C.",
        benefits: "Lowers blood pressure, rich in antioxidants, supports liver health"
    }
];

// Function to render products to the DOM
function renderProducts(productsToRender = herbProducts) {
    const productsGrid = document.getElementById('productsGrid');

    if (!productsGrid) {
        console.error('Products grid element not found');
        return;
    }

    productsGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;

        productCard.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <span class="product-category">${product.category}</span>
            <p>${product.description}</p>
            <div class="product-benefits">
                <strong>Benefits:</strong> ${product.benefits}
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// Filter products by category
function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Search products by name or description
function searchProducts(searchTerm) {
    const normalizedSearch = searchTerm.toLowerCase();
    const filteredProducts = herbProducts.filter(product =>
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.benefits.toLowerCase().includes(normalizedSearch)
    );

    renderProducts(filteredProducts);
}

// Get product by ID
function getProductById(id) {
    return herbProducts.find(product => product.id === id);
}

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') {
        return herbProducts;
    }
    return herbProducts.filter(product => product.category === category);
}

// Export functions for use in other scripts (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        herbProducts,
        renderProducts,
        filterProducts,
        searchProducts,
        getProductById,
        getProductsByCategory
    };
}
