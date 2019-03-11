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
  'bubble': Bubble,
  'mixed': Bar
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
                const g2c = new graphql2chartjs();
                g2c.add(
                  data,
                  (
                    type === 'mixed' ? (dataSetName, dataPoint) => {
                      if (dataSetName === 'VideoGamesFollowers') {
                        return { 'yAxisID': 'A', chartType: 'bar' }
                      }
                      return {
                        chartType: 'line',
                        data: dataPoint.data,
                        yAxisID: 'B'
                      }
                    } : type
                  )
                );
                if (type === 'mixed') {
                  console.log(g2c.data);
                }
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
                if (type === 'mixed') {
                  options = {
                    legend: {
                      labels: {
                        boxWidth: 0
                      },
                      display: false
                    },
                    scales: {
                      yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        scaleLabel: {
                          display: true,
                          labelString: 'Video game followers',
                        },
                        id: 'A',
                      }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'right',
                        scaleLabel: {
                          display: true,
                          labelString: 'Video game price in dollars',
                        },
                        id: 'B',
                      }],
                    }
                  }
                }
                return (
                  <Chart
                    data={g2c.data}
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
