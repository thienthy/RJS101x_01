import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStaff } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments
    }
}

const mapDispatchToProps = (dispatch) => ({
    addStaff: (newStaff) => dispatch(addStaff(newStaff))
})

class Main extends Component {

    render() {

        const StaffWithId = ({match}) => {
            return(
                <StaffDetail staff={this.props.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
            );
        }
        
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={() =>
                        <StaffList staffs={this.props.staffs} 
                                    handleAddStaff={this.props.addStaff} />} />
                    <Route exact path="/staff" component={() =>
                        <StaffList staffs={this.props.staffs} 
                                    handleAddStaff={this.props.addStaff} />} />
                    <Route path="/department" component={() => <Department departments={this.props.departments} />} />
                    <Route path="/salary" component={() => <Salary staffs={this.props.staffs} />} />
                    <Route path="/staff/:staffId" component={StaffWithId} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
