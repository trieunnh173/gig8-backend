import React, { Component } from "react";
import './Breadcrumbs.scss';

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div className="breadcrumbs">
        <a className="link">Gig8</a>
      >
        <a className="link">Design</a>
      </div>
    );
  }
}