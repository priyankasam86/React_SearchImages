import React from "react";

const Product =(props) => {
    console.log(props);
    if(props.pro.length <= 0){
        return null;
    }
    return(
        <div className="container">
            <div className="row">
                {
                    props.pro.hits.map(data => (
                        <div className="col-md-4">
                            <div className="card text-left">
                              <img className="card-img-top" src={data.largeImageURL} alt={data.tags}/>
                              <div className="card-body">
                    <h4 className="card-title">{data.user}</h4>
                    <p className="card-text">Total Likes : {data.likes}</p>
                              </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )

};
export default Product;