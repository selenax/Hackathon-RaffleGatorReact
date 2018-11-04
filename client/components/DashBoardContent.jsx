import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const DashBoardContent = ({entry}) => {
  return (
    <div>
      <li className="dashboard-item">
        <div className="dashboard-item-title" onClick={() => handleClick(entry)}>{entry.title}</div>
        <div className="dashboard-item-date">{entry.startDate}</div>
        <div className="dashboard-item-date">{entry.endDate}</div>
        <img src={entry.image} onClick={() => handleClick(item)} className="dashboard-item-image"/>

      </li>
    </div>
  );
};


export default DashBoardContent;
