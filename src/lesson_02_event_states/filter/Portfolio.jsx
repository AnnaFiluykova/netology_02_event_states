import React from 'react';
import Toolbar from './components/Toolbar';
import ProjectList from './components/ProjectList';
import data from './data';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'All',
      data: data
    };
  }

  render() {

    return (
      <div>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.state.data} />
      </div>
    );
  }

  onSelectFilter = (event) => {
    const selected = event.target.value;
    const selectedArray = data.filter((item) => {
      if (selected === "All") {
        return true
      }
      if (selected === item.category) {
        return true
      }

      return false
    })

    this.setState({ selected: selected, data: selectedArray })
  }
}

export default Portfolio;
