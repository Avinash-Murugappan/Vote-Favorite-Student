import {React, useState} from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export const NavBar = ({data}) => {
const [search, setSearch] = useState('');
const tofil = [...data];
console.log(tofil);


    const handleSearch =((e)=>{
        console.log(search);
        const searchFil = tofil.filter((i)=>{
            if(tofil.includes(search)){
                return i
            }
        })
        console.log(searchFil);

    })

    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">LMS</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">MainTable</Nav.Link>
      <Nav.Link href="/inputForm">Add</Nav.Link>
      <Nav.Link href="#">Edit</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" value={search}
          onChange={e => setSearch(e.target.value)}  placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info" onClick={handleSearch} >Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default NavBar
