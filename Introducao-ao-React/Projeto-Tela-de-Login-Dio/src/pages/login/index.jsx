import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input';


import { Colum, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles';



const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Colum>
                <Title>
                    A plataforma para você aprender com experts, e entrar mais rápido nas empresas mais desejadas.
                </Title>       
            </Colum>
            <Colum>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form>
                        <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Colum>
        </Container>

    </>)
}

export { Login }