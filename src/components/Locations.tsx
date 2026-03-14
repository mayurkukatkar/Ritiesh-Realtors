interface Distance {
  icon: string;
  label: string;
  distance: string;
}

interface Location {
  id: string;
  title: string;
  address: string;
  mapSrc: string;
  distances: Distance[];
  tags: string[];
  gallery: { src: string; label: string }[];
  reverseMap?: boolean;
}

export default function Locations() {
  const locations = [
    {
      id: "nimba",
      title: "Vijayalakshmi Nagari",
      address: "Mouza Nimbha, Khasra No. 20A, P.H. No. 36, Nagpur",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3549.092716204703!2d79.1448494752571!3d21.047155380606824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1772887083042!5m2!1sen!2sin",
      distances: [
        { icon: "fa-road", label: "Wardha Road", distance: "2km" },
        { icon: "fa-plane", label: "Airport", distance: "15km" },
        { icon: "fa-hospital", label: "Hospital", distance: "4km" },
        { icon: "fa-shopping-cart", label: "Mall", distance: "6km" }
      ],
      tags: ["NA Sanctioned", "Ready Possession", "12m & 9m Roads"],
      gallery: [
        { src: "https://i.ibb.co/Rp7BzC56/6.jpg", label: "Site Overview" },
        { src: "https://i.ibb.co/fVrTNFBf/Whats-App-Image-2026-03-07-at-11-20-02-AM.jpg", label: "Site Board" },
        { src: "https://i.ibb.co/8LVK8FVK/2.jpg", label: "Road Development" },
        { src: "https://i.ibb.co/spsfyP6d/Whats-App-Image-2026-03-07-at-11-20-01-AM.jpg", label: "Plot Layout" },
        { src: "https://i.ibb.co/zhy9VH9W/Whats-App-Image-2026-03-07-at-11-20-00-AM.jpg", label: "Wide View" },
        { src: "https://i.ibb.co/BVkcBrXS/1.jpg", label: "Plot Markers" }
      ]
    },
    {
      id: "temasna",
      title: "Sai Samruddhi",
      address: "Temasna, Nagpur, Maharashtra",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3548.2818111016218!2d79.21537677525808!3d21.0811488805812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA0JzUyLjEiTiA3OcKwMTMnMDQuNiJF!5e1!3m2!1sen!2sin!4v1772887920565!5m2!1sen!2sin",
      distances: [
        { icon: "fa-road", label: "Main Road", distance: "1km" },
        { icon: "fa-city", label: "City Center", distance: "12km" },
        { icon: "fa-store", label: "Market", distance: "2km" },
        { icon: "fa-train", label: "Railway", distance: "10km" }
      ],
      tags: ["Immediate Possession", "Gated Community", "36 Month EMI"],
      gallery: [
        { src: "https://i.ibb.co/XkWXmmXZ/4.jpg", label: "Sai Samruddhi Overview" },
        { src: "https://i.ibb.co/399H2zVw/Whats-App-Image-2026-03-07-at-12-31-18-PM.jpg", label: "Main view" },
        { src: "https://i.ibb.co/zH66DFZy/2.jpg", label: "Site" },
        { src: "https://i.ibb.co/23TrQZBw/1.jpg", label: "Entrance" }
      ],
      reverseMap: true
    },
    {
      id: "pandharkawada",
      title: "Pandharkawada",
      address: "Pandharkawada, Yavatmal District, Maharashtra",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.3456789012345!2d77.50567890123456!3d20.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1234567890abc%3A0x1234567890abcdef!2sPandharkawada%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
      distances: [
        { icon: "fa-road", label: "Main Road", distance: "500m" },
        { icon: "fa-hospital", label: "Hospital", distance: "2km" },
        { icon: "fa-school", label: "School", distance: "1km" },
        { icon: "fa-shopping-cart", label: "Market", distance: "1.5km" }
      ],
      tags: ["NA Sanctioned", "Ready Possession", "NMRDA Approved"],
      gallery: [
        { src: "https://i.ibb.co/jk0dmx39/1.jpg", label: "Site Overview" },
        { src: "https://i.ibb.co/9mj4z47t/2.jpg", label: "Road Development" },
        { src: "https://i.ibb.co/Z6QB3XKM/3.jpg", label: "Plot Layout" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-deep-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {locations.map((loc) => (
          <div key={loc.id} className="mb-20 reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-yellow-500/20"></div>
              <h3 className="text-3xl font-serif font-bold text-center">
                {loc.title.split(' ').map((word, i) => 
                  i > 0 ? <span key={i} className="gold-gradient-text"> {word}</span> : word
                )}
              </h3>
              <div className="h-px flex-1 bg-yellow-500/20"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {loc.reverseMap ? (
                <>
                  <div className="order-2 lg:order-1 map-container h-[400px]">
                    <iframe src={loc.mapSrc} allowFullScreen={false} loading="lazy" className="w-full h-full rounded-2xl border-0"></iframe>
                  </div>
                  <div className="order-1 lg:order-2 space-y-6">
                    <LocationInfo loc={loc} />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-6">
                    <LocationInfo loc={loc} />
                  </div>
                  <div className="map-container h-[400px]">
                    <iframe src={loc.mapSrc} allowFullScreen={false} loading="lazy" className="w-full h-full rounded-2xl border-0"></iframe>
                  </div>
                </>
              )}
            </div>

            {/* Gallery */}
            <div className={loc.gallery.length > 4 ? "gallery-grid" : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"}>
              {loc.gallery.map((img, idx) => (
                <div key={idx} className={`${loc.gallery.length > 4 ? 'gallery-item' : 'h-[300px]'} rounded-2xl overflow-hidden relative group cursor-pointer`}>
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover image-hover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-semibold">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LocationInfo({ loc }: { loc: Location }) {
  return (
    <>
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fas fa-map-marker-alt text-yellow-400 text-xl"></i>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Location</h4>
            <p className="text-gray-300">{loc.address}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {loc.distances.map((dist: Distance, i: number) => (
          <div key={i} className="glass-card p-4 rounded-xl text-center hover:bg-yellow-500/5 transition-all">
            <i className={`fas ${dist.icon} text-yellow-400 text-2xl mb-2`}></i>
            <p className="text-sm text-gray-300">{dist.label}: {dist.distance}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {loc.tags.map((tag: string, i: number) => (
          <span key={i} className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm">
            <i className="fas fa-check mr-2"></i>{tag}
          </span>
        ))}
      </div>
    </>
  );
}
