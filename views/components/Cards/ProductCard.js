import React, { Component } from "react";
import rectangle from '../../assets/images/thumbnail.png';
import freelancer from '../../assets/images/freelancer.jpg';
import threedot from '../../assets/icons/threedot.png';
import star from '../../assets/icons/star.png';
import favorite from '../../assets/icons/favorite.png';
import './ProductCard.scss';

export default class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-card__thumbnail">
          <img src={rectangle}></img>
          <div className="product-card__thumbnail__favorite">
            <img src={favorite}></img>
          </div>
          <div className="product-card__thumbnail__price">
            from <span>$25.00</span>
          </div>
        </div>
        <div className="product-card__content">
          <div className="product-card__content__icon-user">
            <img src={freelancer}></img>
          </div>
          <div className="product-card__content__seller">
            <div className="product-card__content__seller__title">
              BEST SELLER
            </div>
            <div className="product-card__content__seller__name">
              Steve Wolf
            </div>
            <div className="product-card__content__seller__description">
              I will design a creative and unique mobile app
            </div>
            <div className="product-card__content__seller__star">
              <div className="product-card__content__seller__star__icon">
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
              </div>
              <div className="product-card__content__seller__star__rate">
                5.0 <b>(24)</b>
              </div>
            </div>
          </div>
          <div className="product-card__content__action">
            <img src={threedot}></img>
          </div>
        </div>
      </div>
    )
  }
}