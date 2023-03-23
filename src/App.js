import logo from './logo.svg';
import './App.css';

function Page() {
  return (
    <div className="App">
    
      <header className="App-header">
        <p>Logo</p>
      </header>
      <main>
        <div className='box'>
          <h3>Maria</h3>
          <p>Title: CEO</p>
          <p>Age: 29</p>
        </div>
        <div className='box'>
          <h3>Kati</h3>
          <p>Title: Developer</p>
          <p>Age: 25</p>
        </div>
        <div className='box'>
          <h3>Karin</h3>
          <p>Title: Designer</p>
          <p>Age: 45</p>
        </div>
    
      </main>
      <footer>
        <small>Copyrights</small>
      </footer>
    </div>
  );
}
function Main() {

  
}

export default Page;
