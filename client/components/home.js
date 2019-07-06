import React from 'react'

const Home = () => (
  <div className="home">
    <Texture />
    <DetailsCard />
    <Detail />
    <Style />
    <Leather />
  </div>
)

const Texture = () => (
  <div className="texture_Background">
    <img className="texture" src="./texture.jpg" />
  </div>
)
const DetailsCard = () => (
  <div className="personal_details">
    <div>
      <p>Bryan Stevens</p>
      <p>26 - San Luis Obispo, CA</p>
      <div>
        <a href="https://www.linkedin.com/in/bryan-stevens314/" target="_blank">
          <img src="./linkedin.png" />
        </a>
        <a href="https://github.com/bryanstevens314/Portfolio" target="_blank">
          <img src="./github.png" />
        </a>
        <a>
          <img src="./connect.png" />
        </a>
      </div>
      <p>Software Engineer</p>
      <p>Freelance Mechanic</p>
    </div>
    <img src="./portrait.JPG" />
  </div>
)
const Detail = () => (
  <div className="detail">
    <div className="wrapper">
      {/* <img className="des1" src="./<>.png" />
      <img className="ASE" src="./ASE.png" />
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
    <div>
      <img src="./react.png" />
      <img src="./angular.png" />
      <img src="./fullstack.png" />
    </div>
  </div>
)

export default Home;
