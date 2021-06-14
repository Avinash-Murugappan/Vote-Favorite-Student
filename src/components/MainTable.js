import React from 'react'
import './MainTable.css'
import EditForm from './EditForm'


const MainTable = ({data, setData, edit, setEdit}) => {

   function handleRemove(name){
      let copyData = [...data]
      let filtered = copyData.filter(i=>i.Name !== name )
      setData(filtered)
    }

    function handleEdit(name){
      let copyData = [...data]
      let Efiltered = copyData.filter(i=>i.Name === name )

      setEdit(Efiltered)
    }
//  var result = [];
// for(var i in data)
//     result.push([data[i]]);

//     result.forEach((user)=>{
//       console.log(user[0]);
//       console.log(user.includes("Homework1"));
//     })


    return (
        <div style={{maxWidth:'fit-content', fontFamily:'monospace', textAlign:'center', fontSize:'16px', lineHeight:'1.5rem', justifyContent:'center'}}>
    Main Table
    <hr />
    <table>
    <th style={{borderBottom:'3px solid black'}}>Name</th>
    <th style={{borderBottom:'3px solid black'}}>Email</th>
    <th style={{borderBottom:'3px solid black'}}>Phone</th>
    <th style={{borderBottom:'3px solid black'}}>Netlify Project Link</th>
    <th style={{borderBottom:'3px solid black'}}>Homework 1 </th>
    <th style={{borderBottom:'3px solid black'}}>Homework 2</th>
    <th style={{borderBottom:'3px solid black'}}>Homework 3 </th>
    <th style={{borderBottom:'3px solid black'}}>Homework 4 </th>
    <th style={{borderBottom:'3px solid black'}}>Homework 5 </th>
    <th style={{borderBottom:'3px solid black'}}>Total </th>
 <tbody>
{
  data.map(function (element, idx) {

    const arr = Object.values(element);

    let numberOnly = (val)=>{
      if(typeof(val)=== 'number' && val<100 ){
        return val;
      }
    }

    let numbers = arr.filter(numberOnly);
   // console.log(numbers)
    let updatedVal = numbers.slice(0,4)
    console.log(updatedVal)

    let total = updatedVal.reduce((acc, val)=>{
        return acc + val;
    },0)



    return (
      <tr  key={idx}>
        <td style={{borderBottom:'1px solid black'}} >{element.Name}</td>
        <td style={{borderBottom:'1px solid black'}} >{element['Email Address'] }</td>
        <td style={{borderBottom:'1px solid black'}} > {element["Phone Number"]}</td>
        <td style={{borderBottom:'1px solid black'}} > <a href={element["Netlify Project Link"]}> Link</a></td>
        <td style={{borderBottom:'1px solid black'}} > {element["Homework1 ( 2 ) Git Practice"]}</td>
      <td style={{borderBottom:'1px solid black'}} > {element["Homework2( 2 ) Javascript"]}</td>
      <td style={{borderBottom:'1px solid black'}} > {element["Homework 2.2 ( 4 points) class project"]}</td>
      <td style={{borderBottom:'1px solid black'}} > {element["Homework 3.1 ( CSS Selectors Exercise ) 4 points"]}</td>
      <td style={{borderBottom:'1px solid black'}} > {element["3.2 ( Nav Bar )"]}</td>
      <td style={{borderBottom:'1px solid black'}} > {total} </td>
      <td> <button onClick={()=>handleRemove(element.Name)}>Delete</button></td>
      <td> <button onClick={()=>handleEdit(element.Name)}>Edit</button></td>


      </tr>


    );
  })

}

 </tbody>

    </table>

        </div>
    )
}

export default MainTable
