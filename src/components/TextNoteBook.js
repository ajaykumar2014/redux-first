import { connect } from 'react-redux'
import React from 'react'
import { addNotes, deleteNotes } from '../actions/index'
import ViewNote from './ViewNote'


class TextNoteBook extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }


    render() {
        let input;
        const style = {
            width: '100%',
            height: '198px'
        };
        return (
            <div className="card text-white bg-secondary mb-3">
                <div class="card-header">Add Notes</div>
                <div className="card-body">
                    <h3 className="card-title"></h3>
                    <form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        this.props.dispatch(addNotes(input.value))
                        input.value = ''
                    }}
                    >
                        <div>
                            <div>
                                <textarea ref={node => (input = node)} style={style}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Todo</button>

                    </form>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        posts: state.posts
    }
};


export default connect(mapStateToProps)(TextNoteBook);