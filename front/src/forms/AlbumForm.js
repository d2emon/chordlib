import React, { Component, Fragment } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {
    Form,
    Button,
    FormGroup,
    FormFeedback,
    Label,
    Input,
    Row,
    Col,
} from 'reactstrap';
import { markdown } from 'markdown';
import { validateAlbum, getSlug } from "../actions/albumActions";

class AlbumForm extends Component {
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

    renderField = ({
                       input,
                       label,
                       type,
                       meta: {
                           asyncValidating,
                           touched,
                           error,
                           valid,
                           invalid,
                           ...otherMeta
                       },
                       ...props
                   }) => {
        const { onChange } = input;
        const handleChange = e => onChange(e);
        return (
            <FormGroup className={asyncValidating ? 'async-validating' : ''}>
                {label && <Label for={input.name}>{label}</Label>}
                <Input
                    {...props}
                    {...input}
                    valid={touched && valid}
                    invalid={touched && invalid}
                    onChange={handleChange}
                />
                {touched && error && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        );
    };

    renderEditor = ({
                        input,
                        label,
                        type,
                        meta: {
                            asyncValidating,
                            touched,
                            error,
                            valid,
                            invalid,
                            ...otherMeta
                        },
                        ...props
                    }) => {
        const { onChange } = input;
        const handleChange = e => onChange(e);
        const rawHTML = markdown.toHTML(input.value);
        return (
            <FormGroup className={asyncValidating ? 'async-validating' : ''}>
                {label && <Label for={input.name}>{label}</Label>}
                {/* <input {...input} type={type} placeholder={label} /> */}
                <Row>
                    <Col>
                        <Input
                            {...props}
                            {...input}
                            valid={touched && valid}
                            invalid={touched && invalid}
                            onChange={handleChange}
                            type="textarea"
                        />
                        {touched && error && <FormFeedback>{error}</FormFeedback>}
                    </Col>
                    <Col dangerouslySetInnerHTML={{__html: rawHTML}} />
                </Row>
            </FormGroup>
        );
    };

    render () {
        const { handleSubmit, onSubmit, invalid } = this.props;
        console.log(this.props);
        return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    component={this.renderField}
                    name="title"
                    placeholder="Название"
                    required
                />
                {/*<Field
                    component={this.renderField}
                    name="author"
                    placeholder="Исполнитель"
                    required
                />*/}
                <Field
                    component={this.renderField}
                    name="slug"
                    placeholder="URI"
                    required
                />
                <Field
                    component={this.renderEditor}
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
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(AlbumForm);
