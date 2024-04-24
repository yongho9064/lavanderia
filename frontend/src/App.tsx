import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <div className="hi bg-red-500 p-4 h-800px">
          <p className="hi bg-red-500 p-4">This is a styled div using Tailwind CSS.</p>
      </div>
  );
}

export default App;