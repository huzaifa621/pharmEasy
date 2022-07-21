
import Healthcare from "./Healthcare Page/Healthcare";
import Product from "./Healthcare Page/Product";
import { SliderData } from "./Healthcare Page/SliderData";

import { Footer } from "./Components/Footer";
import { AppDownload } from "./Pages/home/AppDownload";
import {FullScreenSlider} from "./Pages/home/FullScreenSlider";
import { Navbar } from "./Components/Navbar";


function App() {
  return (
    <div>
     {/* <Mainroutes/>
      <LabTest/> */}
      <Healthcare slides={SliderData}/>
      <Product/>

    </div>
  );
}

export default App;
