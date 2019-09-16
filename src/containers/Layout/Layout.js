import React, { Component, Fragment } from 'react'
import CssStyle from './Layout.css';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
           return { showSideDrawer : !prevState.showSideDrawer }
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer : false });
    }   

    render() {
        return (
            <Fragment>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}  />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={CssStyle.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
    
}

export default Layout
