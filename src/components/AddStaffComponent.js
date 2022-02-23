import React, { Component } from 'react';
import { Input, Label, Modal, ModalHeader, ModalBody,
    Button, Row, Col, Form, FormGroup, FormFeedback } from 'reactstrap';
import { DEPARTMENTS } from '../shared/staffs';

class AddStaff extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
            salary: '',
            image: '/assets/images/user.png',
            isOpenModal: false,
            touched: {
                name: false,
                doB: false,
                startDate: false,
                department: false,
                salaryScale: false,
                annualLeave: false,
                overTime: false
            }
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddStaff = this.handleAddStaff.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    toggleModal() {
        this.setState({ isOpenModal: !this.state.isOpenModal });
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({
            [name]: value,
        });
    }

    handleAddStaff(e) {
        e.preventDefault();
        this.setState({
            touched: { 
                ...this.state.touched, doB: true, name: true, startDate: true,
                department: true, salaryScale: true, annualLeave: true, overTime: true
            }
        });
        const errors = this.validate(this.state.name && this.state.doB && this.state.startDate && this.state.department
            && this.state.salaryScale && this.state.annualLeave && this.state.overTime)
            if (errors.flag === true) {
                return
            } else {
            const newStaff = {
                id: this.props.staffs.length,
                name: this.state.name,
                doB: this.state.doB,
                salaryScale: this.state.salaryScale,
                startDate: this.state.startDate,
                department: DEPARTMENTS.find(department => department.id === this.state.department),
                annualLeave: this.state.annualLeave,
                overTime: this.state.overTime,
                image: this.state.image,
            }
            this.toggleModal();
            this.props.handleAddStaff(newStaff);
        }
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, doB, startDate, department, salaryScale, annualLeave, overTime) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
            department: '',
            salaryScale: '',
            annualLeave: '',
            overTime: '',
            flag: false
        };

        if (name === ''|| doB === ''|| startDate === ''|| department === ''||
            salaryScale === ''|| annualLeave === ''|| overTime === '') {
                errors.flag = true;
            }

        if (this.state.touched.name && name === '') {
            errors.name = "Bạn chưa nhập tên";
        } else if ( this.state.touched.name && name.length < 3) {
            errors.name = "Tên phải nhiều hơn 2 kí tự";
        } else if (this.state.touched.name && name.length >= 30) {
            errors.name = "Tên phải ít hơn 30 kí tự";
        }

        if (this.state.touched.doB && doB === '') {
            errors.doB = "Bạn chưa chọn ngày tháng năm sinh";
        }

        if (this.state.touched.startDate && startDate === '') {
            errors.startDate = "Bạn chưa chọn ngày vào làm";
        } else if (this.state.touched.startDate && startDate <= doB) {
            errors.startDate = "Ngày vào làm phải lớn hơn ngày sinh"
        }

        if (this.state.touched.department && department === '') {
            errors.department = "Bạn chưa chọn bộ phận";
        }

        if (this.state.touched.salaryScale && salaryScale === '') {
            errors.salaryScale = "Bạn chưa nhập hệ số lương";
        }
        else if (this.state.touched.salaryScale && salaryScale < 1) {
            errors.salaryScale = "Hệ số lương tối thiểu bằng 1";
        }

        if (this.state.touched.annualLeave && annualLeave === '') {
            errors.annualLeave = "Bạn chưa nhập ngày nghỉ phép";
        }

        if (this.state.touched.overTime && overTime === '') {
            errors.overTime = "Bạn chưa nhập số ngày tăng ca";
        }

        return errors;
    }
    render() {
        const errors = this.validate(
            this.state.name,
            this.state.doB,
            this.state.startDate,
            this.state.department,
            this.state.salaryScale,
            this.state.annualLeave,
            this.state.overTime
        );
        return (
            <React.Fragment>
                <Button onClick={this.toggleModal} color="primary" className="addButton">
                    <span className="fa fa-plus"></span>
                </Button>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleAddStaff}>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="name" md={4}>Họ và tên</Label>
                                    <Col md={8}>
                                        <Input type="text" id="name" name="name"
                                            value={this.state.name}
                                            valid={errors.name === ''}
                                            invalid={errors.name !== ''}
                                            onBlur={this.handleBlur('name')}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.name}</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                    <Col md={8}>
                                        <Input type="date" id="doB" name="doB"
                                            value={this.state.doB}
                                            valid={errors.doB === ''}
                                            invalid={errors.doB !== ''}
                                            onBlur={this.handleBlur('doB')}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.doB}</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                    <Col md={8}>
                                        <Input type="date" id="startDate" name="startDate"
                                            value={this.state.startDate}
                                            valid={errors.startDate === ''}
                                            invalid={errors.startDate !== ''}
                                            onBlur={this.handleBlur('startDate')}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.startDate}</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="department" md={4}>Phòng ban</Label>
                                    <Col md={8}>
                                        <Input type="select" id="department" name="department"
                                            value={this.state.doB} 
                                            valid={errors.department === ''}
                                            invalid={errors.department !== ''}
                                            onBlur={this.handleBlur('department')}
                                            onChange={this.handleInputChange} 
                                        >
                                            <option value="" disabled>Select Department</option>
                                            <option value="Dept01">Sale</option>
                                            <option value="Dept02">HR</option>
                                            <option value="Dept03">Marketing</option>
                                            <option value="Dept04">IT</option>
                                            <option value="Dept05">Finance</option>
                                        </Input>
                                        <FormFeedback>{errors.department}</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                    <Col md={8}>
                                        <Input type="text" id="salaryScale" name="salaryScale"
                                            value={this.state.salaryScale}
                                            valid={errors.salaryScale === ''}
                                            invalid={errors.salaryScale !== ''}
                                            onBlur={this.handleBlur('salaryScale')}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.salaryScale}</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                    <Col md={8}>
                                        <Input type="text" id="annualLeave" name="annualLeave"
                                            value={this.state.annualLeave}
                                            valid={errors.annualLeave === ''}
                                            invalid={errors.annualLeave !== ''}
                                            onBlur={this.handleBlur('annualLeave')}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.annualLeave}</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                    <Col md={8}>
                                        <Input type="text" id="overTime" name="overTime"
                                            value={this.state.overTime}
                                            valid={errors.overTime === ''}
                                            invalid={errors.overTime !== ''}
                                            onBlur={this.handleBlur('overTime')}
                                            onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.overTime}</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Button type="submit" color="primary">Thêm</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default AddStaff;