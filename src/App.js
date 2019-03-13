import React from 'react';
import './App.css';
import NavBar from './Navbar';

import {
  BasicBarChart,
  // BarExample,
  // MultiDatasetExample,
  // MixedTypesExample,
  // RealtimeLiveChartExample,
  // RealtimeTimeSeriesExample
} from './charts';

const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{margin: '10px', paddingTop: '65px'}}>
        <BasicBarChart/>
        {
          /*
        <BarExample />
        <MultiDatasetExample />
        <MixedTypesExample />
        <RealtimeLiveChartExample />
        <RealtimeTimeSeriesExample />
          */
        }
       </div>
    </div>
  )
}

export default App;
