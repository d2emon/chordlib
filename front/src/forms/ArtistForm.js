import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {
    Form,
    Button,
} from 'reactstrap';
import { InputField, EditorField } from './fields';
import { validateArtist, getSlug } from '../actions/artistActions';

class ArtistForm extends Component {
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

    render () {
        const { handleSubmit, onSubmit, invalid } = this.props;
        return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    component={InputField}
                    name="name"
                    placeholder="Исполнитель"
                    required
                />
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
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(ArtistForm);
