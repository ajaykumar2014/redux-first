import React from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './../actions/index'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.incrementCallHandler = this.incrementCallHandler.bind(this);
        this.decrementCallHandler = this.decrementCallHandler.bind(this);
        this.state = { counter: 0 }

    }

    incrementCallHandler = (e) => {
        this.props.incrementCounterDispatcher(this.props.counter)
    }

    decrementCallHandler = (e) => {
        this.props.decrementCounterDispatcher(this.props.counter)
    }
    render() {
        const { counter } = this.props
        return (
            <p>
                <div className="card text-white bg-secondary mb-3">
                    <div class="card-header">Counter Example </div>
                    <div className="card-body">
                        <h3 className="card-title">Counter value is {counter}</h3>
                        <button className="btn btn-primary" type="button" onClick={this.incrementCallHandler}>+</button>
                        <button className="btn btn-primary" type="button" onClick={this.decrementCallHandler}>-</button>
                    </div>
                </div>
            </p>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return { counter: state == null ? 0 : state.counterReducer.counter }
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounterDispatcher: counter => dispatch(incrementCounter(counter)),
        decrementCounterDispatcher: counter => dispatch(decrementCounter(counter))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

