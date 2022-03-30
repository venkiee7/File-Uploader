import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import FileUploadScreen from './screens/FileUploadScreen';
import Navbar from './screens/Navbar';
// import { getSingleFiles } from './data/api';
import Home from './screens/Home';
import Alert from './screens/Alert';
import About from './screens/About';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Diseases from './screens/Diseases';

function App() {
  // const [singleFiles, setSingleFiles] = useState([]);
  // const [multipleFiles, setMultipleFiles] = useState([]);

  // const getSingleFileslist = async () => {
  //   try {
  //     const fileslist = await getSingleFiles();
  //     setSingleFiles(fileslist);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // const getMultipleFilesList = async () => {
  //   try {
  //       const fileslist = await getMultipleFiles();
  //       setMultipleFiles(fileslist);
  //       console.log(multipleFiles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   getSingleFileslist();
  // }, []);

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/diseases">
              <Diseases mode={mode}/>
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} mode={mode}/>
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} mode={mode}/>
            </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
