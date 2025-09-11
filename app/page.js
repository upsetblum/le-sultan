"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Composant DeliveryDropdown
function DeliveryDropdown({ className = "", variant = "primary" }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const deliveryOptions = [
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/fr/store/sultans-kebab-berliner/MFT1hmciQBqcWKYKDloiHg?srsltid=AfmBOopFGZ9i0LEwz4O8Vlzp5D716vGHmCtd53lzyzfIdMcY1141QwBg",
      icon: "🚗",
      color: "bg-black"
    },
    {
      name: "Deliveroo",
      url: "https://deliveroo.fr/fr/menu/besancon/besancon-centre-ville/sultans-kebab-berliner",
      icon: "🛵", 
      color: "bg-teal-500"
    }
  ];

  const baseClasses = "relative inline-block";
  const buttonVariants = {
    primary: "bg-red text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-dark transition-colors font-medium text-sm sm:text-base",
    hero: "gold-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-transform shadow-lg",
    contact: "border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-white transition-colors"
  };

  return (
    <div className={`${baseClasses} ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${buttonVariants[variant]} flex items-center gap-2`}
      >
        Commander
        <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {deliveryOptions.map((option, index) => (
              <a
                key={index}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{option.icon}</span>
                <span className="font-medium text-gray-900">{option.name}</span>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Composant MenuGallery
function MenuGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const menuCategories = [
    { id: "all", name: "Toute la carte", image: null },
    {
      id: "kebabs",
      name: "Kebabs & Berliner",
      image: "/menu/kebabs-berliner.png",
      description: "Nos spécialités kebab et berliner",
    },
    {
      id: "lahmacuns",
      name: "Lahmacuns & Tacos",
      image: "/menu/lahmacuns-tacos.png",
      description: "Pains à la viande turcs et tacos",
    },
    {
      id: "poutines",
      name: "Poutines & Bowls",
      image: "/menu/poutines-bowls.png",
      description: "Nos créations fusion et bowls",
    },
    {
      id: "kids",
      name: "Menu Enfant & Desserts",
      image: "/menu/kids-desserts.png",
      description: "Pour les plus petits et les gourmands",
    },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? menuCategories.filter((cat) => cat.image)
      : menuCategories.filter((cat) => cat.id === activeCategory);

  return (
    <>
      {/* Navigation des catégories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? "gold-gradient text-white shadow-lg"
                : "bg-white text-foreground border-2 border-gold/20 hover:border-gold hover:text-gold"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Galerie d'images */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(category)}
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <p className="text-lg font-semibold">Voir en détail</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gold transition-colors">
                {category.name}
              </h3>
              <p className="text-foreground/70">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal plein écran */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold text-2xl font-bold z-10"
            >
              ✕ Fermer
            </button>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 left-0 text-white hover:text-gold text-2xl font-bold z-10 flex items-center gap-2"
            >
              ← Retour
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.name}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.name}
              </h3>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentInteriorSlide, setCurrentInteriorSlide] = useState(0);

  const heroImages = ["/IMG_9392.JPG", "/IMG_9429.JPG", "/IMG_9387.JPG"];
  
  // Debug logging
  console.log("heroImages:", heroImages);
  console.log("currentSlide:", currentSlide);

  const interiorImages = [
    {
      src: "/IMG_9387.JPG",
      title: "Ambiance Chaleureuse",
      description:
        "Un cadre élégant qui marie tradition ottomane et modernité contemporaine",
    },
    {
      src: "/IMG_9388.JPG",
      title: "Décoration Authentique",
      description:
        "Des fresques murales exclusives racontant l'héritage turc millénaire",
    },
    {
      src: "/IMG_9389.JPG",
      title: "Esprit Ottoman",
      description: "Chaque détail évoque la splendeur de l'Empire Ottoman",
    },
    {
      src: "/IMG_9390.JPG",
      title: "Art Culinaire",
      description:
        "L'union parfaite entre gastronomie turque et présentation moderne",
    },
  ];

  // URLs de redirection
  const links = {
    uberEats:
      "https://www.ubereats.com/fr/store/sultans-kebab-berliner/MFT1hmciQBqcWKYKDloiHg?srsltid=AfmBOopFGZ9i0LEwz4O8Vlzp5D716vGHmCtd53lzyzfIdMcY1141QwBg",
    deliveroo: "https://deliveroo.fr/fr/menu/besancon/besancon-centre-ville/sultans-kebab-berliner",
    reserver: "tel:+33381533585", // Numéro de téléphone pour réservation
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInteriorSlide((prev) => (prev + 1) % interiorImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [interiorImages.length]);

  const menuItems = [
    {
      name: "Le Bosphore",
      description:
        "Kebab de bœuf Angus mariné 24h, légumes grillés au charbon, sauce signature à la grenade et sumac",
      price: "16€",
      image: "/IMG_9387.JPG",
    },
    {
      name: "L'Ottoman",
      description:
        "Agneau de Lozère aux épices d'Anatolie, yaourt grec aux herbes fraîches, pain pide artisanal",
      price: "18€",
      image: "/IMG_9388.JPG",
      badges: ["Halal", "Premium"],
    },
    {
      name: "Végé Sultan",
      description:
        "Falafels maison aux pois chiches bio, houmous de betterave, légumes de saison grillés",
      price: "14€",
      image: "/IMG_9389.JPG",
      badges: ["Végétarien", "Bio"],
    },
    {
      name: "Le Bosphore",
      description:
        "Poulet fermier aux épices Istanbul, tzatziki traditionnel, salade de roquette au sumac",
      price: "15€",
      image: "/IMG_9390.JPG",
      badges: ["Halal", "Fermier"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/sultan-logo.JPG"
                alt="Sultan Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div className="font-bold text-2xl text-gradient">
                Le Sultan Berliner
              </div>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a
                href="#concept"
                className="text-foreground hover:text-gold transition-colors text-sm lg:text-base"
              >
                Notre Concept
              </a>
              <a
                href="#menu"
                className="text-foreground hover:text-gold transition-colors text-sm lg:text-base"
              >
                Menu
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-gold transition-colors text-sm lg:text-base"
              >
                Contact
              </a>
            </div>
            <DeliveryDropdown variant="primary" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-4000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Ambiance Le Sultan ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                onError={(e) => console.error(`Failed to load image: ${image}`, e)}
                onLoad={() => console.log(`Successfully loaded: ${image}`)}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="animated-gradient">L&apos;art du kebab</span>
            <br />
            <span className="text-white drop-shadow-lg">Réinventé</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md">
            Découvrez l&apos;excellence culinaire turque dans un écrin moderne
            au cœur de Besançon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg sm:max-w-none mx-auto">
            <DeliveryDropdown variant="hero" className="text-center" />
            <a
              href="#menu"
              className="border-2 border-gold text-gold bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gold hover:text-white transition-colors inline-block text-center"
            >
              Découvrir nos créations
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2 sm:space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-gold" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Notre Concept
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Une vision culinaire unique qui marie tradition turque ancestrale
              et innovation gastronomique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">
                L&apos;Histoire du Chef
              </h3>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  Né à Istanbul et formé dans les meilleures cuisines
                  européennes, le Chef Mehmet a révolutionné l&apos;art du kebab
                  en y apportant sa vision gastronomique.
                </p>
                <p>
                  Après 15 ans d&apos;expérience dans des restaurants étoilés,
                  il décide de sublimer les saveurs de son enfance avec des
                  techniques modernes et des ingrédients d&apos;exception.
                </p>
                <p>
                  Chaque plat raconte une histoire, chaque bouchée est un voyage
                  entre tradition et modernité.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/IMG_9392.JPG"
                alt="Chef en action"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gold/5 rounded-2xl">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥩</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">
                Ingrédients Premium
              </h4>
              <p className="text-foreground/70">
                Viandes de première qualité, légumes bio locaux, épices
                importées directement de Turquie
              </p>
            </div>
            <div className="text-center p-8 bg-gold/5 rounded-2xl">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">
                Cuisson Innovante
              </h4>
              <p className="text-foreground/70">
                Four à charbon de bois, grilloir vertical traditionnel,
                techniques de marinade révolutionnaires
              </p>
            </div>
            <div className="text-center p-8 bg-gold/5 rounded-2xl">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">
                Excellence
              </h4>
              <p className="text-foreground/70">
                Chaque détail compte, de la présentation au service, pour une
                expérience inoubliable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Notre Menu
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Découvrez notre menu
            </p>
          </div>

          <MenuGallery />

          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Notre Intérieur
              </h3>
              <p className="text-lg text-foreground/70">
                Découvrez l&apos;atmosphère unique de notre restaurant à travers
                ces images
              </p>
            </div>

            {/* Galerie de slides centrée */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl">
                {/* Images en slides */}
                {interiorImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentInteriorSlide
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay avec texte */}
                    <div className="absolute inset-0 bg-black/30 flex items-end">
                      <div className="w-full p-6 md:p-8 text-white">
                        <h4 className="text-2xl md:text-3xl font-bold mb-2">
                          {image.title}
                        </h4>
                        <p className="text-lg md:text-xl text-white/90">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation flèches */}
              <button
                onClick={() =>
                  setCurrentInteriorSlide((prev) =>
                    prev === 0 ? interiorImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrentInteriorSlide(
                    (prev) => (prev + 1) % interiorImages.length
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                →
              </button>

              {/* Indicateurs de slides */}
              <div className="flex justify-center mt-6 gap-3">
                {interiorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentInteriorSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentInteriorSlide ? "bg-gold" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Avis Google
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-2xl">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index} className="text-gold">
                    {star}
                  </span>
                ))}
              </div>
              <span className="text-xl font-semibold text-foreground ml-2">
                4.8/5
              </span>
              <span className="text-foreground/60">(17 avis)</span>
            </div>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Découvrez ce que nos clients pensent de leur expérience au Sultan
            </p>
          </div>

          {/* Google Maps Integration */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346732.52178714174!2d6.0205775!3d47.2391224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d63b443880ba7%3A0x13621d5df6afd47e!2sSULTAN%E2%80%99S%20KEBAB%20BERLINER!5e0!3m2!1sfr!2sfr!4v1757437803383!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sultan's Kebab Berliner - Localisation Google Maps"
              />
            </div>
          </div>

          {/* Exemples d'avis en attendant le vrai widget */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-bold text-gold">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Marie L.</h4>
                  <div className="flex text-gold text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-foreground/80 italic">
                &ldquo;Excellent kebab ! Les ingrédients sont frais et la
                présentation soignée. Un vrai régal, je recommande vivement
                !&rdquo;
              </p>
              <p className="text-xs text-foreground/50 mt-3">
                Il y a 2 semaines
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-bold text-gold">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ahmed K.</h4>
                  <div className="flex text-gold text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-foreground/80 italic">
                &ldquo;Enfin un kebab de qualité à Besançon ! L&apos;accueil est
                chaleureux et les saveurs authentiques. Bravo !&rdquo;
              </p>
              <p className="text-xs text-foreground/50 mt-3">Il y a 1 mois</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-bold text-gold">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sophie B.</h4>
                  <div className="flex text-gold text-sm">★★★★☆</div>
                </div>
              </div>
              <p className="text-foreground/80 italic">
                &ldquo;Très bonne découverte ! Le cadre est moderne et propre.
                Les portions sont généreuses et savoureuses.&rdquo;
              </p>
              <p className="text-xs text-foreground/50 mt-3">
                Il y a 3 semaines
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Sultan's+Kebab+Berliner/@47.2477,6.0389,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              <span>📍</span>
              Voir tous les avis sur Google
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
                Venez nous découvrir
              </h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <span className="text-gold text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold mb-2">Notre adresse</h3>
                    <p className="text-white/80">
                      16 rue Claude Pouillet
                      <br />
                      25000 Besançon
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gold text-2xl">🕐</span>
                  <div>
                    <h3 className="font-semibold mb-2">Horaires</h3>
                    <p className="text-white/80">
                      Lundi - Jeudi : 11h30 - 14h30 / 17h - 23h
                      <br />
                      Vendredi - Samedi : 11h - 23h
                      <br />
                      Dimanche : 17h - 23h
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gold text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold mb-2">Réservation</h3>
                    <p className="text-white/80">
                      03 81 53 35 85
                      <br />
                      keb4625@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={links.reserver}
                  className="gold-gradient text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-block text-center"
                >
                  Réserver maintenant
                </a>
                <DeliveryDropdown variant="contact" />
              </div>
            </div>

            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/IMG_9387.JPG"
                alt="Le Sultan Besançon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/90 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image
                src="/sultan-logo.JPG"
                alt="Sultan Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <div className="text-2xl font-bold text-gradient">Le Sultan</div>
            </div>
            <p className="text-white/70 mb-4">
              L&apos;art du kebab réinventé • Besançon
            </p>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-gold transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
