// src/components/TimeSheet.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Keycloak from 'keycloak-js';

export default function TimeSheet() {
  const history = useNavigate();

  useEffect(() => {
    const keycloak = new Keycloak({
      url: 'http://localhost:4000',
      realm: 'DataBrew-LLC',
      clientId: 'myclient',
    });

    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      if (!authenticated) {
        history.push('/?error=login_required');
      }
    });
  }, [history]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Time Sheet</h2>
      {/* Add your time sheet content here */}
    </div>
  );
}