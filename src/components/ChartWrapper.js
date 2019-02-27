import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Line, Bar, Radar, Pie, Doughnut, Scatter, Bubble } from 'react-chartjs-2';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import graphql2chartjs from 'graphql2chartjs';
import '../App.css';

const chartComponents = {
  'line': Line,
  'bar': Bar,
  'radar': Radar,
  'pie': Pie,
  'doughnut': Doughnut,
  'scatter': Scatter,
  'bubble': Bubble
};

const App = ({type, query}) => {
  const Chart = chartComponents[type];
  const title = type[0].toUpperCase() + type.slice(1) + ' chart';
  return (
    <div style={{marginBottom: '20px'}} id={type}>
      <h2 style={{margin: '10px', textAlign: 'center'}}>{title}</h2>
      <div className="chartWrapper">
        <div className="half_screen">
          <SyntaxHighlighter
            language="graphql"
            style={docco}
          >
            {query}
          </SyntaxHighlighter>
        </div>
        <div className="half_screen">
          <Query
            query={gql`${query}`}
          >
            {
              ({data, error, loading}) => {
                if (loading) {
                  return <div className="loadingIndicator">Loading</div>;
                }
                if (error) {
                  console.error(error);
                  return <div className="loadingIndicator">Error</div>;
                }
                let chartJSData = graphql2chartjs(type, data);
                let options = {}
                if (type === 'bar' || type === 'line' || type === 'radar') {
                  options = {
                    legend: {
                      labels: {
                        boxWidth: 0
                      }
                    }
                  }
                }
                return (
                  <Chart
                    data={chartJSData}
                    options={options}
                  />
                )
              }
            }
          </Query>
        </div>
      </div>
    </div>
  )
}

export default App;
