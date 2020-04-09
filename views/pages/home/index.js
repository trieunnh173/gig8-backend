import React, { Component } from 'react';
import ProductCard from '../../components/Cards/ProductCard'
import './home.scss';
import { Button, Input } from 'reactstrap';
import uiDesign from '../../assets/images/categories/UIDesign.png';
import analytics from '../../assets/images/categories/Analytics.png';
import graphics from '../../assets/images/categories/Graphics.png';
import marketing from '../../assets/images/categories/Marketing.png';
import programing from '../../assets/images/categories/Programing.png';
import social from '../../assets/images/categories/Social.png';
import video from '../../assets/images/categories/Video.png';
import voice from '../../assets/images/categories/Voice.png';
import yourSkill from '../../assets/images/yourskill.png';
import backgroundHeader from '../../assets/images/background-header.png'
import Slider from "react-slick";
import { SETTING_CAROUSEL_PRODUCTS, SETTING_CAROUSEL_MOST_VIEW, TUTORIAL_STEP, SETTING_CAROUSEL_INTERVIEW } from '../../constants/constants';
import MostViewCard from '../../components/Cards/MostViewCard';
import TutorialCard from '../../components/Cards/TutorialCard';
import VideoReviewerCard from '../../components/Cards/VideoReviewerCard';

