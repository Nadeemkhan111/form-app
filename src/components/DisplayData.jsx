import { Table,TableBody,TableCell,TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useContext } from 'react';
import { multipleContext } from '../StepContext';
const DisplayData = () => {
    const {finalData}=useContext(multipleContext)
    return (
        <div>
            <TableContainer style={{display:"flex",justifyContent:"center"}}>
                <Table border="1" style={{width:"70%",justifyContent:"center"}} size="small" aria-label="caption table">
                    <TableHead>
                        <TableRow style={{backgroundColor:"burlywood", color:"aliceblue"}}>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Display Name</TableCell>
                            <TableCell>WorkSpace Name</TableCell>
                            <TableCell>WorkSpace URL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            finalData.map((item)=>{
                                return(
                                    <TableRow key={item}>
                                        <TableCell>{item.fullname}</TableCell>
                                        <TableCell>{item.displayname}</TableCell>
                                        <TableCell>{item.workspacename}</TableCell>
                                        <TableCell>{item.workspaceUrl}</TableCell>

                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DisplayData;