import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [birthdayName, setBirthdayName] = useState('');

  useEffect(() => {
    fetch('https://6367c5fbedc85dbc84db6854.mockapi.io/api/v1/notes')
      .then(res => res.json())
      .then(data => setBirthdayName(data[0].birthday))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="over">
        <div className="wrapper">
          <div className="wrapper__edgrunner">
            {birthdayName && <h1 className='h1'>{birthdayName}</h1>}
          </div>
          <div className="wrapper__edgrunner">
            {birthdayName && <h1 className='h1'>{birthdayName}</h1>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
