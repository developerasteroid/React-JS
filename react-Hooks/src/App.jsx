import { useState } from 'react'
import './App.css'
import UseStateHook from './components/UseStateHook';
import UseContextHook from './components/UseContextHook/UseContextHook';

function App() {
  const [page, setPage] = useState(0)
  const lastPage = 2;

  const displayPage = () => {
    switch(page){
      case 0:
        return <UseStateHook/>
      case 1:
        return <UseContextHook/>
    }
  }

  return (
    <>
      <div className="head">
        <h1>Hooks</h1>
        <nav>
          <button onClick={()=>setPage(page - 1)} className={page==0? 'disabledBtn' : 'enabledBtn'} disabled={page==0? true:false}>{'<'}</button><span> Page: {page + ' '}</span><button className={ page==lastPage? 'disabledBtn' : 'enabledBtn'} onClick={()=>setPage(page + 1)} disabled={page==lastPage? true: false}>{'>'}</button>
        </nav>
      </div>
      <div>{displayPage()}</div>
    </>
  )
}

export default App
