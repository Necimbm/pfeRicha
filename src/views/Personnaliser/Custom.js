import React from 'react'
import styled from 'styled-components'


import Navbar from './Component/Navbar'
export const App = styled.div`
width:100%,
height:100%
`;

const custom = () => {
    return (
        <App>
            <Navbar/>
          
        </App>
    )
}

export default custom;
