import "./App.css";
import Mensaje  from "./Mensaje.js";
/*const Mensaje = () => {
  return <h1>Hola mundo</h1>;
};*/

function App() {
  return (
    <div className="App">
      <Mensaje message='Estamos trabajando en...'></Mensaje>
      <Mensaje message='Una app'></Mensaje>
    </div>
  );
}

export default App; 
