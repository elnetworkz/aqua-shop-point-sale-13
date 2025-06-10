
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/pos';
import { CartItem } from './CartItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface CartProps {
  items: CartItemType[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart, 
  onCheckout 
}) => {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.07; // VAT 7%
  const total = subtotal + tax;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Card className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white border-blue-200">
      <CardHeader className="bg-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          ตระกร้าสินค้า ({itemCount} รายการ)
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-4">
        <div className="flex-1 overflow-y-auto mb-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>ตระกร้าว่าง</p>
              <p className="text-sm">เลือกสินค้าเพื่อเริ่มต้น</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemoveItem}
                />
              ))}
              
              <div className="mt-4">
                <Button
                  variant="outline"
                  onClick={onClearCart}
                  className="w-full border-red-200 text-red-600 hover:bg-red-50"
                >
                  ลบทั้งหมด
                </Button>
              </div>
            </>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="border-t border-blue-200 pt-4">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>ยอดรวม</span>
                <span>฿{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>ภาษี (7%)</span>
                <span>฿{tax.toFixed(2)}</span>
              </div>
              <Separator className="bg-blue-200" />
              <div className="flex justify-between text-lg font-bold text-blue-600">
                <span>ยอดชำระ</span>
                <span>฿{total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              onClick={onCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
            >
              คิดเงิน
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
