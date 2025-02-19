import About from "./components/About";
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
    </main>
    </>
  );
}

export default App;
