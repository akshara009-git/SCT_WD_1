import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? "bg-slate-950 text-white min-h-screen transition-all duration-500"
          : "bg-white text-black min-h-screen transition-all duration-500"
      }
    >
      {/* Navbar */}
      <nav
        className={
          darkMode
            ? "fixed top-0 w-full bg-slate-900/80 backdrop-blur-md shadow-lg z-50"
            : "fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50"
        }
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
            AKSHARA SURINENI
          </h1>

          <div className="flex gap-4 items-center">

            <ul className="hidden md:flex gap-8 text-lg">

              <a href="#home">
                <li className="hover:text-cyan-400 cursor-pointer transition">
                  Home
                </li>
              </a>

              <a href="#about">
                <li className="hover:text-cyan-400 cursor-pointer transition">
                  About
                </li>
              </a>

              <a href="#skills">
                <li className="hover:text-cyan-400 cursor-pointer transition">
                  Skills
                </li>
              </a>

              <a href="#contact">
                <li className="hover:text-cyan-400 cursor-pointer transition">
                  Contact
                </li>
              </a>

            </ul>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-400 transition"
            >
              {darkMode ? "Light" : "Dark"}
            </button>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">

        <h2 className="text-cyan-400 text-xl mb-4 tracking-widest">
          WEB DEVELOPER
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi, I'm <span className="text-cyan-400">Akshara</span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-400">
          Passionate frontend developer creating beautiful,
          responsive, and interactive web experiences using
          React and Tailwind CSS.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

        <a href="#contact">
        <button className="bg-cyan-500 px-8 py-4 rounded-xl text-lg hover:scale-110 hover:bg-cyan-400 transition duration-300 shadow-lg">
          Contact Me
        </button>
        </a>

        <a href="#skills">
        <button className="border border-cyan-400 px-8 py-4 rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition duration-300">
          Skills
        </button>
        </a>

        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-lg leading-8 text-gray-400">
            I am a Computer Science Engineering student passionate
            about web development, UI/UX design, and modern frontend
            technologies. I enjoy building interactive and visually
            appealing websites using React, JavaScript, and Tailwind CSS.
          </p>

        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 rounded-3xl bg-slate-900 hover:-translate-y-3 transition duration-300 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              React
            </h3>

            <p className="text-gray-400">
              Building dynamic and interactive user interfaces.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 hover:-translate-y-3 transition duration-300 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Tailwind CSS
            </h3>

            <p className="text-gray-400">
              Creating modern responsive website designs.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 hover:-translate-y-3 transition duration-300 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              JavaScript
            </h3>

            <p className="text-gray-400">
              Adding functionality and interactivity to websites.
            </p>
          </div>

        </div>

      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-lg text-gray-400 mb-8">
            Interested in working together or discussing opportunities?
            Feel free to connect with me.
          </p>

          <div className="flex flex-col gap-4 text-lg">

            <p>
               2420030260cse@gmail.com
            </p>

            <p>
                Hyderabad, India
            </p>

            <p className="text-cyan-400">
              GitHub: github.com/akshara009-git
            </p>

            <p className="text-cyan-400">
              LinkedIn: linkedin.com/in/akshara-surineni-b5b948325
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-slate-800 text-gray-400">
        © 2026 AKSHARA SURINENI | Web Developer
      </footer>

    </div>
  );
}

export default App;