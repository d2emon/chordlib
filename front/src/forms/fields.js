import React from 'react';
import {
    Col,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';
import {markdown} from "markdown";

export const InputField = ({
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

export const EditorField = ({
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

