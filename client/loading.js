import React from 'react'
import { PacmanLoader } from 'react-spinners';

const Loading = (props) => {
  const class_name = props.loading ? "loading" : " loading hidden"
  return (
    <div className={class_name} >
      <div className="circle_Loader">
        <PacmanLoader
          sizeUnit={"px"}
          size={20}
          color={'#333333'}
        />
      </div>

    </div>
  )
}

export default Loading;
