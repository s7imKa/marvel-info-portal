import { Component } from 'react'
import Error from '../error/Error'

class ErrorBoundery extends Component {
    state = {
        error: false
    }

    componentDidCatch(err, errInfo) {
        console.log(err, errInfo)
        this.setState({
            error: true
        })
    }
    
    render() {
        if (this.state.error) {
            return <Error/>
        }

        return this.props.children
    }

}

export default ErrorBoundery