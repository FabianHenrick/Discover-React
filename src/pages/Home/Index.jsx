import React, {useState, useEffect} from 'react';
import './styles.css';
import {Card} from '../../components/Card'
export function Home() {

  const[studentName, setStudentName] = useState('');
  const[students, setStudents] = useState([]);
  const [user,setUser] = useState({name:'', avatar:''})
  function handleAddStudent(){
    const newStudent = {
      name:studentName,
      time: new Date().toLocaleTimeString('pt-br',{
        hour: '2-digit',
        minute:'2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState =>[...prevState,newStudent])
  }

  useEffect(() => {
    //corpo do useEffect
    fetch('https://api.github.com/users/FabianHenrick')
    .then(response => response.json())
    .then(data =>{
      setUser({
        name:data.name,
        avatar: data.avatar_url,
      })

    })
    .catch(error => console.error(error))
    console.groupCollapsed('useEffect foi chamado!')
  },[])

  return (
    
    <div className="container">
      <div class="d-flex flex-column justify-content-center w-100 h-100"></div>
     <header>
      <h1>Lista de Presença</h1>
      <div><strong>{user.name}</strong>
      <img src={user.avatar} alt="Foto de Perfil"></img>
      </div>
     </header>
     
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button 
      type="button"
      onClick={handleAddStudent}
      >Adcionar</button>

      {
        students.map(student => <Card name={student.name}  time={student.time}/>)
      }
    </div>
  )
}

