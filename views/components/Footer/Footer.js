import React, { Component } from "react";
import './Footer.scss';
import logo from '../../assets/images/logo-dark.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import likedin from '../../assets/icons/likedin.png';
const categories = [
  {
    name: 'Design',
  },
  {
    name: 'Web/Mobile Developer',
  },
  {
    name: 'Seo',
  },
  {
    name: 'Video/Motion Graphic',
  },
  {
    name: 'Data Entry',
  },
  {
    name: 'Content Writing',
  },
  {
    name: 'Translation',
  }
]

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__wrapper__top">
            <div className="footer__wrapper__top__row">
              <div className="footer__wrapper__top__row__logo">
                <img src={logo}></img>
              </div>
              <div className="footer__wrapper__top__row__social">
                <img src={twitter}></img>
                <img src={facebook}></img>
                <img src={likedin}></img>
                <img src={whatsapp}></img>
              </div>
            </div>
            <div className="footer__wrapper__top__row">
              <div className="footer__wrapper__top__row__title">
                Freelancers
              </div>
              {
                categories.map((c, index) => {
                  return (
                    <a key={index} className="link">{c.name}</a>
                  )
                })
              }
              <a className="link">More...</a>
            </div>
            <div className="footer__wrapper__top__row">
              <div className="footer__wrapper__top__row__title">
                About
              </div>
              <a className="link">About us</a>
              <a className="link">Press {"&"} News</a>
              <a className="link">Security</a>
              <a className="link">Investor relation</a>
              <a className="link">Site map</a>
              <a className="link">Careers</a>
              <a className="link">How it works</a>
            </div>
            <div className="footer__wrapper__top__row">
              <div className="footer__wrapper__top__row__title">
                Terms
              </div>
              <a className="link">Privacy Policy</a>
              <a className="link">Tearms of Service</a>
              <a className="link">Intellectual Property</a>
              <a className="link">Claims</a>
            </div>
            <div className="footer__wrapper__top__row">
              <div className="footer__wrapper__top__row__title">
                Support
              </div>
              <a className="link">Help {"&"} Support</a>
              <a className="link">FAQ</a>
              <a className="link">Contact us</a>
              <a className="link">Trust {"&"} Safety</a>
            </div>
          </div>
          <div className="footer__wrapper__bottom">
            <div className="footer__wrapper__bottom__row">
              Copyright by Gig8, 2020
            </div>
            <div className="footer__wrapper__bottom__row">
              English - $USD
            </div>
            <div className="footer__wrapper__bottom__row">
              Mobile App
            </div>
          </div>
        </div>
      </div>
    )
  }
}