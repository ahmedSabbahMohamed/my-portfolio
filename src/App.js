import About from "./components/About";
import DesktopNav from "./components/DesktopNav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  window.onscroll = _ => {
    let sections = document.querySelectorAll("section"),
    navLinks = document.querySelectorAll("nav ul li a")
    
    sections.forEach(sec => {
      let top = window.scrollY,
      offset = sec.offsetTop - 150,
      height = sec.offsetHeight,
      id = sec.getAttribute("id")

      if(top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove("active")
          document.querySelector(`.desk ul li a[href*=${id}]`).setAttribute("class", "active rounded-full px-3 py-2")
        })
      }
    })

  }

  return (
    <>
    <header>
      <MobileNav />
      <DesktopNav />
    </header>
    <main>
      <Home />
      <About />
      <Projects />
      <Skills />
    </main>
    <Footer />
    </>
  )
}

export default App;
