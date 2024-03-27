import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Edit } from './pages/Edit';

import { useUser } from './hooks/useUser';

function App() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Authenticated Route */}
        <Route path="/" element={user ? <HomePage user={user} /> : <Navigate to="/login" />} />
        <Route path="/edit" element={user ? <Edit user={user} /> : <Navigate to="/login" />} />

        {/* Unauthenticated Route */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;