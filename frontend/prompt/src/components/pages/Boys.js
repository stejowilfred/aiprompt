import React from "react";
import { useShowAlert } from "../context/AlertContext";

const Boys = () => {
  const showAlert = useShowAlert();

  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      showAlert("success", "text copied.. !");
    } catch (err) {
      showAlert("error", "Failed to copy!");
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <div>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="page-breadcrumb d-flex align-items-center">
            <div className="breadcrumb-title pe-3 py-2 pt-0">Boys</div>{" "}
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="card radius-10 mb-0">
                <div className="card-body px-2">
                  <img
                    src="favicon.png"
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    onClick={() => handleCopy("hi am stejo")}
                    className="pointer"
                  >
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </span>
                    <i
                      className="bx bx-copy ms-2"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boys;
