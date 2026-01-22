import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      name: "En Forme Flagship",
      address: "123 Fitness Ave, Victoria Island, Lagos",
      phone: "(01) 123-4567",
      hours: "Mon-Sun: 24 Hours",
      image:
        "https://images.unsplash.com/photo-1760019737803-1f862ba9faf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBleHRlcmlvciUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODg3MDE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "En Forme Studio",
      address: "45 Lekki Phase 1, Lagos",
      phone: "(01) 987-6543",
      hours: "Mon-Sat: 6am - 10pm",
      image:
        "https://images.unsplash.com/photo-1761971976003-dc348a4f2fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIweW9nYSUyMHJvb218ZW58MXx8fHwxNzY4ODcwMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "En Forme Performance Center",
      address: "78 Ikeja GRA, Lagos",
      phone: "(01) 456-7890",
      hours: "Mon-Sun: 5am - 11pm",
      image:
        "https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudCUyMG1vZGVybnxlbnwxfHx8fDE3Njg4NzAxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-[#1a3a52] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl mb-4">Our Locations</h1>
          <p className="text-xl text-[#c9a961] max-w-2xl">
            Find an En Forme gym near you and start your journey today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4">
                  {location.name}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#c9a961] shrink-0" size={20} />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#c9a961] shrink-0" size={20} />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-[#c9a961] shrink-0" size={20} />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
