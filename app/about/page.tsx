function ActionPage() {
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
    </div>
  );
}

function StatsCard({ emoji, title, stat, description, color }) {
  const colorClasses = {
    red: 'from-red-50 to-orange-50 border-red-200',
    blue: 'from-blue-50 to-cyan-50 border-blue-200',
    green: 'from-green-50 to-emerald-50 border-green-200'
  };

  return (
    <div className={`group relative bg-gradient-to-br ${colorClasses[color]} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2`}>
      <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform">{emoji}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
      <div className={`text-4xl font-bold text-${color}-600 mb-3 text-center`}>{stat}</div>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
}

function CounterStat({ number, label }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-green-100">{label}</div>
    </div>
  );
}

function CauseCard({ emoji, title, description }) {
  return (
    <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500">
      <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
}

function EffectCard({ emoji, title, description }) {
  return (
    <div className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-5xl transform group-hover:scale-110 transition-transform">{emoji}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function ActionCard({ emoji, title, description, tip, tipColor }) {
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
      <div className={`${tipColorClasses[tipColor]} p-3 rounded-lg`}>
        <p className="text-sm font-medium">💡 Tip: {tip}</p>
      </div>
    </div>
  );
}
