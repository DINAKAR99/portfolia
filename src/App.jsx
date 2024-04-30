import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Toaster } from "react-hot-toast";

import HashLoader from "react-spinners/HashLoader";

import Parallaxx from "./pages/Parallaxx";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="App">
          <HashLoader loading={loading} size={80} />
        </div>
      ) : (
        <>
          <div>
            <Toaster
              toastOptions={{
                // Default options for specific types
                error: {
                  duration: 1500,
                },
              }}
            />
          </div>

          <Routes>
            <Route path="/" element={<Parallaxx />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
