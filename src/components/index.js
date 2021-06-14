import React, {useState} from 'react'
import records from '../student_records.json'
import MainTable from './MainTable'
import InputForm from './InputForm'
import EditForm from './EditForm'

console.log(records);

const Index = () => {

    const [data, setData] = useState(records);
    const [edit, setEdit] = useState('');

    const renderEdit = ()=>{
            if(edit){
            return <EditForm setEdit={setEdit} edit={edit} data={data} setData={setData}></EditForm>;
          }
    }


    return (
        <div>
        <MainTable setData={setData} data={data} setEdit={setEdit} edit={edit} />
        <InputForm setData={setData} data={data} />
        <br />

         {renderEdit()}

        </div>
    )
}

export default Index

// MainComponent - state
//   - Table,
//   - form,
//   - leader board