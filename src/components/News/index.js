import React, { Component } from "react";
import "./style.css";

class News extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="news">
        <div className="news-header">
          <div className="title">{data.title}</div>
          <div className="source">
            <b>Source : </b>
            {data.source.name}
          </div>
        </div>
        <div className="news-body">
          <img
            src={data.urlToImage}
            alt={data.description}
            className="news-image"
          />
          <div className="news-content">{data.content}</div>
          <p>
            <b>Link to complete article : </b>
          </p>{" "}
          <a href={data.url}>{data.url}</a>
        </div>
        <div className="news-footer">
          <div className="news-footer-content">
            <span>
              <b>Published At : </b>
            </span>{" "}
            <span>{data.publishedAt}</span>
          </div>
          <div className="news-footer-content">
            <span>
              <b>Author: </b>
            </span>{" "}
            <span>{data.author}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
