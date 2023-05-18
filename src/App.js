import React from 'react';
import Profile from './profile/Profile';
import profimg from './profile-image.jpeg';

const App = () => {
  const handleName = () => {
    alert('Daniel Oluwaseun Obamuyi'); 
  };

  return (
    <div className="App">
      <Profile
        fullName="Daniel Oluwaseun Obamuyi"
        bio="I'm a web developer."
        profession="Software Engineer"
        image={profimg} 
         handleName={handleName}
      />
      
    </div>
  );
};

export default App;
