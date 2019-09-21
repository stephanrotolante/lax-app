import React, {useState, useEffect} from 'react';
import { AppContext }from './AppContext.js';
import Container from './components/Container';
import SideMenu, {SideMenuItem} from './components/SideMenu';
import { NavBarButton  } from './components/Button';
import  { NavBar , NavItem, NavSideBarToggle } from './components/Nav-Bar';
import { Home , TeamTable, AddTeam } from './pages/index';
import Router, { Route } from './components/Router';

export default () => {


     const [url, setURL] = useState('/addteam');
     const [activeNav,activateNav] = useState('home')
     const [visible,setVisible]= useState(false);
     const [hide,hideButtons] = useState(false)
     

     useEffect(() => {
      visible?document.querySelector('.side-menu').style.width = "150px":document.querySelector('.side-menu').style.width = "0"
     },[visible])

     useEffect(() => {
     },[activeNav])

     useEffect(() => {
     },[url]);


     const updateSideBar = () => {
      if (window.innerWidth > 776) {
        setVisible(false);
        hideButtons(false);
      } else { 
        hideButtons(true);
      }
    };
  
    useEffect(() => {

      updateSideBar()
      window.addEventListener('resize', updateSideBar);
  
      return () => window.removeEventListener('resize', updateSideBar);
    },[]);



     return (
        <AppContext.Provider value={{url,setURL,activateNav,activeNav,visible,setVisible,hide}}>
            <Container>
              <SideMenu>
                 <SideMenuItem name='home'>Home</SideMenuItem>
                 <SideMenuItem name='boys'>Boys</SideMenuItem>
                 <SideMenuItem name='girls'>Girls</SideMenuItem>
              </SideMenu>
              <NavBar>
                {hide &&<NavSideBarToggle />}

                {!hide && <NavItem name='home'>Home</NavItem>}
                {!hide && <NavItem name='boys'>Boys</NavItem>}
                {!hide && <NavItem name='girls'>Girls</NavItem>}
              </NavBar>
              <Router>
                <Route path="/home" component={Home}/>
                <Route path="/boys" component={TeamTable}/>
                <Route path="/girls" component={TeamTable}/>
                <Route path="/addteam" component={AddTeam} />
              </Router>
            </Container>
        </AppContext.Provider>
     );
}





