import React, { useState } from "react";
                            
export const CustomForm = ({ handleForm }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault(); // preventinam defaultini behaviour - browseris submitinta forma submitina i url, taip perkraudamas brosweri, mes to nennorim
    
    handleForm(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} value={userInput} />

      <button type="submit">Submit</button>
    </form>
  );
};
