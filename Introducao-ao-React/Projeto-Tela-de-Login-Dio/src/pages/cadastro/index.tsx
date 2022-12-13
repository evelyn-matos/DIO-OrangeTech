import { MdEmail, MdLock, MdPerson } from "react-icons/md"

import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input';

import { api } from '../../services/api';
import { IFormDataCadastro } from './types';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Column, Container, LoginText, LoginTextHighlight, Row, Subtitle, SubtitleCadastro, TermsAndConditionsText, Title, TitleCadastro, Wrapper  } from './styles';


const schema = yup.object({
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Este e-mail não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();


const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormDataCadastro>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData: IFormDataCadastro) => {
        try{
            const { data } = await api.get(`/users?name=${formData.name}&email=${formData.email}&password=${formData.password}`);
            
            if(data.length === 1){
                navigate('/feed')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }     
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
                 <br />
                 <Subtitle>Voltar para login</Subtitle>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Faça seu Cadastro</TitleCadastro>
                    <SubtitleCadastro>Faça seu Cadastro e make the change._</SubtitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" errorMenssage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson/>} />
                    <Input name="email" errorMenssage={errors?.email?.message} control={control} placeholder="Seu melhor @e-mail" leftIcon={<MdEmail />} />
                    <Input name="password" errorMenssage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                    <br />
                    <Button title="Criar Minha Conta Grátis" variant="secondary" type="submit"/> 
                </form>
                    <br />
                    <TermsAndConditionsText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermsAndConditionsText>
                    <br />
                <Row>
                    <LoginText>Já tenho conta.</LoginText>
                    <LoginTextHighlight>Fazer Login.</LoginTextHighlight>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }