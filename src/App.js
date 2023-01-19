// import React from 'react' //dont have to do this anymore with new version of react
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

// NOTE: when we pass a prop we need to catch it within the component - so we do that by passing "props" in our function that will be an object for any props that are passed in
function App() {
  const [feedback, setFeedback] = useState(FeedbackData); //app level state

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //returning JSX - syntactic sugar to put HTML in JS
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
