import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    if (!isAuth) {
        return (
            <button className="btn btn-primary mt-2" onClick={onLogin}>
                Войти
            </button>
        );
    }
    return (
        <button className="btn btn-primary mt-2" onClick={onLogOut}>
            Выйти из системы
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
