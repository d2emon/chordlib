import React, { Component, Fragment } from 'react';
import { Field } from 'redux-form';
import {
    Button,
    FormGroup,
    FormFeedback,
    Label,
    Input,
} from 'reactstrap';

class AddArtistForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            slug: '',
            description: '',
            validate: {},
            valid: false,
        };
    }

    componentWillReceiveProps({ name, slug, validate }) {
        // const valid = validate.name && validate.slug;
        // this.setState({ name, slug, validate, valid });
        this.props.change('slug', slug);
        this.setState({ name, slug });
    }

    renderField = ({ input, meta, ...props }) => {
        const { onChange } = input;
        const handleChange = e => onChange(e);
        /*
        if (!meta.touched) {
            console.log(input.name, input.value, this.props, this.state);
        }
        */
        return (
            <FormGroup>
                {props.label && <Label for={input.name}>{props.label}</Label>}
                <Input
                    {...props}
                    {...input}
                    onChange={handleChange}
                />
                {meta.touched && meta.error &&
                <FormFeedback>{meta.error}</FormFeedback>}
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
                    valid={this.state.validate.name === true}
                    invalid={this.state.validate.name === false}
                    required
                />
                <Field
                    component={this.renderField}
                    name="slug"
                    placeholder="URI"
                    valid={this.state.validate.slug === true}
                    invalid={this.state.validate.slug === false}
                    required
                />
                <Field
                    component={this.renderField}
                    name="description"
                    type="textarea"
                    label="Описание"
                />
                {/* <Button disabled={!this.state.valid}>Сохранить</Button> */}
                <Button>Сохранить</Button>
            </Fragment>
        );
    }
}

export default AddArtistForm;
