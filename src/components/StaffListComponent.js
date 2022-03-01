import React, { useState } from 'react';
import { Card, CardImg, CardTitle, Form, FormGroup, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaffComponent';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderStaffList({ staff }) {
    console.log(staff)
    return(
        <FadeTransform in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card>
                <Link to={`/staff/${staff.id}`}>
                    <CardImg width="100%" src="/assets/images/user.png" alt={staff.name} />
                    <div className="text-center mt-2">
                        <CardTitle>{staff.name}</CardTitle>      
                    </div>     
                </Link>
            </Card>
        </FadeTransform>
    );
}

const StaffList = (props) => {

    // Tìm kiếm nhân viên
    
    const [searchInput, setSearchInput] = useState("");
    const [searchStaff, setSearchStaff] = useState();

    const handleSearch = (event) => {
        event.preventDefault();
        const search = props.staffs.staffs.filter((staff) => 
            staff.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchStaff(search);
    }

    const SearchStaff = (props) => {
        return props.staff.map((staff) => {
            return(
            <div key={staff.id} className="col-12 col-md-4 col-lg-2 my-2">
                <RenderStaffList staff={staff} />
            </div>
            );
        });
    }

    const SearchBar = () => {
        return (
            <div className="col-12 col-md-8 mt-3">
                <Form>
                    <FormGroup row className="form-group">
                        <Col md={10}>
                            <Input type="text" id="name" name="name"
                                value={searchInput}
                                className="form-control"
                                placeholder="Nhập tên nhân viên muốn tìm"
                                onChange = {(e) => setSearchInput(e.target.value)} />
                        </Col>
                        <Col md={2}>
                            <Button type="submit" color="primary" onClick={(event) => handleSearch(event)}>Tìm</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }

    // render UI staffList

    const staffList = props.staffs.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-md-4 col-lg-2 my-2">
                <RenderStaffList staff={staff} />
            </div>
        );
    });

    if (props.staffs.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.staffs.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.staffs.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mt-3">
                        <h3 className="staff">Nhân Viên</h3>
                        <AddStaff 
                            staffs={props.staffs.staffs}
                            handleAddStaff={props.handleAddStaff} 
                        />
                    </div>
                    <SearchBar />
                </div>
                <hr className="mt-0 mb-2"/>
                <div className="row">
                    {searchStaff ? <SearchStaff staff={searchStaff} /> : staffList}
                </div>
            </div>
        );
    }
}

export default StaffList;