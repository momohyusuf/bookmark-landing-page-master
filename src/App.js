import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components.js/SharedLayout';
import Features from './pages.js/Features';
import Pricing from './pages.js/Pricing';
import Contact from './pages.js/Contact';
import Login from './pages.js/Login';
import Error from './pages.js/Error';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
