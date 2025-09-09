'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "/IMG_9392.JPG", 
    ];

  // URLs de redirection
  const links = {
    uberEats: "https://www.ubereats.com/fr/store/sultans-kebab-berliner/MFT1hmciQBqcWKYKDloiHg?srsltid=AfmBOopFGZ9i0LEwz4O8Vlzp5D716vGHmCtd53lzyzfIdMcY1141QwBg",
    reserver: "tel:+33381000000", // Numéro de téléphone pour réservation
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const menuItems = [
    {
      name: "Sultan Royal",
      description: "Kebab de bœuf Angus mariné 24h, légumes grillés au charbon, sauce signature à la grenade et sumac",
      price: "16€",
      image: "/IMG_9387.JPG",
      badges: ["Bio", "Halal"]
    },
    {
      name: "L&apos;Ottoman",
      description: "Agneau de Lozère aux épices d'Anatolie, yaourt grec aux herbes fraîches, pain pide artisanal",
      price: "18€",
      image: "/IMG_9388.JPG",
      badges: ["Halal", "Premium"]
    },
    {
      name: "Végé Sultan",
      description: "Falafels maison aux pois chiches bio, houmous de betterave, légumes de saison grillés",
      price: "14€",
      image: "/IMG_9389.JPG",
      badges: ["Végétarien", "Bio"]
    },
    {
      name: "Le Bosphore",
      description: "Poulet fermier aux épices Istanbul, tzatziki traditionnel, salade de roquette au sumac",
      price: "15€",
      image: "/IMG_9390.JPG",
      badges: ["Halal", "Fermier"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-gradient">Le Sultan Berliner</div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#concept" className="text-foreground hover:text-gold transition-colors text-sm lg:text-base">Notre Concept</a>
              <a href="#menu" className="text-foreground hover:text-gold transition-colors text-sm lg:text-base">Menu</a>
              <a href="#contact" className="text-foreground hover:text-gold transition-colors text-sm lg:text-base">Contact</a>
            </div>
            <a 
              href={links.uberEats} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red text-white px-4 sm:px-6 py-2 rounded-full hover:bg-red-dark transition-colors font-medium text-sm sm:text-base inline-block"
            >
              Commander
            </a>
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
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Ambiance Le Sultan ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
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
            Découvrez l&apos;excellence culinaire turque dans un écrin moderne au cœur de Besançon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg sm:max-w-none mx-auto">
            <a href="#menu" className="gold-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-transform shadow-lg inline-block text-center">
               Commander en ligne
            </a>
            <a href={links.reserver} className="border-2 border-gold text-gold bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gold hover:text-white transition-colors inline-block text-center">
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
                  index === currentSlide ? 'bg-gold' : 'bg-white/50'
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Notre Concept</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Une vision culinaire unique qui marie tradition turque ancestrale et innovation gastronomique
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">L&apos;Histoire du Chef</h3>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  Né à Istanbul et formé dans les meilleures cuisines européennes, le Chef Mehmet a révolutionné 
                  l&apos;art du kebab en y apportant sa vision gastronomique.
                </p>
                <p>
                  Après 15 ans d&apos;expérience dans des restaurants étoilés, il décide de sublimer les saveurs 
                  de son enfance avec des techniques modernes et des ingrédients d&apos;exception.
                </p>
                <p>
                  Chaque plat raconte une histoire, chaque bouchée est un voyage entre tradition et modernité.
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
              <h4 className="text-xl font-bold mb-4 text-foreground">Ingrédients Premium</h4>
              <p className="text-foreground/70">
                Viandes de première qualité, légumes bio locaux, épices importées directement de Turquie
              </p>
            </div>
            <div className="text-center p-8 bg-gold/5 rounded-2xl">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Cuisson Innovante</h4>
              <p className="text-foreground/70">
                Four à charbon de bois, grilloir vertical traditionnel, techniques de marinade révolutionnaires
              </p>
            </div>
            <div className="text-center p-8 bg-gold/5 rounded-2xl">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Excellence</h4>
              <p className="text-foreground/70">
                Chaque détail compte, de la présentation au service, pour une expérience inoubliable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Menu Signature</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Nos créations exclusives, élaborées avec passion et des ingrédients d&apos;exception
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold text-white px-3 py-1 rounded-full font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {item.badges.map((badge, badgeIndex) => (
                      <span key={badgeIndex} className="bg-green text-white px-3 py-1 rounded-full text-sm font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-4 text-gold hover:text-gold-dark font-semibold transition-colors">
                    En savoir plus →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Avis Google</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-2xl">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index} className="text-gold">{star}</span>
                ))}
              </div>
              <span className="text-xl font-semibold text-foreground ml-2">4.8/5</span>
              <span className="text-foreground/60">(127 avis)</span>
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
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sultan&apos;s Kebab Berliner - Localisation Google Maps"
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
                &ldquo;Excellent kebab ! Les ingrédients sont frais et la présentation soignée. 
                Un vrai régal, je recommande vivement !&rdquo;
              </p>
              <p className="text-xs text-foreground/50 mt-3">Il y a 2 semaines</p>
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
                &ldquo;Enfin un kebab de qualité à Besançon ! L&apos;accueil est chaleureux 
                et les saveurs authentiques. Bravo !&rdquo;
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
              <p className="text-xs text-foreground/50 mt-3">Il y a 3 semaines</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/maps/place/Sultan&apos;s+Kebab+Berliner/@47.2477,6.0389,17z" 
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

      {/* Ambiance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Notre Ambiance</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Un cadre élégant et chaleureux qui vous transporte au cœur de l&apos;hospitalité turque
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="/IMG_9393.JPG"
                alt="Intérieur restaurant"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="/IMG_9394.JPG"
                alt="Terrasse"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="/IMG_9388.JPG"
                alt="Spécialités culinaires"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="/IMG_9391.JPG"
                alt="Vue d'ensemble"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
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
                      14 rue Claude Pouillet<br />
                      25000 Besançon
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gold text-2xl">🕐</span>
                  <div>
                    <h3 className="font-semibold mb-2">Horaires</h3>
                    <p className="text-white/80">
                      Lundi - Samedi : 11h30 - 14h30 / 18h30 - 22h30<br />
                      Dimanche : 18h30 - 22h30
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gold text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold mb-2">Réservation</h3>
                    <p className="text-white/80">
                      03 81 XX XX XX<br />
                      contact@lesultan-besancon.fr
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href={links.reserver} className="gold-gradient text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-block text-center">
                  Réserver maintenant
                </a>
                <a 
                  href={links.uberEats} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-white transition-colors inline-block text-center"
                >
                  Commander en ligne
                </a>
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
            <div className="text-2xl font-bold text-gradient mb-4">Le Sultan</div>
            <p className="text-white/70 mb-4">L&apos;art du kebab réinventé • Besançon</p>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-gold transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-gold transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
