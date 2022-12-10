import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserDataPhoto} from "../../redux/authReducer";
import {loginAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        loginAPI.login().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserData(id, email, login);
                profileAPI.getProfile(id).then(data => {
                    let photo = data.data.photos.small;
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