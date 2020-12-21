import logo from './logo.svg';
import './App.css';

import { VictoryChart, VictoryAxis, VictoryBar, VictoryTheme, VictoryLabel } from 'victory';

function App() {
  return (
    <div >
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis
          theme={VictoryTheme.material}
          style={{tickLabels: {fontSize: 5, overflow: 'wrap', padding: 5}}}
          
        />
        <VictoryAxis
        tickLabelComponent={<VictoryLabel renderInPortal />}
          dependentAxis
          
          theme={VictoryTheme.material}
          style={{tickLabels: {fontSize: 5, overflow: 'wrap', padding: 5}}}
          tickFormat={y => (`${y / 1000}k views`)}
        />

        <VictoryBar data={videoData} x="video" y="views" />
      </VictoryChart>
    </div>
  );
}

export default App;

const videoData =
  [
    {
      video: "Blue Is Pretty Special: How Nature Gets the Blues",
      views: 235678
    },
    {
      video: "The Insect Nothing Messes With: Meet the Velvet Ant",
      views: 502738
    },
    {
      video: "Bacteria Could Someday Power Our Cell Phones",
      views: 140846
    },
    {
      video: "5 Ways Orcas Have Earned the Nickname 'Killer Whale'",
      views: 192457
    }
  ];