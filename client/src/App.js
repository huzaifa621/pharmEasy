
import Healthcare from "./Healthcare Page/Healthcare";
import { SliderData } from "./Healthcare Page/SliderData";
import Mainroutes from "./Routes/Mainroutes";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



function App() {
  return (
    <div >
      <Mainroutes/>
       {/* <Healthcare slides={SliderData}/> */}
      </div>
  );
}

export default App;
