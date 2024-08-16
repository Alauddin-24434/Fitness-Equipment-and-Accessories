
type ClearFiltersButtonProps = {
    onClear: () => void;
};

const ClearFiltersButton = ({ onClear }:ClearFiltersButtonProps) => {
    return (
        <div className="mb-4">
            <button onClick={onClear} className="bg-gray-300 text-gray-800 py-2 px-4 rounded">
                Clear Filters
            </button>
        </div>
    );
};

export default ClearFiltersButton;
