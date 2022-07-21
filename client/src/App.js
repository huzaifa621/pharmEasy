import Healthcare from "./Healthcare Page/Healthcare";
import { SliderData } from "./Healthcare Page/SliderData";
import { Footer } from "./Components/Footer";
import { AppDownload } from "./Pages/home/AppDownload";
import {FullScreenSlider} from "./Pages/home/FullScreenSlider";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div >
      <Healthcare slides={SliderData} />
      <Navbar />
      <FullScreenSlider/>
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;
