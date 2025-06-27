import { Route, Routes, Navigate } from "react-router";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import NotificationsPage from './pages/NotificationsPage';
import CallPage from './pages/CallPage';
import ChatPage from './pages/ChatPage';
import OnboardingPage from './pages/OnboardingPage';


import PageLoader from "./components/PageLoader";
import useAuthUser from "./hooks/useAuthUser";
import  Layout  from "./components/Layout";
import { useThemeStore } from "./store/useThemeStore";


const App = () => {
  // tankStack query 

 const {isLoading , authUser} = useAuthUser();
 const{theme} =useThemeStore();

 const isAuthenticated = Boolean(authUser);
 const isOnboarded = Boolean(authUser?.isOnboarded);
  
  
  if(isLoading)return <PageLoader/>

  return (
    <div className=" h-screen" data-theme={theme}>
      <Routes>
        <Route path="/" 
        element={
          isAuthenticated && isOnboarded ? (
            <Layout showSidebar={true}>
              <HomePage />
            </Layout>
        ) : <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />} 
        />
        <Route path="/signup" 
        element={
          !isAuthenticated ? <SignUpPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
        }
         />
        <Route path="/login" 
        element={
          !isAuthenticated ? <LoginPage /> : <Navigate to={isOnboarded  ?"/" : "/onboarding" }/>
          }
           />
        <Route path="/notifications" element={isAuthenticated ? <NotificationsPage /> : <Navigate to="/login" />} />
        <Route path="/call" element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />} />
        <Route path="/chat" element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path="/onboarding" element={
          isAuthenticated ? (
            !isOnboarded ? <OnboardingPage /> : <Navigate to="/" />
          ) : <Navigate to="/login" />
          } />
      </Routes>
    </div>
  )
};

export default App