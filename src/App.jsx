
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="layout" id="top">
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />  {/* ici toutes tes pages enfants seront rendues */}
        
      </main>
      
      <Footer />
    </div>
  );}






























