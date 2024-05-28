import React, { Component } from 'react'
const TableHeat = () =>{
    return(
        <>
           <thead>
           <tr>
            <th>Name</th>    
            <th>mark</th> 
         </tr> 
              </thead>
          
        </>
    )
}
const TableBody = (props) => {
 const {chractersData} =props
  const Output =chractersData.map((chracters,index)=>{
 return(<tr value={index}><td>{chracters.name}</td><td>{chracters.mark}</td></tr>)
 })
    return(
        <>
        <tbody>
{Output}
        </tbody>
        </>
    )
}
 class Table extends Component {
  render() {
    const{chractersData} = this.props
    return (
    <div>
        <table>
      <TableHeat></TableHeat>
      <TableBody chractersData ={chractersData}></TableBody>
        </table>
     
    </div>
    )
  }
}
export default Table ;