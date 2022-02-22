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
        }
    }
    render() {
        return (
            <React.Fragment>
                <Button onClick={this.toggleModal} color="primary" className="addButton">
                    <span className="fa fa-plus"></span>
                </Button>
            </React.Fragment>
        )
    }
}

export default AddStaff;