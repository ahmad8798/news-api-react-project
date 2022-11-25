
import { useState ,useEffect} from 'react';

import axios from 'axios'
import Card from './Card';

function App() {

  const [apidata,setApiData] = useState([])
  const [country,setCountry]=useState('in')
  const [searchvalue,setSearchValue]=useState('')
  useEffect(()=>{
    const asyncFetchNewsData = async()=>{
      const fetchData = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=041a32b9b26e4dc6b06326e8457d27d2`)
      setApiData(fetchData.data.articles)
      
    }
      asyncFetchNewsData()
  },[country])
  console.log(apidata)
  return (
    
    <div className="App">
      <div className='container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">News api</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort news By Country
              </a>
              <ul class="dropdown-menu dropdown-menu-light">
                <li><a onClick={()=>setCountry('us')} class="dropdown-item" href="#">USA</a></li>
                <li><a onClick={()=>setCountry('gb')}  class="dropdown-item" href="#">UK</a></li>
                <li><a onClick={()=>setCountry('in')} class="dropdown-item" href="#">India</a></li>
                <li><a onClick={()=>setCountry('au')} class="dropdown-item" href="#">Australia</a></li>
                <li><a onClick={()=>setCountry('ca')} class="dropdown-item" href="#">Canada</a></li>
                <li><a onClick={()=>setCountry('nz')} class="dropdown-item" href="#">NewZealand</a></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className='mt-3'>
    
    <input className='form-control me-2' type='text' placeholder='search news' onChange={e=>{setSearchValue(e.target.value)}}/>
    </div>
        <div className='row'>
          {
            apidata.filter((val)=>{
              if(searchvalue===""){
                return val;
              } else if(val.title.toLowerCase().includes(searchvalue.toLowerCase())){
                return val;
              }
              
            }).map(val=>{
              return(
                
                <Card imagesource={val.urlToImage} title={val.title} content={val.content} newsLink={val.url}/>
              )
            })
          }
            
          </div>
        </div>

      </div>

    
  );
}

export default App;
