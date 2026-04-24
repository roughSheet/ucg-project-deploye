import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import RecordRetrieval from './pages/RecordRetrieval'
import MedicalCoding from './pages/MedicalCoding'
import RevenueCycle from './pages/RevenueCycle'
import MedicalSummarization from './pages/MedicalSummarization'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/record-retrieval-services" element={<RecordRetrieval />} />
        <Route path="/medical-billing-coding" element={<MedicalCoding />} />
        <Route path="/revenue-cycle-management" element={<RevenueCycle />} />
        <Route path="/medical-records-summarization" element={<MedicalSummarization />} />
      </Routes>
      <Footer />
      <Chatbot />
    </BrowserRouter>
  )
}

export default App