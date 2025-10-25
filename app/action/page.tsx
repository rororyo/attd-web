import Link from "next/link";

export default function Action() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Be the Change
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Take action today to protect our planet for future generations
          </p>
        </div>
      </section>

      {/* Personal Actions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Personal Actions You Can Take
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🌞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Use Renewable Energy</h3>
              <p className="text-gray-700 mb-4">
                Switch to solar panels or choose energy providers that use renewable sources.
              </p>
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  💡 Tip: Start with LED bulbs and energy-efficient appliances
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🚲</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Sustainable Transport</h3>
              <p className="text-gray-700 mb-4">
                Walk, bike, use public transport, or carpool instead of driving alone.
              </p>
              <div className="bg-blue-100 p-3 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  💡 Tip: Consider electric vehicles for longer distances
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🛒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce, Reuse, Recycle</h3>
              <p className="text-gray-700 mb-4">
                Minimize waste by buying less, reusing items, and properly recycling materials.
              </p>
              <div className="bg-purple-100 p-3 rounded-lg">
                <p className="text-sm text-purple-800 font-medium">
                  💡 Tip: Bring reusable bags and water bottles everywhere
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🍃</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eat More Plant-Based</h3>
              <p className="text-gray-700 mb-4">
                Reduce meat consumption and choose locally sourced, organic foods.
              </p>
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  💡 Tip: Try "Meatless Mondays" to start your journey
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🌳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plant Trees</h3>
              <p className="text-gray-700 mb-4">
                Plant trees in your community or support reforestation projects worldwide.
              </p>
              <div className="bg-emerald-100 p-3 rounded-lg">
                <p className="text-sm text-emerald-800 font-medium">
                  💡 Tip: One tree can absorb 22kg of CO₂ per year
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">💧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conserve Water</h3>
              <p className="text-gray-700 mb-4">
                Fix leaks, use water-efficient fixtures, and reduce water waste.
              </p>
              <div className="bg-cyan-100 p-3 rounded-lg">
                <p className="text-sm text-cyan-800 font-medium">
                  💡 Tip: Shorter showers can save 2,700 gallons per year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Get Involved in Your Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🧹</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Join Local Cleanups</h3>
                  <p className="text-gray-700">
                    Participate in beach cleanups, park maintenance, and community environmental projects.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">👥</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Organizations</h3>
                  <p className="text-gray-700">
                    Join local environmental groups, attend meetings, and volunteer for climate initiatives.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">📢</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Petitions</h3>
                  <p className="text-gray-700">
                    Sign petitions, contact your representatives, and advocate for climate-friendly policies.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Educate Others</h3>
                  <p className="text-gray-700">
                    Share knowledge about climate change with friends, family, and your community.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏛️</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Local Government</h3>
                  <p className="text-gray-700">
                    Attend city council meetings and advocate for sustainable policies in your area.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌱</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Gardens</h3>
                  <p className="text-gray-700">
                    Start or join community gardens to promote local food production and green spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Campaigns Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Support Global Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">UN Climate Action</h3>
              <p className="text-gray-700 mb-6">
                Support the United Nations' global climate initiatives and sustainable development goals.
              </p>
              <a 
                href="https://www.un.org/en/climatechange" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🐼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">WWF Climate Projects</h3>
              <p className="text-gray-700 mb-6">
                Join World Wildlife Fund's conservation efforts and climate change mitigation programs.
              </p>
              <a 
                href="https://www.worldwildlife.org/initiatives/climate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Get Involved
              </a>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">✊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fridays for Future</h3>
              <p className="text-gray-700 mb-6">
                Join the global youth movement demanding immediate action on climate change.
              </p>
              <a 
                href="https://fridaysforfuture.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Join Movement
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Together, We Can Cool Our Planet
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Every action counts. Every voice matters. Join millions of people worldwide who are taking action for our planet.
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Make Your Pledge</h3>
            <p className="text-green-100 mb-6">
              Commit to taking at least one climate action this month. Share your pledge to inspire others.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
              Pledge to Act 🌱
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Back to Home
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">
            🌍 Your action today shapes tomorrow's world. Start now.
          </p>
        </div>
      </footer>
    </div>
  );
}