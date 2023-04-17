import PropTypes from 'prop-types';
import React  from "react";


const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <>
        <p className="stats"> Good: {good} </p>
        <p className="stats"> Neutral: {neutral} </p>
        <p className="stats"> Bad: {bad} </p>
        <p className="stats"> Total: {total} </p>
        <p className="stats"> Positive feedback: {positivePercentage}%</p>

    </> 
)

Statistics.propTypes ={
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
} 

export default Statistics;