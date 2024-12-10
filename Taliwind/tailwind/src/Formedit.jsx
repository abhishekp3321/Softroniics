import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Formedit = () => {
    const { id } = useParams();
    console.log(id);

    //viewapi
    const [viewdata, setviewdata] = useState([]); //viewapistate
    

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const respones = await axios.get(`http://127.0.0.1:8000/user/view`);
                setviewdata(respones.data)
                console.log("viewapidata",viewdata);
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchdata()
    }, []);

    //edit
    const [edituserdata, setedituserdata] = useState({});

    const selectUserById = (id) => {
        const selectedUser = viewdata.find(user => user.id === id);
        setedituserdata(selectedUser || {});
        console.log("edituser", edituserdata);
    };

    useEffect(() => {

        selectUserById(id);

    }, [viewdata, id]);

    // const edit = async (id) => {
    //     try {
    //         await axios.put(`http://127.0.0.1:8000/user/update/${id}`);
    //         fetchdata();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div>
            <h1>Editing User {edituserdata.name}</h1>
        </div>
    )
}
