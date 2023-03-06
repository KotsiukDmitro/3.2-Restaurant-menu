import { useState } from 'react';
import './App.css';
import { menu } from './menu.js';
import MenuItem from './MenuItem.js'

function App() {
  let [selectedCategory, setSelectedCategory] = useState()


  return (<div className='container'>
    <header className='header'>
      <h2 className='title'>Our Menu</h2>
      <div className='line'></div>
      <nav>
        <button className={selectedCategory === null ? ('btn btnSelected') : 'btn'} onClick={() => setSelectedCategory(null)}>All</button>
        <button className={selectedCategory === 1 ? ('btn btnSelected') : 'btn'} onClick={() => setSelectedCategory(1)}>Breakfest</button>
        <button className={selectedCategory === 2 ? ('btn btnSelected') : 'btn'} onClick={() => setSelectedCategory(2)}>Dinner</button>
        <button className={selectedCategory === 3 ? ('btn btnSelected') : 'btn'} onClick={() => setSelectedCategory(3)}>Lunch</button>
        <button className={selectedCategory === 4 ? ('btn btnSelected') : 'btn'} onClick={() => setSelectedCategory(4)}>Snakes</button>
      </nav>
    </header>
    <div className="content">
      <ul className="menu">
        {menu.filter(elem => {
          return !selectedCategory || elem.category === selectedCategory
        })
          .map(item => {
            return < MenuItem item={item} key={item.id} />
          })}
      </ul>
    </div>
  </div >
  )
}

export default App;




