import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { TermsOfUse } from './pages/TermsOfUse/TermsOfUse';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/termsofuse' element={<TermsOfUse />}/>
                <Route path='/privacypolicy' element={<PrivacyPolicy />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;