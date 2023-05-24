import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props) => {
    return(
        props.alunos.length> 0 && <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='alunos'>
            {props.alunos.map(aluno=> <Colaborador corDeFundo={props.corPrimaria} key ={aluno.nome }nome={aluno.nome} pagamento={aluno.pagamento} valores={aluno.valores} imagem={aluno.imagem}/>)}
            </div>
        </section>
    )
}

export default Time