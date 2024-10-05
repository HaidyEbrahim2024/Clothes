// LoadingPage.js
import React from 'react';
import load from "./load.png"
export default function LoadingPage() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="d-flex justify-content-center align-items-center">
        <img src={load}/>
      </div>
    </div>
  );
}
