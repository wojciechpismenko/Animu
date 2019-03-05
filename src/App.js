import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import RootView from './views/RootView/RootView';
import ListView from './views/ListView/ListView';
import TopView from './views/TopView/TopView';
import Form from './components/Form/Form';


class App extends React.Component {
  useButton = () => {
    console.log('użyto buttona')
  }

  render() {
    return (
      <BrowserRouter>
      <>
        <Header useButtonFn={this.useButton} />
        <Switch>
          <Route exact path="/" component={RootView} />
          <Route path="/list" component={ListView} />
          <Route path="/top" component={TopView} />
        </Switch>
        <Form />
      </>
      </BrowserRouter>
    );
  }
}

export default App;