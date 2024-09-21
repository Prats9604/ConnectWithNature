"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const options = [
  "Natural UNESCO's World Heritage Sites",
  "Top Desert Safari Destinations in the World",
  "Best Countriees to see wildlife",
  "Most beautiful beaches",
  "7 wonders of the world",
  "Wonders of INDIA",
];

const places = [
  {
    src: "/Images/where/place1.png",
    name: "Halong Bay",
    description: "City in Vietnam",
    category: "Natural UNESCO's World Heritage Sites",
    country: "Vietnam",
  },
  {
    src: "/Images/where/place2.png",
    name: "Western Ghats",
    description: "mountain range in India",
    category: "Natural UNESCO's World Heritage Sites",
    country: "India",
  },
  {
    src: "/Images/where/place3.png",
    name: "Kaziranga National Park",
    description: "Protected area in Assam, India",
    category: "Natural UNESCO's World Heritage Sites",
    country: "",
  },
  {
    src: "/Images/where/place4.png",
    name: "Zhangjiajie",
    description: "City in China",
    category: "Natural UNESCO's World Heritage Sites",
    country: "",
  },
  {
    src: "/Images/where/place5.png",
    name: "plitvice lakes national park",
    description: "City in Vietnam",
    category: "Natural UNESCO's World Heritage Sites",
    country: "",
  },
  {
    src: "/Images/where/place6.png",
    name: "Matera",
    description: "The city of stones and rock churches",
    category: "Natural UNESCO's World Heritage Sites",
    country: "",
  },
  {
    src: "/Images/where/place7.png",
    name: "Machu Picchu",
    description: "An Historic Sanctuary",
    category: "Natural UNESCO's World Heritage Sites",
    country: "",
  },
  {
    src: "/Images/where/place8.png",
    name: "Great Barrier Reef",
    description: "Coral reef in Australia",
    category: "Natural UNESCO's World Heritage Sites",
    country: "",
  },
  {
    src: "/Images/where/place9.png",
    name: "Ancient City of Sigiriya",
    description: "Lion's Rock",
    category: "Natural UNESCO's World Heritage Sites",
    country: "",
  },
  {
    src: "/Images/where/place11.png",
    name: "Arabian Desert",
    description: "Dubai, United Arab Emirates (UAE)",
    category: "Top Desert Safari Destinations in the World",
    country: "",
  },
  {
    src: "/Images/where/place12.png",
    name: "Thar Desert",
    description: "Jaisalmer, India",
    category: "Top Desert Safari Destinations in the World",
    country: "India",
  },
  {
    src: "/Images/where/place13.png",
    name: " Sahara Desert",
    description: "Bahariya, Egypt",
    category: "Top Desert Safari Destinations in the World",
    country: "",
  },
  {
    src: "/Images/where/place14.png",
    name: "BWahiba Sands",
    description: "Muscat, Oman",
    category: "Top Desert Safari Destinations in the World",
    country: "",
  },
  {
    src: "/Images/where/place15.png",
    name: "Black Rock Desert",
    description: "Nevada, United States of America (USA) ",
    category: "Top Desert Safari Destinations in the World",
    country: "",
  },
  {
    src: "/Images/where/place16.png",
    name: "Chihuahuan Desert",
    description: "White Sands National Monument, USA",
    category: "Top Desert Safari Destinations in the World",
    country: "",
  },
  {
    src: "/Images/where/place17.png",
    name: "Sagar Desert",
    description: "Erg Chebbi, Morocco",
    category: "Top Desert Safari Destinations in the World",
    country: "",
  },
  {
    src: "/Images/where/place18.png",
    name: "Namib Desert",
    description: "Namibia",
    category: "Top Desert Safari Destinations in the World",
    country: "",
  },
  {
    src: "/Images/where/place19.png",
    name: "Hunder Sand Dunes",
    description: "Nubra Valley, Ladakh",
    category: "Top Desert Safari Destinations in the World",
    country: "",
  },
  {
    src: "/Images/where/place21.png",
    name: "Uganda",
    description: "Diverse animals and breathtaking landscapes",
    category: "Mountain gorillas, tree-climbing lions, and rare birds.",
    country: "",
  },
  {
    src: "/Images/where/place22.png",
    name: "Madagascar",
    description: "Lemurs, chameleons, and endemic species everywhere.",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place23.png",
    name: "Brazil",
    description: "Jaguars, anacondas, and vibrant Amazonian birdlife.",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place24.png",
    name: "Australia",
    description: "Kangaroos, koalas, and unique marsupials abound",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place25.png",
    name: "Whales",
    description: "Red kites, puffins, and coastal wildlife thrive",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place26.png",
    name: "South Africa",
    description: "Big Five, penguins, and diverse marine life",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place27.png",
    name: "United States",
    description: "Bald eagles, bison, and diverse ecosystems",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place28.png",
    name: "Scotland",
    description: "Red deer, golden eagles, and Highland wildlife",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place29.png",
    name: "China",
    description: "Giant pandas, snow leopards, and rich biodiversity",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place210.png",
    name: "Costa Rica",
    description: "Sloths, toucans, and rich tropical rainforests",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place211.png",
    name: "India",
    description: "Bengal tigers, elephants, and diverse wildlife",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place212.png",
    name: "Botswana",
    description: "Elephants, lions, and vast Okavango Delta wildlife",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place213.png",
    name: "Sri Lanka",
    description: "Leopards, elephants, and unique island biodiversity",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place214.png",
    name: "Borneo",
    description: "Orangutans, pygmy elephants, and rich rainforests",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place215.png",
    name: "Thailand",
    description: "Elephants, gibbons, and lush tropical rainforests",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place216.png",
    name: "New Zealand",
    description: "Kiwis, kea parrots, and unique island fauna",
    category: "Best Countriees to see wildlife",
    country: "",
  },
  {
    src: "/Images/where/place31.png",
    name: "Hanalei Bay",
    description: "Hawaii",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place32.png",
    name: "Grayton Beach",
    description: "Florida",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place33.png",
    name: "Cannon Beach",
    description: "Oregon",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place34.png",
    name: "Copacabana, Brazil",
    description: "Brazil",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place35.png",
    name: "Seven Mile Beach",
    description: "Cayman Islands",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place36.png",
    name: "Grace Bay Beach",
    description: "Turks and Caicos",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place37.png",
    name: "Elafonissi Beach",
    description: "Greece",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place38.png",
    name: "Sotavento Beach",
    description: "Spain",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place39.png",
    name: "Platja de Ses Illetes",
    description: "Spain",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place310.png",
    name: "La Pelosa Beach",
    description: "Italy",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place311.png",
    name: "Scala dei Turchi",
    description: "Italy",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place312.png",
    name: "Praia de Marinha",
    description: "Portugal",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place313.png",
    name: "Saud Beach",
    description: "Philippines",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place314.png",
    name: "Le Morne",
    description: "Mauritius",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place315.png",
    name: "Radhanagar Beach",
    description: "India",
    category: "Most beautiful beaches",
    country: "India",
  },
  {
    src: "/Images/where/place316.png",
    name: "Bai Dam Trau",
    description: "Vietnam",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place317.png",
    name: "Railay Beach",
    description: "Thailand",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place318.png",
    name: "Nungwi Beach",
    description: "Tanzania",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place319.png",
    name: "Camps Bay Beach",
    description: "South Africa",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place320.png",
    name: "Anse Source D'Argent",
    description: "Seychelles",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place321.png",
    name: "Praia de Santa Monica",
    description: "Cape Verde",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place322.png",
    name: "Cape Le Grand National Park",
    description: "Australia",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place323.png",
    name: "Whitehaven Beach",
    description: "Australia",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place324.png",
    name: "Matira Beach",
    description: "Bora Bora",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/place325.png",
    name: "Taharuu Beach",
    description: "Tahiti",
    category: "Most beautiful beaches",
    country: "",
  },
  {
    src: "/Images/where/w1.png",
    name: "Great Wall of China",
    description: "Beijing, China",
    category: "7 wonders of the world",
    country: "",
  },
  {
    src: "/Images/where/w2.png",
    name: "Chichén Itzá",
    description: "Ma'an, Jordan",
    category: "7 wonders of the world",
    country: "",
  },
  {
    src: "/Images/where/w3.png",
    name: "Petra",
    description: "Rio de Janeiro, Brazil",
    category: "7 wonders of the world",
    country: "",
  },
  {
    src: "/Images/where/w4.png",
    name: "Machu Picchu",
    description: "Cusco Region, Peru",
    category: "7 wonders of the world",
    country: "",
  },
  {
    src: "/Images/where/w5.png",
    name: "Christ the Redeemer",
    description: "Yucatán, Mexico",
    category: "7 wonders of the world",
    country: "Colosseum",
  },
  {
    src: "/Images/where/w6.png",
    name: "Colosseum",
    description: "Rome, Italy",
    category: "7 wonders of the world",
    country: "",
  },
  {
    src: "/Images/where/w7.png",
    name: "Taj Mahal",
    description: "Agra, India",
    category: "7 wonders of the world",
    country: "India",
  },
];

