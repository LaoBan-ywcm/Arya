import Home from '@containers/home';
import PostPage from '@containers/postPage/pc';
import store from '@stores/index';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = (): ReactElement => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/post/:id" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
