import React from 'react';
import PersonColumn from './PersonColumn';
import styled from 'styled-components';
/* import Details from './Details'; */


const TrHeader = styled.tr`
    width: 80px;
    border-radius: 15px 15px 0 0;
`; 

const DivContainer = styled.div`
    margin-left: 3rem;
`;

const TdHeader = styled.td`
    width: 15rem;
    text-align: center;
`;


const ButtonHeader = styled.button`
    color: white;
    background-color: #01987A;
    border-radius: 15px 15px 0 0;
    font-weight: bold;
`;


const List = () => {
              
    return ( 
        <>
        <DivContainer className='container'>
        <table>
            <thead>
                <TrHeader>
                    <ButtonHeader disabled>
                    <TdHeader>ID</TdHeader>
                    <TdHeader>First Name</TdHeader>
                    <TdHeader>Last Name</TdHeader>
                    <TdHeader>Phone Number</TdHeader>
                    <TdHeader>Email</TdHeader>
                    </ButtonHeader>
                </TrHeader>
                </thead>
                <tbody>
               <PersonColumn/>
            </tbody>
        </table>
        
        </DivContainer>
        </>
     );
}
 
export default List;