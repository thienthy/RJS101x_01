// import React, { useState } from 'react';
import React, { Component } from 'react';
import { Input, Label, Modal, ModalHeader, ModalBody,
    Button, Row, Col, Form, FormGroup, FormFeedback } from 'reactstrap';

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
            image: '/assets/images/alberto.png',
            isOpenModal: false,
            touched: {
                name: false,
                doB: false,
                startDate: false
            }
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    toggleModal() {
        this.setState({ isOpenModal: !this.state.isOpenModal });
    }

    handleSubmit(e) {
    
        this.props.handleAddStaff(e);
        console.log(e);
        e.preventDefault();
    }

    handleInputChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true } 
        });
    }

    validate(name, doB, startDate) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
        };

        if (this.state.touched.name && name === '')
            errors.name = 'Yêu cầu nhập';
        else if (this.state.touched.name && name.length < 3) 
            errors.name = 'Yêu cầu nhiều hơn 2 kí tự';
        else if (this.state.touched.name && name.length >= 16)
            errors.name = 'Yêu cầu ít hơn 30 kí tự';

        if (this.state.touched.doB && doB === '')
            errors.doB = 'Yêu cầu nhập';

        if (this.state.touched.startDate && startDate === '')
            errors.startDate = 'Yêu cầu nhập';

        return errors;
    } 
    render() {

        const errors = this.validate(this.state.name, this.state.doB, this.state.startDate);

    return (
        <React.Fragment>
            <Button onClick={this.toggleModal} type="submit" color="primary" className="addButton">+</Button>
            <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader >
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Row>
                                <Label htmlFor="name" md={4}>Họ và tên</Label>
                                <Col md={8}>
                                    <Input type="text" id="name" name="name" 
                                        value={this.state.name}
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange} />
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
                                        onChange={this.handleInputChange} />
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
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label htmlFor="department" md={4}>Phòng ban</Label>
                                <Col md={8}>
                                    <Input type="select" id="department" name="department" 
                                        value={this.state.department}
                                        onChange={this.handleInputChange} >
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option>
                                    </Input>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                <Col md={8}>
                                    <Input type="text" id="salaryScale" name="salaryScale" 
                                        value={1}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                <Col md={8}>
                                    <Input type="text" id="annualLeave" name="annualLeave" 
                                        value={0}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                <Col md={8}>
                                    <Input type="text" id="overTime" name="overTime" 
                                        value={0}
                                        onChange={this.handleInputChange} />
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

// function AddStaff(props) {
//     const [open, setOpen] = useState(false)
//     const [newStaff, setNewStaff] = useState({
//         id: "",
//         name: "",
//         doB: "",
//         salaryScale: "",
//         startDate: "",
//         department: "",
//         annualLeave: "",
//         overTime: "",
//         salary: "",
//         image: '/assets/images/alberto.png',
//     })

//     const toggleModal = () => {
//         setOpen(!open)
//     }

//     const handleSubmit = (event) => {
//         toggleModal();
//         props.handleAddStaff(newStaff)
//         event.preventDefault();
//     }

//     handleInput = (e) => {
//         this.setState({
//           [e.target.name]: e.target.value,
//         });
//       };

//     return (
//         <React.Fragment>
//             <Button onClick={toggleModal} type="submit" color="primary" className="addButton">+</Button>
//             <Modal isOpen={open} toggle={toggleModal}>
//                 <ModalHeader toggle={toggleModal}>Thêm nhân viên</ModalHeader >
//                 <ModalBody>
//                     <Form onSubmit={handleSubmit}>
//                         <FormGroup>
//                             <Row>
//                                 <Label htmlFor="name" md={4}>Họ và tên</Label>
//                                 <Col md={8}>
//                                     <Input type="text" id="name" name="name" value={newStaff.name}
//                                         valid={errors.name === ''}
//                                         invalid={errors.name !== ''}
//                                         onBlur = {handleBlur('name')}
//                                         onChange = {(e) => {
//                                             setNewStaff({...newStaff, name: e.target.value });
//                                         }} />
//                                     <FormFeedback>{errors.name}</FormFeedback>
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup>
//                             <Row>
//                                 <Label htmlFor="doB" md={4}>Ngày sinh</Label>
//                                 <Col md={8}>
//                                     <Input type="date" id="doB" name="doB" value={newStaff.doB} 
//                                         onChange = {(e) => {
//                                             setNewStaff({...newStaff, doB: e.target.value });
//                                         }} />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup>
//                             <Row>
//                                 <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
//                                 <Col md={8}>
//                                     <Input type="date" id="startDate" name="startDate" value={newStaff.startDate}
//                                         onChange = {(e) => {
//                                             setNewStaff({...newStaff, startDate: e.target.value });
//                                         }} />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup>
//                             <Row>
//                                 <Label htmlFor="department" md={4}>Phòng ban</Label>
//                                 <Col md={8}>
//                                     <Input type="select" id="department" name="department" value={newStaff.department}
//                                         onChange = {(e) => {
//                                             setNewStaff({...newStaff, department: e.target.value });
//                                         }}>
//                                         <option></option>
//                                         <option>Sale</option>
//                                         <option>HR</option>
//                                         <option>Marketing</option>
//                                         <option>IT</option>
//                                         <option>Finance</option>
//                                     </Input>
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup>
//                             <Row>
//                                 <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
//                                 <Col md={8}>
//                                     <Input type="text" id="salaryScale" name="salaryScale" value={newStaff.salaryScale}
//                                         onChange = {(e) => {
//                                             setNewStaff({...newStaff, salaryScale: e.target.value });
//                                         }} />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup>
//                             <Row>
//                                 <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
//                                 <Col md={8}>
//                                     <Input type="text" id="annualLeave" name="annualLeave" value={newStaff.annualLeave}
//                                         onChange = {(e) => {
//                                             setNewStaff({...newStaff, annualLeave: e.target.value });
//                                         }} />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup>
//                             <Row>
//                                 <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
//                                 <Col md={8}>
//                                     <Input type="text" id="overTime" name="overTime" value={newStaff.overTime}
//                                         onChange = {(e) => {
//                                             setNewStaff({...newStaff, overTime: e.target.value });
//                                         }} />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <Button type="submit" color="primary">Thêm</Button>
//                     </Form>
//                 </ModalBody>
//             </Modal>
//         </React.Fragment>
//     );
// }

export default AddStaff;