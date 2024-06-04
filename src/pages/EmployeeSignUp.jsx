import React from 'react';
import { useNavigate } from 'react-router-dom';
import keycloak from '../keycloak';  // Use the initialized keycloak instance

export default function EmployeeSignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    keycloak.init({ 
      onLoad: 'login-required', 
      redirectUri: window.location.origin + '/timesheet'  // Dynamic redirect URI
    }).then((authenticated) => {
      if (authenticated) {
        navigate('/timesheet');
      } else {
        navigate('/?error=login_failed');
      }
    }).catch((error) => {
      console.error('Keycloak initialization error:', error);
      navigate('/?error=login_failed');
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