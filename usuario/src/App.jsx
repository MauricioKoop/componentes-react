import react from 'react';
import UserProfile from './userProfile';

function App(){
  return(
    <div>
      <h1>Componente para perfil de usuário</h1>
      <UserProfile 
        name="Eduardo"
        email="eduardodevsec@gmail.com"
        bio="Essa é minha biografia."
      />
    </div>
  )
}

export default App;