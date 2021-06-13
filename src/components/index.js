import React, {useState} from 'react'
import records from '../student_records.json'
import MainTable from './MainTable'
import InputForm from './InputForm'

console.log(records);

const Index = () => {

    const [data, setData] = useState(records);

    return (
        <div>
        <MainTable setData={setData} data={data}/>
        <InputForm setData={setData} data={data} />
        </div>
    )
}

export default Index

// MainComponent - state
//   - Table,
//   - form,
//   - leader board