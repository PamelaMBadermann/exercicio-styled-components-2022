import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfUse() {
    return (
      <>
        <h1>Terms of Use</h1>
        <div>
            Voltar para <Link to={'/'}>Home</Link>
        </div>
      </>
    );
}
  
export { TermsOfUse };