import React from "react";
import "./Card.css";
import { connect } from "react-redux";
import { fetchQuote } from "../actions";

class Card extends React.Component {
  componentDidMount() {
    this.props.fetchQuote();
  }
  render() {
    console.log(this.props.quote);
    return (
      <div className="card">
        <div className="card-body">
          <p className="card-text" id="text">
            {this.props.quote.quoteText}
          </p>
          <h3 className="card-title" id="author">
            [{this.props.quote.quoteAuthor}]
          </h3>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { quote: state.quoteReducer };
};
export default connect(mapStateToProps, {
  fetchQuote: fetchQuote,
})(Card);
