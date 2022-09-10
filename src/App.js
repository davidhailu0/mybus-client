import Routes from './Routes'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import allReducers from './Services/combineReducers';
import 'antd/dist/antd.min.css';
import "./App.css"

const store = configureStore({reducer:allReducers})
function App() {
  return <Provider store={store}><Routes/></Provider>
}

export default App;
