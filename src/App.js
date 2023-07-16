import DashBoard from './Pages/DashBoard';
import './App.css';
import { DashBoardProvider } from './Connector/Connector';
import { Provider } from 'react-redux';
import store from './CommonStore/Store';
import React,{useEffect} from 'react';

function App() {

  return (
    <Provider store={store}>
      <DashBoardProvider >
        <div className="App">
          <DashBoard />
        </div>
      </DashBoardProvider>
    </Provider>

  );
}

export default App;
