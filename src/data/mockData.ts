
import { Product, Category } from '@/types/pos';

export const categories: Category[] = [
  { id: 'drinks', name: 'เครื่องดื่ม', icon: '🥤' },
  { id: 'food', name: 'อาหาร', icon: '🍽️' },
  { id: 'desserts', name: 'ขนม', icon: '🍰' },
];

export const products: Product[] = [
  // เครื่องดื่ม
  { id: '1', name: 'กาแฟอเมริกาโน่', price: 45, category: 'เครื่องดื่ม', inStock: true },
  { id: '2', name: 'คาปูชิโน่', price: 55, category: 'เครื่องดื่ม', inStock: true },
  { id: '3', name: 'ลาเต้', price: 60, category: 'เครื่องดื่ม', inStock: true },
  { id: '4', name: 'ชาเขียวเย็น', price: 40, category: 'เครื่องดื่ม', inStock: true },
  { id: '5', name: 'น้ำส้มคั้นสด', price: 35, category: 'เครื่องดื่ม', inStock: true },
  { id: '6', name: 'โซดาเลมอน', price: 25, category: 'เครื่องดื่ม', inStock: false },
  
  // อาหาร
  { id: '7', name: 'แซนด์วิชไก่ย่าง', price: 120, category: 'อาหาร', inStock: true },
  { id: '8', name: 'สลัดซีซาร์', price: 150, category: 'อาหาร', inStock: true },
  { id: '9', name: 'พาสต้าคาโบนาร่า', price: 180, category: 'อาหาร', inStock: true },
  { id: '10', name: 'ข้าวผัดกุ้ง', price: 85, category: 'อาหาร', inStock: true },
  { id: '11', name: 'ซุปมันฝรั่ง', price: 65, category: 'อาหาร', inStock: true },
  { id: '12', name: 'ผัดไทยกุ้งสด', price: 95, category: 'อาหาร', inStock: true },
  
  // ขนม
  { id: '13', name: 'เค้กช็อกโกแลต', price: 80, category: 'ขนม', inStock: true },
  { id: '14', name: 'ครัวซองต์', price: 45, category: 'ขนม', inStock: true },
  { id: '15', name: 'มาการองกล่อง', price: 120, category: 'ขนม', inStock: true },
  { id: '16', name: 'คุกกี้ช็อกชิป', price: 35, category: 'ขนม', inStock: true },
  { id: '17', name: 'ไอศกรีมวานิลลา', price: 50, category: 'ขนม', inStock: true },
  { id: '18', name: 'เค้กชีส', price: 90, category: 'ขนม', inStock: false },
];
