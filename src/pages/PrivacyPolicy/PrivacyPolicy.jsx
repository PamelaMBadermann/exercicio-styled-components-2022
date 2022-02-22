import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
    return (
      <>
        <h1>Privacy Policy</h1>
        <div>
            Voltar para <Link to={'/'}>Home</Link>
        </div>
      </>
    );
}
  
export { PrivacyPolicy };
  
