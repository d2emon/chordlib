import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {
    Form,
    Button,
} from 'reactstrap';
import { InputField, EditorField } from './fields';
import { validateSong, getSlug } from '../actions/songActions';

class SongForm extends Component {
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

    render () {
        const { handleSubmit, onSubmit, invalid } = this.props;
        return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    component={InputField}
                    name="title"
                    placeholder="Название"
                    required
                />
                {/*<Field
                    component={InputField}
                    name="author"
                    placeholder="Исполнитель"
                    required
                />*/}
                <Field
                    component={InputField}
                    name="slug"
                    placeholder="URI"
                    required
                />
                <Field
                    component={EditorField}
                    name="description"
                    rows="10"
                    label="Описание"
                />
                <Button disabled={invalid}>Сохранить</Button>
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

const asyncValidate = (values, dispatch) => dispatch(validateSong(values))
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
    // author: selector(state, 'author'),
});

export default compose(
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(SongForm);
