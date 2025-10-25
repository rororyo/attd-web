export default function HomePage() {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Our Planet Is{" "}
            <span className="text-red-600">Heating Up</span>
            <br />
            It's Time to Act
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Global warming isn't a distant problem — it's affecting our weather, food, and future generations right now. Understanding it is the first step to fighting it.
          </p>
          <button 
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More →
          </button>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            The Reality We Face
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rising Temperatures</h3>
              <p className="text-gray-700 text-lg">
                Global temperature has risen <span className="font-bold text-red-600">1.2°C</span> since pre-industrial times
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rising Seas</h3>
              <p className="text-gray-700 text-lg">
                Sea levels are rising <span className="font-bold text-blue-600">3.3 mm per year</span> globally
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🌲</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Forest Loss</h3>
              <p className="text-gray-700 text-lg">
                We lose <span className="font-bold text-green-600">10 million hectares</span> of forest yearly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Every Action Counts
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            The climate crisis affects us all, but together we can make a difference. Start your journey toward climate action today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.querySelector('#action')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              Take Action Now
            </button>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
