import App  from './routes/App.js'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.js'
import MovieDetail from './routes/MovieDetail.js'

const Root = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/movie/:id" component={MovieDetail}/>
        </Switch>
    </BrowserRouter>
  )
}

export default Root
