import React from "react";
import "components/DayListItem.scss";
var classnames = require('classnames');

export default function DayListItem(props) {
    const daylistClass = classnames("day-list__item", {
        "day-list__item--selected": props.selected === true,
        "day-list__item--full": props.spots === 0
      });
      
      const formatSpots = function(){
          if (props.spots === 0)
          return "no spots remaining";
          if(props.spots === 1)
          { return `${props.spots} spot remaining`}
          if(props.spots > 1)
          { return `${props.spots} spots remaining`}
      }

    return (
      <li onClick={() => props.setDay(props.name)}>
        <h2 className={daylistClass}>{props.name}</h2>
        <h3 className={daylistClass}>{formatSpots()}</h3>
      </li>
    );
  }