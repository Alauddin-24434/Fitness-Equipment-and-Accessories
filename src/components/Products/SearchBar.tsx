
// Define the TypeScript types for props
type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
};

// Functional component SearchBar using TypeScript
const SearchBar = ({ value, onChange }:SearchBarProps) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search products..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border p-2 w-full"
            />
        </div>
    );
};

export default SearchBar;
