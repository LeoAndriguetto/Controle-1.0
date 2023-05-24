import './ListaSuspensa.css'

const ListaSuspensa = (props) => {



    return(
        <div className='Lista-suspensa'>
            <label className='Lista-suspensa'>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(tipoAluno => <option key={tipoAluno}>{tipoAluno}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa