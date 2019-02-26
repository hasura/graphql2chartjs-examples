import React from 'react';
import ChartWrapper from './ChartWrapper';
import graphqlQueries from './graphql';

const chartTypes = [
  'bar', 'line', 'radar',
  'doughnut', 'pie', 'scatter', 'bubble'
];

const Home = ({ path }) => {
  return (
    <div style={{margin: '10px', paddingTop: '65px'}}>
      {
        chartTypes.map((ct) => (
          <div key={ct}>
            <ChartWrapper type={ct} query={graphqlQueries[ct]}/>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default Home;
