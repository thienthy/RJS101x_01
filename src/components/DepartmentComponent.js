import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const Department = (props) => {
    const department = props.departments.map((department) => {
        return (
            <div key={department.id} className="col-12 col-md-6 col-lg-4 my-2">
                <Card>
                    <CardBody>                                
                        <CardText><h2>{department.name}</h2></CardText>
                        <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    });
    
    return(
        <div className="container">                
            <div className="row">
                {department}
            </div>
        </div>
    );    }


      

export default Department;