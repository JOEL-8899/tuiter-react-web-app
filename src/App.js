import './App.css';
import HelloWorld from "./labs/a6/hello-world.js";
import Labs from "./labs/index.js";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Assignment7 from "./labs/a7";
function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Labs/>}></Route>
                  <Route path="/hello" element={<HelloWorld/>}></Route>
                  <Route path="/tuiter/*" element={<Tuiter/>}></Route>
                  <Route path="/a7" element={<Assignment7/>}></Route>
              </Routes>

          </div>
      </BrowserRouter>
  );
}

export default App;
