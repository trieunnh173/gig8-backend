import { Component } from "react";
import './Filter.scss';
import { iconDown } from '../../../utils/iconStatic';

export default class Filter extends Component {
  renderPopup = () => {
    return (
      <div className="category-detail-filter__popup">
        <div className="category-detail-filter__popup__first">
          <a className="link">Project Tags</a>
          <a className="link">Services Type</a>
          <a className="link">Image File Format</a>
          <a className="link">Sevices Attachment</a>
        </div>
        <div className="category-detail-filter__popup__second">
          <div>
            <label className="gig-checkbox">Building
  <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label className="gig-checkbox">Apartment
  <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label className="gig-checkbox">House
  <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label className="gig-checkbox">Coworking
  <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label className="gig-checkbox">Room
  <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label className="gig-checkbox">Restaurant
  <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label className="gig-checkbox">Coffee
  <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={`category-detail-filter`}>
        <div className="category-detail-filter__item"
        >
          <a className="link category-detail-filter__item__link">
            Services Option
            {iconDown()}
          </a>
          {this.renderPopup()}
        </div>
        <div className="category-detail-filter__item"
        >
          <a className="link category-detail-filter__item__link">
            Seller infos
            {iconDown()}
          </a>
          {this.renderPopup()}
        </div>
        <div className="category-detail-filter__item"
        >
          <a className="link category-detail-filter__item__link">
            Time Delivery
            {iconDown()}
          </a>
          {this.renderPopup()}
        </div>
        <div className="category-detail-filter__item"
        >
          <a className="link category-detail-filter__item__link">
            Budget
            {iconDown()}
          </a>
          {this.renderPopup()}
        </div>
      </div>
    )
  }
}