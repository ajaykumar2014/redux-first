
import { connect } from 'react-redux'
import React from 'react'
import UserForm from './../components/UserForm'
import UserTableGrid from '../components/UserTableGrid';

const TableContainer = () => {
    return (
        <div>
            <div className="col">
            <UserForm />
            </div>
            <div className="col">
            <UserTableGrid />
            </div>
        </div>
    )

}
export default TableContainer;

