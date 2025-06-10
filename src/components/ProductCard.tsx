import React from 'react';
import { Product } from '@/types/pos';
import { Card, CardContent } from '@/components/ui/card';
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart
}) => {
  const handleClick = () => {
    if (product.inStock) {
      onAddToCart(product);
    }
  };
  return <Card className={`group hover:shadow-lg transition-all duration-200 bg-card border-blue-100 hover:border-blue-300 ${product.inStock ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`} onClick={handleClick}>
      <CardContent className="px-[12px] py-[12px] my-0">
        <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 overflow-hidden">
          {product.image ? <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-200" /> : <div className="w-full h-full flex items-center justify-center text-4xl text-blue-600">
              {product.category === 'เครื่องดื่ม' && '🥤'}
              {product.category === 'อาหาร' && '🍽️'}
              {product.category === 'ขนม' && '🍰'}
            </div>}
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-1">฿{product.price.toFixed(2)}</p>
        
        {!product.inStock && <p className="text-red-500 text-sm font-medium">สินค้าหมด</p>}
      </CardContent>
    </Card>;
};