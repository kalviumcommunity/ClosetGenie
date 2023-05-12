import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button  onClick={() => loginWithRedirect({
    appState:{
      returnTo: window.location.pathname
    },
  })}>Log In</button>;
};

// export const useRedirectCallback=(appState)=>{
//   console.log(appState)
//   const navigate=useNavigate()
//   navigate(appState.returnTo)
// }

export default LoginButton;