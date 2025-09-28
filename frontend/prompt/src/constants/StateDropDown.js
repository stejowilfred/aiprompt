import React from "react";
import { useAuth } from "../context/AuthProvider";


const states = [
  { value: "37", label: "Andhra Pradesh" },
  { value: "12", label: "Arunachal Pradesh" },
  { value: "18", label: "Assam" },
  { value: "10", label: "Bihar" },
  { value: "22", label: "Chhattisgarh" },
  { value: "07", label: "Delhi" },
  { value: "30", label: "Goa" },
  { value: "24", label: "Gujarat" },
  { value: "06", label: "Haryana" },
  { value: "02", label: "Himachal Pradesh" },
  { value: "01", label: "Jammu and Kashmir" },
  { value: "20", label: "Jharkhand" },
  { value: "29", label: "Karnataka" },
  { value: "32", label: "Kerala" },
  { value: "31", label: "Lakshadweep Islands" },
  { value: "23", label: "Madhya Pradesh" },
  { value: "27", label: "Maharashtra" },
  { value: "14", label: "Manipur" },
  { value: "17", label: "Meghalaya" },
  { value: "15", label: "Mizoram" },
  { value: "13", label: "Nagaland" },
  { value: "21", label: "Odisha" },
  { value: "34", label: "Puducherry" },
  { value: "03", label: "Punjab" },
  { value: "08", label: "Rajasthan" },
  { value: "11", label: "Sikkim" },
  { value: "33", label: "Tamil Nadu" },
  { value: "36", label: "Telangana" },
  { value: "16", label: "Tripura" },
  { value: "09", label: "Uttar Pradesh" },
  { value: "05", label: "Uttarakhand" },
  { value: "19", label: "West Bengal" },
  { value: "35", label: "Andaman and Nicobar Islands" },
  { value: "04", label: "Chandigarh" },
  { value: "26", label: "Dadra & Nagar Haveli and Daman & Diu" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Other Territory", label: "Other Territory" },
];
const sortedStates = states.sort((a, b) => a.label.localeCompare(b.label));

const StateDropdown = ({ stateChange, value, onKeyDown, ref }) => {

  const {settings}=useAuth();
  
  return (
    <select
      name="state"
      className="form-select"
      value={value}
      onChange={stateChange}
      onKeyDown={onKeyDown}
      ref={ref}
    >
      <option value="">Select</option>
      {settings?.stateList?.map((state) => (
        <option key={state.gst_code} value={state.gst_code}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default StateDropdown;
