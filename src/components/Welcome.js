import React, {Component} from 'react';

class Welcome extends Component{
  render(){
    return(
      <React.Fragment>
        <h1 id="welcomeTitle">Welcome to Mint Light</h1>
        <div class="welcomeForm">
          <form action="#">
            Username: <input type="text" name="username"/> <br/>
            Password: <input type="password" name="password"/><br/>
            <input type="submit" value="Login"/> <br/>
            <input type="submit" value="Sign Up"/>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
