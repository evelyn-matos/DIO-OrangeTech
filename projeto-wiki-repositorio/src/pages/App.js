import { useState } from 'react';
import logoGithub from '../assets/github.png'
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import {api} from '../services/api';

import { Container } from './styles';

function App() {
const [currentRepo,setCurrentRepo] = useState('');
 const [repos, setrepos] = useState([]);

 const handleSearchRepo = async () => {
  console.log(currentRepo)
  if(currentRepo[0] === '/'){
    alert("Retire a / para fazer a busca!!!");
  }else{
    const {data} = await api.get(`repos/${currentRepo}`)
  
    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setrepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')
  }

}

const handleRemoveRepo = (id) => {
  const item = repos.filter(repo => repo.id !== id)
  setrepos(item);

}

  return (
    <Container>
      <img src={logoGithub} width={72} height={72} alt=""/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;