import { Component } from "react";
import { iconFilter } from '../../../utils/iconStatic';
import './FilterGig.scss';

export default class FilterGig extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter-gig">
        {iconFilter()}
        <div className="filter-gig__popup">
          <a className="link">Sorted by Increase</a>
          <a className="link">Sorted by Decrease</a>
          <a className="link">Top Seller</a>
          <a className="link">Newer arrival</a>
          <div className="filter-gig__popup__checkbox">
            <span>Seller Active</span>
            <div className="gig-checkbox-slide">
              <input type="checkbox" id="a" /><label for="a">Toggle</label>
            </div>
          </div>
          <div className="filter-gig__popup__checkbox">
            <span>Premium Sevices</span>
            <div className="gig-checkbox-slide">
              <input type="checkbox" id="b" /><label for="b">Toggle</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}