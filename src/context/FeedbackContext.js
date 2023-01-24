import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is from feedback 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'this is from feedback 2',
      rating: 1,
    },
    {
      id: 2,
      text: 'this is from feedback 3',
      rating: 5,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]); //adding new feedback (on top) to already existing array of feedbacks
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      //things we can use in our components that it's provided to
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
