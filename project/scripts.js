const plants = [
    {
        name: "Rose",
        price: 10,
        rating: 4.5,
        description: "Beautiful red roses.",
        image: "https://rukminim2.flixcart.com/image/850/1000/kp036vk0/plant-sapling/o/m/7/red-rose-1-rathee-organics-original-imag3bnwhjnqmrfu.jpeg?q=20&crop=false", 
        size: "Medium",
        highlights: "Long-lasting flowers",
        returnPolicy: "No return policy",
        link: "https://nurserylive.com/products/rose-red-plant"
    },
    {
        name: "Tulip",
        price: 8,
        rating: 4.2,
        description: "Colorful tulips in various shades.",
        image: "https://m.media-amazon.com/images/I/71sQOlkixLL.jpg", 
        size: "Small",
        highlights: "Spring bloomers",
        returnPolicy: "No return policy",
        link: "https://nurserylive.com/products/tulip-random-color-bulbs-set-of-5?_pos=17&_sid=dea2c6404&_ss=r"
    },
    {
        name: "Sunflower",
        price: 12,
        rating: 4.7,
        description: "Bright and cheerful sunflowers seeds.",
        image: "https://creativefarmer.in/cdn/shop/products/23554_1024x1024_a26c0d9c-9a75-4edc-b0c6-1d85c5bcf9aa.jpg?v=1616308984",
        size: "Large",
        highlights: "Great for gardens",
        returnPolicy: "No return policy",
        link: "https://nurserylive.com/products/sunflower-russian-giant-seeds"
    },
    {
        name: "Lily",
        price: 15,
        rating: 4.3,
        description: "Elegant lilies with a sweet fragrance.",
        image: "https://gardengram.in/cdn/shop/products/nurserylive-lily-plants-category-image.webp?v=1708669234", 
        size: "Medium",
        highlights: "Perfect for bouquets",
        returnPolicy: "No return policy",
        link:"https://gardengram.in/products/lily"
    },
    {
        name: "Daisy",
        price: 7,
        rating: 4.1,
        description: "Simple and beautiful daisies.",
        image: "https://nurserylive.com/cdn/shop/products/nurserylive-g-gerbera-dark-pink-plant.jpg?v=1634220219", 
        size: "Small",
        highlights: "Long-lasting blooms",
        returnPolicy: "No return policy",
        link: "https://nurserylive.com/products/gerbera-any-color-plant?_pos=4&_sid=df38a4b99&_ss=r"
    },
    {
        name: "Merigold",
        price: 9,
        rating: 4.1,
        description: "Yellow and simple daisies.",
        image: "https://lh5.googleusercontent.com/proxy/NgO-8rysS8kNZ1rjaiHKG5W2XLsRsU2FQkEDZYNOcNaak4nA8_GxxnO843UvwYGcpcdt1itldCT2OzsU4UdgJn2-L4Dhgib0BRSHTo83ZdhnSvXV5vWd2MzFof_tWLf-WM-I_OcqXw", 
        size: "Small",
        highlights: "Best for winter",
        returnPolicy: "No  return policy",
        link: "https://nurserylive.com/products/marigold-pusa-navrangi-desi-seeds?_pos=1&_sid=cf12854d2&_ss=r"
    },
    {
        name: "Hibiscus",
        price: 10,
        rating: 4.3,
        description: "Different colors Flowers",
        image: "https://mygreenleaf.ae/wp-content/uploads/2024/01/Hibiscus-Orange.jpg",
        size: "Medium",
        highlights: " Best for summer",
        returnPolicy: "No return policy",
        link: "https://nurserylive.com/products/hibiscus-pack-of-3-plant?_pos=3&_sid=898349c92&_ss=r"
    }
];

// Function to display products
function displayProducts(plants) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear previous entries

    plants.forEach(plant => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p>Price: $${plant.price}</p>
            <p>Rating: ${plant.rating} ⭐</p>
            <p>${plant.description}</p>
            <p>Size: ${plant.size}</p>
            <p>Highlights: ${plant.highlights}</p>
            <p>Return Policy: ${plant.returnPolicy}</p>
            <a href="${plant.link}" target="_blank" class="buy-now-button">Buy Now</a>
            <button onclick="addToCart('${plant.name}')">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to handle search
function searchPlants() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredPlants);
}

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", searchPlants);

// Initial display of all products
displayProducts(plants);
