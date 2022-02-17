import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card ">
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "flex-end",
              left: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger"> {source}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://www.textrazor.com/img/letters_inverse.png"
                : imageUrl
            }
            className="card-img-top"
            alt="https://www.textrazor.com/img/letters_inverse.png"
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Anonymous" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
