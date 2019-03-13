import React from 'react';
import './App.css';
import NavBar from './Navbar';

import {
  BasicBarExample,
  BarExample,
  MultiDatasetExample,
  MixedTypesExample,
  RealtimeLiveChartExample,
  RealtimeTimeSeriesExample
} from './charts';

const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{margin: '10px', paddingTop: '65px'}}>
        <BasicBarExample />
        <BarExample />
        <MultiDatasetExample />
        <MixedTypesExample />
        <RealtimeLiveChartExample />
        <RealtimeTimeSeriesExample />
       </div>
    </div>
  )
}

export default App;
