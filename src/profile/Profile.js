import React from 'react';
import PropTypes from 'prop-types';




const Profile = ({ fullName, bio, profession, image, handleName }) => {
  return (
    <div style={styles.container}>
      <h1>{fullName}</h1>
      <img src={image} alt="Profile" style={styles.image} />
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={handleName}>Show Name</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'Unknown',
};

const styles = {
  container: {
    textAlign: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
  },
};

export default Profile;
