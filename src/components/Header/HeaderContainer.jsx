import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.login);
            }
        });
    }


    render() {
        return <Header {...this.props}></Header>
    }


}

const mapStateToProps = (state) => ({});


export default connect(mapStateToProps, setAuthUserData)(HeaderContainer);