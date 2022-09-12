import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const onLogin = () => {
        console.log("onLogin");
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        console.log("onLogOut");
        localStorage.setItem("auth", "");
    };

    const isAuth = localStorage.getItem("auth") === "token";

    return (
        <Card>
            <Component onLogin={onLogin} onLogOut={onLogOut} isAuth={isAuth} />
        </Card>
    );
};

export default withFunctions;
