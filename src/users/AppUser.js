import React, { Fragment, useState, useEffect } from 'react';
import CardList from './containers/Cards/CardsList';
import apiUser from '../apiUser';

const AppUser = () => {
  console.log(`App RENDERING`);


  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    apiUser.get().then(response => {
      setUsersList(response.data);
    });
  }, [usersList])

  async function onRemoveItemHandler(id){
    await apiUser.delete("/" + id).then(response => {
      console.log(response)
    });
    
    await apiUser.get().then(response => {
      setUsersList(response.data);
    });
  };

  async function onEditItemHandler(editedUser){
   await apiUser.put("/" + editedUser.id,{
      name: editedUser.name,
      cpf: editedUser.cpf,
      email: editedUser.email,
      password:editedUser.password
    });

    await apiUser.get().then(response => {
      setUsersList(response.data);
    })
    
  };

  async function onAddItemHandler(user){
    const response = await apiUser.post("",{
      cpf: user.cpf,
      email: user.email, 
      name: user.name,
      password: user.password
    });

    const users = response.data;

    setUsersList([...usersList, users])
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
