import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar"
import {useFetch } from './components/useFetch';
import csvToJSON from "./components/csvToJSON"

const urlMenu="https://raw.githubusercontent.com/kmagdi/kt-data/main/menu.csv"



export const App=()=>{
  
  const {data,loading}=useFetch(urlMenu)
  const menu=csvToJSON(String(data), ';')
  
  return (
    <div >
      <Navbar menu={menu} />
    </div>
  );
}