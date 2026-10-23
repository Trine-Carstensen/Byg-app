function getCategoryName(category) {
    const categoryNames = {
        restaurant: "Restaurant",
        bar: "Bar",
        pool: "Pool og vandland",
        sport: "Sport og aktiviteter",
        wellness: "Wellness",
        service: "Service",
        underholdning: "Underholdning",
        butikker: "Butikker"
    };

    return categoryNames[category] || category;
}

const facilities = [
    {
        name: "Aqua Vista - reception",
        hotel: "Aqua Vista Resort",
        category: "service",
        description: "Reception på Aqua Vista",
        left: 83,
        top: 76,
        icon: "ℹ️"
    }, 
    {
        name: "Lobby Bar",
        hotel: "Aqua Vista Resort",
        category: "bar",
        description: "Lobby bar",
        left: 79,
        top: 75,
        icon: "🍹"
    },
    {
        name: "Red Sky Bar - 18+",
        hotel: "Aqua Vista Resort",
        category: "bar",
        description: "Adults only bar",
        left: 81,
        top: 73,
        icon: "🍹"
    },
    {
        name: "Lobby Bar Terrace",
        hotel: "Aqua Vista Resort",
        category: "bar",
        description: "",
        left: 80,
        top: 70,
        icon: "🍹" 
    },
    {
        name: "Colonies a la carte Restaurant",
        hotel: "Aqua Vista Resort",
        category: "Restaurant",
        description: "Skal bestilles",
        left: 76,
        top: 69,
        icon: "🍽️" 
    },
    {
        name: "Big shop",
        hotel: "Aqua Vista Resort",
        category: "butikker",
        description: "",
        left: 73,
        top: 64,
        icon: "🛍️" 
    },
    {
        name: "padel baner",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 94,
        top: 83,
        icon: "⚽" 
    },
    {
        name: "White bar",
        hotel: "Aqua Vista Resort",
        category: "bar",
        description: "",
        left: 90,
        top: 65,
        icon: "🍹" 
    },
    {
        name: "Lobby Bar Terrace",
        hotel: "Aqua Vista Resort",
        category: "bar",
        description: "",
        left: 77,
        top: 58,
        icon: "🍹" 
    },
    {
        name: "Soprano Restaurant",
        hotel: "Aqua Vista Resort",
        category: "restaurant",
        description: "",
        left: 77,
        top: 53,
        icon: "🍽️" 
    },
    {
        name: "Millennium Sport Bar",
        hotel: "Aqua Vista Resort",
        category: "bar",
        description: "",
        left: 77,
        top: 49,
        icon: "🍹" 
    },
    {
        name: "Bordtennis",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 77,
        top: 43,
        icon: "⚽" 
    },
    {
        name: "Multibane",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 36,
        top: 90,
        icon: "⚽" 
    },
    {
        name: "Trattoria (Apollo) restaurant",
        hotel: "Aqua Vista Resort",
        category: "restaurant",
        description: "Kun for apollo gæster",
        left: 71,
        top: 43,
        icon: "🍽️" 
    },
    {
        name: "Volleyball",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 73,
        top: 36,
        icon: "⚽" 
    },
    {
        name: "Boccia",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "Et spil alla Petanque",
        left: 70,
        top: 34,
        icon: "⚽" 
    },
    {
        name: "Cubana Bar",
        hotel: "Aqua Vista Resort",
        category: "bar",
        description: "",
        left: 62,
        top: 45,
        icon: "🍹" 
    },
    {
        name: "Pink area",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 60,
        top: 33,
        icon: "⚽" 
    },
    {
        name: "løbebane",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "Løbebane (kort)",
        left: 50,
        top: 33,
        icon: "⚽" 
    },
    {
        name: "Sauna",
        hotel: "Aqua Vista Resort",
        category: "wellness",
        description: "",
        left: 55,
        top: 23,
        icon: "💆🏼‍♀️" 
    },
    {
        name: "Fitness",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 51,
        top: 23,
        icon: "⚽" 
    },
    {
        name: "Cross fit område",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 45,
        top: 27,
        icon: "⚽"
    },
    {
        name: "Amphitheater",
        hotel: "Aqua Vista Resort",
        category: "underholdning",
        description: "",
        left: 42,
        top: 23,
        icon: "🎬"
    },
    {
        name: "Cykel center",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 42,
        top: 34,
        icon: "⚽"
    },
    {
        name: "Alba kids club/ clinic",
        hotel: "Aqua Vista Resort",
        category: "underholdning",
        description: "",
        left: 38,
        top: 40,
        icon: "🎬"
    },
    {
        name: "Tennis baner",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 30,
        top: 90,
        icon: "⚽"
    },
    {
        name: "Pickleball baner",
        hotel: "Aqua Vista Resort",
        category: "sport",
        description: "",
        left: 22,
        top: 89,
        icon: "⚽"
    },
    {
        name: "Olympic bar",
        hotel: "Aqua Vista Resort",
        category: "bar",
        description: "",
        left: 44,
        top: 31,
        icon: "🍹" 
    },
    {
        name: "Aqua Park - reception",
        hotel: "Aqua Park Resort",
        category: "service",
        description: "Reception på Aqua Park Resort",
        left: 22,
        top: 80,
        icon: "ℹ️"
    },
    {
        name: "Lobby bar",
        hotel: "Aqua Park Resort",
        category: "bar",
        description: "",
        left: 27,
        top: 78,
        icon: "🍹" 
    },
    {
        name: "L'Asiatique Restaurant",
        hotel: "Aqua Park Resort",
        category: "restaurant",
        description: "Den hedder muligvis East-West nu",
        left: 31,
        top: 77,
        icon: "🍽️" 
    },
    {
        name: "Sport cafe",
        hotel: "Aqua Park Resort",
        category: "restaurant",
        description: "",
        left: 35,
        top: 82,
        icon: "🍽️" 
    },
    {
        name: "Excursion Desk",
        hotel: "Aqua Park Resort",
        category: "butikker",
        description: "Til køb af ture",
        left: 27,
        top: 54,
        icon: "🛍️" 
    },
    {
        name: "Håndklæder + aqua park",
        hotel: "Aqua Park Resort",
        category: "pool",
        description: "",
        left: 24,
        top: 57,
        icon: "🏊" 
    },
    {
        name: "Culina restaurant",
        hotel: "Aqua Park Resort",
        category: "restaurant",
        description: "",
        left: 15,
        top: 63,
        icon: "🍽️" 
    },
    {
        name: "Bruser-område",
        hotel: "Aqua Park Resort",
        category: "pool",
        description: "Hvis man fx. skal flyve sent",
        left: 8,
        top: 52,
        icon: "🏊" 
    },
    {
        name: "Spa",
        hotel: "Aqua Park Resort",
        category: "wellness",
        description: "",
        left: 35,
        top: 77,
        icon: "💆🏼‍♀️" 
    },
    {
        name: "Aqua Blu - reception",
        hotel: "Aqua Blu Resort",
        category: "service",
        description: "Reception på Aqua Blu Resort",
        left: 57,
        top: 81,
        icon: "ℹ️"
    },
    {
        name: "Concerto Bar",
        hotel: "Aqua Blu Resort",
        category: "bar",
        description: "",
        left: 52,
        top: 76,
        icon: "🍹" 
    },
    {
        name: "Lobby Bar",
        hotel: "Aqua Blu Resort",
        category: "bar",
        description: "",
        left: 63,
        top: 75,
        icon: "🍹" 
    },
    {
        name: "Sky Bar (2nd floor)",
        hotel: "Aqua Blu Resort",
        category: "bar",
        description: "",
        left: 64,
        top: 70,
        icon: "🍹" 
    },
    {
        name: "Tagine Restaurant",
        hotel: "Aqua Blu Resort",
        category: "restaurant",
        description: "",
        left: 60,
        top: 70,
        icon: "🍽️" 
    },
    {
        name: "Melody Bar",
        hotel: "Aqua Blu Resort",
        category: "bar",
        description: "",
        left: 55,
        top: 70,
        icon: "🍹" 
    },
    {
        name: "Håndklæder + WC + bruser",
        hotel: "Aqua Blu Resort",
        category: "pool",
        description: "",
        left: 52,
        top: 72,
        icon: "🏊" 
    },
    {
        name: "Melody Pool Bar",
        hotel: "Aqua Blu Resort",
        category: "bar",
        description: "",
        left: 60,
        top: 60,
        icon: "🍹" 
    },
    {
        name: "VR Games",
        hotel: "Aqua Blu Resort",
        category: "underholdning",
        description: "",
        left: 59,
        top: 84,
        icon: "🎬"
    }, 
    {
        name: "Food Court",
        hotel: "Aqua Blu Resort",
        category: "restaurant",
        description: "",
        left: 37,
        top: 70,
        icon: "🍽️" 
    }

];

