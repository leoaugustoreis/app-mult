import React, { useState, useEffect } from 'react';
import { getTemperatureHistory } from '../service/temperatureApi';
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    withStyles,
    makeStyles
} from '@material-ui/core';
import Loading from '../components/Loading';
import Moment from 'react-moment';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#813BF7',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const TemperatureHistoryPage = () => {
    const classes = useStyles();
    const [history, setHistory] = useState(null);
    const [loading, setLoading] = useState(true);

    const getHistory = () => {
        setLoading(true);

        getTemperatureHistory()
            .then(response => {
                setHistory(response.data);
                setLoading(false);
            })
            .catch(erro => {
                setLoading(false);
                console.log('Erro ao consultar o historico de temperatura!');
            });
    }

    useEffect(() => {
        getHistory();
    }, []);

    return (
        <>
            {
                (() => {
                    if (loading)
                        return <Loading open={loading} />

                    return history &&
                        (
                            <TableContainer component={Paper} >
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Data</StyledTableCell>
                                            <StyledTableCell>Temperatura</StyledTableCell>
                                            <StyledTableCell>Status</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {history.map((temperature) => (
                                            <StyledTableRow key={temperature.data}>
                                                <StyledTableCell>
                                                    <Moment format='DD/MM/YYYY'>{temperature.data}</Moment>
                                                </StyledTableCell>
                                                <StyledTableCell component="th" scope="row">
                                                    {temperature.valor}
                                                </StyledTableCell>
                                                <StyledTableCell>{temperature.status}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        );
                })()
            }
        </>
    );
}

export default TemperatureHistoryPage;