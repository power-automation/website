import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <ul className="space-y-1 text-blue-300">
              <li>
                <a href="mailto:powerautomation569@gmail.com" className="hover:underline">
                  powerautomation569@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917396823545" className="hover:underline">
                  +91 7396823545
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm space-y-2">
            <div>
              <p className="font-semibold text-white">Hyderabad Office:</p>
              <p>12-98/2/30, Brundavan Colony, BK Kurma Nagar,<br /> Peerzadiguda, Uppal, Hyderabad, Telangana - 500039</p>
            </div>
            <div>
              <p className="font-semibold text-white">Bangalore Office:</p>
              <p>Jayanagar, Bangalore, Karnataka</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
