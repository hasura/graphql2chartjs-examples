import React from 'react';
import Home from './Home';
import ChartWrapper from './ChartWrapper';
import graphqlQueries from './graphql';

const chartTypes = [
  'bar', 'line', 'radar',
  'doughnut', 'pie', 'scatter', 'bubble'
];

const Router = ({ path }) => {
  const chartType = path.slice(1);
  if (chartType === '') {
    return <Home />
  }
  if (chartTypes.includes(chartType)) {
    return <ChartWrapper type={chartType} query={graphqlQueries[chartType]}/>;
  }
  return (
    <div style={{margin: '10px'}}>
      <h3>Page not found</h3>
    </div>
  )
}

export default Router;