const mapContainer = document.querySelector(".map-container");
const infoBox = document.querySelector("#info-box");
const categoryFilter = document.querySelector("#category-filter");


facilities.forEach(function(facility) {
    const marker = document.createElement("button");

    marker.className = `map-marker ${facility.category}`;
    marker.textContent = facility.icon;
    marker.title = facility.name;

    marker.dataset.searchText = [
        facility.name,
        facility.hotel,
        facility.description,
        getCategoryName(facility.category)
    ].join(" ").toLowerCase();

    marker.style.left = `${facility.left}%`;
    marker.style.top = `${facility.top}%`;

    marker.addEventListener("click", function() {
        infoBox.innerHTML = `
            <h2>${facility.name}</h2>

            <div class="facility-details">
                <p><strong>Hotel:</strong> ${facility.hotel || "Ikke angivet"}</p>
                <p>
                    <strong>Kategori:</strong>
                    <span class="category-badge ${facility.category}">
                        ${getCategoryName(facility.category)}
                    <span>
                </p>
            </div>

            <p>${facility.description}</p>
        `;
    });

    mapContainer.appendChild(marker);
});

const facilitySearch = document.querySelector("#facility-search");

function filterFacilities() {
    const selectedCategory = categoryFilter.value;
    const searchText = facilitySearch.value.toLowerCase().trim();

    document.querySelectorAll(".map-marker").forEach(function(marker) {
        const matchesCategory =
            selectedCategory === "all" ||
            marker.classList.contains(selectedCategory);

        const matchesSearch =
            marker.dataset.searchText.includes(searchText);

        marker.style.display =
            matchesCategory && matchesSearch ? "block" : "none";
    });
}

categoryFilter.addEventListener("change", filterFacilities);
facilitySearch.addEventListener("input", filterFacilities);