
import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/pos';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const total = item.product.price * item.quantity;

  return (
    <Card className="mb-3 border-blue-100">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium text-gray-800 flex-1">{item.product.name}</h4>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(item.product.id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="h-8 w-8 p-0 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Minus className="w-3 h-3" />
            </Button>
            
            <span className="w-12 text-center font-medium text-gray-800">
              {item.quantity}
            </span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
              className="h-8 w-8 p-0 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-500">฿{item.product.price.toFixed(2)} × {item.quantity}</p>
            <p className="font-semibold text-blue-600">฿{total.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
