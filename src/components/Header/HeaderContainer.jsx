import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserDataPhoto} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, email, login);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id).then(response => {
                    let photo = response.data.photos.small;
                    this.props.setAuthUserDataPhoto(photo);
                });
            }
        });
    }


    render() {
        return <Header {...this.props}></Header>
    }


}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.photo
});


export default connect(mapStateToProps, {setAuthUserData, setAuthUserDataPhoto})(HeaderContainer);