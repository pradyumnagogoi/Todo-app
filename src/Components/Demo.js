import React, { useState } from 'react';

function Demo() {

  const [course, setCourse] = useState('fullstack');
  const [count, setCount] = useState(0);

  const updateCourse = () => {
      let val = course;
      (val === 'fullstack') ?
        setCourse('MERN') : setCourse('fullstack');
  }

  return (
    <div>
        <div>
            <h2>Hii.. myself Pradyumna Gogoi</h2>
            <p>I am a {course} developer.</p>
            <button onClick={updateCourse}>Update</button>
        </div>
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    </div>
  )
}

export default Demo