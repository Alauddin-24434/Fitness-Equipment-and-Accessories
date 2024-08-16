import React from 'react';

type SortOptionsProps = {
    sortOrder: 'asc' | 'desc';
    onChange: (order: 'asc' | 'desc') => void;
};

const SortOptions: React.FC<SortOptionsProps> = ({ sortOrder, onChange }) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as 'asc' | 'desc');
    };

    return (
        <div className="mb-4">
            <h2 className="font-semibold mb-2">Sort By Price</h2>
            <select value={sortOrder} onChange={handleSortChange} className="border p-2">
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div>
    );
};

export default SortOptions;
