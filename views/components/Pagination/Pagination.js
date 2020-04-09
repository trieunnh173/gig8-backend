import { Component } from "react";
import './Pagination.scss';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startNode: 1,
      itemFirst: "...",
      itemLast: "..."
    }
  }

  onChangePage = (index, currentPage) => {
    const { onChangePage, pageRangeDisplayed } = this.props;
    const { startNode } = this.state;
    onChangePage(currentPage);
    if (index === pageRangeDisplayed - 1) {
      this.setState({
        startNode: Math.ceil(startNode + pageRangeDisplayed / 2)
      });
    }
    else if (index === 0 && currentPage !== 1) {
      this.setState({
        startNode: Math.ceil(startNode - pageRangeDisplayed / 2)
      });
    }
  }

  render() {
    const { itemPerPage, currentPage, pageRangeDisplayed, totalItem } = this.props;
    const { startNode, itemFirst, itemLast } = this.state;
    const totalPage = Math.ceil(totalItem / itemPerPage);
    return (
      <div className="gig-pagination">
        <div className="gig-pagination__node">{"<"}</div>
        {currentPage > pageRangeDisplayed &&
          <>
            <div className="gig-pagination__node">1</div>
            <div className="gig-pagination__node"
              onMouseOver={() => this.setState({ itemFirst: "<<" })}
              onMouseOut={() => this.setState({ itemFirst: "..." })}>{itemFirst}</div>
          </>
        }
        {
          [...Array(pageRangeDisplayed).keys()].map((i, index) => {
            if (startNode + index <= totalPage && startNode + index > 0) {
              return (
                <div key={index}
                  className={`gig-pagination__node ${currentPage === startNode + index ? "active" : ''}`}
                  onClick={() => { this.onChangePage(index, startNode + index) }}
                >
                  {startNode + index}
                </div>
              )
            }
          })
        }
        {currentPage + 2 < totalPage &&
          <>
            <div className="gig-pagination__node"
              onMouseOver={() => this.setState({ itemLast: ">>" })}
              onMouseOut={() => this.setState({ itemLast: "..." })}>{itemLast}</div>
            <div className="gig-pagination__node">{totalPage}</div>
          </>
        }
        <div className="gig-pagination__node">{">"}</div>
      </div>
    )
  }
}