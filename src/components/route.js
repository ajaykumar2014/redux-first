import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TextBookContainer from './../containers/TextBookContainer';
import TableContainer from './../containers/TableContainer'
import Counter from './Counter'

function home() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Counter />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TableContainer />
          </div>
        </div>
        <div>
          <TextBookContainer />
        </div>
      </div>
    );
  }

const RootRouter = ()=>{
    return (
        <div>
            <Switch>
                <Route exact path="/" component={home} />
                <Route exect path="/counter" component={Counter} />
                <Route exect path="/notes" component={TextBookContainer} />
                <Route exect path="/table" component={TableContainer} />
            </Switch>
        </div>
    )
}

export default RootRouter;