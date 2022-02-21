import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardBody, Button } from 'reactstrap';
import dateFormat from 'dateformat';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null,
            click: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    onStaffSelect(staff) {
        this.setState({
            selectedStaff: staff
        });
    }

    handleToggle() {
        this.setState({
            click: !this.state.click
        })
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const staffList = this.props.staffs.map(staff => {
            return (
                <div key={staff.id} className={this.state.click ? "col-6 col-sm-4 col-md-2 mt-3" : "col-12 col-sm-6 col-md-4 mt-3"}>
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle className="text-center">{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                <div className="my-2">
                    <p>Bấm vào tên nhân viên để xem thông tin</p>
                </div>
                <Button onClick={this.handleToggle}>Thay đổi giao diện</Button>
                <div className="row">
                    <div className="col-12 col-md-5 mt-3">
                        {this.renderStaff(this.state.selectedStaff)}
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffList;
