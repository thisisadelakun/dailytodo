import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Import components
import Loader from './components/loader/Loader';
const Privacy = lazy(() => import('./components/privacy/Privacy'))
const HowTo = lazy(() => import('./components/howto/HowTo'))
const Home = lazy(() => import('./components/home/Home'))

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}

function App() {
  const queryClient = new QueryClient();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const displayTodo = () => {
    return (
      <Routes>
        <Route
          path='/' exact
          element={(
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          )}
        />

        <Route
          path='/how-to-use-dailytodo'
          element={(
            <React.Suspense fallback={<Loader />}>
              <HowTo />
            </React.Suspense>
          )}
        />

        <Route
          path='/privacy'
          element={(
            <React.Suspense fallback={<Loader />}>
              <Privacy />
            </React.Suspense>
          )}
        />
      </Routes>

    );
  };

  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollToTopOnPageChange />
            {isLoading ? (
              <Loader />
            ) : (
              <Suspense fallback={<Loader />}>
                {displayTodo()}
              </Suspense>
            )}
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </>
  );
}

export default App;