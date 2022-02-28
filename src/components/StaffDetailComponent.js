import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

function RenderStaff({staff, departmentName }) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <Card>
                        <CardImg src="/assets/images/user.png" alt={staff.name}/>
                    </Card>
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                    <Card>
                        <CardBody>
                            <CardTitle>Họ và tên: {staff.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {departmentName.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

const StaffDetail = (props) => {
    if (props.staff != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <RenderStaff 
                        staff={props.staff} 
                        departmentName={props.departmentName}
                    />;
                </div>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

export default StaffDetail;