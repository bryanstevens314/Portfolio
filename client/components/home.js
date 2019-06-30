import React from 'react'

const Home = () => (
  <div className="home">
    <Texture />
    <Detail />
    <Style />
    <Leather />
  </div>
)

const Texture = () => (
  <div className="texture">
    <img src="./texture2.jpg" />
  </div>
)
const Detail = () => (
  <div className="detail">
    <div className="wrapper">
      {/* <img className="des1" src="./<>.png" />
      <img className="ASE" src="./ASE-CERTIFIED-LOGO.png" />
      <p>Software Engineer turned Mechanic. I am a Central Coast local constantly striving towards a better life for myself and those around me. Let’s chat.</p> */}
    </div>
  </div>
)
const Style = () => (
  <div className="style">
  </div>
)
const Leather = () => (
  <div className="leather">
    <div className="leather_Detail" />
    <img src="./leather.jpg" />
  </div>
)

export default Home;
