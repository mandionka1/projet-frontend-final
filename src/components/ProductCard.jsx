

import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({
  image,
  title,
  price,
  rating,
  discount,
  colors = [""],
  selectedColor,
  onColorChange,
  quantity = 1,
  onQuantityChange,
  onAddToCart
}) => {
  const [localColor, setLocalColor] = useState(selectedColor || (colors[0] || ""));
  const [localQty, setLocalQty] = useState(quantity);

  useEffect(() => {
    if (selectedColor !== undefined) {
      setLocalColor(selectedColor);
    }
  }, [selectedColor]);

  const handleColorClick = (color) => {
    setLocalColor(color);
    if (onColorChange) onColorChange(color);
  };

  const handleQtyChange = (e) => {
    const v = parseInt(e.target.value, 10);
    if (!isNaN(v) && v >= 1) {
      setLocalQty(v);
      if (onQuantityChange) onQuantityChange(v);
    }
  };

  const hasDiscount = discount != null && discount > 0;
  const discountedPrice = hasDiscount
    ? (price * (100 - discount)) / 100
    : price;

  return (
    <div className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 bg-white flex flex-col h-full">
      <div className="w-full h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

          {hasDiscount ? (
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-blue-600 font-bold text-sm">
                {discountedPrice.toFixed(2)} FCFA
              </span>
              <span className="text-gray-500 line-through text-xs">
                {price.toFixed(2)} FCFA
              </span>
              <span className="text-red-500 text-xs">
                {discount}% off
              </span>
            </div>
          ) : (
            <p className="text-blue-600 font-bold text-sm mt-1">
              {price.toFixed(2)} FCFA
            </p>
          )}

          {rating != null && (
            <div className="mt-1 text-sm text-yellow-600">
              ⭐ {rating.toFixed(1)} / 5
            </div>
          )}

          {colors.length > 0 && (
            <div className="mt-2">
              <span className="mr-2 font-medium">Couleur :</span>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorClick(color)}
                    className={`w-4 h-4 rounded-full border-2 ${
                      localColor === color ? "border-gray-900" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <span className="mr-1 font-medium">Quantité :</span>
            <input
              type="number"
              min="1"
              value={localQty}
              onChange={handleQtyChange}
              className="w-16 p-1 border rounded"
            />
          </div>

          <button
            onClick={() => onAddToCart({ color: localColor, quantity: localQty })}
            className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            <FaShoppingCart /> Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


