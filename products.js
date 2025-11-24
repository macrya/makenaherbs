// Product data for Makena Herbs
const herbProducts = [
    // Powders & Supplements
    {
        id: 1,
        name: "Moringa Powder",
        category: "powders",
        icon: "🌿",
        price: [{ size: "Standard", amount: 450 }],
        description: "Nutrient-rich superfood powder packed with vitamins and minerals.",
        benefits: "Rich in antioxidants, supports immunity, anti-inflammatory"
    },
    {
        id: 2,
        name: "Red Maca Powder",
        category: "powders",
        icon: "🔴",
        price: [
            { size: "Small", amount: 600 },
            { size: "Large", amount: 1100 }
        ],
        description: "Energizing adaptogen that supports hormonal balance and stamina.",
        benefits: "Boosts energy, hormonal balance, enhances endurance"
    },
    {
        id: 3,
        name: "Black Maca Powder",
        category: "powders",
        icon: "⚫",
        price: [
            { size: "Small", amount: 650 },
            { size: "Large", amount: 1200 }
        ],
        description: "Powerful maca variety known for strength and mental clarity.",
        benefits: "Increases strength, improves focus, supports vitality"
    },
    {
        id: 4,
        name: "Bovine Collagen",
        category: "powders",
        icon: "💪",
        price: [
            { size: "Small", amount: 500 },
            { size: "Large", amount: 1000 }
        ],
        description: "Premium collagen for skin, joints, and bone health.",
        benefits: "Supports skin elasticity, joint health, strengthens bones"
    },
    {
        id: 5,
        name: "Marine Collagen",
        category: "powders",
        icon: "🐟",
        price: [
            { size: "Small", amount: 600 },
            { size: "Large", amount: 1100 }
        ],
        description: "High-quality marine collagen for beauty and wellness.",
        benefits: "Promotes youthful skin, supports hair growth, strengthens nails"
    },
    {
        id: 6,
        name: "Aguaje Powder",
        category: "powders",
        icon: "🍑",
        price: [
            { size: "Small", amount: 550 },
            { size: "Large", amount: 1100 }
        ],
        description: "Amazonian fruit powder rich in vitamins A, C, and E.",
        benefits: "Hormonal balance, skin health, rich in phytoestrogens"
    },
    {
        id: 7,
        name: "Slippery Elm Powder",
        category: "powders",
        icon: "🌳",
        price: [{ size: "Standard", amount: 600 }],
        description: "Soothing herb for digestive health and gut support.",
        benefits: "Soothes digestive tract, supports gut health, anti-inflammatory"
    },
    {
        id: 8,
        name: "Milk Thistle Powder",
        category: "powders",
        icon: "💜",
        price: [{ size: "Standard", amount: 600 }],
        description: "Powerful liver detoxifier and protector.",
        benefits: "Supports liver health, detoxification, antioxidant-rich"
    },
    {
        id: 9,
        name: "Dandelion Root Powder",
        category: "powders",
        icon: "🌼",
        price: [{ size: "Standard", amount: 650 }],
        description: "Natural detoxifier and digestive aid.",
        benefits: "Liver support, aids digestion, diuretic properties"
    },
    {
        id: 10,
        name: "Hawthorn Berry Powder",
        category: "powders",
        icon: "❤️",
        price: [{ size: "Standard", amount: 1200 }],
        description: "Heart-healthy berry that supports cardiovascular function.",
        benefits: "Supports heart health, improves circulation, antioxidant-rich"
    },
    {
        id: 11,
        name: "Cleavers Powder",
        category: "powders",
        icon: "🌿",
        price: [{ size: "Standard", amount: 600 }],
        description: "Traditional lymphatic system cleanser.",
        benefits: "Lymphatic support, detoxifying, supports kidney function"
    },
    {
        id: 12,
        name: "Cranberry Powder",
        category: "powders",
        icon: "🔴",
        price: [{ size: "Standard", amount: 800 }],
        description: "Concentrated cranberry powder for urinary tract health.",
        benefits: "Urinary tract health, antioxidants, prevents UTIs"
    },
    {
        id: 13,
        name: "Tribulus Terrestris",
        category: "powders",
        icon: "💪",
        price: [
            { size: "Small", amount: 500 },
            { size: "Large", amount: 1000 }
        ],
        description: "Natural testosterone booster and performance enhancer.",
        benefits: "Supports testosterone, enhances performance, increases vitality"
    },
    {
        id: 14,
        name: "Ashwagandha Powder",
        category: "powders",
        icon: "🌾",
        price: [{ size: "Standard", amount: 650 }],
        description: "Powerful adaptogen that helps manage stress and anxiety.",
        benefits: "Reduces stress, boosts energy, supports cognitive function"
    },
    {
        id: 15,
        name: "Mukhombero Powder",
        category: "powders",
        icon: "🌿",
        price: [{ size: "Standard", amount: 500 }],
        description: "Traditional African herb for vitality and wellness.",
        benefits: "Enhances vitality, traditional aphrodisiac, boosts energy"
    },
    {
        id: 16,
        name: "Chlorella Powder",
        category: "powders",
        icon: "💚",
        price: [{ size: "Standard", amount: 700 }],
        description: "Nutrient-dense green algae for detoxification.",
        benefits: "Detoxifies heavy metals, nutrient-rich, supports immunity"
    },
    {
        id: 17,
        name: "Spirulina Powder",
        category: "powders",
        icon: "💙",
        price: [{ size: "Standard", amount: 600 }],
        description: "Protein-rich superfood with complete amino acid profile.",
        benefits: "High in protein, boosts immunity, rich in B vitamins"
    },
    {
        id: 18,
        name: "Garcinia Cambogia",
        category: "powders",
        icon: "🟡",
        price: [{ size: "Standard", amount: 1200 }],
        description: "Natural weight management and appetite control support.",
        benefits: "Supports weight loss, appetite control, metabolic support"
    },
    {
        id: 19,
        name: "Bentonite Clay",
        category: "powders",
        icon: "🪨",
        price: [
            { size: "Small", amount: 200 },
            { size: "Large", amount: 350 }
        ],
        description: "Detoxifying clay for internal and external use.",
        benefits: "Detoxifies, draws out impurities, supports skin health"
    },
    {
        id: 20,
        name: "Baobab Powder",
        category: "powders",
        icon: "🌳",
        price: [{ size: "Standard", amount: 200 }],
        description: "African superfruit rich in vitamin C and fiber.",
        benefits: "High in vitamin C, supports immunity, digestive health"
    },
    {
        id: 21,
        name: "Fenugreek Powder",
        category: "powders",
        icon: "🌾",
        price: [{ size: "Standard", amount: 350 }],
        description: "Traditional herb for lactation and blood sugar support.",
        benefits: "Supports lactation, blood sugar control, digestive aid"
    },

    // Oils
    {
        id: 22,
        name: "Rosehip Oil",
        category: "oils",
        icon: "🌹",
        price: [
            { size: "50ml", amount: 450 },
            { size: "100ml", amount: 600 }
        ],
        description: "Rejuvenating oil rich in vitamins and essential fatty acids.",
        benefits: "Anti-aging, reduces scars, hydrates skin deeply"
    },
    {
        id: 23,
        name: "Castor Oil",
        category: "oils",
        icon: "🌰",
        price: [
            { size: "100ml", amount: 450 },
            { size: "500ml", amount: 1200 }
        ],
        description: "Versatile oil for hair growth and skin health.",
        benefits: "Promotes hair growth, moisturizes skin, anti-inflammatory"
    },
    {
        id: 24,
        name: "Frankincense Oil",
        category: "oils",
        icon: "✨",
        price: [{ size: "Standard", amount: 800 }],
        description: "Sacred oil with powerful anti-aging and healing properties.",
        benefits: "Anti-aging, spiritual wellness, supports skin rejuvenation"
    },
    {
        id: 25,
        name: "Rosemary Oil",
        category: "oils",
        icon: "🌿",
        price: [{ size: "Standard", amount: 700 }],
        description: "Stimulating oil for hair growth and mental clarity.",
        benefits: "Stimulates hair growth, improves memory, circulation boost"
    },
    {
        id: 26,
        name: "Poke Root Oil",
        category: "oils",
        icon: "🌿",
        price: [{ size: "Standard", amount: 1800 }],
        description: "Traditional healing oil for lymphatic support.",
        benefits: "Lymphatic drainage, reduces inflammation, topical healing"
    },
    {
        id: 27,
        name: "Black Seed Oil",
        category: "oils",
        icon: "⚫",
        price: [{ size: "Standard", amount: 650 }],
        description: "Ancient remedy oil with powerful healing properties.",
        benefits: "Immune support, anti-inflammatory, antioxidant-rich"
    },
    {
        id: 28,
        name: "Ayurveda Hair Oil",
        category: "oils",
        icon: "💆",
        price: [{ size: "120ml", amount: 500 }],
        description: "Traditional Ayurvedic blend for healthy, lustrous hair.",
        benefits: "Nourishes scalp, promotes hair growth, traditional formula"
    },

    // Salts
    {
        id: 29,
        name: "Himalayan Pink Salt",
        category: "salts",
        icon: "🏔️",
        price: [
            { size: "Small", amount: 350 },
            { size: "Large", amount: 650 }
        ],
        description: "Pure, mineral-rich salt from ancient sea beds.",
        benefits: "84 trace minerals, supports electrolyte balance, natural flavor"
    },
    {
        id: 30,
        name: "Epsom Salt",
        category: "salts",
        icon: "💎",
        price: [
            { size: "Small", amount: 250 },
            { size: "Large", amount: 600 }
        ],
        description: "Magnesium-rich salt for relaxation and muscle recovery.",
        benefits: "Relieves muscle soreness, promotes relaxation, magnesium source"
    },
    {
        id: 31,
        name: "Sea Salt",
        category: "salts",
        icon: "🌊",
        price: [{ size: "Standard", amount: 500 }],
        description: "Natural unrefined sea salt with essential minerals.",
        benefits: "Natural minerals, supports hydration, culinary use"
    },
    {
        id: 32,
        name: "Celtic Sea Salt",
        category: "salts",
        icon: "🍀",
        price: [{ size: "Standard", amount: 700 }],
        description: "Hand-harvested, mineral-rich salt from pristine waters.",
        benefits: "Mineral-dense, alkalizing, supports cellular health"
    },

    // Seeds
    {
        id: 33,
        name: "Chia Seeds",
        category: "seeds",
        icon: "⚪",
        price: [{ size: "Standard", amount: 250 }],
        description: "Omega-3 rich seeds for energy and nutrition.",
        benefits: "High in omega-3, fiber-rich, sustained energy"
    },
    {
        id: 34,
        name: "Flax Seeds",
        category: "seeds",
        icon: "🟤",
        price: [{ size: "Standard", amount: 250 }],
        description: "Nutrient-dense seeds for heart and digestive health.",
        benefits: "Omega-3 fatty acids, supports digestion, hormonal balance"
    },
    {
        id: 35,
        name: "Fenugreek Seeds",
        category: "seeds",
        icon: "🌾",
        price: [{ size: "Standard", amount: 200 }],
        description: "Aromatic seeds with multiple health benefits.",
        benefits: "Supports lactation, blood sugar control, digestive aid"
    },
    {
        id: 36,
        name: "Pumpkin Seeds",
        category: "seeds",
        icon: "🎃",
        price: [{ size: "Standard", amount: 500 }],
        description: "Zinc-rich seeds for prostate and immune health.",
        benefits: "Prostate health, immune support, rich in minerals"
    },
    {
        id: 37,
        name: "Sesame Seeds",
        category: "seeds",
        icon: "⚪",
        price: [{ size: "Standard", amount: 500 }],
        description: "Calcium-rich seeds with nutty flavor.",
        benefits: "High in calcium, supports bone health, antioxidants"
    },
    {
        id: 38,
        name: "Sunflower Seeds",
        category: "seeds",
        icon: "🌻",
        price: [{ size: "Standard", amount: 450 }],
        description: "Vitamin E-rich seeds for skin and heart health.",
        benefits: "Rich in vitamin E, supports heart health, anti-inflammatory"
    },

    // Teas & Herbs
    {
        id: 39,
        name: "Spearmint",
        category: "herbs",
        icon: "🌿",
        price: [{ size: "Standard", amount: 500 }],
        description: "Refreshing herb for digestive comfort and relaxation.",
        benefits: "Aids digestion, hormonal balance, refreshing taste"
    },
    {
        id: 40,
        name: "Peppermint",
        category: "herbs",
        icon: "🍃",
        price: [{ size: "Standard", amount: 500 }],
        description: "Cooling herb that soothes digestion and boosts energy.",
        benefits: "Relieves IBS, reduces nausea, improves focus"
    },
    {
        id: 41,
        name: "Rosemary",
        category: "herbs",
        icon: "🌿",
        price: [{ size: "Standard", amount: 350 }],
        description: "Aromatic herb for memory and culinary use.",
        benefits: "Enhances memory, antioxidant-rich, improves circulation"
    },
    {
        id: 42,
        name: "Cloves",
        category: "herbs",
        icon: "🌰",
        price: [{ size: "Standard", amount: 250 }],
        description: "Warming spice with antimicrobial properties.",
        benefits: "Antimicrobial, aids digestion, dental health"
    },
    {
        id: 43,
        name: "Prunus Africana",
        category: "herbs",
        icon: "🌳",
        price: [{ size: "Standard", amount: 500 }],
        description: "Traditional African herb for men's health.",
        benefits: "Prostate support, urinary health, anti-inflammatory"
    },
    {
        id: 44,
        name: "Hibiscus",
        category: "herbs",
        icon: "🌺",
        price: [{ size: "Standard", amount: 200 }],
        description: "Vibrant flower tea rich in vitamin C and antioxidants.",
        benefits: "Lowers blood pressure, rich in vitamin C, liver support"
    },
    {
        id: 45,
        name: "Fennel",
        category: "herbs",
        icon: "🌾",
        price: [{ size: "Standard", amount: 350 }],
        description: "Sweet herb for digestive comfort and lactation support.",
        benefits: "Aids digestion, reduces bloating, lactation support"
    },
    {
        id: 46,
        name: "Ulcers Tea Blend",
        category: "herbs",
        icon: "☕",
        price: [{ size: "Standard", amount: 800 }],
        description: "Specialized herbal blend for digestive ulcer support.",
        benefits: "Soothes stomach lining, supports healing, digestive comfort"
    },
    {
        id: 47,
        name: "Blood Pressure Tea",
        category: "herbs",
        icon: "❤️",
        price: [{ size: "Standard", amount: 800 }],
        description: "Herbal blend formulated to support healthy blood pressure.",
        benefits: "Supports cardiovascular health, promotes circulation"
    },

    // Beauty & Skincare
    {
        id: 48,
        name: "Qasil Powder",
        category: "beauty",
        icon: "✨",
        price: [
            { size: "Small", amount: 200 },
            { size: "Large", amount: 350 }
        ],
        description: "Somali beauty secret for glowing, clear skin.",
        benefits: "Deep cleanses, brightens skin, anti-aging properties"
    },
    {
        id: 49,
        name: "Rosewater",
        category: "beauty",
        icon: "🌹",
        price: [
            { size: "Small", amount: 250 },
            { size: "Large", amount: 350 }
        ],
        description: "Pure rosewater for skin toning and hydration.",
        benefits: "Tones skin, anti-inflammatory, balances pH"
    },

    // Natural Sweeteners
    {
        id: 50,
        name: "Blackstrap Molasses",
        category: "sweeteners",
        icon: "🍯",
        price: [{ size: "Standard", amount: 700 }],
        description: "Iron-rich sweetener with essential minerals.",
        benefits: "High in iron, mineral-rich, natural energy"
    },
    {
        id: 51,
        name: "Raw Honey",
        category: "sweeteners",
        icon: "🍯",
        price: [{ size: "Standard", amount: 850 }],
        description: "Pure, unprocessed honey with natural enzymes.",
        benefits: "Antibacterial, antioxidant-rich, natural energy"
    },

    // Fruits
    {
        id: 52,
        name: "Dried Cranberries",
        category: "fruits",
        icon: "🔴",
        price: [{ size: "Standard", amount: 400 }],
        description: "Sweet-tart dried fruit for snacking and health.",
        benefits: "Urinary tract health, antioxidants, vitamin C"
    }
];

// Function to format price display
function formatPrice(priceArray) {
    if (priceArray.length === 1) {
        return `KSh ${priceArray[0].amount}`;
    } else {
        return priceArray.map(p => `${p.size}: KSh ${p.amount}`).join(' | ');
    }
}

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
            <div class="product-price">${formatPrice(product.price)}</div>
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
