import React, { Component } from 'react';
import GroceryForm from './GroceryForm';
import GroceryList from './GroceryList';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      filteredList: [],
      name: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentWillMount() {
    this.setState({filteredList: this.state.list});
  }

  filterList(value) {
      let searchValue = value.toLowerCase();
      let filteredList = this.state.list;

      filteredList = filteredList.filter(item => {
          return item.toLowerCase().search(searchValue) !== -1;
      });

      this.setState({filteredList: filteredList});
      this.setState({searchString: value});
  }

  render() {
      let searchItems = this.state.filteredList.map((item, index) => {
          return <SearchItem filter={this.filterList} key={index} value={item} />
      });

      return (
          <div className="search-component">
              <SearchInput value={this.state.searchString} update={this.filterList} />
              <ul className="search-list">
                  {searchItems}
              </ul>
          </div>
      )
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.name.length === 0) {
      alert('Oops! Please enter something!');
    } else {
      let newId = this.state.list.length + 1;
      let newGrocery = {
        id: newId,
        name: this.state.name
      }
      let newGroceries = this.state.list.concat(newGrocery);

      this.setState({
        list: newGroceries,
        name: ''
      })

    }
  }

  handleButtonClick(id) {
    let newGroceries = this.state.list.filter(grocery => {
      return grocery.id !== id
    })
    this.setState({ list: newGroceries })
  }

  handleChange(event) {
    let newName = event.target.value
    this.setState({ name: newName })
  }

  render() {
    return(
      <div className="box list">
        <h2>My List</h2>
        <GroceryForm
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
        />
        <GroceryList
          list={this.state.list}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) {
        // let input = React.findDOMNode(this.refs.input);

        this.props.update(event.target.value);
    }

    render() {
        return (
            <div className="search-input">
                <input
                    ref="input"
                    onChange={this.onValueChange}
                    value={this.props.value}
                    type="text"
                    placeholder="Type something..." />
            </div>
        )
    }
}

class SearchItem extends React.Component {
    onItemClick(value, event) {
        this.props.filter(value);
    }

    render() {
        return (
            <li onClick={this.onItemClick.bind(this, this.props.value)} >{this.props.value}</li>
        )
    }
}

export default List;
