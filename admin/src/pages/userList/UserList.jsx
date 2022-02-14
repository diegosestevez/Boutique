import React, {useEffect} from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from './../../redux/apiCalls';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users)

  useEffect(()=>{
    getUsers(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
    // setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'username', headerName: 'User', width: 180 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'isAdmin',  headerName: 'Administrator', width: 150},
    { field: 'actions', headerName: 'Actions', width: 150, renderCell: (params) => {
      return(
        <>
        <Link to={"/user/"+params.row._id}>
          <button className='userListEdit'>Edit</button>
        </Link>
          <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id) }/>
        </>
      )
    }}
  ];

  return (
    <div className='userList'>
    <DataGrid
      disableSelectionOnClick
      getRowId={(row)=> row._id}
      rows={users}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
    </div>
  )
}

export default UserList
