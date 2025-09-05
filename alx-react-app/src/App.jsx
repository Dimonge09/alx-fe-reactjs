import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile'; // 👈 new import

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys coding and playing guitar" 
      />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;