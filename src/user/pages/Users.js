import React from 'react';

import UsersList from '../components/UsersList';
const Users = () => {
    const USERS = [
        {
        id: 'u1', 
        name: 'Matheus Pereira', 
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQFsThLtUzdG_Q/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=WaHr6QUzfSPRJY7jelXUfUJNDnW7zbgHLiRnhwxYdI8', 
        places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;