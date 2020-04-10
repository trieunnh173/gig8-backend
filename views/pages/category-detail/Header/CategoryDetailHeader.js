import React, { Component } from 'react';
import './CategoryDetailHeader.scss';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../Filter/Filter';

export default class CategoryDetailHeader extends Component {
  render() {
    return (
      <div className="category-detail-header">
        <div className="category-detail-header__wrapper">
          <div className="category-detail-header__wrapper__breadcrumb">
            <Breadcrumbs></Breadcrumbs>
          </div>
          <div className="category-detail-header__wrapper__filter desktop">
            <Filter></Filter>
          </div>
        </div>
      </div>
    )
  }
}