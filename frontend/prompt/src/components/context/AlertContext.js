import React, { createContext, useState, useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });

    const showAlert = (severity, message) => {
        setAlert({ open: true, severity, message });
    };

    const handleClose = () => {
        setAlert(prev => ({ ...prev, open: false }));
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClose} severity={alert.severity} variant="filled" style={{ fontWeight: 400 }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </AlertContext.Provider>
    );
};

export const useShowAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useShowAlert must be used within an AlertProvider");
    }
    return context.showAlert;
};