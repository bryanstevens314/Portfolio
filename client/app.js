import React, { Component } from 'react'
import { Navbar } from './components'
import Routes from './routes'
import Loading from './loading';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      displayView: () => {
        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 2800);
      }
    }
  }
  componentDidMount() {
    this.state.displayView()

  }
  render() {
    const class_name = this.state.loading ? "hidden" : "container"
    return (
      <div>
        <Loading loading={this.state.loading} />
        <div className={class_name}>
          <Navbar />
          <Routes />
        </div>

      </div>
    )
  }
}