const Where: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    if (selectedCategory === "Wonders of INDIA") {
      setFilteredPlaces(places.filter((place) => place.country === "India"));
    } else if (selectedCategory) {
      setFilteredPlaces(
        places.filter((place) => place.category === selectedCategory)
      );
    } else {
      setFilteredPlaces(places);
    }
  }, [selectedCategory]);

  return (
    <div className="flex flex-col bg-[#C8EAEE] py-20 md:py-30 gap-10">
      <div className="flex flex-col gap-4 md:gap-8 px-4 md:px-12 lg:px-20">
        <div className="text-2xl md:text-3xl font-bold text-[#1C3F43] sm:w-[400px] md:w-[500px]">
          DESTINATIONS WHICH CONNECT WITH NATURE
        </div>
        <div className="text-md text-[#1C3F43] sm:w-[400px] md:w-[500px]">
          Health and science experts have determined that deepening our
          connection to nature is extremely important for boosting our overall
          health, mood, and mental clarity.
        </div>
      </div>
      <div className="flex gap-2 md:gap-3 overflow-x-auto flex-nowrap md:flex-wrap px-4 md:px-12 lg:px-20">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(option)}
            className={`px-2 py-2 md:px-4 md:py-2 bg-[#1C3F43] text-[#fff] text-sm md:text-md whitespace-nowrap cursor-pointer transition-transform duration-200 transform hover:scale-95 ${
              selectedCategory === option ? "bg-[#0B1E22]" : ""
            }`}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="pt-4 overflow-x-auto no-s pl-4 md:pl-12 lg:pl-20">
        <div className="flex flex-row gap-2 md:gap-6">
          {filteredPlaces.map((place, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[350px] flex flex-col gap-3 p-2 lg:p-3 bg-white rounded-3xl"
            >
              <div>
                <Image
                  src={place.src}
                  height={1738}
                  width={1386.5}
                  alt={`${place.name} Image`}
                  className="aspect-auto object-cover self-center rounded-2xl"
                />
              </div>
              <div className="flex flex-col py-1">
                <div className="text-lg font-bold text-[#012527]">
                  {place.name}
                </div>
                <div className="text-md text-[#012527]">
                  {place.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Where;
