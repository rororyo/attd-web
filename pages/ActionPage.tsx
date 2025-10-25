export default function ActionPage() {
  return (
    <div id="action" className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Be the Change
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Take action today to protect our planet for future generations
          </p>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Personal Actions You Can Take
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Small steps, big impact</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActionCard 
              emoji="🌞" 
              title="Use Renewable Energy" 
              description="Switch to solar panels or choose renewable energy providers"
              tip="Start with LED bulbs and energy-efficient appliances"
              tipColor="green"
            />
            <ActionCard 
              emoji="🚲" 
              title="Sustainable Transport" 
              description="Walk, bike, use public transport, or carpool"
              tip="Consider electric vehicles for longer distances"
              tipColor="blue"
            />
            <ActionCard 
              emoji="🛒" 
              title="Reduce, Reuse, Recycle" 
              description="Minimize waste by buying less and recycling properly"
              tip="Bring reusable bags and water bottles"
              tipColor="purple"
            />
            <ActionCard 
              emoji="🍃" 
              title="Eat Plant-Based" 
              description="Reduce meat consumption and choose local, organic foods"
              tip="Try 'Meatless Mondays' to start"
              tipColor="green"
            />
            <ActionCard 
              emoji="🌳" 
              title="Plant Trees" 
              description="Plant trees or support reforestation projects"
              tip="One tree absorbs 22kg of CO₂ per year"
              tipColor="emerald"
            />
            <ActionCard 
              emoji="💧" 
              title="Conserve Water" 
              description="Fix leaks and use water-efficient fixtures"
              tip="Shorter showers save 2,700 gallons yearly"
              tipColor="cyan"
            />
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

      {/* Pledge Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Together, We Can Cool Our Planet
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Every action counts. Every voice matters. Join millions taking action worldwide.
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Make Your Pledge</h3>
            <p className="text-green-100 mb-6">
              Commit to taking at least one climate action this month
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Pledge to Act 🌱
            </button>
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

function ActionCard({ emoji, title, description, tip, tipColor }: {
  emoji: string;
  title: string;
  description: string;
  tip: string;
  tipColor: string;
}) {
  const tipColorClasses = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    purple: 'bg-purple-100 text-purple-800',
    emerald: 'bg-emerald-100 text-emerald-800',
    cyan: 'bg-cyan-100 text-cyan-800'
  };

  return (
    <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500">
      <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className={`${tipColorClasses[tipColor as keyof typeof tipColorClasses]} p-3 rounded-lg`}>
        <p className="text-sm font-medium">💡 Tip: {tip}</p>
      </div>
    </div>
  );
}
