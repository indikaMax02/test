import React, {Component} from "react";
import {Button, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import PostService from "../../services/adminService/adminService";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                userName: '',
                password: '',
                city: '',
                street: '',
                streetNo: '',
                zipCode: '',
                latValue: '',
                longValue: '',
                mobileNo: ''
            },

            alert: false,
            message: '',
            severity: ''
        }
    }

    saveCustomer = async() => {
        const customerDts = {
            "email": this.state.email,
            "username": this.state.userName,
            "password": this.state.password,
            "name": {
                "firstname": this.state.firstName,
                "lastname": this.state.lastName
            },
            "address": {
                "city": this.state.city,
                "street": this.state.street,
                "number": this.state.streetNo,
                "zipcode": this.state.zipCode,
                "geolocation": {
                    "lat": this.state.latValue,
                    "long": this.state.longValue
                }
            },
            "phone": this.state.mobileNo
        }

        let response = await PostService.createPost(customerDts);
        if (response.status===200){
            alert("Post Creates")
        }else{
            alert("un success")
        }

    }

    handleSubmit = async () => {

    }

    render() {
        return (
            <>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={1}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="body1"><b><h1>User Registration</h1></b></Typography>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>First Name</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="First Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.firstName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.firstName = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Last Name</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Last Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.lastName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.lastName = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Email</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Email"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.email}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.email = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Username</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="User Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.userName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userName = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Password</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Password"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.password}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.password = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>City</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="City"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.city}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.city = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Street</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Street"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.street}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.street = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Street No</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Street No"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.streetNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.streetNo = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Zip Code</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Zip Code"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.zipCode}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.zipCode = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Lat Value</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Lat Value"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.latValue}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.latValue = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Long Value</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Long Value"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.longValue}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.longValue = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Mobile No</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Mobile No"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.mobileNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.mobileNo = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end"
                          container marginTop={"10px"}>
                        <Button size="small" variant="contained" color={"warning"}
                                style={{marginRight: "10px"}}>Clear</Button>
                        <Button size="small" variant="contained" style={{marginRight: "10px"}} label="Save"
                                type="submit"
                                onClick={async () =>{
                                   await this.saveCustomer()
                                }}

                        >Save</Button>
                    </Grid>
                </ValidatorForm>
                <Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">First Name</TableCell>
                                    <TableCell align="right">Last Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">User Name</TableCell>
                                    <TableCell align="right">Password</TableCell>
                                    <TableCell align="right">City</TableCell>
                                    <TableCell align="right">Street</TableCell>
                                    <TableCell align="right">Street No</TableCell>
                                    <TableCell align="right">Zip Code</TableCell>
                                    <TableCell align="right">Lat Value</TableCell>
                                    <TableCell align="right">Long Value</TableCell>
                                    <TableCell align="right">Mobile No</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Grid>

            </>
        );
    }
}

export default UserForm
