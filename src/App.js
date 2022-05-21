import logo from './logo.svg';
import './App.css';
var list  = ["srinivas","syabKhan","Prithvi","Kamesh","srikanth","Gopi","sridhar","mahesh","sudharshan","yash"];
function App() {
  return (
  <>
      <h1>Srinivas ❤️ 💸💰🪙💲 lot</h1>
     <section className="Items">
        {
          list.map((e) => <div className="Card" style={{color:"white",}}>
                  <img src={logo} alt="React logo"></img>
                  <h1>{e}</h1>
          </div>)
        }
      </section>
    </>
  );
}

export default App;
