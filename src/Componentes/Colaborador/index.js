import './Colaborador.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div  className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt='imagem-aluno'/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.pagamento}</h5>
                <h5>{`R$${props.valores},00`}</h5>
            </div>
        </div>
    )
}

export default Colaborador