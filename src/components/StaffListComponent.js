import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {staff.doB}</CardText>
                        <CardText>Ngày vào công ty: {staff.startDate}</CardText>
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
                <div key={staff.id} className="col-6 col-md-4 col-lg-2 mt-3">
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div classname="container">
                <div className="row">
                    {staffList}
                </div>
                <div className="my-2">
                    <p>Bấm vào tên nhân viên để xem thông tin</p>
                </div>
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
