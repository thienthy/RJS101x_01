import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderStaffList({ staff }) {
        return(
            <Card>
                <Link to={`/staff/${staff.id}`}>
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                    <div class="text-center">
                        <CardTitle>{staff.name}</CardTitle>      
                    </div>     
                </Link>
            </Card>
        );
    }


    const StaffList = (props) => {
        const staffList = props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-sm-4 col-md-2 my-2">
                    <RenderStaffList staff={staff} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="staff">Nhân Viên</h3>
                        <hr />
                    </div>   
                </div>
                <div className="row">
                    {staffList}
                </div>
            </div>
        );
    }


export default StaffList;