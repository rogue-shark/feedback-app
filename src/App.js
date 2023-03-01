// import React from 'react' //dont have to do this anymore with new version of react

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

// NOTE: when we pass a prop we need to catch it within the component - so we do that by passing "props" in our function that will be an object for any props that are passed in
function App() {
  //returning JSX - syntactic sugar to put HTML in JS
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIcon />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
