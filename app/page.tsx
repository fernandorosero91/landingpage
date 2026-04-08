import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Rich Chocolate Truffle Truffle Cake",
      price: "₹500",
      rating: 4.5,
      reviews: 102,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop"
    },
    {
      name: "Choco Chip Truffle Cake Cake",
      price: "₹599",
      rating: 4.8,
      reviews: 85,
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop"
    },
    {
      name: "Tropical Fruit N Almond Cake Cake",
      price: "₹699",
      rating: 4.6,
      reviews: 64,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop"
    },
    {
      name: "Rich Butterscotch Crunch Carib Cake",
      price: "₹699",
      rating: 4.7,
      reviews: 93,
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#8B1C1C]" style={{fontFamily: "'Playfair Display', serif"}}>Dakingo</h1>
            
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-[#8B1C1C]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8B1C1C] text-white w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-[#666666]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Login/Signup</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#666666]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 border-t pt-4">
            <div className="flex items-center gap-8 text-sm">
              <a href="#" className="text-[#8B1C1C] font-medium hover:text-[#C0392B]">Cakes</a>
              <a href="#" className="text-[#666666] hover:text-[#8B1C1C]">Theme Cakes</a>
              <a href="#" className="text-[#666666] hover:text-[#8B1C1C]">Desserts</a>
              <a href="#" className="text-[#666666] hover:text-[#8B1C1C]">Birthday</a>
              <a href="#" className="text-[#666666] hover:text-[#8B1C1C]">Hampers</a>
              <a href="#" className="text-[#666666] hover:text-[#8B1C1C]">Anniversary</a>
              <a href="#" className="text-[#666666] hover:text-[#8B1C1C]">Occasions</a>
            </div>
            <button className="bg-[#8B1C1C] text-white px-6 py-2 rounded-full font-medium hover:bg-[#C0392B] transition-colors">
              ORDER NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-[#8B1C1C] rounded-3xl p-12 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-10 left-20 w-32 h-32 bg-white opacity-[0.08] rounded-full"></div>
          <div className="absolute top-40 right-40 w-24 h-24 bg-white opacity-[0.08] rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white opacity-[0.08] rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-20 h-20 bg-white opacity-[0.08] rounded-full"></div>

          <div className="relative flex items-center justify-between">
            {/* Left - Main cake image */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop" 
                alt="Chocolate cake with berries"
                width={256}
                height={256}
                priority
                className="object-cover w-full h-full"
              />
            </div>

            {/* Center - Text content */}
            <div className="flex-1 text-center px-12">
              <div className="inline-block bg-[#C0392B] text-white text-xs px-3 py-1 rounded-full mb-4">
                Special Offer!
              </div>
              <h2 className="text-5xl font-bold text-white mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
                DECADENT<br/>CHOCOLATE<br/>BLISS!
              </h2>
              <p className="text-white text-xl mb-6">Satisfy Your Sweetest Cravings</p>
              <button className="bg-[#6B1515] text-white px-8 py-3 rounded-full font-bold border-2 border-white hover:bg-[#5A1212] transition-colors">
                SAVE 20%
              </button>
            </div>

            {/* Right - Small images */}
            <div className="flex flex-col gap-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&h=300&fit=crop" 
                  alt="Lava cake"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop" 
                  alt="Chocolate brownie"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <div className="flex items-start justify-between">
            {/* Left side */}
            <div>
              <h2 className="text-4xl font-bold text-[#8B1C1C] mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Menu</h2>
              <p className="text-[#666666] text-lg mb-6">What will you wish for?</p>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎂</span>
                </div>
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🍰</span>
                </div>
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧁</span>
                </div>
              </div>
            </div>

            {/* Right side - Category cards */}
            <div className="flex gap-6">
              {['CLASSIC', 'GOURMET', 'DESSERTS', 'COOKIES'].map((category) => (
                <div key={category} className="bg-white border border-gray-200 rounded-2xl p-6 w-40 text-center shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 bg-[#FAF3E0] rounded-full flex items-center justify-center">
                    <span className="text-3xl">🍰</span>
                  </div>
                  <p className="text-[#8B1C1C] font-semibold text-sm">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#8B1C1C] mb-8" style={{fontFamily: "'Playfair Display', serif"}}>
          Bestsellers from Across the Country
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image 
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-[#C0392B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <h3 className="font-semibold text-[#222222] mb-2 text-sm">{product.name}</h3>
              <p className="text-[#8B1C1C] font-bold text-lg mb-2">{product.price}</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#F4B400]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-[#666666]">({product.reviews})</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 text-[#8B1C1C] text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#8B1C1C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#C0392B] transition-colors">
            VIEW ALL
          </button>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-[#8B1C1C] mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Our Promise</h2>
          <p className="text-[#666666] mb-8">There's no secret spell - only honest the work!</p>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Left side - Icons */}
            <div>
              <p className="text-[#8B1C1C] font-semibold mb-6">A glimpse rea secret spell - only hacial world!</p>
              
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 border-2 border-[#8B1C1C] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#8B1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-[#222222]">ON TIME<br/>DELIVERY</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 border-2 border-[#8B1C1C] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#8B1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-[#222222]">5000+<br/>DESIGNS</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 border-2 border-[#8B1C1C] rounded-full flex items-center justify-center">
                    <span className="text-2xl">2</span>
                    <span className="text-xs">-48</span>
                  </div>
                  <p className="text-xs font-semibold text-[#222222]">2-48<br/>ORDERS</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 border-2 border-[#8B1C1C] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#8B1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-[#222222]">BAKED<br/>FRESH</p>
                </div>
              </div>

              {/* Magical Ticket */}
              <div className="bg-[#FAF3E0] rounded-2xl p-6 relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                  <Image src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=150&h=150&fit=crop" alt="ticket" width={80} height={80} className="rounded-lg transform -rotate-12" />
                </div>
                <div className="ml-20">
                  <h3 className="text-xl font-bold text-[#8B1C1C] mb-2" style={{fontFamily: "'Playfair Display', serif"}}>THE MAGICAL TICKET</h3>
                  <p className="text-sm text-[#666666] mb-4">Add 3 reminders in your account.<br/>Win offers worth Rs. 750</p>
                  <button className="bg-[#8B1C1C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#C0392B] transition-colors">
                    UNLOCK NOW
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                      <Image src={`https://i.pravatar.cc/40?img=${i}`} alt="avatar" width={40} height={40} />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#666666]">Follow us on social!</p>
              </div>
            </div>

            {/* Right side - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-48">
                <Image src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=400&fit=crop" alt="cake" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <Image src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop" alt="baker" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 bg-[#8B1C1C] flex items-center justify-center text-white p-6 text-center">
                <div>
                  <p className="font-bold text-lg mb-2">VISIT THE MOST<br/>TRUSTED CAKE<br/>SHOP IN INDIA</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <Image src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop" alt="team" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <Image src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop" alt="baking" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 bg-[#C0392B] flex items-center justify-center text-white p-6 text-center">
                <div>
                  <p className="font-bold text-sm">Chocolate<br/>Indulgence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-[#8B1C1C] rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white" style={{fontFamily: "'Playfair Display', serif"}}>
            Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-5 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#8B1C1C] mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Dakingo</h3>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li><a href="#" className="hover:text-[#8B1C1C]">Our Story</a></li>
                <li><a href="#" className="hover:text-[#8B1C]">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#8B1C1C]">Track Order</a></li>
                <li><a href="#" className="hover:text-[#8B1C1C]">Recalls</a></li>
                <li><a href="#" className="hover:text-[#8B1C1C]">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#222222] mb-4">KNOW US</h4>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li><a href="#" className="hover:text-[#8B1C1C]">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#8B1C1C]">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#222222] mb-4">NEED HELP</h4>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li><a href="#" className="hover:text-[#8B1C1C]">Cancellation Add Refund</a></li>
                <li><a href="#" className="hover:text-[#8B1C1C]">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#222222] mb-4">MORE INFO</h4>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li><a href="#" className="hover:text-[#8B1C1C]">Terms and Policy</a></li>
                <li><a href="#" className="hover:text-[#8B1C1C]">Customer Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#222222] mb-4">MORE INFO</h4>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li><a href="#" className="hover:text-[#8B1C1C]">Coupons & Offers</a></li>
                <li><a href="#" className="hover:text-[#8B1C1C]">Sitemap</a></li>
                <li><a href="#" className="hover:text-[#8B1C1C]">International App</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Enter Email Address" 
                  className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#8B1C1C]"
                />
              </div>
              <button className="bg-[#8B1C1C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#C0392B] transition-colors ml-4">
                SUBSCRIBE
              </button>
              <div className="ml-8 flex items-center gap-2 text-sm text-[#666666]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Why subscribe?</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
