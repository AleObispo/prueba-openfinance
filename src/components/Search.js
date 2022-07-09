import React, { useState } from 'react';
import Data from '../data.json'
import styled from 'styled-components';

const TdBodyS = styled.td`
    width: auto;
    text-align: center;
    :first-letter {
    text-transform:capitalize;
    }
`;
const MessageAlert = styled.p`
    color: red;
    font-weight: bold;
`;
const InputSearch = styled.input`
    border: 1px solid;
    border-radius: 4px;
    box-shadow: 0 0 8px -3px #888;
    height: 38px;

`;
const InputButton = styled.input`
    margin-top: 1rem;
    color: white;
    margin-bottom: 1rem;
    background-color: #01987A;
    border: 1px solid;
    border-radius: 4px;
    box-shadow: 0 0 8px -3px #888;
    height: 38px;
    width: 169px;
    :hover {
        background-color: #f3f3f3;
        color: #01987A;
        font-weight: bold;
    }

`;
const TittleS = styled.span`
    margin-left: 5px;
    text-align: center;
    color: #01987A;
    font-weight: bold;
`;
const TdBodyEmailS = styled.td`
    width: auto;
    text-align: center;
    margin-top: 0;
`;
const DivSearch = styled.div `
    
    margin-left:3rem;
    margin-right:4rem;
    border-bottom: 1px solid black;
    
`;

const Search = () => {

    const [ termino, guardarTermino] = useState('');
    const [ error, guardarError ] = useState(false);
    const [busqueda, guardarBusqueda] = useState('')

    const buscarPersona = e => {
        e.preventDefault();

        //validar
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //enviar el termino de busqueda hacia el componente principal
        guardarBusqueda(termino);
        
    }
    
    const filtered = Data.filter (searchPerson => {
        return (
            searchPerson.firstName.toLowerCase().includes(busqueda.toLowerCase()) || searchPerson.lastName.toLowerCase().includes(busqueda.toLowerCase()) || searchPerson.phoneNumber.includes(busqueda) || searchPerson.emailAddress.includes(busqueda) || searchPerson.userId.toString().includes(busqueda)
        )
    })
    

    return ( 
        <>
        <form
            onSubmit={buscarPersona}
        >
            <div className='row'>
                <div className='form-group col-md-8'>
                    <InputSearch
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Buscar'
                        onChange={ e => guardarTermino(e.target.value)}
                        />
                </div>
                <div className='form-group col-md-4'>
                    <InputButton
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar'
                        onClick={ e => guardarBusqueda('')}
                        />
                </div>
            </div>
        
            { error ? <MessageAlert>Agrega un término de búsqueda</MessageAlert> : null}
        </form>
        {busqueda !== ''
        ?
        <div>
        {filtered.map((result) => (
            <>
            <DivSearch>
             <span><TittleS>Id: </TittleS><TdBodyS>{result.userId}</TdBodyS></span>   
             <span><TittleS>Name: </TittleS><TdBodyS>{result.firstName}</TdBodyS></span>
             <span><TittleS>Last Name: </TittleS><TdBodyS>{result.lastName}</TdBodyS></span>
             <span><TittleS>Phone Number: </TittleS><TdBodyS>{result.phoneNumber}</TdBodyS></span>
             <span><TittleS>Email: </TittleS><TdBodyEmailS>{result.emailAddress}</TdBodyEmailS></span>
             </DivSearch>
             </>
        ))}
        
     </div>
        : ''}
        
        </>
     );
}
 
export default Search;