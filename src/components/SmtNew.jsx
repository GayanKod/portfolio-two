import React from 'react';
import "./SmtNew.scss";

export default function SmtNew() {
  return (
    <div className="container">
      <div className="profile">
        <img src="https://cdn.discordapp.com/attachments/945783583413514293/1269383191568056320/1706695963822.png?ex=66afdcb8&is=66ae8b38&hm=2cdd7ca48e91be63775f8c3db68ab2c9dfc473638993911cb72f70c25ff0a5dd&" alt="Profile" className="avatar" />
        <div className="social-links">
          <a href="https://twitter.com/gayankodx" target="_blank" rel="noopener noreferrer"><span></span><span></span><span></span><span></span>Twitter</a>
          <a href="https://linkedin.com/in/gayankod" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/gayankod" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <h1 className="type">Something new, Coming soon...</h1>
      </div>
    </div>
  );
}