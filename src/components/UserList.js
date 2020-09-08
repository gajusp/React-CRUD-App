import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <div>
      <h1>
        <u>User List</u>
      </h1>
      <br />

      <ListGroup>
        {users.length > 0 ? (
          <>
            {users.map((user) => (
              <ListGroupItem className='d-flex' key={user.id}>
                <strong className='mt-2'>{user.name}</strong>
                <div className='ml-auto'>
                  <Link className='btn btn-warning mr-2' to={`/edit/${user.id}`}>
                    Edit
                  </Link>
                  <Button onClick={() => removeUser(user.id)} color='danger'>
                    Delete
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </>
        ) : (
          <h4 className='text-center'>No Users</h4>
        )}
      </ListGroup>
    </div>
  );
};
