import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false, //if the edit icons is clicked it'll go into edit mode i.e setFeedbackEdit = true , else false by default
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //FETCH feedback
  const fetchFeedback = async () => {
    const res = await fetch(
      //since we've already added proxy: http://localhost:5000
      `/feedback?_sort=id&_order=desc` //'sort' by "id" in "descending" 'order'
    );
    const data = await res.json();
    // console.log(data);
    setFeedback(data);
    setLoading(false);
  };

  // ADD feedback
  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await res.json();

    setFeedback([data, ...feedback]);
  };

  // DELETE feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // UPDATE feedback
  const updateFeedback = async (id, updatedItems) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItems),
    });

    const data = await res.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        loading,
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
