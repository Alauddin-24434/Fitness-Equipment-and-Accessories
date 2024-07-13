type TProduct = {
    imageUrl: string;
    name: string;
}

const ImageSection = ({ imageUrl, name }: TProduct) => {
    return (
        <div className="flex justify-center items-center my-5 border border-gray-300 rounded-lg overflow-hidden max-w-xs mx-auto shadow-md">
            <img src={imageUrl} alt={name} className="w-full h-auto" />
        </div>
    );
};

export default ImageSection;
