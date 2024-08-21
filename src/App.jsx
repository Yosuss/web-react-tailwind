import "./App.css";
import "./App"
import backgroundImage from "./assets/mars.jpg"

function App() { 
  return (
      <div className="bg-black">
      <div className="container h-screen grid-rows-layout max-w-fit mx-10 font-mono text-white cursor-pointer">
        <div className="navbar flex text-3xl justify-between my-4 font-serif">
          <div className="logo-made capitalize grid grid-cols-2">
            <h1 className="uppercase shadow-xl">alf</h1>
            <h1 className="font-medium">made by arga</h1>
          </div>
          <div className="about-me capitalize">
            <h1>about me</h1>
          </div>
        </div>

        <div div className="content grid grid-cols-1 justify-center mx-16 gap-4">
          <h1 className="title text-8xl w-4/5 gradient-text justify-start font-sans font-bold my-auto p-4">to the <br/> programmer</h1>
          <div className="grid grid-cols-2 gap-4">
            <h1 className="uppercase">and back</h1>
            <div className="justify-end">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis adipisci nulla blanditiis, minima ipsa veniam vero, quos ab voluptatibus similique voluptatem reprehenderit quisquam temporibus iure id quo molestias!</h1>
            <a href="" className="uppercase my-2">more</a>
            </div>
          </div>
        </div>

        <div className="footer flex uppercase justify-between my-4">
          <div className="footer-left grid grid-cols-2">
            <div>
              <h1>02-06</h1>
            </div>
            <div className="sosial-media grid grid-cols-2">
              <h1>facebook</h1>
              <h1>instagram</h1>
              <h1>github</h1>
            </div>
          </div>

          <div className="footer-right grid grid-cols-2">
            <div className="button space-x-2 px-4">
              <button>atas</button>
              <button>bawah</button>
            </div>

            <div className="contact">
              <h1>contact</h1>
            </div>
          </div>
        </div>

      </div>
      
      </div>
  );
}

export default App;
