

const BenefitsSection = ({ benefits }) => {
  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Benefits of Our Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <img src={benefit.imageUrl} alt={benefit.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
