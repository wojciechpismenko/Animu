import React        from 'react';
import { library }  from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faUser, faCheck, faTimes }
                    from '@fortawesome/free-solid-svg-icons';

import TopBar       from './components/TopBar/TopBar';
import "./App.scss";



library.add(faSearch, faBars, faUser, faCheck, faTimes)

export default class App extends React.Component {
  state = {

  }

  render() {
    return (
      <>
        <TopBar />
      </>
    );
  }
}