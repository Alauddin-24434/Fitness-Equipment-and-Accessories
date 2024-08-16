
import { useState } from 'react';
type TRange={
    min: number;
     max: number;
}
type PRiceRange={
    priceRange:TRange;
    onChange: (min: number, max: number) => void;
}

const PriceRangeFilters = ({ priceRange, onChange }:PRiceRange) => {
    const [minPrice, setMinPrice] = useState(priceRange.min);
    const [maxPrice, setMaxPrice] = useState(priceRange.max);

    const handleApplyFilters = () => {
        onChange(minPrice, maxPrice);
    };

    return (
        <div className="mb-4">
            <h2 className="font-semibold ">Price Range</h2>
            <div className="flex flex-col justify-center  items-center gap-y-2">
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(parseInt(e.target.value))}
                    className="border p-2 mr-2"
                    placeholder="Min"
                />
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="border p-2"
                    placeholder="Max"
                />
            </div>
            <button onClick={handleApplyFilters} className="bg-green-500 text-white py-2 px-4 rounded">
                Apply Filters
            </button>
        </div>
    );
};

export default PriceRangeFilters;
