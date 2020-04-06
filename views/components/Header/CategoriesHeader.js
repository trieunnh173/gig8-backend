import React, { Component } from "react";

const childCategory = [
  {
    id: 0,
    name: 'UX/UI Design',
    childs: [
      {
        id: 0,
        name: 'UX/UI Design',
      },
      {
        id: 1,
        name: 'Graphic Design',
      }
    ]
  },
  {
    id: 1,
    name: 'Graphic Design',
    childs: [
      {
        id: 0,
        name: 'Graphic Design',
      },
      {
        id: 1,
        name: 'UX/UI Design',
      }
    ]
  }
]

export default class CategoriesHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentId: 0,
    }
  }

  onMouseOverParent = (id) => {
    this.setState({
      parentId: id
    });
  }

  render() {
    const { categories, showCategory } = this.props;
    const { parentId } = this.state;
    return (
      <div className={`header__categories ${showCategory ? '-show' : '-hide'} desktop`}>
        <div className="header__categories__wrapper">
          {categories.map((category, index) => {
            return (
              <div className="header__categories__wrapper__row" key={index}>
                <img className="header__categories__wrapper__row__icon" src={category.icon}></img>
                <div className="header__categories__wrapper__row__name">{category.name}</div>
                <div className="header__categories__wrapper__row__popup">
                  <div className="header__categories__wrapper__row__popup__container">
                    <div className="header__categories__wrapper__row__popup__parent">
                      <div className="triangle"></div>
                      {childCategory.map((c, i) => {
                        return (
                          <a key={i} className={`link header__categories__wrapper__row__popup__parent__item ${parentId === c.id ? 'active' : ''}`}
                            onMouseOver={() => { this.onMouseOverParent(c.id) }}>{c.name}</a>
                        )
                      })}
                    </div>
                    <div className="header__categories__wrapper__row__popup__child">
                      {childCategory[parentId].childs.map((c, i) => {
                        return (
                          <a key={i} className="link header__categories__wrapper__row__popup__child__item">{c.name}</a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}