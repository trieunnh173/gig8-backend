import React, { Component } from "react";
import ProductCard from "../Cards/ProductCard";
import './GridGig.scss';

export default class GridGig extends Component {
  render() {
    let gigItem = [...Array(60).keys()]

    return (
      <div className="grid-gig">
        {
          gigItem.map((g, i) => {
            return (
              <ProductCard key={i}></ProductCard>
            )
          })
        }
      </div>
    )
  }
}