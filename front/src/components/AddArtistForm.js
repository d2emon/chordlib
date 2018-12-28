import React, { Component, } from 'react';
import {
    Button,
    Form,
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps({ name, slug, validate }) {
        const valid = validate.name && validate.slug;
        this.setState({ name, slug, validate, valid });
    }

    handleChange (field) {
        return e => {
            e.preventDefault();

            const value = e.target.value;

            // this.setState({ [field]: value });
            if (this.props.onChange) this.props.onChange({ [field]: value });
        };
    }

    handleSubmit (e) {
        e.preventDefault();

        if (this.props.onSubmit) this.props.onSubmit(this.state);
    }

    render () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input
                        name="name"
                        id="artistName"
                        placeholder="Исполнитель"
                        value={this.state.name}
                        valid={this.state.validate.name === true}
                        invalid={this.state.validate.name === false}
                        onChange={this.handleChange('name')}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        name="uri"
                        id="artistUri"
                        placeholder="URI"
                        value={this.state.slug}
                        valid={this.state.validate.slug === true}
                        invalid={this.state.validate.slug === false}
                        onChange={this.handleChange('slug')}
                        required
                    />
                    <FormFeedback>Введите уникальное значение.</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="artistDescription">Описание</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="artistDescription"
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                    />
                </FormGroup>
                <Button disabled={!this.state.valid}>Сохранить</Button>
            </Form>
        );
    }
}

export default AddArtistForm;
