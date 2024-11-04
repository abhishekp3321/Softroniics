import React, { useState } from 'react'

export const Todolist = () => {
    const [data,setdata]=useState('')
    const [add,setadd]=useState('')
    const [edit,setedit]=useState('')

    const handlechange =(event)=>{
        setdata({...data,[event.target.name]:event.target.value})


    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setdata([...add, data]);

        

        // const handeledit=(event)=>{
        //     setdata(add[event])
        //     setedit(event)
        // }
        console.log(data)
    }
  return (
    <div>
        <form  onSubmit={handleSubmit} className=''>
            <div>
            <label> taskname</label>
            <input type='text' name='taskname' placeholder='enter task' onChange={handlechange}></input>
            </div>
            <div>
                <label>duedate</label>
                <input name='date' type='date'  onChange={handlechange}>
                </input>
            </div>
        <div>
            <label>status</label>
            <input type='text' name='status' placeholder='enter status'  onChange={handlechange}>
            </input>
        </div>
        <div>
            <button type='submit'> {'Add Task'}</button>
        </div>
        </form>
    </div>
  )
}
