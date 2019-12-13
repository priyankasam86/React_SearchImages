import React, {Component} from 'react';
import axios from 'axios';
import Product from './product';

class Search extends Component{

    constructor(){
        super();
        this.state={
            change:"search",
            products:[]
        };
    }

    // fetchInputData(event){                      // We can write this code directly 
    //                                             //using arrow function or call this arrow function 
    //                                             //directly on onChange event of input tag like done below.
    //     console.log(event.target.value);
    //     this.setState({change:event.target.value});
    // }
    handleFormSubmit = async (event) => {
        event.preventDefault();
        //this.setState({products:this.state.change});
        let item = await axios.get(`https://pixabay.com/api/?key=14531878-a6743df77e825656f3e512033&q=yellow+${this.state.change}&image_type=photo&pretty=true`)
        this.setState({products:item.data});
    }
    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                         <form style={{marginTop:"20px"}} onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Search Here" 
                                className="form-control"
                                value={this.state.change}
                                onChange={(e)=>this.setState({change:e.target.value})} /> 
                                
                            </div>
                        </form> 
                    </div>
                </div>

                <div className="row">
                    <Product pro={this.state.products}/>
                </div>
            </div>
        );
    }
}
export default Search;