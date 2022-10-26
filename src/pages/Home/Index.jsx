import React, {useState} from 'react';
import './styles.css';
import {Card} from '../../components/Card'
export function Home() {

  const[studentName, setStudentName] = useState();

  return (
    <div className="container">
      <h1>Nome:{studentName}</h1>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adcionar</button>

      <Card name="Fabian" age="24" time="10:54:30"/>
      <Card name="Sayuri" age="23"time="12:30:49"/>
      <Card name="Robson" age="39" time="11:10:00"/>
    </div>
  )
}

