import About from "./components/About";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Header from "./components/layout/Header";
import Services from "./components/Services";

function App() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Blog />
    </main>
    </>
  );
}

export default App;
