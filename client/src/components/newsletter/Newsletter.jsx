import React, { useState } from 'react';
import classes from './newsletter.module.css';
import { FiSend } from 'react-icons/fi';

const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  
  const handleSubscription = () => {
    if (email.trim() !== '') {
      setIsSubscribed(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const closePopup = () => {
    setIsSubscribed(false);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to get the latest offers?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className={classes.inputContainer}>
          <input
            type="email"
            placeholder="Type email..."
            value={email}
            onChange={handleInputChange}
          />
          <button onClick={handleSubscription} className={classes.sendButton}>
            <FiSend className={classes.sendIcon} />
          </button>
        </div>
        {showError && (
          <div className={classes.popup}>
            <div className={classes.popupContent}>
              <p>Please enter an email address.</p>
              <span className={classes.close} onClick={() => setShowError(false)}>
                &times;
              </span>
            </div>
          </div>
        )}
        {isSubscribed && (
          <div className={classes.popup}>
            <div className={classes.popupContent}>
              <p>Subscribed successfully!</p>
              <span className={classes.close} onClick={closePopup}>
                &times;
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
