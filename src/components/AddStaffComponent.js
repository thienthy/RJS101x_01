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
            image: '/assets/images/user.png',
            isOpenModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ isOpenModal: !this.state.isOpenModal });
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.toggleModal} color="primary" className="addButton">
                    <span className="fa fa-plus"></span>
                </Button>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                        <ModalBody>

                        </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default AddStaff;