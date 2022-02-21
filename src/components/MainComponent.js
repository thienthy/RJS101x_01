import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            staffs: STAFFS,
            departments: DEPARTMENTS
        })
    }

    render() {
        
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" to component={() =><StaffList staffs={this.state.staffs} />} />
                    <Route exact path="/staff" to component={() =><StaffList staffs={this.state.staffs} />} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;