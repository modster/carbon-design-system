import React from 'react';
import ReactDOM from 'react-dom';
import { StackedBarChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import './plex-and-carbon-components.css';

class App extends React.Component {
  state = {
    data: [
      {
        group: 'Dataset 1',
        key: 'Qty',
        value: 65000,
      },
      {
        group: 'Dataset 1',
        key: 'More',
        value: 29123,
      },
      {
        group: 'Dataset 1',
        key: 'Sold',
        value: 35213,
      },
      {
        group: 'Dataset 1',
        key: 'Restocking',
        value: 51213,
      },
      {
        group: 'Dataset 1',
        key: 'Misc',
        value: 16932,
      },
      {
        group: 'Dataset 2',
        key: 'Qty',
        value: 32432,
      },
      {
        group: 'Dataset 2',
        key: 'More',
        value: 21312,
      },
      {
        group: 'Dataset 2',
        key: 'Sold',
        value: 56456,
      },
      {
        group: 'Dataset 2',
        key: 'Restocking',
        value: 21312,
      },
      {
        group: 'Dataset 2',
        key: 'Misc',
        value: 34234,
      },
      {
        group: 'Dataset 3',
        key: 'Qty',
        value: 12312,
      },
      {
        group: 'Dataset 3',
        key: 'More',
        value: 23232,
      },
      {
        group: 'Dataset 3',
        key: 'Sold',
        value: 34232,
      },
      {
        group: 'Dataset 3',
        key: 'Restocking',
        value: 12312,
      },
      {
        group: 'Dataset 3',
        key: 'Misc',
        value: 34234,
      },
      {
        group: 'Dataset 4',
        key: 'Qty',
        value: 32423,
      },
      {
        group: 'Dataset 4',
        key: 'More',
        value: 21313,
      },
      {
        group: 'Dataset 4',
        key: 'Sold',
        value: 64353,
      },
      {
        group: 'Dataset 4',
        key: 'Restocking',
        value: 24134,
      },
      {
        group: 'Dataset 4',
        key: 'Misc',
        value: 32423,
      },
    ],
    options: {
      title: 'Vertical stacked bar (discrete)',
      axes: {
        left: {
          mapsTo: 'value',
          stacked: true,
        },
        bottom: {
          mapsTo: 'key',
          scaleType: 'labels',
        },
      },
      height: '400px',
    },
  };

  render = () => (
    <StackedBarChart data={this.state.data} options={this.state.options} />
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
