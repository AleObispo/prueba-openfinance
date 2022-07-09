import React, {useState} from 'react';
import Data from '../data.json'
import styled from 'styled-components';
import Search from './Search';

const TdBody = styled.td`
    width: 15rem;
    text-align: center;
    :first-letter {
    text-transform:capitalize;
    }
`;
const ButtonGo = styled.button`
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
const DivDetail = styled.div`
    padding-left: 10rem;
    padding-top: 3rem;
`;
const TdBodyEmail = styled.td`
    width: 15rem;
    text-align: center;
`;
const TrBody = styled.tr `
    text-align: center;
`;
const ButtonBody = styled.button`
    background-color: transparent;
    border-color: white;
    border-right: none;
    border-top: none;
    border-left: none;
    border-width: 1px;
    border-color: #f3f3f3;
    :hover {
        background-color: #f3f3f3;
        color: #01987A;
        font-weight: bold;
    }
`;
const Titles = styled.h3`
    margin-top: 10px;
    margin-left: 2rem;
    margin-bottom: 0;
`;
const Pargraf = styled.p`
    :first-letter {
    text-transform:capitalize;
}
    margin-left: 2.5rem;
    margin-bottom: 0;
    margin-top: 0;
`;
const PargrafEmail = styled.p`
    margin-left: 2.5rem;
    margin-bottom: 0;
    margin-top: 0;
`;

const PersonColumn = () => {
    const [person, setPerson] = useState({})
    const showDataPerson = (selected) => {
        
        setPerson(selected)
    }
    return ( 
        <>
        {Data.map((data) => (
            
            <>
           <TrBody>
           <ButtonBody type='submit' onClick={() => showDataPerson(data)}>
            <TdBody>{data.userId}</TdBody>
            <TdBody>{data.firstName}</TdBody>
            <TdBody>{data.lastName}</TdBody>
            <TdBody>{data.phoneNumber}</TdBody>
            <TdBodyEmail>{data.emailAddress}</TdBodyEmail>
            </ButtonBody>
            </TrBody>
            </>
        ))}
       <DivDetail>
            {Object.keys(person).length > 0
            ? 
            <>
            <span><Titles>Name</Titles><Pargraf>{person.firstName}</Pargraf></span>
            <span><Titles>Last Name</Titles><Pargraf>{person.lastName}</Pargraf></span>
            <span><Titles>Phone Number</Titles><Pargraf>{person.phoneNumber}</Pargraf></span>
            <span><Titles>Email</Titles><PargrafEmail>{person.emailAddress}</PargrafEmail></span>
                      
            <div>
            <ButtonGo type='submit' onClick={() => setPerson('')}>Ir al buscador</ButtonGo>
            </div>
            </>
            : <Search/> }
            
        </DivDetail>
        
        </>
     );
}
 
export default PersonColumn;