import React from 'react';

type Category = {
    name: string;
    value: string;
};

type CategoryFiltersProps = {
    selectedCategories: string[];
    onChange: (categories: string[]) => void;
};

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ selectedCategories, onChange }) => {
    const categories: Category[] = [
        { name: 'Strength Training Equipment', value: 'strength' },
        { name: 'Cardio Equipment', value: 'cardio' },
        { name: 'Functional Training', value: 'functional' },
        { name: 'Recovery and Mobility', value: 'recovery' },
        { name: 'Flexibility and Balance', value: 'flexibility' },
        { name: 'Outdoor Fitness Equipment', value: 'outdoor' },
        { name: 'Yoga and Pilates', value: 'yoga_pilates' },
    ];
    const handleCategoryChange = (categoryValue: string) => {
        if (selectedCategories.includes(categoryValue)) {
            onChange(selectedCategories.filter(cat => cat !== categoryValue));
        } else {
            onChange([...selectedCategories, categoryValue]);
        }
    };

    return (
        <div className="mb-4">
            <h2 className="font-semibold mb-2">Categories</h2>
            {categories.map((category, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        id={category.value}
                        checked={selectedCategories.includes(category.value)}
                        onChange={() => handleCategoryChange(category.value)}
                        className="mr-2"
                    />
                    <label htmlFor={category.value}>{category.name}</label>
                </div>
            ))}
        </div>
    );
};

export default CategoryFilters;
