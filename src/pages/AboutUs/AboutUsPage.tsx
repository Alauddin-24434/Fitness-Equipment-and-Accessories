
const AboutUsPage = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', bio: 'John has over 20 years of experience in the industry.' },
    { name: 'Jane Smith', role: 'CTO', bio: 'Jane is an expert in technology and innovation.' },
    { name: 'Mike Johnson', role: 'COO', bio: 'Mike oversees daily operations and ensures customer satisfaction.' },
  ];

  const testimonials = [
    { customer: 'Emily R.', feedback: 'Excellent products and outstanding customer service!' },
    { customer: 'James T.', feedback: 'A reliable company that always delivers on time.' },
    { customer: 'Sarah K.', feedback: 'High-quality products at competitive prices. Highly recommend!' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">About Us</h1>
      
      {/* Company Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
        <p className="text-gray-700 mb-4">
          Our company has a rich history of providing top-notch products and services to our customers. Our mission is to innovate and lead the industry, while our vision is to make a positive impact on the community and environment.
        </p>
      </section>
      
      {/* Team Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
              <p className="text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Customer Testimonials */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="p-4 border-l-4 border-indigo-600 bg-gray-100 rounded-md">
              <p className="text-gray-700 mb-2">&ldquo;{testimonial.feedback}&rdquo;</p>
              <cite className="text-gray-600">- {testimonial.customer}</cite>
            </blockquote>
          ))}
        </div>
      </section>
      
      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-2">We'd love to hear from you! Feel free to reach out with any questions or feedback.</p>
        <p className="text-gray-700">
          <strong>Email:</strong> contact@ourcompany.com
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
