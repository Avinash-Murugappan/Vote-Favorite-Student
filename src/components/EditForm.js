import {React, useState, useEffect} from 'react'
import { Link, useHistory, BrowserRouter as Router  } from 'react-router-dom';

const EditForm = ({setEdit, edit, data, setData}) => {

    console.log(edit[0].Name);
    const cpyData = [...data]
    var history = useHistory();
 const push = ()=>{
      history.push("/");
    }
     var avm = cpyData.filter((i)=>i.Name !== edit[0].Name)
        console.log(avm);

    // // * component did mount
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response)=>response.json())
    //     .then((da)=>{
    //     console.log(da)
    //     console.log('Component did mount')});
    // },[edit])

    const [name, elName] = useState(edit[0].Name)
    const [email, setEmail] = useState(edit[0]["Email Address"])
    const [tel, setTel] = useState(edit[0]["Phone Number"])
    const [link, setLink] = useState(edit[0]["Netlify Project Link"])
    const [hw1, setHW1] = useState(edit[0]["Homework1 ( 2 ) Git Practice"])
    const [hw2, setHW2] = useState(edit[0]["Homework2( 2 ) Javascript"])
    const [hw3, setHW3] = useState(edit[0]["Homework 2.1 ( Local storage) 2 points"])
    const [hw4, setHW4] = useState(edit[0]["Homework 2.2 ( 4 points) class project"])
    const [hw5, setHW5] = useState(edit[0]["Homework 3.1 ( CSS Selectors Exercise ) 4 points"])


    const handleSubmit = (e) => {
    e.preventDefault()
    let newEntry = {
        "Name" : name,
        "Email Address": email,
        "Phone Number": tel,
         "Homework1 ( 2 ) Git Practice":hw1,
         "Homework2( 2 ) Javascript":hw2,
         "Homework 2.2 ( 4 points) class project": hw3,
         "Homework 3.1 ( CSS Selectors Exercise ) 4 points": hw4,
         "3.2 ( Nav Bar )": hw5
    }
    avm.push(newEntry);
    setData(avm);
    push();
  };


    return (
        <div>
        Edit:
             <form id="addform">


            <input type="text" value={name} onChange={(e)=> elName(e.target.value)} name="name" placeholder="Name:"/>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" placeholder="Email:"/>
            <input type="text" value={tel} onChange={(e)=> setTel(e.target.value)} name="phone" placeholder="Phone:"/>
            <input type="text" value={link} onChange={(e)=> setLink(e.target.value)} name="project" placeholder="Project Link:"/>
            <input type="number" value={hw1} onChange={(e)=> setHW1(e.target.value)} name="hw1" placeholder="Homework 1:"/>
            <input type="number" value={hw2} onChange={(e)=> setHW2(e.target.value)} name="hw2" placeholder="Homework 2:"/>
            <input type="number" value={hw3} onChange={(e)=> setHW3(e.target.value)} name="hw2.2" placeholder="Homework 3:"/>
            <input type="number" value={hw4} onChange={(e)=> setHW4(e.target.value)} name="hw2.1" placeholder="Homework 4:"/>
            <input type="number" value={hw5} onChange={(e)=> setHW5(e.target.value)} name="hw2.1" placeholder="Homework 5:"/>
            <button onClick={handleSubmit}  type="submit">SUBMIT</button>

        </form>
        </div>
    )
}

export default EditForm
