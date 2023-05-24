import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [pagamento, setPagamento] = useState('')
    const [valores, setValores] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoAlunoCadastrado({
            nome,
            pagamento,
            valores,
            imagem,
            time
        })
        setNome("")
        setPagamento("")
        setValores("")
        setImagem("")
        setTime("")
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do aluno</h2>
                <CampoTexto 
                obrigatorio = {true} 
                label='Nome' 
                placeholder="Digite o nome do aluno" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio = {true} 
                label='Data do pagamento' 
                placeholder="Digite a data do pagamento" 
                valor={pagamento}
                aoAlterado={valor => setPagamento(valor)}
                />
                <CampoTexto 
                obrigatorio = {true} 
                label='Valor' 
                placeholder="Digite o valor a ser pago" 
                valor={valores}
                aoAlterado={valor => setValores(valor)}
                />
                <CampoTexto 
                label='Imagem' 
                placeholder="digite o endereço da imagem do aluno" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio = {true} 
                label = "Tipo Do Aluno"
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao texto={"Cria Aluno"}/>
            </form>
        </section>
    )
}

export default Formulario