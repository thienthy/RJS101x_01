import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const staffList = this.props.staffs.map(staff => {
            return (
                <div key={staff.id} className="col-6 col-md-4 col-lg-2 mt-3">
                    <Card>
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
            </div>
        );
    }
}

export default StaffList;
