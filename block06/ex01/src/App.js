import './App.css';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Navbar from './Navbar';
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Data from './Data';

class App extends React.Component{
  state={
    page:''
  }
  renderPages=(page)=>{
    this.setState({page})
  }
  render() {
    return(
      <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/profile'element={<Profile/>}/>
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;

/*

<Navbar selectPage={this.renderPages} />

{this.state.page==='Home'?<Home/>:this.state.page==='About'?
<About/>:this.state.page==='Contact'?
<Contact/>:this.state.page==='Profile'?
<Profile/>:<Home/>}
*/

/*
<Route path='/data/:somedata'element={<Data/>}/>
*/