import React from 'react'
import { RecoilRoot } from 'recoil'
import NewList from './components/NewList'
import InProgressList from './components/InProgressList'
import CompletedList from './components/CompletedList'
import NewActionInput from './recoil/NewActionInput'


const App = () => {
  return (
    <div className='App'>
      <RecoilRoot>
        <div className='App'>
          <header className='App-header'>
            <h1>Todo List</h1>
          </header>
          <NewActionInput />
          <div className='content'>
            <NewList />
            <InProgressList />
            <CompletedList />
          </div>
        </div>
      </RecoilRoot>

    </div>
  )
}
export default App
