import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-orange-500">
      <div className="container mx-auto ">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="flex flex-col">
            <a href="#" className="text-3xl font-extrabold text-white tracking-tight mb-4">
              Recipe<span className="text-orange-500">Hub</span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your ultimate destination for discovering, sharing, and celebrating the joy of cooking. Taste the world from your kitchen.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.56v-.01c-.88.39-1.83.65-2.83.77a4.92 4.92 0 0 0 2.16-2.72c-.95.56-2 .97-3.12 1.19a4.92 4.92 0 0 0-8.38 4.48A13.95 13.95 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.94 4.83 4.92 4.92 0 0 1-2.22.08 4.92 4.92 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1 10 10 0 0 1-1.18-.07 13.9 13.9 0 0 0 7.55 2.21c9.06 0 14-7.5 14-14v-.64a10.02 10.02 0 0 0 2.46-2.55z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24h11.49V14.7H9.7v-3.61h3.12V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.71-1.8 1.76v2.3h3.61l-.47 3.61h-3.14V24h6.12c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.27.06-2.13.27-2.88.56a5.86 5.86 0 0 0-2.13 1.38 5.86 5.86 0 0 0-1.38 2.13c-.29.75-.5 1.61-.56 2.88C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.13.56 2.88.33.84.78 1.54 1.38 2.13.6.6 1.29 1.05 2.13 1.38.75.29 1.61.5 2.88.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.13-.27 2.88-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.29-.75.5-1.61.56-2.88.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.13-.56-2.88a5.86 5.86 0 0 0-1.38-2.13 5.86 5.86 0 0 0-2.13-1.38c-.75-.29-1.61-.5-2.88-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm3.96-9.1a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> All Recipes</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> Submit a Recipe</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Top Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Top Categories</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> Breakfast & Brunch</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> Lunch Recipes</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> Dinner Ideas</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> Healthy & Vegan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▶</span> Desserts & Sweets</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest recipes and cooking tips directly to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              <button 
                type="button" 
                className="w-full px-4 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-orange-500/20"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} RecipeHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;