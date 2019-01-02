import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form } from "reactstrap";
import AddArtistForm from '../forms/AddArtistForm';
import {validateArtist} from "../actions/artistActions";

class NewArtistForm extends Component {
    submitForm = values => {
        // const {  } = this.props;
        // if (onSubmit) onSubmit(values);
        /*
        this.props.validateArtist(values)
            .then(({ validate }) => {
                if (validate.name && validate.slug) {
                    console.log(artist, this.props.artists);
                    // this.props.addArtist(artist);
                    alert(JSON.stringify(artist));
                }
            });
        */
    };

    componentWillReceiveProps({ change, slug, newSlug }) {
        if (newSlug && (slug === undefined)) change('slug', newSlug);
    }

    render () {
        const { handleSubmit, onSubmit, ...props } = this.props;
        const formSubmit = (!onSubmit) ? onSubmit : () => {};
        return (
            <Form onSubmit={handleSubmit(formSubmit)}>
                { /*
                name={this.state.name}
                slug={this.state.slug}
                validate={this.state.validate}
                formErrors={this.state.formErrors}
                onChange={this.onChange}
                onSubmit={this.saveArtist}

                 */ }
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
        // console.error(errors);
        // if (!validate.name) throw new FieldValidationError('name', 'Error');
        // if (!validate.slug) throw new FieldValidationError('slug', 'Error');
        if (Object.keys(errors).length) throw errors;
        // if (errors.name) throw { name: errors.name };
        // if (errors.slug) throw { slug: errors.slug };
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
    slug: selector(state, 'slug'),
});

NewArtistForm = reduxForm(formConfiguration)(NewArtistForm);

export default connect(mapStateToProps)(NewArtistForm);
