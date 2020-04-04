import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCreds, setUserCreds] = useState({ email: '', password: '' });
  const { email, password } = userCreds;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCreds({ ...userCreds, [name]: value });

  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label='email'
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label='password'
          handleChange={handleChange} />

        <div className='buttons'>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);

