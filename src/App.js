import React, {Component} from 'react';
import './App.css'

class App extends Component {

    state = {
        progress: '',
        counter: 0
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)

        this.setState({ counter: this.state.counter + 30})

    }


    render() {

        const { counter } = this.state;

        return (
            <>
                    <div>
                        <div className="set-size charts-container">
                            <div className={
                                `pie-wrapper progress-${counter} style-2`
                            }>

                                <div className="pie">
                                    <div className="left-side half-circle"/>

                                    <div className="right-side half-circle"/>
                                </div>
                                <div className="shadow"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <form>
                                    <div className="col-sm-12 col-md-8 col-md-offset-2">
                                        <div className="form-group">
                                            <input
                                                  value={this.state.value}
                                                  type="password" className="form-control input-lg" name="password"
                                                   placeholder="Password" data-strength
                                                onChange={this.changeHandler}
                                            />

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </>

           )
    }
}

export default App;