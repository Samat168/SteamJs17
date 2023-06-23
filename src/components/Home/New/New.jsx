import React from "react";
import "./new.css";
import WindowIcon from "@mui/icons-material/Window";

const New = ({ free }) => {
  return (
    <div style={{ width: "65%", margin: "auto" }}>
      {free.map((item) => (
        <div key={item.id} style={{ display: "flex" }}>
          <div>
            <img src={item.pic1} alt="" />
          </div>
          <div>
            <h3>{item.title}</h3>
            <WindowIcon sx={{ color: "#c6d4df" }} />
            <h3>{item.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default New;
