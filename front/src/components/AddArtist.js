import React, { Component, } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';


class AddArtist extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            slug: '',
            description: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSlugChange = this.handleSlugChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange (e) {
        this.setState({
            name: e.target.value,
            slug: e.target.value,
        });
    }

    handleSlugChange (e) {
        this.setState({ slug: e.target.value });
    }

    handleDescriptionChange (e) {
        this.setState({ description: e.target.value });
    }

    handleSubmit () {
        alert(JSON.stringify(this.state));
    }

    render () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input name="name" id="artistName" placeholder="Исполнитель" value={this.state.name} onChange={this.handleNameChange} />
                </FormGroup>
                <FormGroup>
                    <Input name="uri" id="artistUri" placeholder="URI" value={this.state.slug} onChange={this.handleSlugChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="artistDescription">Описание</Label>
                    <Input type="textarea" name="description" id="artistDescription"  value={this.state.description} onChange={this.handleDescriptionChange} />
                </FormGroup>
                <Button>Сохранить</Button>
            </Form>
        );
    }
}

export default AddArtist;