export default class Home extends Component {
  render() {
    return (
      <div className="content home-page">
        <div className="home-page__header">
          <Slider arrows={false} autoplay={true} speed={1000} autoplaySpeed={5000}>
            <img className="home-page__header__image-slider" src={backgroundHeader}></img>
            <img className="home-page__header__image-slider" src={backgroundHeader}></img>
            <img className="home-page__header__image-slider" src={backgroundHeader}></img>
            <img className="home-page__header__image-slider" src={backgroundHeader}></img>
          </Slider>
          <div className="home-page__header__content">
            <div className="home-page__header__content__title">
              Grow your bussines with our Freelancer, <span>Join now!</span>
            </div>
            <div className="home-page__header__content__description">
              Easy to hire and Fast delivery work.
            </div>
            <div className="home-page__header__content__search search-input">
              <div className="search-input__icon -search"></div>
              <Input className="search-input__input"></Input>
            </div>
            <div className="home-page__header__content__suggestion">
              Trending Keyword: Web developer, Banner Design, Architect, Logo Design, Flyer…
            </div>
          </div>
        </div>
        <div className="home-page__slider">
          <div className="home-page__slider__wrapper">
            <div className="home-page__title">
              Recent Viewer {"&"} Recomend
            </div>
            <Slider {...SETTING_CAROUSEL_PRODUCTS}>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
            </Slider>
          </div>
        </div>
        <div className="home-page__categories">
          <div className="home-page__categories__wrapper">
            <div className="home-page__title">
              The categories that match your strategy
            </div>
            <div className="home-page__categories__wrapper__content">
              <div className="home-page__categories__wrapper__content__first">
                <div className="home-page__categories__wrapper__content__card">
                  <div className="home-page__categories__wrapper__content__card__title">
                    UX/UI Design
                  </div>
                  <img src={uiDesign}></img>
                </div>
                <div className="home-page__categories__wrapper__content__card">
                  <div className="home-page__categories__wrapper__content__card__title">
                    Programing
                  </div>
                  <img src={programing}></img>
                </div>
                <div className="home-page__categories__wrapper__content__card">
                  <div className="home-page__categories__wrapper__content__card__title">
                    Voice {"&"} Audio
                  </div>
                  <img src={voice}></img>
                </div>
              </div>
              <div className="home-page__categories__wrapper__content__second">
                <div className="home-page__categories__wrapper__content__card">
                  <div className="home-page__categories__wrapper__content__card__title">
                    Social Media
                  </div>
                  <img src={social}></img>
                </div>
                <div>
                  <div className="home-page__categories__wrapper__content__card">
                    <div className="home-page__categories__wrapper__content__card__title">
                      Content Marketing
                    </div>
                    <img src={marketing}></img>
                  </div>
                  <div className="home-page__categories__wrapper__content__card">
                    <div className="home-page__categories__wrapper__content__card__title">
                      Bussines Analytics
                    </div>
                    <img src={analytics}></img>
                  </div>
                </div>
                <div>
                  <div className="home-page__categories__wrapper__content__card">
                    <div className="home-page__categories__wrapper__content__card__title">
                      Graphic Designer
                    </div>
                    <img src={graphics}></img>
                  </div>
                  <div className="home-page__categories__wrapper__content__card">
                    <div className="home-page__categories__wrapper__content__card__title">
                      Video Editor
                    </div>
                    <img src={video}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page__most-view">
          <div className="home-page__most-view__wrapper">
            <div className="home-page__title">
              Creative Project Most viewed
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
        </div>
        <div className="home-page__your-skill">
          <div className="home-page__your-skill__wrapper">
            <div className="home-page__your-skill__wrapper__content">
              <img src={yourSkill}></img>
              <div className="home-page__your-skill__wrapper__content__description">
                <div className="home-page__your-skill__wrapper__content__description__title">
                  Let’s Push your Skill on Gigs
                </div>
                <div>
                  Join gigs to post your projects, make more money with gigs, and most importantly where you have the freedom to work, creative freedom without barriers, we always make sure you get money from customers.
                </div>
                <div className="home-page__your-skill__wrapper__content__description__highlight">
                  NOT CHARGED RELATED FEES
                </div>
                <div>
                  Join gigs to post your projects, make more money with gigs, and most importantly where you have the freedom to work, creative freedom without barriers, we always make sure you get money from customers.
                </div>
                <div className="home-page__your-skill__wrapper__content__description__highlight">
                  RISK REDUCTION
                </div>
                <div>
                  Deadlines are important, so we always ask you to get your work done before the deadline, and make sure that what you show your customers is true.
                </div>
                <div className="home-page__your-skill__wrapper__content__description__highlight">
                  COMPETITIVE ENVIROMENT
                </div>
                <div>
                  In Gigs, the working environment must be transparent, if you want to reach many customers, your information must be transparent and the customer access history must be good.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page__slider">
          <div className="home-page__slider__wrapper">
            <div className="home-page__title">
              Check Popular Project
            </div>
            <Slider {...SETTING_CAROUSEL_PRODUCTS}>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
            </Slider>
          </div>
        </div>
        <div className="home-page__slider">
          <div className="home-page__slider__wrapper">
            <div className="home-page__title">
              Let’s get Work done by Popular Freelancer
            </div>
            <Slider {...SETTING_CAROUSEL_PRODUCTS}>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
            </Slider>
          </div>
        </div>
        <div className="home-page__tutorial">
          <div className="home-page__tutorial__wrapper">
            <div className="home-page__title">
              <span>How it's work</span><br></br>It’s East To Get Work Done On Gigs
            </div>
            <div className="home-page__tutorial__wrapper__content">
              <div className="home-page__tutorial__wrapper__content__first">
                {TUTORIAL_STEP.slice(0, 3).map(t => {
                  return (
                    <TutorialCard tutorial={t}></TutorialCard>
                  )
                })}
              </div>
              <div className="home-page__tutorial__wrapper__content__second">
                <div></div>
                {TUTORIAL_STEP.slice(3, TUTORIAL_STEP.length).map(t => {
                  return (
                    <TutorialCard tutorial={t}></TutorialCard>
                  )
                })}
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page__slider">
          <div className="home-page__slider__wrapper">
            <div className="home-page__title">
              How Client Say about Gigs
            </div>
            <Slider {...SETTING_CAROUSEL_INTERVIEW}>
              <VideoReviewerCard></VideoReviewerCard>
              <VideoReviewerCard></VideoReviewerCard>
              <VideoReviewerCard></VideoReviewerCard>
              <VideoReviewerCard></VideoReviewerCard>
              <VideoReviewerCard></VideoReviewerCard>
            </Slider>
          </div>
        </div>
        <div className="home-page__start-selling">
          <div className="home-page__start-selling__content">
            <div className="home-page__start-selling__content__title">
              Get Customer Right Now
            </div>
            <div className="home-page__start-selling__content__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div className="home-page__start-selling__content__button">
              <Button className="btn--long btn--primary">
                Start Selling Your Skill
              </Button>
            </div>
          </div>
        </div>
      </div >
    )
  }
}