import './App.css';
import React,  { useState, Fragment } from 'react' ;
const initialState =[
  {name : 'Shaivy' , position :1 },
  {name : 'Sachin' , position :2 },
  {name : 'Kevin' , position :3 },
  {name : 'Arushi' , position :4 },
  {name : 'Rajvi' , position :5 },
  {name : 'Avinash' , position :6 },
  {name : 'Ingrid' , position :7 },
  {name : 'Tanisha' , position :8 },
  {name : 'Tianna' , position :9},
  {name : 'Swasti' , position :10 },
  {name : 'Prashant' , position :11 },
]

function App() {

  const [rankings, setRankings] = useState(initialState)
  const [fav, SetFav] = useState('Sachin')
  const [numfav, SetNumFav] = useState(0);

  function moveUp(n, p) {
    let updatedRankings = rankings
    .map(i=>{
      if(i.position === p){
        return {...i, position: p+1}
      }
      return i
    })
    .map(i=>{
      if(i.name === n){
        return {...i, position: p-1}
      }
      return i
    })
    setRankings(updatedRankings)

  }

  function moveDown(n,p) {
    // do some thing here
     let updatedRankings = rankings
    .map(i=>{
      if(i.position === p){
        return {...i, position: p-1}
      }
      return i
    })
    .map(i=>{
      if(i.name === n){
        return {...i, position: p+1}
      }
      return i
    })
    setRankings(updatedRankings)
  }

  function changeFavorite(name) {
    // do some thing here
     if(numfav < 3){
      SetNumFav(numfav+1)
      SetFav(name)
    }
  }


const showRankings =rankings
.sort((a,b)=> a.position - b.position)
.map((i,idx,arr)=>{
return (<div style={{margin:"10px"}}>
 {i.name} {" "}
 <button onClick={()=>moveUp(i.name, arr[idx-1].position)}>Move Up </button>{" "}
 <button onClick={()=>moveDown(i.name, arr[idx+1].position)}> Move Down </button>{" "}
</div>)
})

const favs =rankings
.map(i=>{
return (<div style={{margin:"10px"}}>
 {i.name} {" "}
 <button disabled={numfav === 3} onClick={()=>changeFavorite(i.name)}>{`Click Here to make ${i.name} your Favorite`}</button>{" "}
</div>)
})

return (
<div style={{margin:"10vw", padding:"20px"}}>
<h2>Who in the class speaks the most other , Top speakers go on top</h2>
{showRankings}

<h2> Vote  on your most favorite person in class - Only one -- You guys better vote for me</h2>
<h3> I have set myself as default ..HAHA  </h3>
<h4>Only rule , you can change your mind 3 times , after which all buttons are disabled </h4>
<p>{`Currently your favorite person is ${fav}`}</p>
{favs}



</div>
  );
}

export default App;

