import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form } from "reactstrap";
import AddArtistForm from '../forms/AddArtistForm';
import { validateArtist, getSlug, addArtist } from "../actions/artistActions";

class AddArtist extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.generateSlug(nextProps);
    }

    generateSlug({ dispatch, change, name, slug }) {
        if (!name) return;
        if (name === this.props.name) return;
        if (slug !== this.props.slug) return;
        dispatch(getSlug(name))
            .then(newSlug => change('slug', newSlug));
    }

    onSubmit (values, dispatch) {
        dispatch(addArtist(values))
            .then(() => this.props.history.push(`/artist/${this.props.slug}`));
    }

    render () {
        const { handleSubmit, ...props } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <AddArtistForm
                    {...props}
                />
            </Form>
        );
    }
}

const validate = values => {
    const requiredFields = [
        'name',
        'slug',
    ];
    return requiredFields.reduce((errors, field) => {
        if(!values[field]) errors[field] = 'Поле обязательно для заполнения.';
        return errors;
    }, {});
};

const asyncValidate = (values, dispatch) => dispatch(validateArtist(values))
    .then(({ errors }) => {
        if (Object.keys(errors).length) throw errors;
    });

const formConfiguration = {
    form: 'artists',
    validate,
    asyncValidate,
    asyncChangeFields: ['name', 'slug'],
    touchOnChange: true,
};

const selector = formValueSelector('artists');

const mapStateToProps = state => ({
    name: selector(state, 'name'),
    slug: selector(state, 'slug'),
});

export default compose(
    withRouter,
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(AddArtist);
