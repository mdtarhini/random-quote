import React from "react";
import "./Card.css";
import { connect } from "react-redux";
import { fetchQuote } from "../actions";

const Tools = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <a
            href={
              props.quote.quoteText
                ? `https://twitter.com/intent/tweet?text=${props.quote.quoteText}%20[${props.quote.quoteAuthor}]&hashtags=quote_garden`
                : "#"
            }
            target="_blank"
            className="card-link"
            id="tweet-quote"
          >
            Tweet
          </a>
        </div>
        <div className="col">
          <a
            className="card-link"
            onClick={() => props.fetchQuote()}
            id="new-quote"
          >
            New
          </a>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { quote: state.quoteReducer };
};
export default connect(mapStateToProps, { fetchQuote: fetchQuote })(Tools);
