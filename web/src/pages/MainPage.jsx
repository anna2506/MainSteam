import React, { useState } from 'react';
import RegisterModal from '../components/RegisterModal';

function MainPage() {
  const [registerOpen, setRegisterOpen] = useState(true);
  return (
    <div>
      <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} />
      <h1>Hello</h1>
      <button onClick={() => setRegisterOpen(true)} type="button">
        Open RegisterModal
      </button>
    </div>
  );
}

export default MainPage;
