import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Step1 from './step1';
import Step2 from './step2';

const Stepper = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
      </Switch>
    </Router>
  );
};

export default Stepper;
