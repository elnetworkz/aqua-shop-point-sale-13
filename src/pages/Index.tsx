import React, { useState } from 'react';
import { Product, CartItem as CartItemType, Category } from '@/types/pos';
import { ProductCard } from '@/components/ProductCard';
import { Cart } from '@/components/Cart';
import { CategoryTabs } from '@/components/CategoryTabs';
import { products, categories } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';
const Index = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const filteredProducts = activeCategory === 'all' ? products : products.filter(product => {
    const category = categories.find(cat => cat.id === activeCategory);
    return category && product.category === category.name;
  });
  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.product.id === product.id ? {
        ...item,
        quantity: item.quantity + 1
      } : item));
    } else {
      setCartItems([...cartItems, {
        product,
        quantity: 1
      }]);
    }
    toast({
      title: "เพิ่มสินค้าแล้ว",
      description: `${product.name} ถูกเพิ่มลงในตระกร้า`,
      duration: 2000
    });
  };
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(cartItems.map(item => item.product.id === productId ? {
      ...item,
      quantity
    } : item));
  };
  const removeFromCart = (productId: string) => {
    const item = cartItems.find(item => item.product.id === productId);
    setCartItems(cartItems.filter(item => item.product.id !== productId));
    if (item) {
      toast({
        title: "ลบสินค้าแล้ว",
        description: `${item.product.name} ถูกลบออกจากตระกร้า`,
        duration: 2000
      });
    }
  };
  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "ลบตระกร้าแล้ว",
      description: "สินค้าทั้งหมดถูกลบออกจากตระกร้า",
      duration: 2000
    });
  };
  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const tax = total * 0.07;
    const finalTotal = total + tax;
    toast({
      title: "ชำระเงินสำเร็จ",
      description: `ยอดชำระ ฿${finalTotal.toFixed(2)} ขอบคุณค่ะ!`,
      duration: 3000
    });

    // In a real app, this would process payment and print receipt
    setCartItems([]);
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-3">
          <h1 className="text-xl font-bold">Nawa Cafe </h1>
          
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
          {/* Products Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-blue-100 p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">สินค้า</h2>
              <CategoryTabs categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto max-h-[calc(100vh-280px)]">
              {filteredProducts.map(product => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <Cart items={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} onClearCart={clearCart} onCheckout={handleCheckout} />
          </div>
        </div>
      </div>
    </div>;
};
export default Index;