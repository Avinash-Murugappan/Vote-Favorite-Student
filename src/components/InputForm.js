import React, {useState} from 'react'

// *write something
// !something is wrong here
//TODO:

const InputForm = ({setData, data}) => {

    const [name, elName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [link, setLink] = useState("")
    const [hw1, setHW1] = useState("")
    const [hw2, setHW2] = useState("")
    const [hw3, setHW3] = useState("")
    const [hw4, setHW4] = useState("")
    const [hw5, setHW5] = useState("")

    const handleSubmit = (e) => {
    e.preventDefault()
    const newData = [...data]
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
    newData.push(newEntry);
    setData(newData);
  };

    return (
        <div>
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

export default InputForm
