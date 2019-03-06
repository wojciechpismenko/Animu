import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import RootView from './views/RootView/RootView';
import ListView from './views/ListView/ListView';
import TopView from './views/TopView/TopView';
import Modal from './components/Modal/Modal';


class App extends React.Component {
  state = {
    isModalOpen: false,
  }

  openModal = (e) => {
    e.preventDefault();

    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = (e) => {
    e.preventDefault();
    
    this.setState({
      isModalOpen: false,
    })
  }

  useButton = () => {
    console.log('użyto buttona')
  }

  render() {
    return (
      <BrowserRouter>
      <>
        <Header useButtonFn={this.useButton} openModelFn={this.openModal} />
        <Switch>
          <Route exact path="/" component={RootView} />
          <Route path="/list" component={ListView} />
          <Route path="/top" component={TopView} />
        </Switch>
        { this.state.isModalOpen && <Modal closeModalFn={this.closeModal} /> }
      </>
      </BrowserRouter>
    );
  }
}

export default App;