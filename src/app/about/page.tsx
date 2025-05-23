import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a young builder's dream to a community of creators
          </p>
        </div>

        {/* Philip's Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
              alt="Philip building with Playmais"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Philip</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At just 11 years old, Philip discovered his passion for construction and creativity through Playmais. 
                What started as a hobby quickly turned into something much bigger.
              </p>
              <p>
                "I love how Playmais lets me build anything I can imagine," says Philip. 
                "From castles to spaceships, every piece is a new adventure waiting to happen."
              </p>
              <p>
                Inspired by his own journey, Philip wanted to share the joy of building with others. 
                That's how our store was born - a place where young builders can find everything they need 
                to bring their imagination to life.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600">
            <p>
              We believe that every child has the potential to be a creator. Our mission is to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Inspire creativity through hands-on building experiences</li>
              <li>Provide high-quality Playmais products that last</li>
              <li>Create a community where young builders can share their creations</li>
              <li>Show the world what amazing things can be built with Playmais</li>
            </ul>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Amazing Creations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=${i}000`}
                  alt={`Playmais creation ${i}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Building Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're a young builder like Philip or a parent looking for creative toys, 
            we welcome you to explore the endless possibilities of Playmais.
          </p>
          <a
            href="/products"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
          >
            Start Building Today
          </a>
        </div>
      </div>
    </div>
  );
} 