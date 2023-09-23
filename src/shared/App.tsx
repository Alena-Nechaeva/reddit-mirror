//to create component 'yo react-ts-component-dir name ./dir'
//this is Redux toolkit version of store configuration

import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.css';
import { Layout } from './Layout/Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import store from '../store/store';
import { Provider } from 'react-redux';
import { Token } from './Token';
import { BrowserRouter as Router, Routes, Route, redirect, Navigate } from 'react-router-dom';
import { Post } from './Post';
import { NotFound } from './NotFound';

function AppComponent() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const MainRoutes = () => {
    return (
      <>
        <Header />
        <Content>
          <Routes>
            <Route path="/posts" element={<CardsList />} />
            <Route path="/posts/:postId" element={<Post />} />
            <Route path="/auth" element={<Navigate to="/posts" />} />
            <Route path="/" element={<Navigate to="/posts" />} />
            <Route path="*" element={<Navigate replace to="/notfound" />} />
          </Routes>
        </Content>
      </>
    );
  };

  return (
    <Provider store={store}>
      {mounted && (
        <Router>
          <Token />
          <Layout>
            <Routes>
              <Route path="/notfound/" element={<NotFound />} />
              <Route path="*" element={<MainRoutes />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
