import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import AboutPage from "./Pages/AboutPage"
import AboutIconLink from "./Components/AboutIconLink"
import {FeedbackProvider} from "./Context/FeedbackContext"

function App () {
  
    return (
      <FeedbackProvider>
      <Router>
      <Header/>
        <div className="container">
          <Routes>
          <Route exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats/>
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
         </Routes>
        </div>
        <AboutIconLink />
      </Router>
      </FeedbackProvider>
    )
}

export default App