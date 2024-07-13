import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
