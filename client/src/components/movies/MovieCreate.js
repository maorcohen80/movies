import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createMovie } from '../../actions';

class MovieCreate extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.createMovie(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="year" component={this.renderInput} label="Enter Year" />
        <Field name="runtime" component={this.renderInput} label="Enter Runtime" />
        <Field name="genre" component={this.renderInput} label="Enter Genre" />
        <Field name="director" component={this.renderInput} label="Enter Director" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.year) {
    errors.year = 'You must enter a Year';
  }
  if (!formValues.runtime) {
    errors.runtime = 'You must enter Movie Runtime';
  }
  if (!formValues.genre) {
    errors.genre = 'You must enter a Genre';
  }
  if (!formValues.director) {
    errors.director = 'You must enter a Director';
  }
  return errors;
};



const formWrapped = reduxForm({
  form: 'movieCreate',
  validate
})(MovieCreate);

export default connect(null, { createMovie })(formWrapped);
