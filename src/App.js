import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Time from "./Componentes/Time";



function App() {

  const [alunos, setAlunos] = useState([])

  const times = [
    {
      nome: 'Personal',
      corPrimaria: '#04328D',
      corSecundaria: '#2D57AB'
    },
    {
      nome: 'Academia',
      corPrimaria: '#01004c',
      corSecundaria: '#000000'
    }
  ]

  

  const aoNovoAlunoAdicionado = (aluno)=>{
    setAlunos([...alunos, aluno])
  }


  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoAlunoCadastrado={aluno => aoNovoAlunoAdicionado(aluno)}/>
      {times.map(time => <Time 
      key= {time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      alunos={alunos.filter(aluno => aluno.time === time.nome)}
      />)}


    </div>
  );
}

export default App;
