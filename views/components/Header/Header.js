import React, { Component } from "react";
import logo from '../../assets/images/logo.png';
import './Header.scss';
import { Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

//mock up
import video from '../../assets/images/categories-icon/video-icon.png';
import design from '../../assets/images/categories-icon/design-icon.png';
import dataEntry from '../../assets/images/categories-icon/data-entry-icon.png';
import mobileDev from '../../assets/images/categories-icon/mobile-icon.png';
import translation from '../../assets/images/categories-icon/translation-icon.png';
import seo from '../../assets/images/categories-icon/seo-icon.png';
import contentWriting from '../../assets/images/categories-icon/content-writing.png';
import CategoriesHeader from "./CategoriesHeader";
import SideBar from "../SideBar/SideBar";
import { iconMenu, iconClose, iconUser, iconSearch } from "../../utils/iconStatic";

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
      showCategory: false,
      isShowSideBar: false,
    }
    this.isFirstShowCategory = true;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const { showCategory } = this.state;
    let scrollTop = document.documentElement.scrollTop;
    if (this.isFirstShowCategory) {
      if (scrollTop > 80 && !showCategory) {
        this.setState({
          showCategory: true
        })
      } else if (scrollTop < 80 && showCategory) {
        this.setState({
          showCategory: false
        })
      }
    }
  }

  showSideBar = (isShow) => {
    this.setState({ isShowSideBar: isShow });
  }

  render() {
    const { showCategory, isShowSideBar } = this.state;
    return (
      <>
        <div className="header">
          <div className="header__wrapper">
            <div className="header__wrapper__trigger margin__right -long desktop" id="sidebarCollapse" alt="" onClick={() => {
              this.setState({ showCategory: !showCategory });
              this.isFirstShowCategory = false;
            }}>
              {showCategory ? iconClose() : iconMenu()}
            </div>
            <div className="header__wrapper__trigger margin__right -long mobile" id="sidebarCollapse" alt="" onClick={() => { this.showSideBar(true) }}>
              {iconMenu()}
            </div>
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
              <UncontrolledDropdown className="header__wrapper__left-navbar__user">
                <DropdownToggle tag="div" className="header__wrapper__left-navbar__user__toggle">
                  {iconUser()}
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
        <SideBar showSideBar={this.showSideBar} isShowSideBar={isShowSideBar}></SideBar>
      </>
    )
  }
}