import react, {Component} from 'react';
import {getCarSpecs} from '../services/ProductCatalogService'

class DetailedCarSpecs extends Component{
    constructor() {
       super();

       this.state = {
        carSpecs: []
      }
    }

    componentDidMount() {
        getCarSpecs().then(({data}) => {
            this.setState({
                carSpecs: data
            })
        });
    }

    render() {
        return (
            <div>
                <h1>Key Specs of Hyundai Venue</h1>
                <div><img src={this.state.carSpecs.imgPath}/></div>
                <div className="">
                    <p> <b>Engine:</b> {this.state.carSpecs.engine}</p>
                    <p> <b>BHP:</b> {this.state.carSpecs.bHP}</p>
                    <p> <b>Transmission:</b> {this.state.carSpecs.transmission}</p>
                    <p> <b>Mileage:</b> {this.state.carSpecs.mileage}</p>
                    <p> <b>Top Features:</b> {this.state.carSpecs.topFeatures}</p>
                </div>
            </div>
        )
    }
}

export default DetailedCarSpecs;