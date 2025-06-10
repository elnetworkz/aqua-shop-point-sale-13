
import React from 'react';
import { Category } from '@/types/pos';
import { Button } from '@/components/ui/button';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto">
      <Button
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
        className={`flex-shrink-0 ${
          activeCategory === 'all' 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'border-blue-200 text-blue-600 hover:bg-blue-50'
        }`}
      >
        ทั้งหมด
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category.id)}
          className={`flex-shrink-0 ${
            activeCategory === category.id 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'border-blue-200 text-blue-600 hover:bg-blue-50'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </Button>
      ))}
    </div>
  );
};
