import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form } from "reactstrap";
import AddArtistForm from '../forms/AddArtistForm';
import { validateArtist, getSlug, updateArtist } from "../actions/artistActions";

class EditArtist extends Component {
    constructor(props) {
        super(props);

        // props.initialize(props.initialValues);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.artist !== this.props.artist) this.fillFields(nextProps.artist);
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
        dispatch(updateArtist(values))
            .then(() => this.props.history.push(`/artist/${this.props.slug}`))
            .then(() => window.location.reload());
    }

    render () {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <AddArtistForm />
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
)(EditArtist);
