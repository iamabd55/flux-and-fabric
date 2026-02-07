import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-[#0f1411] pt-24 pb-12">
      <div className="max-w-360 mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="size-6">
                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              </div>
              <span className="font-black text-xl uppercase tracking-tighter">Flux-and-Fabric</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Curated fashion for the conscious consumer. Quality materials, timeless designs.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white mb-8">Shop</h4>
            <ul className="flex flex-col gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
              <li><a className="hover:text-primary transition-colors" href="#">New Arrivals</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Best Sellers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Men</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Women</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white mb-8">Support</h4>
            <ul className="flex flex-col gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Shipping Info</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Returns</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white mb-6">Stay in the loop</h4>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                className="w-full px-4 py-3 bg-gray-50 border-none text-xs focus:ring-1 focus:ring-primary/40 text-[#111318] tracking-widest" 
                placeholder="Your Email Address" 
                type="email"
              />
              <button 
                className="w-full py-3 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity" 
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <p>© 2026 Flux-and-Fabric. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
            <a className="hover:text-primary" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;