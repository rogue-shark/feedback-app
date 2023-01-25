import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return 'No feedback data entries.';
  }
  //with framer-motion
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.dev
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.dev>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete} //passing upwards to App.js
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
