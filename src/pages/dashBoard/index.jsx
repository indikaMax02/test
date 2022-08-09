import React, {useEffect, useState} from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import {Grid} from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/common/navBar";
import RemoveCookie from "../../hooks/removeCookies";
import {Navigate} from "react-router";
import alertConfirm, { alert } from 'react-alert-confirm';


function DashBoard() {
    const [expire, setExpire] = useState(false)
    const [productPage, setProductPage] = useState(false)
    // const [close,setClose]=useState(false)

   /* var duration = 10
    var moreTime = false
    var close = false

    const setTimer = () => {
        duration = 10
    }

    const checkExpire = () => {
        duration--

        if (close == true) {
            moreTime = true
            RemoveCookie("MyToken")
            setExpire(true)
        }
        if (moreTime == true) {
            if (duration < 1) {
                RemoveCookie("MyToken")
                setExpire(true)
            }
        }

        if (moreTime == false) {
            if (duration < 5) {
                let b = window.confirm('Are you sure you wish to delete this item?');
                if (b) {
                    duration=20
                    moreTime = true
                } else {
                    close = true

                }
            }
        }
    }
        window.addEventListener("mousemove", setTimer)
       setInterval(checkExpire, 1000);*/



        return (
            expire ? <Navigate to="/" replace={true}/> : <>
                <NavBar/>

                <Grid style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
                    <Row style={{marginLeft: '200px'}}>
                        <Col>
                            <Grid style={{
                                alignContent: 'center',
                                height: '300px',
                                width: '456px',
                                background: 'gray',
                                fontSize: '23px'
                            }}>
                                <h1>Products</h1>
                                <h1>60</h1>
                            </Grid>
                        </Col>

                        <Col>
                            <Grid style={{
                                height: '300px',
                                width: '456px',
                                background: 'gray',
                                marginLeft: '4px',
                                fontSize: '23px'
                            }}>
                                <h1>Users</h1>
                                <h1>60</h1>
                            </Grid>
                        </Col>
                    </Row>

                    <Row style={{marginLeft: '150px'}}>
                        <Col>
                            <Grid style={{height: '300px', width: '456px', background: 'gray', fontSize: '23px'}}>
                                <h1>Cart</h1>
                                <h1>60</h1>
                            </Grid>
                        </Col>


                    </Row>

                </Grid>
            </>
        )


}
export default DashBoard