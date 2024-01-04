import App  from './routes/App.js'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.js'
import MovieDetail from './routes/MovieDetail.js'
import StudioDetail from './routes/StudioDetail.js'


const Root = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/movie/:id" component={MovieDetail}/>
            <Route path="/company/:name" component={StudioDetail}/>
        </Switch>
    </BrowserRouter>
  )
}

export default Root
