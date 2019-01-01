import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form } from "reactstrap";
import AddArtistForm from '../components/AddArtistForm';

class FormContainer extends Component {
    render () {
        const submitForm = (formValues) => {
            console.log('submitting Form: ', formValues);
        };
        const { handleSubmit, ...props } = this.props;
        if (props.slug === undefined) props.slug = props.newSlug;
        return (
            <Form onSubmit={handleSubmit(submitForm)}>
                <AddArtistForm
                    {...props}
                />
            </Form>
        );
    }
}

const formConfiguration = {
    form: 'artists'
};

const selector = formValueSelector('artists');

const mapStateToProps = state => ({
    slug: selector(state, 'slug'),
});

FormContainer = reduxForm(formConfiguration)(FormContainer);

export default connect(mapStateToProps)(FormContainer);
