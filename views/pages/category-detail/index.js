import React, { Component } from 'react';
import CategoryDetailHeader from './Header/CategoryDetailHeader';
import './CategoryDetail.scss';
import { SETTING_CAROUSEL_MOST_VIEW, RELATED_STYLE, SETTING_CAROUSEL_TOPIC } from '../../constants/constants';
import Slider from "react-slick";
import MostViewCard from '../../components/Cards/MostViewCard';
import GridGig from '../../components/GridGig/GridGig';
import Pagination from '../../components/Pagination/Pagination';
import TopicCard from '../../components/Cards/TopicCard';
import joinUs from '../../assets/images/join-us.png';
import { Button } from 'reactstrap';
import FilterGig from './FilterGig/FilterGig';

export default class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    }
  }
  onChangePage = (currentPage) => {
    this.setState({
      currentPage
    })
  }

  render() {
    const { currentPage } = this.state;
    return (
      <div className="content category-detail-page">
        <CategoryDetailHeader></CategoryDetailHeader>
        <div className="category-detail-page__content">
          <div className="category-detail-page__content__title">
            Architecture {"&"} Interior Design<br></br>
            <span>Delivering high quality, effective, and inspiring built space</span>
          </div>
          <div className="category-detail-page__content__related-topic">
            <div className="category-detail-page__title">
              Related Topic
            </div>
            <Slider {...SETTING_CAROUSEL_MOST_VIEW}>
              <MostViewCard></MostViewCard>
              <MostViewCard></MostViewCard>
              <MostViewCard></MostViewCard>
              <MostViewCard></MostViewCard>
              <MostViewCard></MostViewCard>
              <MostViewCard></MostViewCard>
            </Slider>
          </div>
          <div className="category-detail-page__content__related-style">
            <div className="category-detail-page__title">
              Some Related Style You Want
            </div>
            <div className="category-detail-page__content__related-style__cards">
              {RELATED_STYLE.map((r, i) => {
                return (
                  <div className="category-detail-page__content__related-style__card">
                    <img className="category-detail-page__content__related-style__card__img" src={r.image}></img>
                    <div className="category-detail-page__content__related-style__card__description">{r.title}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="category-detail-page__content__all-gigs">
            <div className="category-detail-page__content__all-gigs__title">
              <span className="category-detail-page__content__all-gigs__title__text">All Gigs</span>
              <span className="category-detail-page__content__all-gigs__title__number">(500)</span>
              <div className="category-detail-page__content__all-gigs__title__filter">
                <FilterGig></FilterGig>
              </div>
            </div>
            <GridGig></GridGig>
            <Pagination pageRangeDisplayed={5} itemPerPage={60} currentPage={currentPage} totalItem={1000} onChangePage={this.onChangePage}></Pagination>
          </div>
          <div className="category-detail-page__content__topic">
            <div className="category-detail-page__title">
              Some Topic Viewed
            </div>
            <Slider {...SETTING_CAROUSEL_TOPIC}>
              <TopicCard></TopicCard>
              <TopicCard></TopicCard>
              <TopicCard></TopicCard>
            </Slider>
          </div>
          <div className="category-detail-page__content__join-us">
            <div className="category-detail-page__title">
              Wanna Join us ?
            </div>
            <div className="category-detail-page__content__join-us__container">
              <div className="category-detail-page__content__join-us__container__content">
                <span>Join us to buy a gigs and our talented freelancer on the world will make you satisfied.</span>
                <Button className="btn--short btn--primary">
                  Join now
              </Button>
              </div>
            </div>
          </div>
        </div >
      </div >
    )
  }
}