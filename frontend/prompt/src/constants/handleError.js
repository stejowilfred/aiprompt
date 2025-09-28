import Messages from "./Messages";
const handleError = (error, showAlert) => {
    if (!error) {
        showAlert("error", Messages.ERROR.SERVER_ERROR);
        return;
    }
    if (error.message === "NO_INTERNET") {
        showAlert("error", Messages.ERROR.NETWORK_ERROR);
    } else if (error.code === "ERR_NETWORK") {
        showAlert("error", Messages.ERROR.SERVER_DOWN);
    } else if (error.response) {
        const responseData = error.response.data || {};
        switch (error.response.status) {
            case 400:
                showAlert("warning", responseData.message || Messages.ERROR.BAD_REQUEST);
                break;
            case 401:
                showAlert("error", responseData.message || Messages.ERROR.UNAUTHORIZED);
                break;
            case 403:
                showAlert("error", responseData.message || Messages.ERROR.UNAUTHORIZED_ACCESS);
                break;
            case 404:
                showAlert("warning", responseData.message || Messages.ERROR.NOT_FOUND);
                break;
            case 409:
                showAlert("warning", responseData.message || Messages.ERROR.CONFLICT);
                break;
            case 500:
                showAlert("error", responseData.message || Messages.ERROR.SERVER_ERROR);
                break;
            default:
                showAlert("warning", responseData.message || Messages.ERROR.SERVER_ERROR);
                break;
        }
    } else {
        showAlert("warning", error.message || Messages.ERROR.UNKNOWN_ERROR);
    }
};
export default handleError;