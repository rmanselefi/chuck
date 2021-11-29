import React, { useState } from "react";
import "./jumbotron.css";
import Autocomplete from "react-autocomplete";

function Jumbotron(props) {
  let [value, setValue] = useState("");
  let { jokes } = props;
  return (
    <div className="content">
      <h2 className="title" align="center">
        The Joke Bible
      </h2>

      <h4 className="description" align="center">
        Daily laughs for you and yours
      </h4>

      <Autocomplete
        getItemValue={(item) => item.value}
        items={jokes}
        renderItem={(item, isHighlighted) => (
          <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
            {item.value}
          </div>
        )}
        renderInput={(props) => {
          return (
            <input
              type="text"
              align="center"
              placeholder="How can we make you laugh today?"
              className="search"
              {...props}
            />
          );
        }}
        renderMenu={(items,val,style)=>{
          return <div className="auto-complete" children={items}/>
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSelect={(val) => setValue(val)}
      />
    </div>
  );
}

export default Jumbotron;
