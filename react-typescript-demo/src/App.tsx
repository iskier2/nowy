import { traceDeprecation } from 'process';
import React from 'react';
import './App.css';
function Lista() {
  const liczby = ["jeden", "dwa", "trzy"]
  const liczbyList = liczby.map(x => <li key={x}>{x}</li>)
  return (
    <ul>
      {liczbyList}
    </ul>
  )
}
interface ILinia {
  numer: number
}
function Linia(props: ILinia) {
  let lps = ["lp", "cena", "produkt"]
  let ceny = ["5,60", "3,23", "7,45", "10,00", "3,20"]
  let produkty = ["chleb", "mąka", "masło", "kefir", "dżem"]
  const { numer } = props
  return (
    <tr>
      <td>{numer + 1}</td>
      <td>{ceny[numer]}</td>
      <td>{produkty[numer]}</td>
    </tr>
  )
}

function Headline() {
  let lps = ["lp", "cena", "produkt"]
  let ftr = lps.map(x => <td key={x}>{x}</td>)
  return (
    <tr>
      {ftr}
    </tr>
  )
}
function Tabela() {
  let lps = ["lp", "cena", "produkt"]
  let ceny = ["5,60", "3,23", "7,45", "10,00", "3,20"]
  let produkty = ["chleb", "mąka", "masło", "kefir", "dżem"]
  let trs = []
  for (let i in ceny) {
    console.log(i)
    let j = parseInt(i)
    trs.push(<Linia numer={j} />)
  }
  return (
    <table>
      <Headline />
      {trs}
    </table>
  )
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Lista />
        <Tabela />
      </header>
    </div>
  );
}

export default App;
