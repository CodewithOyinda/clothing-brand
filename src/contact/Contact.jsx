import React, { Component } from 'react';
import Nav from '../nav/Nav';
import BottomNav from '../bottomNav/BottomNav';
import '../contact/Contact.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      submitted: false,
      errors: {}, // Add an errors object to track validation errors
    };
  }

  handleChange = (event) => {
    const { formData, errors } = this.state;
    formData[event.target.name] = event.target.value;
    errors[event.target.name] = ''; // Clear the error when there's a change
    this.setState({ formData, errors });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const { formData } = this.state;
    const errors = {};

    // Check for required fields
    if (!formData.name.trim()) {
      errors.name = 'This field is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'This field is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'This field is required';
    }

    // If there are errors, set them in the state
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
      });
    }
  }

  render() {
    const { formData, submitted, errors } = this.state;
   
    const textFieldStyle = {
      width: '100%', // Adjust the width as needed
    };
   
    const buttonStyle = {
      background: 'black',
      color: 'white',
    };

    return (
      <div>
        <Nav/>
        <div>
          <div className='contact-us'>
            <h1>Contact Us</h1>
            <div className='contact_form'>
              <form onSubmit={this.handleSubmit}>
                <Stack spacing={4}>
                  <Stack direction='row' spacing={4}>
                    <TextField
                      id="standard-basic"
                      label="Your name"
                      variant="standard"
                      color="secondary"
                      onChange={this.handleChange}
                      name="name"
                      value={formData.name}
                      error={Boolean(errors.name)} // Set error state
                      helperText={errors.name} // Display the error message
                      sx={textFieldStyle}
                    />
                    <TextField
                      id="standard-basic"
                      type="email"
                      label="Your email"
                      variant="standard"
                      color="secondary"
                      onChange={this.handleChange}
                      name="email"
                      value={formData.email}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      sx={textFieldStyle}
                    />
                  </Stack>
                  <div>
                    <TextField
                      type="message"
                      label="Message"
                      multiline
                      rows={3}
                      variant="standard"
                      color="secondary"
                      onChange={this.handleChange}
                      name="message"
                      value={formData.message}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      sx={textFieldStyle}
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      variant="outlined"
                      color="secondary"
                      disabled={submitted}
                      sx={buttonStyle}
                    >
                      {submitted ? 'Your form is submitted!' : 'Send Message'}
                    </Button>
                  </div>
                </Stack>
              </form>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Contact;
