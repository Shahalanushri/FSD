import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2>SIGN UP</h2>

        <form>
            username:<input type='text' id='name'/><br></br><br></br>
            email:<input type='email' id='email'/><br></br><br></br>
            password:<input type='password' id='pass'/><br></br><br></br>
            <input type='submit' value='submit'/>

        </form>
    </div>
  )
}

export default Signup