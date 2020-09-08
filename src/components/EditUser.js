import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const selectedUser = users.find((user) => user.id === currentUserId);
    setSelectedUser(selectedUser);

    console.log(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = (e) => {
    editUser(selectedUser);

    history.push('/');
  };

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Edit User</h1>

      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input type='text' value={selectedUser.name} onChange={onChange} name='name' placeholder='Enter user' required></Input>
        </FormGroup>
        <Button type='submit'>Update</Button>
        <Link to='/' className='btn btn-danger ml-2'>
          Cancel
        </Link>
      </Form>
    </div>
  );
};
