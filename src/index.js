import React from 'react';
import rdom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Preloader from './PreloaderSpin';
class App extends React.Component {
    state = { lat: null, errMsg: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({ lat: pos.coords.latitude })
            }, (err) => {
                this.setState({ errMsg: err.message })
            })
    }
    renderContent() {
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        else if (this.state.errMsg) {
            return <div>Error message: {this.state.errMsg}</div>
        }
        else {
            return <Preloader />
        }
    }
    render() {
        return <div>{this.renderContent()}</div>
    }
}
rdom.render(
    <App />,
    document.querySelector('#root')
)