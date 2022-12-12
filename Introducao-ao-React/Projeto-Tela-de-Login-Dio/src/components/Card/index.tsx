import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://cdn.discordapp.com/attachments/1033494131995054112/1050443866634993704/orange-tech1.png" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://media.discordapp.net/attachments/1033494131995054112/1033494290057408532/avatar-github.png"/>
                    <div>
                        <h4>Evelyn Matos</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de HTML e CSS</h4>
                    <p>Projeto feito do curso de html e css no bootcamp dio do Global avanade..<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 18
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }