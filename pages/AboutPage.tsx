export default function AboutPage() {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Causes & Effects
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Understanding the science behind global warming and its impact on our world
          </p>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Causes Global Warming?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
              <p className="text-gray-700">
                Vehicles emit CO₂ and other greenhouse gases, contributing to 29% of total emissions
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Production</h3>
              <p className="text-gray-700">
                Fossil fuel power plants generate electricity but release massive amounts of CO₂
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry</h3>
              <p className="text-gray-700">
                Manufacturing processes release greenhouse gases and pollutants into the atmosphere
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🌲</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deforestation</h3>
              <p className="text-gray-700">
                Cutting down forests reduces Earth's ability to absorb CO₂ from the atmosphere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Effects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Effects Around the World
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🧊</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Melting Polar Ice</h3>
                  <p className="text-gray-700">
                    Arctic ice is melting at an unprecedented rate, threatening polar ecosystems and raising sea levels globally.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔥</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Droughts & Wildfires</h3>
                  <p className="text-gray-700">
                    Rising temperatures create drier conditions, leading to more frequent and intense wildfires and droughts.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌊</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Floods & Storms</h3>
                  <p className="text-gray-700">
                    Warmer oceans fuel more powerful hurricanes and storms, causing devastating floods and coastal damage.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🦋</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Biodiversity Loss</h3>
                  <p className="text-gray-700">
                    Changing climates threaten species worldwide, leading to habitat loss and extinction risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Evidence Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Scientific Evidence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CO₂ Levels</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">420 ppm</div>
              <p className="text-gray-700">
                Current atmospheric CO₂ concentration - the highest in 3 million years
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temperature Rise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">+1.2°C</div>
              <p className="text-gray-700">
                Global average temperature increase since pre-industrial times
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sea Level Rise</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">+20cm</div>
              <p className="text-gray-700">
                Global sea level rise since 1900, accelerating in recent decades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
            "The climate crisis is not a far-off problem; it's happening here and now."
          </blockquote>
          <cite className="text-xl text-green-100">— Barack Obama</cite>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Now that you understand the causes and effects, it's time to take action.
          </p>
          <button 
            onClick={() => document.querySelector('#action')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Take Action Now →
          </button>
        </div>
      </section>
    </div>
  );
}
