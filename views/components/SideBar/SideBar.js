import React, { Component } from "react";
import './SideBar.scss';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import caret from '../../assets/icons/caret.png';
const categories = [
  {
    id: 123,
    name: 'Design',
    child: [
      {
        name: "Logo Design",
      },
      {
        name: "Brand Style Guides"
      }
    ]
  },
  {
    id: 1234,
    name: 'Web/Mobile Developer',
    child: [
      {
        name: "Logo Design",
      },
      {
        name: "Brand Style Guides"
      }
    ]
  },
  {
    id: 12356,
    name: 'Seo',
    child: [
      {
        name: "Logo Design",
      },
      {
        name: "Brand Style Guides"
      }
    ]
  },
  {
    id: 12312,
    name: 'Video/Motion Graphic',
    child: [
      {
        name: "Logo Design",
      },
      {
        name: "Brand Style Guides"
      }
    ]
  },
  {
    id: 124363,
    name: 'Data Entry',
    child: [
      {
        name: "Logo Design",
      },
      {
        name: "Brand Style Guides"
      }
    ]
  },
  {
    id: 1546723,
    name: 'Content Writing',
    child: [
      {
        name: "Logo Design",
      },
      {
        name: "Brand Style Guides"
      }
    ]
  },
  {
    id: 8563,
    name: 'Translation',
    child: [
      {
        name: "Logo Design",
      },
      {
        name: "Brand Style Guides"
      }
    ]
  }
]

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  scrollCaret = (id) => {
    let ref = this.refs[id];
    if (ref.classList.contains("active")) {
      ref.classList.remove('active')
    } else {
      ref.classList.add('active')
    }
  }

  render() {
    const { isShowSideBar, showSideBar } = this.props;
    return (
      <>
        <nav className={`sidebar ${isShowSideBar ? 'active' : ''}`} id="sidebar">
          <ul className="sidebar__list">
            <li className="sidebar__list__item">
              Become a Seller
            </li>
            <li className="sidebar__list__item">
              USD English Currency
            </li>
            <li className="sidebar__list__item">
              Sign in
            </li>
            <li className="sidebar__list__item" id="categories" onPointerDown={() => { this.scrollCaret("categories") }}>
              <div>
                <label>Explorer Category <img ref="categories" src={caret} className="sidebar__list__item__caret"></img></label>
              </div>
            </li>
            <UncontrolledCollapse toggler="#categories">
              <ul>
                {categories.map((c, index) => {
                  return (
                    <>
                      <li key={index} className="sidebar__list__sub__item" id={`subitem_${c.id}`} onPointerDown={() => { this.scrollCaret(`subitem_${c.id}`) }}>
                        <label>{c.name} <img src={caret} ref={`subitem_${c.id}`} className="sidebar__list__item__caret"></img></label>
                      </li>
                      <UncontrolledCollapse toggler={`#subitem_${c.id}`}>
                        <ul>
                          {categories.map(c1 => {
                            return (
                              <>
                                <li className="sidebar__list__sub__item__child">
                                  {c1.name}
                                </li>
                              </>
                            )
                          })}
                        </ul>
                      </UncontrolledCollapse>
                    </>
                  )
                })}
              </ul>
            </UncontrolledCollapse>
            <li className="sidebar__list__item">
              <a className="link -pro">Go Pro</a>
            </li>
          </ul>
        </nav>
        <div className={`sidebar-overlay ${isShowSideBar ? 'active' : ''}`} onClick={() => { showSideBar(false) }}></div>
      </>
    )
  }
}