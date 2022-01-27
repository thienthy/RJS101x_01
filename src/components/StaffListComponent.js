import React, { useState } from 'react';
import { Card, CardImg, CardTitle, Button,
    Form, FormGroup, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaffComponent';

    function RenderStaffList({ staff }) {
        return(
            <Card>  
                <Link to={`/staff/${staff.id}`} >
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                    <div className="text-center">
                        <CardTitle>{staff.name}</CardTitle>
                    </div>
                </Link>
            </Card>
        );
    }

    const SearchStaff = (props) => {
        return props.staff.map((staff) => {
            return(
            <div key={staff.id} className="col-12 col-md-4 col-lg-2 my-2">
                <RenderStaffList staff={staff} onClick={props.onClick}/>
            </div>
            );
        });
    }

    const StaffList = (props) => {

        // Tìm kiếm nhân viên
        const [searchInput, setSearchInput] = useState("");
        const [searchStaff, setSearchStaff] = useState();

        const handleSearch = (event) => {
            event.preventDefault();
            const searchStaff = props.staffs.filter((staff) => 
                staff.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setSearchStaff(searchStaff);
        }
        
        // 

        const handleAddStaff = (staff) => {
            props.handleAddStaff(staff);
        }

        const staffList = props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-md-4 col-lg-2 my-2">
                    <RenderStaffList staff={staff} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row staff-info">
                    <div className="col-12 col-md-4">
                        <h3 className="staff">Nhân Viên</h3>
                        <AddStaff staff={props.staff} handleAddStaff={handleAddStaff} />
                        <hr />
                    </div>

                    {/* Search input form */}

                    <div className="col-12 col-md-8">
                        <Form>
                            <FormGroup row className="inputSearch">
                                <Col>
                                <Input type="text" id="search" name="search"
                                    value={searchInput}
                                    className="form-control"
                                    placeholder="Nhập tên nhân viên muốn tìm"
                                    onChange = {(e) => setSearchInput(e.target.value)} />
                                    </Col>
                            </FormGroup>
                            <Button type="submit" color="primary" className="btnSearch"
                                onClick={(event) => handleSearch(event)}
                            >Tìm</Button>
                        </Form>
                    </div>
                </div>
                <div className="row">
                    {searchStaff ? <SearchStaff staff={searchStaff} /> : staffList}
                </div>
            </div>
        );
    }


export default StaffList;