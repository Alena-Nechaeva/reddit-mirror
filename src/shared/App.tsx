//to create component "yo react-ts-component-dir name ./dir"

import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.css';
import { Layout } from './Layout/Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { useToken } from '../hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { PostsContextProvider } from './context/postsContext';

function AppComponent() {
  const [token] = useToken();
  // const { Provider } = tokenContext;

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
