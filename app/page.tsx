import Image from "next/image";

export default function Home() {
  const products = [
    { name: "Rich Chocolate Truffle Truffle Cake", price: "₹500", rating: 4.5, reviews: "5k+ Reviews!", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop" },
    { name: "Choco Chip Truffle Cake Cake", price: "₹599", rating: 4.8, reviews: "5k+ Reviews!", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop" },
    { name: "Tropical Fruit N Almond Cake Cake", price: "₹699", rating: 4.6, reviews: "5k+ Reviews!", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop" },
    { name: "Rich Butterscotch Crunch Carib Cake", price: "₹399", rating: 4.7, reviews: "5k+ Reviews!", image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      <nav className="bg-[#FFF5F5] shadow-sm">
        <div className="max-w-7xl mx-auto px-12 py-6">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-5xl font-bold text-[#8B1C1C]" style={{fontFamily: "'Playfair Display', serif"}}>Dakingo</h1>
            <div className="flex-1 max-w-xl mx-16">
              <div className="relative">
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Search" className="w-full pl-14 pr-14 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8B1C1C] bg-white text-gray-600" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8B1C1C] text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#C0392B]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-[#8B1C1C] hover:text-[#C0392B]">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              <span className="text-sm text-[#8B1C1C] font-medium whitespace-nowrap">Login/Signup</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 text-base">
              <a href="#" className="text-[#8B1C1C] font-semibold">Cakes</a>
              <a href="#" className="text-[#8B1C1C]">Theme Cakes</a>
              <a href="#" className="text-[#8B1C1C]">Desserts</a>
              <a href="#" className="text-[#8B1C1C]">Birthday</a>
              <a href="#" className="text-[#8B1C1C]">Hampers</a>
              <a href="#" className="text-[#8B1C1C]">Anniversary</a>
              <a href="#" className="text-[#8B1C1C]">Occaions</a>
              <a href="#" className="text-[#8B1C1C]">Occasions</a>
            </div>
            <button className="bg-[#8B1C1C] text-white px-10 py-3 rounded-full font-bold hover:bg-[#C0392B] text-sm">ORDER NOW</button>
          </div>
        </div>
      </nav>

      {/* Hero Banner - Full width */}
      <div className="bg-linear-to-br from-[#B85C5C] via-[#A94442] to-[#8B1C1C] px-20 pt-16 pb-32 relative overflow-hidden">
        <div className="absolute top-20 left-32 w-48 h-48 bg-[#D17373] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-40 h-40 bg-[#D17373] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-56 h-56 bg-[#D17373] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 bg-[#D17373] opacity-20 rounded-full blur-3xl"></div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between gap-16">
            <div className="w-80 h-80 rounded-full overflow-hidden border-12 border-white shadow-2xl shrink-0">
              <Image src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop" alt="Chocolate cake" width={320} height={320} priority className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-7xl font-black text-white mb-5 leading-[1.1]" style={{fontFamily: "'Playfair Display', serif"}}>DECADENT<br/>CHOCOLATE<br/>BLISS!</h2>
              <p className="text-white text-2xl mb-8 font-light">Satify Your Sweet Cravings</p>
              <div className="inline-block">
                <div className="bg-[#8B1C1C] text-white text-sm px-5 py-2 rounded-full mb-4 font-semibold">Special Offer!</div>
                <br/>
                <button className="bg-[#6B1515] text-white px-12 py-4 rounded-full font-black border-4 border-white hover:bg-[#5A1212] text-xl shadow-2xl">SAVE 20%</button>
              </div>
            </div>
            <div className="flex flex-col gap-6 shrink-0">
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&h=300&fit=crop" alt="Lava cake" width={160} height={160} className="object-cover w-full h-full" />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop" alt="Brownie" width={160} height={160} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu + Bestsellers Section - Overlapping white box */}
      <div className="max-w-7xl mx-auto px-3">
        <div className="relative -mt-24 bg-white rounded-[40px] px-16 py-14 shadow-xl">
          <div className="flex items-start justify-between mb-12">
            <div>
              <h2 className="text-6xl font-bold text-[#8B1C1C] mb-3" style={{fontFamily: "'Playfair Display', serif"}}>Menu</h2>
              <p className="text-[#8B1C1C] text-xl mb-10">What will you wish for?</p>
              <div className="flex gap-5">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-16 h-16 bg-white border-2 border-[#8B1C1C] rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#8B1C1C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-8">
              {['CLASSIC', 'DOURMET', 'DESSERTS', 'COOKIES'].map((cat) => (
                <div key={cat} className="bg-white border-2 border-gray-200 rounded-3xl p-10 w-48 text-center shadow-sm">
                  <div className="w-24 h-24 mx-auto mb-5 flex items-center justify-center">
                    <svg className="w-20 h-20 text-[#8B1C1C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                  </div>
                  <p className="text-[#8B1C1C] font-bold text-base">{cat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bestsellers Section */}
          <div>
            <h2 className="text-5xl font-bold text-[#8B1C1C] mb-12" style={{fontFamily: "'Playfair Display', serif"}}>Bestsellers from Across the Country</h2>
            <div className="grid grid-cols-4 gap-8 mb-10">
              {products.map((p, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-md">
                  <div className="relative mb-5">
                    <Image src={p.image} alt={p.name} width={300} height={300} className="w-full h-56 object-cover rounded-2xl" />
                    <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-[#C0392B]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                    </button>
                  </div>
                  <h3 className="font-bold text-[#8B1C1C] mb-3 text-lg">{p.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-[#8B1C1C] font-bold text-2xl">{p.price}</p>
                    <span className="text-xs text-gray-400">★★ {p.reviews}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className={`w-4 h-4 ${j < Math.floor(p.rating) ? 'text-[#F4B400]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                      <span className="text-xs text-[#666666] ml-1">500</span>
                    </div>
                    <button className="w-10 h-10 bg-[#8B1C1C] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="bg-[#8B1C1C] text-white px-16 py-4 rounded-full font-bold hover:bg-[#C0392B] text-base shadow-lg">VIEW ALL</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-8">
        <div className="bg-white rounded-[40px] p-12">
          <h2 className="text-5xl font-bold text-[#8B1C1C] mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Our Promise</h2>
          <p className="text-[#8B1C1C] mb-10">There&apos;s no secret spell - only honest the work!</p>
          
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <p className="text-[#C0392B] font-semibold text-lg mb-8">A glimpse rea secret spell - only hacial world!</p>
              
              {/* Icons Grid */}
              <div className="grid grid-cols-4 gap-6 mb-10">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 border-2 border-[#8B1C1C] rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#8B1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-[#8B1C1C] leading-tight">ON TIME<br/>DELIVERY</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 border-2 border-[#8B1C1C] rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#8B1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-[#8B1C1C] leading-tight">5000+<br/>DESIGNS</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 border-2 border-[#8B1C1C] rounded-full flex items-center justify-center">
                    <span className="text-3xl font-black text-[#8B1C1C]">2<span className="text-lg">-48</span></span>
                  </div>
                  <p className="text-xs font-bold text-[#8B1C1C] leading-tight">2-48<br/>ORDERS</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 border-2 border-[#8B1C1C] rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#8B1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-[#8B1C1C] leading-tight">BAKED<br/>FRESH</p>
                </div>
              </div>

              {/* Magical Ticket */}
              <div className="bg-[#FAF3E0] rounded-3xl p-8 relative mb-10 shadow-sm">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-24">
                  <div className="w-full h-full bg-[#F4B400] rounded-2xl transform -rotate-12 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🎫</span>
                  </div>
                </div>
                <div className="ml-24">
                  <h3 className="text-2xl font-black text-[#8B1C1C] mb-3" style={{fontFamily: "'Playfair Display', serif"}}>THE MAGICAL TICKET</h3>
                  <p className="text-sm text-[#666666] mb-5 leading-relaxed">Add 3 reminders in your account.<br/>Win offers worth Rs. 750</p>
                  <button className="bg-[#8B1C1C] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#C0392B] shadow-md">
                    UNLOCK NOW
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gray-300 border-3 border-white overflow-hidden shadow-md">
                      <Image src={`https://i.pravatar.cc/48?img=${i}`} alt="avatar" width={48} height={48} />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#666666] font-medium">Follow us on social!</p>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-56 shadow-md">
                <Image src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=400&fit=crop" alt="cake" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-56 shadow-md">
                <Image src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop" alt="baker" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-56 bg-linear-to-br from-[#8B1C1C] to-[#6B1515] flex items-center justify-center text-white p-8 text-center shadow-md">
                <div>
                  <p className="font-black text-xl leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>VISIT THE MOST<br/>TRUSTED CAKE<br/>SHOP IN INDIA</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden h-56 shadow-md">
                <Image src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop" alt="team" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-56 shadow-md">
                <Image src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop" alt="baking" width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden h-56 bg-linear-to-br from-[#C0392B] to-[#8B1C1C] flex items-center justify-center text-white p-8 text-center shadow-md">
                <div>
                  <p className="font-black text-lg" style={{fontFamily: "'Playfair Display', serif"}}>Chocolate<br/>Indulgence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-8">
        <div className="bg-[#8B1C1C] rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white" style={{fontFamily: "'Playfair Display', serif"}}>Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration</h2>
        </div>
      </div>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-12 py-12">
          <div className="grid grid-cols-5 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#8B1C1C] mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Dakingo</h3>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div><h4 className="font-semibold text-[#222222] mb-4">KNOW US</h4></div>
            <div><h4 className="font-semibold text-[#222222] mb-4">NEED HELP</h4></div>
            <div><h4 className="font-semibold text-[#222222] mb-4">MORE INFO</h4></div>
            <div><h4 className="font-semibold text-[#222222] mb-4">MORE INFO</h4></div>
          </div>
          <div className="border-t pt-8 flex items-center justify-between">
            <input type="email" placeholder="Enter Email Address" className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-full" />
            <button className="bg-[#8B1C1C] text-white px-8 py-3 rounded-full font-medium ml-4">SUBSCRIBE</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
