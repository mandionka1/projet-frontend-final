

import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { CartContext } from "../context/CartContext";

const productsData = [
  { id: 1, image: "/images/montre2.jpg", title: "Montre Rolex", description: "Une montre Rolex est une montre de luxe fabriquée par la maison suisse Rolex", colors: ["#ffffff", "#000000"], price: 40000, rating: 4.5, discount: 20, category: "Montres" },
  { id: 2, image: "/images/carrera.jpg", title: "TAG Heuer Carrera", description: "La TAG Heuer Carrera est une collection emblématique de montres de prestige...", colors: [""], price: 23000, rating: 4.2, discount: 19, category: "Montres" },
  { id: 3, image: "/images/fossil.jpg", title: "Fossil", description: "Une montre Rolex est une montre de luxe fabriquée par la maison suisse Rolex", colors: [""], price: 27500, rating: 4.0, discount: 11, category: "Montres" },
  { id: 4, image: "/images/montre_luxe.jpg", title: "Versatile Haus", Description:"La montre Calypso K5560-2 est strictement réservée à la gent masculine.", colors: [""], price: 11450, rating: 3.8, discount: 5, category: "Montres" },
  { id: 5, image: "/images/bol.jpg", title: "Montre Femme:Bol", Description:"Montre Femme Time Force TF4186L11", colors: [""], price: 16300,rating: 2.5, discount: 5, category: "Montres" },
  { id: 6, image: "/images/free smartwatch.jpg", title: "Free Smartwatch", Description:"une montre connectée Bluetooth 5.0 au format rectangulaire dotée d'un écran Amoled de 1,64", colors: [""], price: 32810,rating: 3.5, discount: 15, category: "Montres" },
  { id: 7, image: "/images/joalia.jpeg", title: "Montre Femme:Joalia", Description:"La Montre Joalia se compose d'un cadran de forme ovale blanc", colors: [""], price: 17700,rating: 6.5, discount: 13, category: "Montres" },
  { id: 8, image: "/images/pntree.png", title: "Montre Femme:Pngtree", Description:" Les descriptions incluent des montres en or, des montres de luxe", colors: [""], price: 15090,rating: 7.5, discount: 3, category: "Montres" },
  { id: 9, image: "/images/jordan.jpg", title: "Nike Air Max", Description:"La Nike Air Max est un modèle de basket créée pour Nike", price: 28150, rating: 4.1, discount: 14, category: "Chaussures"},
  { id: 10, image: "/images/nike air force.jpeg", title: "Nike Air Force", Description:"Une grande performance sportive commence par la semelle extérieure.", price: 25225, rating: 3.9, discount: 7, category: "Chaussures" },
  { id: 11, image: "/images/langlauf schuhbedarf.jpeg", title: "Langlauf Schuhbedarf", Description:"Arbres de chaussures en bois en hêtre de source durable allemand! FSC 100%.", price: 31850, rating: 3.5, discount: 10, category: "Chaussures" },
  { id: 12, image: "/images/tress classet.jpeg", title: "Tress Classe", Description:" leurs semelles extérieures sont solides, et résistent aux frottements jour après jour.", price: 29900, rating: 4.2, discount: 8, category: "Chaussures" },
  { id: 13, image: "/images/art bottines.jpeg", title: "Art Bottines Alfama", Description:" Alfama présente des chaussures et bottines à talon moyen parfaites", price: 29845, rating: 4.6, discount: 12, category: "Chaussures" },
  { id: 14, image: "/images/bagatelles.jpeg", title: "Bagatelles Sandales Plates", Description:"Ces sandales en cuir se distinguent par leur design élégant et leur confort naturel.", price: 10193, rating: 3.8, discount: 5, category: "Chaussures" },
  { id: 15, image: "/images/chaussures-femme.jpg", title: "XXKK Chaussures Femme", Description:"Baskets de sport décontractées et respirantes pour femmes avec une résistance efficace au glissement.", price: 12095, rating: 4.0, discount: 6, category: "Chaussures" },
  { id: 16, image: "/images/ruddogt.jpeg", title: "Ruddog Sandales", Description:"La chaussure est faite de cuir nubuck de haute qualit", price: 15817, rating: 4.3, discount: 9, category: "Chaussures" },
  { id: 17, image: "/images/chanel.jpg", title: "Parfum Chanel", Description:"Un parfum fusant et fruité, composé de notes franches de mandarine soulignées par un accord de muguet éclatant.", price: 41890, rating: 4.7, discount: 15, category: "Parfums" },
  { id: 18, image: "/images/parfum.jpg", title: "Parfum Dior", Description:"Miss Dior Parfum se pare d'un nœud poignard tissé à partir de fils Lurex", price: 33675, rating: 4.4, discount: 13, category: "Parfums" },
  { id: 19, image: "/images/montblanc.jpg", title: "Ultra Blue-Eau de parfum", Description:"Explorer Ultra Blue de Montblanc est un parfum aromatique d'agrumes pour homme.", price: 22500, rating: 4.1, discount: 10, category: "Parfums" },
  { id: 20, image: "/images/hero.jpg", title: "Parfum Royalty", Description:"Royalty est une fragrance qui incarne l'essence même du raffinement et de la féminité.", price: 35000, rating: 4.2, discount: 11, category: "Parfums" },
  { id: 21, image: "/images/bottle.jpg", title: "Parfum Lolame", Description:"Un parfum est une odeur ou plus souvent une composition odorante plus ou moins persistante", price: 14600, rating: 3.9, discount: 6, category: "Parfums" },
  { id: 22, image: "/images/dissey.png", title: "L'eau Dissey Pure Petale", Description:"L'Eau d'Issey Pure de Issey Miyake est un parfum Floral Aquatique pour femme", price: 18500, rating: 4.5, discount: 8, category: "Parfums" },
  { id: 23, image: "/images/jean paul.png", title: "Classique Eau de Parfum", Description:"Classique Eau de Parfum Airlines de Jean Paul Gaultier est un parfum Orientale Floral pour femme.", price: 23000, rating: 4.3, discount: 14, category: "Parfums" },
  { id: 24, image: "/images/kalistal.jpg", title: "Kalista Parfum", Description:"Kalista est la référence en matière de parfums", price: 25400, rating: 4.0, discount: 5, category: "Parfums" },
  { id: 25, image: "/images/fold 4.png", title: "Samsung Galaxy Fold 4", Description:"Le Samsung Galaxy Z Fold4 est un smartphone pliant doté de deux écrans 7,6 pouces et 6,2 pouces..", price: 300000, rating: 4.8, discount: 20, category: "Portables" },
  { id: 26, image: "/images/tecno.jpg", title: "Tecno Spark", Description:"Le SPARK est un smartphone moderne avec un écran FHD+", price: 60000, rating: 4.1, discount: 10, category: "Portables" },
  { id: 27, image: "/images/A14.jpeg", title: "Samsung Galaxy A14", Description:"Le Galaxy A14 combine un processeur octa-core avec une connectivité 4G", price: 155000, rating: 4.5, discount: 18, category: "Portables" },
  { id: 28, image: "/images/galaxy A 12.jpg", title: "Samsung Galaxy A12", Description:"Le Galaxy A12 combine un processeur Octo-Core avec une mémoire vive de 4 Go pour des performances rapides et efficaces.", price: 91500, rating: 4.2, discount: 12, category: "Portables" },
  { id: 29, image: "/images/camon 18.jpg", title: "Tecno Camon 18", Description:"Le CAMON 18 Premier utilise un objectif périscope de 5X et le moteur d'algorithme Galileo de Transsion", price: 120000, rating: 4.3, discount: 15, category: "Portables" },
  { id: 30, image: "/images/iphone 16.jpg", title: "iphone 16 Pro Max", Description:"l'iPhone 16 Pro Max offre des performances exceptionnelles en graphisme et en traitement intensif.", price: 820000, rating: 4.9, discount: 22, category: "Portables" },
  { id: 31, image: "/images/redmi.jpg", title: "Xiaoni Redmi Notre 14", Description:"Le Redmi Note 14 5G est équipé d'un grand écran OLED amélioré de 6,67 pouces", price: 100000,rating: 4.0, discount: 14, category: "Portables" },
  { id: 32, image: "/images/moto-e40.png", title: "Motorola e40", Description:"Le Motorola Moto E40 est un bon portable Android avec processeur de 1.8GHz Octa-core", price: 140000,rating: 4.1, discount: 11, category: "Portables" },
  { id: 33, image: "/images/air gamoch.jpeg", title: "Airpod Gamoch", Description:" Ces écouteurs offrent un design ergonomique pour un confort optimal.", price: 19900,rating: 3.8, discount: 7, category: "Casques" },
  { id: 34, image: "/images/apple .jpeg", title: "Apple Airprod Pro", Description:"Les AirPods Pro sont des écouteurs intra-auriculaires sans fil Bluetooth conçus par Apple", price: 30335,rating: 4.5, discount: 9, category: "Casques" },
  { id: 35, image: "/images/crochet.jpeg", title: "Crochet Auriculaire", Description:"désigne des écouteurs ou oreillettes sans fil dotés d'un crochet qui se place sur l'oreille", price: 21300,rating: 3.7, discount: 5, category: "Casques" },
  { id: 36, image: "/images/airpod-cash.jpg", title: "Airpods Max", Description:"Les AirPods Max sont des casques audio à arceau au design circum-aural Bluetooth sans fil", price: 45000,rating: 4.4, discount: 12, category: "Casques" },
  { id: 37, image: "/images/pro 2.jpeg", title: "Airprod Pro 2", Description:"Les AirPods Pro 2 sont des écouteurs sans fil intra-auriculaires", price: 13800,rating: 3.9, discount: 6, category: "Casques" },
  { id: 38, image: "/images/Pro-6-.jpg", title: "Airpods Pro 6", Description:"Basses supplémentaires hautes performances et effet sonore de qualité compatible avec les iPhones, les téléphones Android…", price: 10000,rating: 3.6, discount: 4,category: "Casques" },
  { id: 39, image: "/images/run mag.jpg", title: "Run Mag Sans-Fil Wireless", Descrition:"MAG WIRELESS CHARGER est la base de rechargement sans fil conçue pour les iPhone...", price: 14000,rating: 3.8, discount: 5, category: "Casques" },
  { id: 40, image: "/images/bleutooth.jpg", title: "Bluetooth", Description:"Le Bluetooth est une technologie sans fil qui utilise les ondes radio UFH...", price: 9000,rating: 3.2, discount: 2, category: "Casques" },
  { id: 41, image: "/images/ordinateur asus.jpg", title: "Asus Vivo Book", Description:"Les ordinateurs Asus Vivobook sont une gamme de PC portables polyvalents...", price: 290000,rating: 4.7, discount: 18, category: "Ordinateurs" },
  { id: 42, image: "/images/macbook.jpeg", title: "MacBook Air", Description:"ordinateur portable ultra-léger et performant, conçu pour la portabilité", price: 400000,rating: 4.8, discount: 25, category: "Ordinateurs" },
  { id: 43, image: "/images/dell pro.jpg", title: "Dell Pro 16 pc16250-16 SSD", Description:"DELL Pro 16 PC16250 Intel Core Ultra 7 255U Ordinateur portable", price: 525000,rating: 4.6, discount: 20, category: "Ordinateurs" },
  { id: 44, image: "/images/dell.jpg", title: "Dell Latitude 5530", Description:"DELL LATITUDE 5530 CORE I7 3éme Genration.16go.SSD256 Go.15.6 Pouces", price: 285000,rating: 4.4, discount: 15,category: "Ordinateurs" },
  { id: 45, image: "/images/elite X2 G4.jpg", title: "Elite X2 G4", Description:"Doté d'une sécurité renforcée, le HP Elite x2 délivre toutes les performances et la polyvalence", price: 200000,rating: 4.3, discount: 12,category: "Ordinateurs" },
  { id: 46, image: "/images/hp elitebook.png", title: "HP Elite Book", Description:"Elitebook HP 850 G8 15,6''- Core i5, 16 Go de Ram et disque SSD de 512 Go", price: 250000,rating: 4.5, discount: 14, category: "Ordinateurs" },
  { id: 47, image: "/images/acer.png", title: "Acer Nitro", Description:"Les ordinateurs Acer Nitro sont des portables gaming conçus pour des performances élevées", price: 500000,rating: 4.7, discount: 18, category: "Ordinateurs" },
  { id: 48, image: "/images/Lenovo.jpg", title: "Lenovo Ideapad G5045", Description :"C'est un portable disposant d'un plasturgie plastique simple et sobre.", price: 175000,rating: 4.2, discount: 10, category: "Ordinateurs" },
 
  // Ajoute les autres produits pour les autres catégories ici
];

const Produits = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleColorChange = (productId, color) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
  };

  const handleQuantityChange = (productId, qty) => {
    setSelectedQuantities(prev => ({
      ...prev,
      [productId]: qty
    }));
  };

  const grouped = productsData.reduce((acc, product) => {
    const cat = product.category || "Autres";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Tous les produits</h1>

      {Object.keys(grouped).map(categoryName => (
        <div key={categoryName} className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-2">{categoryName}</h2>
          <Carousel visibleCount={4}>
            {grouped[categoryName].map(product => {
              const activeColor = selectedColors[product.id] ?? (product.colors?.[0] || "");
              const activeQty = selectedQuantities[product.id] ?? 1;
              return (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  discount={product.discount}
                  colors={product.colors || []}
                  selectedColor={activeColor}
                  quantity={activeQty}
                  onColorChange={color => handleColorChange(product.id, color)}
                  onQuantityChange={qty => handleQuantityChange(product.id, qty)}
                  onAddToCart={({ color, quantity }) =>
                    addToCart({
                      ...product,
                      color,
                      quantity
                    })
                  }
                />
              );
            })}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default Produits;










