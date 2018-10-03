import React,{ Component } 	from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSignup: {  },
      formLogin: { },
    };
  }

  handleSignupFormChange(e){
    this.setState({ formSignup: { [e.target.name]: e.target.value } })
    console.log(this.state.formSignup)
  }

  handleLoginFormChange(e){
    this.setState({ formLogin: { [e.target.name]: e.target.value } })
    console.log(this.state.formLogin)
  }

  onMailSignup(e){
    e.preventDefault()
    console.log('onMailSignUp STATE :', this.state)
    this.event.onMailSignup(this.state.formSignup)
  }

  onMailLogin(e){
    e.preventDefault()
    this.event.onMailLogin(this.state.formLogin)
  }
  style(){
//general style ?
  }

  login() {
    return(
      <div>
        <form onSubmit={this.onMailLogin.bind(this)}>
          <input
            required
            name='email'
            type="text"
            value={email}
            placeholder="email"
            onChange={this.handleLoginFormChange.bind(this)}
          />
          <br></br>
          <input
            required
            name='mdp'
            type="text"
            value={mdp}
            placeholder="Mot de passe"
            onChange={this.handleLoginFormChange.bind(this)}
          />
        <br></br>
        <input type="submit" value="Me connecter"></input>

        {/* Bouton login with github
          texte "Créer mon compte" */}

        </form>
      </div>
    );
  }

  signup() {

    let { prenom, nom, email, mdp } = this.state.formSignup;

    return(
      <div>
        <form onSubmit={this.onMailSignup.bind(this)}>
          <input
            required
            name='prenom'
            type="text"
            value={prenom}
            placeholder="Prénom"
            onChange={this.handleSignupFormChange.bind(this)}
          />
          <br></br>
          <input
            required
            name='nom'
            type="text"
            value={nom}
            placeholder="Nom"
            onChange={this.handleSignupFormChange.bind(this)}
          />
          <br></br>
          <input
            required
            name='email'
            type="text"
            value={email}
            placeholder="email"
            onChange={this.handleSignupFormChange.bind(this)}
          />
          <br></br>
          <input
            required
            name='mdp'
            type="text"
            value={mdp}
            placeholder="Mot de passe"
            onChange={this.handleSignupFormChange.bind(this)}
          />
        <br></br>
        {/* Accepter les conditions générales */}
          <input type="submit" value="Créer mon compte"></input>
        </form>

        {/* Bouton login with github
        Texte "Se connecter" */}

      </div>
    );
  }

  render(){
    return(
      <div>
        { mode=="login" ? this.login() : this.signup() }
      </div>
    );
  }
}

export default Login;
