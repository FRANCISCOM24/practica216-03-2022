
import './App.css';

function Componente(props) {
  return (
    <h4>Datos: {props.nombre} {props.apellido}</h4>
  );
}
function Viñetas(props) {
  return (
    <div>
      <ul>
        <li>
          {props.valor1}
        </li>
        <li>
          {props.valor2}
        </li>
        <li>
          {props.valor3}
        </li>
      </ul>
    </div>

  );

}
function Viñetas_html() {

  return (

    <div>
      viñetas html
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
  );

}
const valores = ["a", "b", "c"];

const llenar = valores.map((valores) =>
  <li>{valores}</li>

);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Viñetas react
        <Viñetas
          valor1="a"
          valor2="b"
          valor3="c"></Viñetas>
        <Viñetas_html></Viñetas_html>
        <Componente
          nombre="Jesus Francisco"
          apellido="Morales Montoya"></Componente>
        <ul>{llenar}</ul>
      </header>
    </div>
  );
}

export default App;
