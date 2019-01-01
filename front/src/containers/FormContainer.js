import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { Form } from "reactstrap";
import AddArtistForm from '../components/AddArtistForm';

class FormContainer extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.slug, nextProps.newSlug);
    }

    render () {
        const { handleSubmit, ...props } = this.props;
        const submitForm = (formValues) => {
            console.log('submitting Form: ', formValues);
        };
        console.log(props);
        if (props.slug === undefined) {
            props.slug = props.newSlug;
        }

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

// export default reduxForm(formConfiguration)(FormContainer);

const ReduxFormContainer = reduxForm(formConfiguration)(FormContainer);

const selector = formValueSelector('artists');

const mapStateToProps = state => ({
    slug: selector(state, 'slug'),
});

export default connect(mapStateToProps)(ReduxFormContainer);
