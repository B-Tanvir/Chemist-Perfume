import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const RequireAuth = ({children}) => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth);
    if (!loading && !user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;