import React from 'react'
import Logo from '../../assets/logo-dio.png';
import { Button } from '../Button'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';
const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={ Logo } alt= "Logo da Dio" />
                    {autenticado ? (
                    <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                    ) : null }                  
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://cdn.discordapp.com/attachments/1033494131995054112/1033494290057408532/avatar-github.png" />
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar"/>
                            <Button title="Cadastrar"/>
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }