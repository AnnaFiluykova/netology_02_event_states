import React from 'react';
import CardsView from './components/CardsView';
import ListView from './components/ListView';
import IconSwitch from './components/IconSwitch';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = { view: 'card' };
  }

  render() {
    return (
      <div>
        <div><IconSwitch icon={this.state.view} onSwitch={this.onChangeView} /></div>
        {this.state.view === 'card' ? <CardsView cards={products} /> : <ListView items={products} />}
      </div>
    )
  }

  onChangeView = (event) => {
    this.setState({ view: event.target.dataset.view })
    console.log('!!!', event.target.dataset.view);
  }
}

export default Store;
