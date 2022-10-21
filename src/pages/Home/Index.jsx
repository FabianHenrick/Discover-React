import './styles.css';
import {Card} from '../../components/Card'
export function Home() {

  return (
    <div className="container">
      <h1> Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..."/>
      <button type="button">Adcionar</button>

      <Card name="Fabian" age="24" time="10:54:30"/>
      <Card name="Sayuri" age="23"time="12:30:49"/>
      <Card name="Robson"age="39" time="11:10:00"/>
    </div>
  )
}

