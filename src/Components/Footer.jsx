import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h1 className="text-lg font-semibold mb-4">Logo</h1>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="/services" className="hover:underline">Services</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
              <li className="mb-2"><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <ul>
              <li className="mb-2">Phone: 54564854865</li>
              <li className="mb-2">Email: info@company.com</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <address className="not-italic mb-2">
              Near Palani GH<br />
              Palani<br />
              624601
            </address>
          </div>

        </div>

        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
