import InterviewerListItem from './InterviewerListItem';
import "components/InterviewerList.scss";
import React from 'react';
import PropTypes from 'prop-types';

export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

  const interviewerArr = props.interviewers.map((interviewer) => {
    return (
        <InterviewerListItem
        key={interviewer.id}
        //id={interviewer.id} 
        name={interviewer.name} 
        avatar={interviewer.avatar} 
        selected={interviewer.id === props.interviewer} 
        setInterviewer={event => props.setInterviewer(interviewer.id)}
        //setInterviewer={props.setInterviewer} 
      />
      
    )
  })
  
  return (
    <section className="interviewers" >
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
        {interviewerArr}
    </ul>
  </section>
  )
}