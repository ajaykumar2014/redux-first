
import { connect } from 'react-redux'
import React from 'react'
import TableSheet from './TableSheet'
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
                <div class="card-header">User Form</div>
                <div className="card-body">
                    <h3 className="card-title"></h3>
                        <TableSheet dataSet={dataSet} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataSet: state.users.users
    };
};

export default connect(mapStateToProps)(UserTableGrid);