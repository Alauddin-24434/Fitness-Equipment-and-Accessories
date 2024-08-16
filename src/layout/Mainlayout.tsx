
import { Link, Outlet } from "react-router-dom";
import HeaderSection from "../components/Header/HeaderSection";

const Mainlayout = () => {
    return (
        <div className="mx-auto max-w-full">
          

            <HeaderSection />
      <div className="min-h-screen">
      <Outlet />
      </div>
            <div >
                 {/* Footer */}
      <footer className="py-8  bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p>Email: contact@ourcompany.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Main Street, City, Country</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400">Facebook</a>
                <a href="#" className="text-blue-500">Twitter</a>
                <a href="#" className="text-pink-400">Instagram</a>
                <a href="#" className="text-blue-600">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><Link to="/" className="text-blue-400">Home</Link></li>
                <li><Link to="/about" className="text-blue-400">About Us</Link></li>
                <li><Link to="/products" className="text-blue-400">Products</Link></li>
                <li><Link to="/contact" className="text-blue-400">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
            </div>
        </div>
    );
};

export default Mainlayout;
