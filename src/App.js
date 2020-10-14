import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Products } from './components/views/Products/Products';
import { Drugs } from './components/views/Drugs/Drugs';
import { NotFound } from './components/views/NotFound/NotFound';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { OrderSummary } from './components/views/OrderSummary/OrderSummary';
import './App.css';
// import background from 'public/images/22.jpg';
import background from './components/images/55.jpg';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});


const App = () => (
  <div className="background"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
              {/* <img src="/images/11.jpg" alt=""/> */}
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/products/:id' component={Products} />
                <Route exact path='/drug/:id' component={ Drugs } />
                <Route exact paht='/order' component={ OrderSummary } />
                <Route path='*' component={NotFound} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  </div>
);

export { App };
