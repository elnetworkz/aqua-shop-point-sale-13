
import { Product, Category } from '@/types/pos';

export const categories: Category[] = [
  { id: 'drinks', name: 'เครื่องดื่ม', icon: '🥤' },
  { id: 'food', name: 'อาหาร', icon: '🍽️' },
  { id: 'desserts', name: 'ขนม', icon: '🍰' },
];

export const products: Product[] = [
  // เครื่องดื่ม
  { id: '1', name: 'กาแฟอเมริกาโน่', price: 45, category: 'เครื่องดื่ม', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop', inStock: true },
  { id: '2', name: 'คาปูชิโน่', price: 55, category: 'เครื่องดื่ม', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop', inStock: true },
  { id: '3', name: 'ลาเต้', price: 60, category: 'เครื่องดื่ม', image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=400&fit=crop', inStock: true },
  { id: '4', name: 'ชาเขียวเย็น', price: 40, category: 'เครื่องดื่ม', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop', inStock: true },
  { id: '5', name: 'น้ำส้มคั้นสด', price: 35, category: 'เครื่องดื่ม', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop', inStock: true },
  { id: '6', name: 'โซดาเลมอน', price: 25, category: 'เครื่องดื่ม', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=400&fit=crop', inStock: false },
  
  // อาหาร
  { id: '7', name: 'แซนด์วิชไก่ย่าง', price: 120, category: 'อาหาร', image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=400&fit=crop', inStock: true },
  { id: '8', name: 'สลัดซีซาร์', price: 150, category: 'อาหาร', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop', inStock: true },
  { id: '9', name: 'พาสต้าคาโบนาร่า', price: 180, category: 'อาหาร', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=400&fit=crop', inStock: true },
  { id: '10', name: 'ข้าวผัดกุ้ง', price: 85, category: 'อาหาร', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop', inStock: true },
  { id: '11', name: 'ซุปมันฝรั่ง', price: 65, category: 'อาหาร', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop', inStock: true },
  { id: '12', name: 'ผัดไทยกุ้งสด', price: 95, category: 'อาหาร', image: 'https://images.unsplash.com/photo-1559314809-0f31657faf33?w=400&h=400&fit=crop', inStock: true },
  
  // ขนม
  { id: '13', name: 'เค้กช็อกโกแลต', price: 80, category: 'ขนม', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', inStock: true },
  { id: '14', name: 'ครัวซองต์', price: 45, category: 'ขนม', image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=400&h=400&fit=crop', inStock: true },
  { id: '15', name: 'มาการองกล่อง', price: 120, category: 'ขนม', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop', inStock: true },
  { id: '16', name: 'คุกกี้ช็อกชิป', price: 35, category: 'ขนม', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop', inStock: true },
  { id: '17', name: 'ไอศกรีมวานิลลา', price: 50, category: 'ขนม', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop', inStock: true },
  { id: '18', name: 'เค้กชีส', price: 90, category: 'ขนม', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop', inStock: false },
];
