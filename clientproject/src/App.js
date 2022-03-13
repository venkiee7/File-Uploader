import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";
// import FileUploadScreen from './screens/FileUploadScreen';
import Navbar from './screens/Navbar';
// import { getSingleFiles } from './data/api';
import Home from './screens/Home';
import Alert from './screens/Alert';
import About from './screens/About';
import Signup from './screens/Signup';
import Login from './screens/Login';

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
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
