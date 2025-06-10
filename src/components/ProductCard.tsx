
import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '@/types/pos';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer bg-card border-blue-100 hover:border-blue-300">
      <CardContent className="p-4">
        <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 overflow-hidden">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl text-blue-600">
              {product.category === 'เครื่องดื่ม' && '🥤'}
              {product.category === 'อาหาร' && '🍽️'}
              {product.category === 'ขนม' && '🍰'}
            </div>
          )}
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-3">฿{product.price.toFixed(2)}</p>
        
        <Button 
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          {product.inStock ? 'เพิ่มลงตระกร้า' : 'สินค้าหมด'}
        </Button>
      </CardContent>
    </Card>
  );
};
