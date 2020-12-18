import React, { Fragment, useState, useEffect } from 'react';
import CardList from './containers/Cards/CardsList';
import apiGateway from "../apiGateway";

const AppUser = (props) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    apiGateway.get("/user", props.getHeader()).then(response => {
      setUsersList(response.data);
    });
  }, [])

  async function onRemoveItemHandler(id){
    await apiGateway.delete("/user/" + id, props.getHeader()).then(response => {
      console.log(response)
    });
    
    await apiGateway.get("/user", props.getHeader()).then(response => {
      setUsersList(response.data);
    });
  };

  async function onEditItemHandler(editedUser){
   await apiGateway.put("/user/" + editedUser.id,{
      name: editedUser.name,
      cpf: editedUser.cpf,
      email: editedUser.email,
      password:editedUser.password
    }, props.getHeader());

    await apiGateway.get("/user", props.getHeader()).then(response => {
      setUsersList(response.data);
    })
    
  };

  async function onAddItemHandler(user){
    const response = await apiGateway.post("/user",{
      cpf: user.cpf,
      email: user.email, 
      name: user.name,
      password: user.password
    }, props.getHeader());

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
