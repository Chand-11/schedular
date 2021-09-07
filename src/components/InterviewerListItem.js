import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";

export default function InterviewListItem(props) {
    
    const interviewlistClass = classnames("interviewers__item", {
        "interviewers__item--selected": props.selected === true,
      });

    return (
        <li className={interviewlistClass} onClick={props.setInterviewer}>
            <img
                className="interviewers__item-image"
                src= {props.avatar}
                alt={props.name}
            />
            {props.selected && props.name}
        </li>
    );
}