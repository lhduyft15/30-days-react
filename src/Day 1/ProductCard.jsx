import React from "react";
import "./_styles.scss";

const ProductCard = () => {
    return (
        <div className="product-card-wrapper">
            <div className="product-card">
                <span className="heart-icon">
                    <i class="bx bxs-heart"></i>
                </span>
                <span className="cart-icon">
                    <i class="bx bx-cart-alt"></i>
                </span>
                <div className="card-img">
                    <img src={require("./Nike Zoom KD 12.png")} alt="" />
                </div>

                <div className="card-title">Nike Zoom KD 12</div>
                <div className="card-price">$99</div>

                <div className="card-desc">
                    <div className="card-size">
                        <h3>Size:</h3>
                        {[6, 7, 8, 9].map((item) => (
                            <span>{item}</span>
                        ))}
                    </div>
                    <div className="card-color">
                        <h3>Color:</h3>
                        <span className="green-block"></span>
                        <span className="red-block"></span>
                        <span className="black-block"></span>
                    </div>
                    <div className="card-action">
                        <button>Buy now</button>
                        <button>Add cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
