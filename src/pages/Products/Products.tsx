import React, { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import SearchBar from '../../components/Products/SearchBar';
import CategoryFilters from '../../components/Products/CategoryFilters';
import PriceRangeFilters from '../../components/Products/PriceRangeFilters';
import SortOptions from '../../components/Products/SortOptions';
import ClearFiltersButton from '../../components/Products/ClearFiltersButton';
import ProductCard from '../../components/Products/ProductCard';
import { useGetProductsQuery } from '../../redux/features/product/product';

// Interface for Product object
interface Product {
    _id: string;
    name: string;
    category: string;
    description:string;
    price: number;
    images: string;
    stock:number,
    // Add other properties as needed
}

const Products: React.FC = () => {
    const { data, error, isLoading } = useGetProductsQuery();

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        if (data?.data) {
            let filtered: Product[] = data.data;

            // Filter by search term
            if (searchTerm.trim() !== '') {
                filtered = filtered.filter(item =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            // Filter by selected categories
            if (selectedCategories.length > 0) {
                filtered = filtered.filter(item =>
                    selectedCategories.includes(item.category)
                );
            }

            // Filter by price range
            filtered = filtered.filter(item =>
                item.price >= priceRange.min && item.price <= priceRange.max
            );

            // Sort by price
            filtered.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });

            setFilteredProducts(filtered);
        }
    }, [data, searchTerm, selectedCategories, priceRange, sortOrder]);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
    };

    const handleCategoryChange = (category: string[]) => {
        console.log(handleCategoryChange)
        setSelectedCategories(category);
    };

    const handlePriceRangeChange = (min: number, max: number) => {
        setPriceRange({ min, max });
    };

    const handleSortOrderChange = (order: 'asc' | 'desc') => {
        setSortOrder(order);
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedCategories([]);
        setPriceRange({ min: 0, max: 1000 });
        setSortOrder('asc');
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <Container>
            <div className="py-6 px-4 sm:px-6 lg:px-8">
                <SearchBar value={searchTerm} onChange={handleSearch} />
                <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 mt-6">
                    <div className="sm:col-span-1">
                        <CategoryFilters selectedCategories={selectedCategories} onChange={handleCategoryChange} />
                        <PriceRangeFilters priceRange={priceRange} onChange={handlePriceRangeChange} />
                        <SortOptions sortOrder={sortOrder} onChange={handleSortOrderChange} />
                        <ClearFiltersButton onClear={handleClearFilters} />
                    </div>
                    <div className="sm:col-span-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product._id } {...product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Products;
