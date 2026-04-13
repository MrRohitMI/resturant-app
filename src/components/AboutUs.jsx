const AboutUs = () => {

  const features = [
  { icon: "🔍", title: "Smart Search", desc: "Find restaurants quickly" },
  { icon: "🍔", title: "Explore Food", desc: "Discover trending places" },
  { icon: "⚡", title: "Fast UI", desc: "Optimized performance" },
  { icon: "📱", title: "Responsive", desc: "Works on all devices" },
];

const techStack = ["React", "Tailwind", "API", "Hooks", "Performance"];
  return (
    <div className="flex-1 overflow-auto bg-gray-50 px-4 md:px-10 py-10">
      
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Discover Great Food Around You
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Our platform helps you explore top restaurants, view menus, and enjoy seamless food discovery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default AboutUs;