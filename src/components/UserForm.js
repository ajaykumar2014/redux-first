
import { connect } from 'react-redux'
import React from 'react'
import { TextField } from './index'
import { addNewUser } from './../actions/index'

class UserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newuser: {
                id:1,
                name: null,
                email: null
            }
        }
    }

    userFormSubmitHandler = (e) => {
        e.preventDefault()
        
        this.setState({
            newuser: { ...this.state.newuser, id: this.state.newuser.id + 1 }
        })
        console.log("Console ====" + this.state.newuser.id)
        this.props.userFormSubmit(this.state.newuser);
    }

    userNameHandler = (e) => {
        let newName = e.target.value;

        this.setState({
            newuser: { ...this.state.newuser, name: newName }
        })

    }

    userEmailHandler = (e) => {
        this.setState({
            newuser: { ...this.state.newuser, email: e.target.value }
        })
    }

    render() {
        return (
            <div className="card text-white bg-secondary mb-3">
                <div class="card-header">User Form</div>
                <div className="card-body">
                    <h3 className="card-title"></h3>
                    <form onSubmit={(e) => { this.userFormSubmitHandler(e) }}>
                        <div>
                            <TextField type={"text"} title={"Enter Name"} value={this.state.newuser.name} name={"userName"} placeholder={"Enter Name"}
                                handleChange={e => this.userNameHandler(e)}
                            />
                            <TextField type={"text"} title={"Enter Email"} value={this.state.newuser.email} name={"emailAddress"} placeholder={"Enter Email"}
                                handleChange={e => this.userEmailHandler(e)}
                            />
                        </div>
                        <button type="submit" disabled={this.state.isDisable} className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        )

    }
}
const mapDispatchToProps = dispatch => {
    return {
        userFormSubmit: user => {
            dispatch(addNewUser(user));
        }
    };
};

export default connect(null, mapDispatchToProps)(UserForm);


