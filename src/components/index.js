import React, {useState, useEffect} from 'react'
import records from '../student_records.json'
import MainTable from './MainTable'
import InputForm from './InputForm'
import EditForm from './EditForm'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import NavBar from './NavBar'
import axios from 'axios'

console.log(records);

const Index = () => {
   const [data, setData] = useState([]);
    const [edit, setEdit] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:2000/getData')
    .then((res) =>{
      if(res.status === 200){
      console.log(res);
      setData(res.data)
      }
    })
    .catch(error =>{
      console.error("Error fetching data", error);
    })
  },[])


    const renderEdit = ()=>{
            if(edit){
            return (
            <Router>
            <Switch>
            <Route path='/edit' component={()=> <EditForm setEdit={setEdit} edit={edit} data={data} setData={setData}/>}/>

            <Route path='/' exact component={()=> <MainTable setData={setData} data={data} setEdit={setEdit} edit={edit} /> }/>

        <Route path='/inputForm' component={()=><InputForm setData={setData} data={data} />}  />

            </Switch>
            </Router>)
          }
    }

    renderEdit()

    return (
         <div>
        <NavBar data={data}/>
        <br/>
        <Router>
        <Switch>
        <Route path='/' exact component={()=> <MainTable setData={setData} data={data} setEdit={setEdit} edit={edit} /> }/>
        {/* <MainTable setData={setData} data={data} setEdit={setEdit} edit={edit} /> */}
        <Route path='/inputForm' component={()=><InputForm setData={setData} data={data} />}  />
        {/* <InputForm setData={setData} data={data} /> */}
        <br />

        </Switch>
        </Router>
      {renderEdit()}

         </div>
    )
}

export default Index

// MainComponent - state
//   - Table,
//   - form,
//   - leader board