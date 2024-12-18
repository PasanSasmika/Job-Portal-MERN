import React from "react";
import SalaryButton from "./SalaryButton";
import InputField from "../components/InputFIeld";

function Salary({ handleClick, handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <SalaryButton onClickHandler={handleClick} value="" title="Hourly" />
        <SalaryButton
          onClickHandler={handleClick}
          value="monthly"
          title="Monthly"
        />
        <SalaryButton
          onClickHandler={handleClick}
          value="yearly"
          title="Yearly"
        />
      </div>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 80000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test2"
        />
      </div>
    </div>
  );
}

export default Salary;
