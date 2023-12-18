import React from 'react'
import Meteor from './Meteor';

const MeteorShower = (props) => {
    var meteors = [];
  for (let i = 0; i < props.count; i++) {
    meteors[i] = i;
  }
  return (
    <>
    {meteors.map((meteor) => {
        return <Meteor key={meteor} />;
      })}
    </>
  )
}

export default MeteorShower