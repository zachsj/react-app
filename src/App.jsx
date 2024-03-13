

import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/homepage'
import { Counter } from './Pages/counter'
import { OrderForm } from './Pages/orderForm'
//import { UpdateStateObj } from './Pages/updateStateObj'
//import { UpdateStateArr } from './Pages/updateStateArr'
import { TaskList } from './Pages/taskList'
import { DigitalClock } from './Pages/digitalClock'
import { StopWatch } from './Pages/stopWatch'



import { Layout } from './Layout'



function App() {
     
    return(
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/orderForm" element={<OrderForm />} />
            {/*<Route path="/updateStateObj" element={<UpdateStateObj />} />
            <Route path="/updateStateArr" element={<UpdateStateArr />} />*/}
            <Route path="/taskList" element={<TaskList />} />
            <Route path="/digitalClock" element={<DigitalClock />} />
            <Route path="/stopWatch" element={<StopWatch />} />
          </Route>
        </Routes>
      </Router>
    ); 
}

export default App
