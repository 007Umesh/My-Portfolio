import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-900 w-full">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen
         bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar></NavBar>
        <Hero></Hero>
        <About></About>
        <Technology></Technology>
        <Projects />
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
//
