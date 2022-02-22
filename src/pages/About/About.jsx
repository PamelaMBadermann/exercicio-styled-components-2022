import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
      <>
        <h1>About</h1>
        <div>
            Voltar para <Link to={'/'}>Home</Link>
        </div>
      </>
    );
}
  
export { About };
  
