import React from 'react'
import SpiceItem from './SpiceItem'
import FilteredSpices from './FilteredSpices.js'


class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }
  
  renderSpices() {

    console.log("the state",this.state)
  
    let filterListings = this.props.spices.filter( spice => {
      return spice.notes.toLowerCase().includes(this.state.search.toLowerCase())
    })
     return filterListings.map(filterSpice => (
      <SpiceItem key={filterSpice.id} spice={filterSpice} />
    ))
      // tried to refactor please help
      
    // return this.props.spices.map(spice => (
    //   <SpiceItem key={spice.id} spice={spice} />
    // ))

      // console.log("hello world")
  }

  handleChange = (e) => {
     
    this.setState({
      search: e.target.value
    })
  }



  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input type="text" placeholder="Search By Tasting Notes..." onChange={this.handleChange}/>
            </div>
            <label>
              4 Star Only <input type="checkbox" />
            </label>
          </div>
        </div>
        {/* <FilteredSpices search={this.state.search}/> */}
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList