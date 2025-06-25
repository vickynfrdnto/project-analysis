const Hero = () => {
  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Project Analysis Dashboard
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Comprehensive visualization of inventory, sales, and purchasing data across brands and branches
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#brand-analysis"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium glow transition-all duration-300 transform hover:scale-105"
          >
            Explore Analysis
          </a>
          <a
            href="#recommendations"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium glow transition-all duration-300 transform hover:scale-105"
          >
            View Recommendations
          </a>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
      </div>
    </header>
  );
};

export default Hero;