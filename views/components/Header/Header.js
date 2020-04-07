import React, { Component } from "react";
import mobile from '../../assets/icons/mobile.png';
import close from '../../assets/icons/close.png';
import logo from '../../assets/images/logo-dark.png';
import user from '../../assets/icons/user.png';
import search from '../../assets/icons/search.png';
import './Header.scss';
import { Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";
import $ from 'jquery';

//mock up
import video from '../../assets/icons/video.png';
import design from '../../assets/icons/design.png';
import dataEntry from '../../assets/icons/data-entry.png';
import mobileDev from '../../assets/icons/mobile-dev.png';
import translation from '../../assets/icons/translation.png';
import seo from '../../assets/icons/seo.png';
import contentWriting from '../../assets/icons/content-writing.png';
import CategoriesHeader from "./CategoriesHeader";

const categories = [
  {
    name: 'Design',
    icon: design
  },
  {
    name: 'Web/Mobile Developer',
    icon: mobileDev
  },
  {
    name: 'Seo',
    icon: seo
  },
  {
    name: 'Video/Motion Graphic',
    icon: video
  },
  {
    name: 'Data Entry',
    icon: dataEntry
  },
  {
    name: 'Content Writing',
    icon: contentWriting
  },
  {
    name: 'Translation',
    icon: translation
  }
]

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategory: false
    }
  }

  showSideBar = () => {
    $('#sidebar').addClass('active');
    $('#sidebar-overlay').addClass('active');
  }

  render() {
    const { showCategory } = this.state;
    return (
      <div className="header">
        <div className="header__wrapper">
          <img className="header__wrapper__trigger margin__right -long desktop" onClick={() => { this.setState({ showCategory: !showCategory }) }} src={!showCategory ? mobile : close} alt=""></img>
          <img className="header__wrapper__trigger margin__right -long mobile" id="sidebarCollapse" src={mobile} alt="" onClick={() => { this.showSideBar() }}></img>
          <img className="header__wrapper__logo margin__right -long" src={logo} alt=""></img>
          <div className="header__wrapper__search search-input desktop">
            <div className="search-input__icon -search"></div>
            <Input className="search-input__input"></Input>
          </div>
          <div className="header__wrapper__left-navbar desktop">
            <UncontrolledDropdown className="header__wrapper__left-navbar__language margin__right -very-short">
              <DropdownToggle tag="a" className="nav-link" caret>
                English
          </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Japanese</DropdownItem>
                <DropdownItem>Chinese</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <a className="link -pro margin__right -short">Go Pro</a>
            <Button className="btn--small btn--primary margin__right -very-short">Become a Seller</Button>
            <a className="link margin__right -very-short">Log in</a>
          </div>
          <div className="header__wrapper__left-navbar mobile">
            <img src={search}></img>
            <UncontrolledDropdown className="header__wrapper__left-navbar__user">
              <DropdownToggle tag="div" className="header__wrapper__left-navbar__user__toggle">
                <img src={user}></img>
              </DropdownToggle>
              <DropdownMenu className="">
                <DropdownItem tag="div">
                  <a className="link -pro margin__right -short">Go Pro</a>
                </DropdownItem>
                <DropdownItem tag="div">
                  <a className="link margin__right -very-short">Become a Seller</a>
                </DropdownItem>
                <DropdownItem tag="div">
                  <a className="link margin__right -very-short">Log in</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <CategoriesHeader categories={categories} showCategory={showCategory}></CategoriesHeader>
      </div>
    )
  }
}