import React from "react";

// item.complete ? "complete" : "incomplete"
// if (item.complete === true) {
//   "complete"
// } else  {
//   "incomplete"
// }
{/* <li class="complete"></li> */}
// item = {
//   value: "string",
//   complete: true/false
// }
export const Item = ({ item, func1, func2 }) => {
  return (
    <li className={item.complete ? "complete" : "incomplete"}>
      <h4 >{item.value}</h4>
      <button onClick={func1}>Remove</button>
      <button onClick={func2}>Complete</button>
    </li>
  );
};
