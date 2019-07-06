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
        }, 800);
      }
    }
  }
  componentDidMount() {
    this.state.displayView()

  }
  render() {
    return this.state.loading ? (
      <Loading />
    ) : (
        <div>
          <Navbar />
          <Routes />
        </div>
      )
  }
}
