import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form } from "reactstrap";
import AddAlbumForm from '../forms/AddAlbumForm';
import { validateAlbum, getSlug, updateAlbum } from "../actions/albumActions";

class EditAlbum extends Component {
    constructor(props) {
        super(props);

        // props.initialize(props.initialValues);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.artist !== this.props.artist) this.fillFields(nextProps.artist);
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
        const author = this.props.author
            ? this.props.author.slug + '/'
            : '';
        dispatch(updateAlbum(values))
            .then(() => this.props.history.push(`/album/${author}${this.props.slug}`))
            .then(() => window.location.reload());
    }

    render () {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <AddAlbumForm />
            </Form>
        );
    }
}

const validate = values => {
    const requiredFields = [
        'title',
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
    form: 'albums',
    validate,
    asyncValidate,
    asyncChangeFields: ['title', 'slug'],
    touchOnChange: true,
};

const selector = formValueSelector('albums');

const mapStateToProps = state => ({
    title: selector(state, 'title'),
    slug: selector(state, 'slug'),
    author: selector(state, 'author'),
});

export default compose(
    withRouter,
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(EditAlbum);
