const fakeAuth = {
  isAuthenticated: false,
  authenticate({email, pwd}) {
    return fetch('http://localhost:3003/login', {
      method: 'post',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({email, pwd})
      // email: email, pwd: pwd  shorthand properties
    }).then( res => {
      return res.json()
    }).then(json => {
      if (json.token) {
        localStorage.setItem('token', json.token)
        this.isAuthenticated = true
      } else {
        this.isAuthenticated = false
        Promise.reject()
      }  
    }).catch( () => {
      this.isAuthenticated = false
      Promise.reject()
    })
  },

  signout(cb) {
    this.isAuthenticated = false
    localStorage.removeItem('token')
  }
}

export default fakeAuth ;
