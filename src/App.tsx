import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* แสดงโลโก้แบบออฟไลน์ ไม่มีลิงก์ภายนอก */}
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">This app runs fully offline; no external links.</p>
      {/* Asset Management Services - เพิ่มรูปภาพ 4 ส่วนตามที่ร้องขอ */}
      <section className="services">
        <h2>Asset Management Services</h2>
        <p className="services-subtitle">Asset management services optimize and secure portfolios.</p>
        <div className="service-grid">
          <div className="service-card">
            <img src="/6.png" alt="ภาพส่วนที่ 1" className="service-image" />
            <h3>ส่วนที่ 1</h3>
          </div>
          <div className="service-card">
            <img src="/10.png" alt="ภาพส่วนที่ 2" className="service-image" />
            <h3>ส่วนที่ 2</h3>
          </div>
          <div className="service-card">
            <img src="/9.png" alt="ภาพส่วนที่ 3" className="service-image" />
            <h3>ส่วนที่ 3</h3>
          </div>
          <div className="service-card">
            <img src="/4.png" alt="ภาพส่วนที่ 4" className="service-image" />
            <h3>ส่วนที่ 4</h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
