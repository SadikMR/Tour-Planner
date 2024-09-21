const places = [
    {
        name: "Cox's Bazar",
        location: "Cox's Bazar, Bangladesh",
        image: "nature1.jpg",
        info: "Cox's Bazar, located in southeastern Bangladesh, boasts the world's longest natural sea beach at 125 km. The golden sands, blue waters of the Bay of Bengal, and stunning sunrises and sunsets make it a perfect escape for nature lovers.Beyond the beach, explore Himchari National Park, Inani Beach, and local markets.Adventure seekers can enjoy water sports, while cultural enthusiasts can visit nearby Buddhist temples.Cox’s Bazar offers a unique mix of natural beauty, adventure, and culture, making it an unforgettable destination for travelers.",
        link: "https://beautifulbangladesh.gov.bd/cat/spring/12"
    },
    {
        name: "Boga Lake",
        location: "Bandarban, Bangladesh",
        image: "bogalake.jpeg",
        info: "Boga Lake, nestled in the hills of Bandarban, is a stunning, crystal-clear freshwater lake at an altitude of 1,200 meters. Surrounded by lush green hills and rugged terrain, this secluded spot offers an unparalleled sense of tranquility and natural beauty.Accessible through a scenic trek, Boga Lake is a favorite among adventurers and nature lovers. Its serene waters, vibrant local culture, and breathtaking mountain views make it a must-visit destination for those seeking an off-the-beaten-path experience in Bangladesh.",
        link: "https://beautifulbangladesh.gov.bd/loc/chattogram/133"

    },
    {
        name: "Ratargul",
        location: "Sylhet, Bangladesh",
        image: "nature3.jpg",
        info: "Ratargul Swamp Forest in Sylhet is a rare and mesmerizing freshwater swamp forest, often referred to as the Amazon of Bangladesh. Surrounded by tranquil waters and lush greenery, the forest comes alive during the monsoon, offering a serene, otherworldly experience as you explore by boat.With its rich biodiversity, unique flora, and peaceful atmosphere, Ratargul is a must-visit for nature lovers and those seeking a quiet retreat into nature's embrace. It's an unforgettable escape into one of Bangladesh's hidden natural wonders.",
        link: "https://beautifulbangladesh.gov.bd/loc/sylhet/25"
    },
    {
        name: "Karamjal",
        location: "Sundarban, Bangladesh",
        image: "image.png",
        info: "Karamjal, located in the Sundarbans near Khulna, is a popular entry point to the world’s largest mangrove forest. Known for its rich biodiversity, Karamjal offers a chance to experience the unique ecosystem of the Sundarbans, home to the majestic Royal Bengal Tiger and diverse wildlife.Visitors can explore the mangrove forest, spot wildlife like crocodiles, deer, and monkeys, and learn about conservation at the wildlife breeding center. With its serene rivers and lush greenery, Karamjal is a perfect destination for nature lovers and wildlife enthusiasts.",
        link: "https://sundarbantourism.bforest.gov.bd/en/spot/1"
    },
    {
        name: "Kuakata",
        location: "Kuakata, Putuakhali",
        image: "nature2.jpg",
        info: "Kuakata, located in Patuakhali, is one of the few places in the world where you can witness both sunrise and sunset over the sea. Known as the ** Daughter of the Sea **, Kuakata offers a stunning 18 km long beach with serene waters and vast stretches of sandy shoreline.This peaceful destination is perfect for those seeking natural beauty and tranquility. Visitors can also explore the local Rakhine community, enjoy fresh seafood, or take boat trips to nearby islands, making Kuakata a must-visit spot for a rejuvenating coastal getaway.",
        link: "https://beautifulbangladesh.gov.bd/district-destination/patuakhali/sea-beaches/20"
    },
    {
        name: "Patenga Beach",
        location: "Chattogram, Bangladesh",
        image: "nature4.jpg",
        info: "Patenga Beach, located in Chattogram, is a popular seaside escape where the urban landscape meets the serene Bay of Bengal. Known for its stunning sunsets, cool sea breeze, and rocky embankments, Patenga offers a perfect mix of natural beauty and city vibes.Visitors can enjoy boat rides, walk along the promenade, or relax while watching the waves crash against the shore. With its lively atmosphere, nearby cafes, and breathtaking coastal views, Patenga is a favorite spot for both locals and tourists seeking a refreshing break by the sea.",
        link: "https://www.musafir.com.bd/place/patenga-sea-beach/"
    }


];

function updatePopularPlaces() {
    const popularGrid = document.getElementById("popularGrid");

    popularGrid.innerHTML = "";

    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("popular__card");

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" />
            <div class="popular__content">
                <div class="popular__card__header">
                    <h4>${place.name}</h4>
                    <p>${place.location}</p>
                </div>
                <p class="place_txt">${place.info}</p>
                <button class="show_btn">Show Details</button>
            </div>
        `;
        popularGrid.appendChild(card);
        const showBtn = card.querySelector('.show_btn');
        showBtn.addEventListener('click', () => {
            window.location.href = place.link; // Redirect to the place's link
        });
    });
}
updatePopularPlaces();