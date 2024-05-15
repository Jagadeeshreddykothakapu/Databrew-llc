import React from 'react';
import { useNavigate } from 'react-router-dom';
import Keycloak from 'keycloak-js';

export default function EmployeeSignUp() {
  const history = useNavigate();

  const handleSignUp = () => {
    const keycloak = new Keycloak({
      url: process.env.REACT_APP_KEYCLOAK_URL,
      realm: process.env.REACT_APP_KEYCLOAK_REALM,
      clientId: process.env.REACT_APP_KEYCLOAK_CLIENT,
      redirectUri: 'http://localhost:3000/timesheet', // Update with your application's URL
    });

    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      if (authenticated) {
        history.push('/timesheet');
      } else {
        history.push('/?error=login_failed');
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Employee Sign Up</h2>
      <button
        onClick={handleSignUp}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Sign Up with Keycloak
      </button>
    </div>
  );
}