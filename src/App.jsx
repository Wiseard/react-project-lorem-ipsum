import { useState } from 'react'
import { LoremList } from './LoremList'
import { Form } from './Form'

const App = () => {
  const [list, setList] = useState([])
  return (
    <main>
      <section className="lorem-container">
        <h1 className="title">tired of boring lorem ipsum? </h1>
        <Form list={list} setList={setList} />
        <LoremList list={list} />
      </section>
    </main>
  )
}

export default App
