import logo from "./logo.svg";
import "./App.css";

// JSX - JavaScript XML
// HTML & JS
// class => className

// Frontend Framework => SPA (Single Page Application)

// SSR => Server Side Rendering - Next.js - SEO gelişmiş
// CSR => Client Side Rendering - Default - SEO zayıf

function App() {
  // Component
  // React kodları
  // let, var, const
  const name = 10; // Veritabanı bğalantısı - API
  return (
    <div className="App">
      <header className="App-header">
        <h1> {name} </h1>
        <button className="btn btn-primary">Artır</button>
        <button className="btn btn-danger">Azalt</button>
      </header>
    </div>
  );
}

export default App;
