import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ActionCreaters from '../../redux/action/actionCreaters.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, WingBlank, WhiteSpace, DatePicker, List, Toast } from 'antd-mobile';

const Index = () => {
    return (
        <>
        <h2>鹏哥～最帅</h2>
        <Link to='/detail'>Detail</Link>
        </>
    )
}
export default Index;