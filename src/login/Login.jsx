import React, { Component } from 'react';
import Nav from '../nav/Nav';
import BottomNav from '../bottomNav/BottomNav';
import '../login/Login.css';
import { Stack, TextField, Box } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
      },
      submitted: false,
      errors: {}, // Add an errors object to track validation errors
    };
  }

  handleChange = (event) => {
    const { formData, errors } = this.state;
    formData[event.target.name] = event.target.value; 
    errors[event.target.name] = ''; 
    this.setState({ formData, errors });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const { formData } = this.state;
    const errors = {};

    // Check for required fields
    if (!formData.email.trim()) {
      errors.email = 'required*';
    }
    if (!formData.password.trim()) {
      errors.password = 'required*';
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
          <div className='login'>
            <h1>LOGIN</h1>
            <form onSubmit={this.handleSubmit}>
              <Stack spacing={4}>
                <Box width={700}>
                <TextField
                  label="Email"
                  color="secondary"
                  onChange={this.handleChange}
                  fullWidth
                  name="email" // Fixed: Use "name" property, not "email"
                  value={formData.email}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  sx={textFieldStyle}
                />
                </Box>
                <br />
                <Box width={700}>
                <TextField
                  label="Password"
                  color="secondary"
                  type='password'
                  fullWidth
                  onChange={this.handleChange}
                  name="password" // Fixed: Use "name" property, not "password"
                  value={formData.password}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  sx={textFieldStyle}
                />
                </Box>
                <br />
                <Stack direction='row' spacing={4}>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={submitted}
                  sx={buttonStyle}
                >
                  {
                    (submitted && 'LOGIN')
                    || (!submitted && 'LOGIN')
                  }
                </Button>
                <Link to='/signup'>CREATE AN ACCOUNT</Link>
                </Stack>
              </Stack>
            </form>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Login;
