import React from 'react'
import './App.css'
import { Square } from './square'

export function App() {

  return (
    <article className='main-article'>

      <header className=''> 
        <div className='title'> Tres en Raya! </div>
        <div className='subtitle'> Haz click en un cuadrante para comenzar! </div>
      </header>

      <article className='tabletop'>
        <section className='column'>
          <React.Fragment>
            <Square />
            <Square />
            <Square />
          </React.Fragment>
        </section>

        <section className='column'>
          <React.Fragment>
            <Square />
            <Square />
            <Square />
          </React.Fragment>
        </section>

        <section className='column'>
          <React.Fragment>
            <Square />
            <Square />
            <Square />
          </React.Fragment>
        </section>

      </article>

    </article>
    
  )
}