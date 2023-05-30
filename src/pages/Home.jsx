import * as React from 'react'
import { useEffect, } from "react";
import UsersTable from '../components/Table';
import { Box, TextField } from '@mui/material';


const apiUrl = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
    const [users, setUsers] = React.useState(null)
    const [users_, setUsers_] = React.useState(null)

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await (await fetch(apiUrl)).json();
            setUsers(data);
            setUsers_(data)
        }
        catch (e) {
            console.log(e);
        }
    };

    const handleFilter = (event) => {
        console.log(event.target.value);
        if (users) {
            var newUsers = users_.filter(e => [e.name, e.phone, e.website, e.email].toString().toLocaleLowerCase().includes((event.target.value).toLocaleLowerCase()))
            console.log(newUsers);
            setUsers(newUsers)
        }
    }


    return (
        <div>
            <Box sx={{ py: 2 }}>
                <TextField onChange={handleFilter} placeholder='search' variant="standard" />
            </Box>
            <UsersTable users={users} />
        </div>
    )


}

export default Home