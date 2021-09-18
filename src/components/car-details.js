import react, {Component} from 'react';
import '../styles.css';
import {Link} from 'react-router-dom';

class CarDetails extends Component{
    constructor() {
      super();
    }

    render() {
        let carId = this.props.car.id;
        return (
            <Link to={"/vehicle/"+carId}>
                <div className="car-comp">
                <div className="img">
                    <img src={this.props.car.imgPath}/>
                </div>
                <h3>{this.props.car.name}</h3>
                <p><i>Year of issue: </i> <b>{this.props.car.model}</b></p>
                <p><i>Mileage: </i> <b>{this.props.car.mileage}</b></p>
                <p><i>Amount: </i> <b>{this.props.car.amount}</b></p>
                </div>
            </Link>
        )
    }
}

export default CarDetails;