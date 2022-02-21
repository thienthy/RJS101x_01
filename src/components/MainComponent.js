import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
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

        const StaffWithId = ({match}) => {
            return(
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
            );
        }
        
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={() =><StaffList staffs={this.state.staffs} />} />
                    <Route exact path="/staff" component={() =><StaffList staffs={this.state.staffs} />} />
                    <Route path="/staff/:staffId" component={StaffWithId} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;