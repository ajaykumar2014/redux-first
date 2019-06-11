
import { connect } from 'react-redux'
import React from 'react'
import TableSheet from './TableSheet'
import {removeRow} from './../actions/index'

class UserTableGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSet: []
        }
    }

    render() {
        const { dataSet } = this.props;
        if(dataSet.length === 0){
            return ("");
        }
        return (
            <div className="card text-white bg-secondary mb-3">
                <div class="card-header">User Table</div>
                <div className="card-body">
                    <h3 className="card-title"></h3>
                        <TableSheet dataSet={dataSet.users} onDelete ={ this.props.onDelete } />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: rowId => {
            dispatch(removeRow(rowId));
        }
    };
};
const mapStateToProps = state => {
    return {
        dataSet: state.users
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserTableGrid);