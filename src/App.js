import logo from './logo.svg';
import './App.css';

import { VictoryChart, VictoryAxis, VictoryBar, VictoryTheme, } from 'victory';

function App() {
  return (
    <VictoryChart style={{ parent: { maxWidth: "50%" } }} domainPadding={20} theme={VictoryTheme.material}>
      <VictoryAxis
        style={{ tickLabels: { fontSize: 5 } }}

      />
      <VictoryAxis
        dependentAxis
        style={{ tickLabels: { fontSize: 5 } }}
        tickFormat={y => (`${y / 1000}k views`)}
      />

      <VictoryBar data={videoData} x="video" y="views" />
    </VictoryChart>
  );
}

export default App;

const videoData =
  [
    {
      video: "Blue Is Pretty Special: \nHow Nature Gets the Blues",
      views: 235678
    },
    {
      video: "The Insect Nothing Messes With: \nMeet the Velvet Ant",
      views: 502738
    },
    {
      video: "Bacteria Could Someday \nPower Our Cell Phones",
      views: 140846
    },
    {
      video: "5 Ways Orcas Have Earned \nthe Nickname 'Killer Whale'",
      views: 192457
    }
  ];