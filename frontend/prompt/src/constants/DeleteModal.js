import React from "react";
import { CircularProgress } from "@mui/material";

const DeleteModal = ({ onClose, onConfirm, isLable, isBtnLoading }) => {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <div>
            <div className="modal-backdrop show"></div>
            <div
                className="modal show"
                id="DeleteModal"
                aria-modal="true"
                role="dialog"
                onClick={onClose}
                style={{ display: "block" }}>

                <div
                    className="modal-dialog modal-md modal-dialog-scrollable"
                    onClick={stopPropagation}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }} >
                    <div className="modal-content border-0">
                        <div className="modal-header" style={{ backgroundColor: "#e11900" }}>
                            <h5 className="modal-title" style={{ color: "#ffffff" }}>
                                Confirm Deletion
                            </h5>
                            <button
                                type="button"
                                onClick={onClose}
                                className="btn-close-white"
                                style={{ color: "#ffffff" }}
                            ><i className="bx bx-close"></i></button>
                        </div>

                        <div className="modal-body">
                            <p className="mb-0">
                                Are you sure you want to delete this <strong>{isLable}</strong>? <br></br> This action cannot be undone.
                            </p>
                        </div>

                        <div className="modal-footer d-flex justify-content-between">
                            <button
                                type="button"
                                onClick={onClose}
                                className="btn btn-outline-secondary">
                                <i className="bx bx-x" style={{ fontSize: "20px" }}></i> Cancel
                            </button>
                            { isBtnLoading ? (
                                <button className="btn btn-danger pb-0 text-right" disabled>
                                    <CircularProgress size={22} className="text-white" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={onConfirm}
                                    className="btn btn-danger">
                                    <i className="bx bx-trash" style={{ fontSize: "20px" }}></i> Delete
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;