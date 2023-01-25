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
      id: 3,
      text: 'this is from feedback 3',
      rating: 5,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false, //if the edit icons is clicked it'll go into edit mode i.e setFeedbackEdit = true , else false by default
  });

  // ADD feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]); //adding new feedback (on top) to already existing array of feedbacks
  };

  // DELETE feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // UPDATE feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //EDIT feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      //things we can use in our components that it's provided to
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, //function that runs when we click the edit button
        feedbackEdit, //actual piece of state that holds the item and the boolean
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
