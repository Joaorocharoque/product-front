import React, { Fragment, useState } from 'react';
import CardList from './containers/Cards/CardsList';

const AppUser = () => {
  console.log(`App RENDERING`);


  const [usersList, setUsersList] = useState([
    { id: Math.random().toString(36).substring(7), name: 'Joao', cpf: '124.616.461.44', email: 'joao@gmail.com', password: '****'},
    { id: Math.random().toString(36).substring(7), name: 'Ana', cpf: '546.446.649.34', email: 'ana@gmail.com', password: '****' },
    { id: Math.random().toString(36).substring(7), name: 'Carlos', cpf: '654.346.819.98', email: 'carlos@gmail.com', password: '****' },
    { id: Math.random().toString(36).substring(7), name: 'Maria', cpf: '854.649.649.52', email: 'maria@gmail.com', password: '****' },
  ]);

  const onRemoveItemHandler = (id) => {
    setUsersList(users => 
      users.filter(user => user.id !== id))
  };

  const onEditItemHandler = (editedUser) => {
    setUsersList(users => 
      users.map(user => user.id === editedUser.id ? 
        {
          ...user,
          name: editedUser.name,
          cpf: editedUser.cpf,
          email: editedUser.email,
          password:editedUser.password
        } 
        : user) 
    )
  };

  const onAddItemHandler = (user) => {
    setUsersList(users => [
      ...users, 
      { id: Math.random().toString().substring(),
        cpf: user.cpf,
        email: user.email, 
        name: user.name,
        password: user.password
      }
    ])
  };

  return (
    <Fragment>
      <main>
        <CardList users={usersList} remove={onRemoveItemHandler} edit={onEditItemHandler} add={onAddItemHandler} />
      </main>
    </Fragment>
  );
};

export default AppUser;
