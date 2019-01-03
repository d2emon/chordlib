import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form } from "reactstrap";
import AddAlbumForm from '../forms/AddAlbumForm';
import { validateAlbum, getSlug, addAlbum } from "../actions/albumActions";

class AddAlbum extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.generateSlug(nextProps);
    }

    generateSlug({ dispatch, change, title, slug }) {
        if (!title) return;
        if (title === this.props.title) return;
        if (slug !== this.props.slug) return;
        dispatch(getSlug(title))
            .then(newSlug => change('slug', newSlug));
    }

    onSubmit (values, dispatch) {
        dispatch(addAlbum(values))
            .then(() => this.props.history.push(`/album/${this.props.slug}`));
    }

    render () {
        const { handleSubmit, ...props } = this.props;
        console.log(this.props.artist);
        console.log(this.props.initialValues);
        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <AddAlbumForm
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

const asyncValidate = (values, dispatch) => dispatch(validateAlbum(values))
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
    title: selector(state, 'title'),
    slug: selector(state, 'slug'),
});

export default compose(
    withRouter,
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(AddAlbum);
