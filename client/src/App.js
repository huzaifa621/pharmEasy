import Healthcare from "./Healthcare Page/Healthcare";
import { SliderData } from "./Healthcare Page/SliderData";
// import { LabTest } from "./Pages/LabTest";
// import Mainroutes from "./Routes/Mainroutes";


function App() {
  return (
    <div >
     {/* <Mainroutes/>
      <LabTest/> */}
      <Healthcare slides={SliderData}/>
    </div>
  );
}

export default App;
