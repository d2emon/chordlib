import React, { Component, Fragment } from 'react';
import { Field } from 'redux-form';
import {
    Button,
    FormGroup,
    FormFeedback,
    Label,
    Input,
    Row,
    Col,
} from 'reactstrap';
import { markdown } from 'markdown';

class AddArtistForm extends Component {
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
        /*
        if (!meta.touched) {
            console.log(input.name, input.value, this.props, this.state);
        }
        */
        return (
            <FormGroup className={asyncValidating ? 'async-validating' : ''}>
                {label && <Label for={input.name}>{label}</Label>}
                {/* <input {...input} type={type} placeholder={label} /> */}
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
        /*
        if (!meta.touched) {
            console.log(input.name, input.value, this.props, this.state);
        }
        */
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
        return (
            <Fragment>
                <Field
                    component={this.renderField}
                    name="name"
                    placeholder="Исполнитель"
                    required
                />
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
                <Button disabled={this.props.invalid}>Сохранить</Button>
            </Fragment>
        );
    }
}

export default AddArtistForm;
