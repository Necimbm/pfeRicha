import React from 'react'
import styled from 'styled-components'
import Navbar from './Component/Navbar/index'
import {Grid} from '@material-ui/core'
import {Img,Settings, Measurements, Order, Result, Title, Container, Input } from './Component/Navbar/CustomElements';
import img from './images/carpet.jpg'
import Carousel from 'react-bootstrap/Carousel'
export const App = styled.div`
width:100%;
height:100%;

`;

const custom = () => {
    return (
        <App   >
            <Navbar/>
            <Container>
            <Grid container  justify="center" spacing={0}>
                <Grid item > 
                    <Title>
                         <h4>Personnaliser votre commande</h4>
                    </Title>  
                </Grid>
                <Grid item >
                    <Result> 
                        <Img src={img}/> 
                    </Result>
                </Grid>
                <Grid item  justify="center"> 
                    <Measurements>
                        <Grid item> Longueur <Input label="longueur" placeholder="longueur" ></Input>M</Grid>
                        <Grid item> Largeur  <Input label="largeur" placeholder="largeur"></Input>M</Grid>
                    </Measurements> </Grid>
             </Grid>
            <Grid container  justify="center" spacing={0}>
                <Grid item > 
                 <Settings> 
                 
                        <Grid item>
                            <Carousel>
                            <Carousel.Item>
                                    <img/>
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <img/>
                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img/>
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Grid>
                        <Grid item>bonjour</Grid>
                        <Grid item>hallo</Grid>
                  
                 </Settings> 
                </Grid>
                    <Grid item > <Order>hiiii</Order> </Grid>

            </Grid>
            </Container>    
           
        </App>
    )
}

export default custom;
