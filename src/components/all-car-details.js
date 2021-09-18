import react, {Component} from 'react';
import CarDetails from './car-details';
import {getProductCatalog} from '../services/ProductCatalogService';

class AllCarDetails extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        cars: []
      }
    }

    componentDidMount() {
        getProductCatalog().then(({data}) => {
            this.setState({
                cars: data
            })
        });
    }
  
    render() {
      return (
        <div className="App">
          <h1> Product Catalog</h1>
          {
            this.state.cars.map((car) => (
             <CarDetails car={car} key={car.id}/>
            ))
          }
        </div>
      );
    }
  }
  
  export default AllCarDetails;