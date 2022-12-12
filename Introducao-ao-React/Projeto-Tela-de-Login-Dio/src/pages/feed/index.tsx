
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';



import { Container, Collum, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Collum flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Collum>
            <Collum flex={1}>
                <TitleHighlight># Ranking da Semana</TitleHighlight>
                <UserInfo percentual={80} nome="Evelyn Matos" image="https://media.discordapp.net/attachments/1033494131995054112/1033494290057408532/avatar-github.png"/>
                <UserInfo percentual={27} nome="Evelyn Matos" image="https://media.discordapp.net/attachments/1033494131995054112/1033494290057408532/avatar-github.png"/>
                <UserInfo percentual={89} nome="Evelyn Matos" image="https://media.discordapp.net/attachments/1033494131995054112/1033494290057408532/avatar-github.png"/>
                <UserInfo percentual={57} nome="Evelyn Matos" image="https://media.discordapp.net/attachments/1033494131995054112/1033494290057408532/avatar-github.png"/>
                <UserInfo percentual={12} nome="Evelyn Matos" image="https://media.discordapp.net/attachments/1033494131995054112/1033494290057408532/avatar-github.png"/>
                <UserInfo percentual={42} nome="Evelyn Matos" image="https://media.discordapp.net/attachments/1033494131995054112/1033494290057408532/avatar-github.png"/>
            </Collum>
        </Container>

    </>)
}

export { Feed }