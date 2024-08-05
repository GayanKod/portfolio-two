import React from 'react';
import "./SmtNew.scss";

export default function SmtNew() {
  return (
    <div className="container">
      <div className="profile">
        <img src="./profile.png" alt="Profile" className="avatar" />
        <div className="social-links">
          <a href="https://twitter.com/gayankodx" target="_blank" rel="noopener noreferrer"><span></span><span></span><span></span><span></span>Twitter</a>
          <a href="https://linkedin.com/in/gayankod" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/gayankod" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://docs.google.com/document/d/1etmsbm6Py4J9Xxqk-jH_o4qCLzJS-ix0Oni5qHKubCc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
        <h1 className="type">Something new, Coming soon...</h1>
      </div>
    </div>
  );
}