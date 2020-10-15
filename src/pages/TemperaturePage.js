import React, { useState, useEffect, useCallback } from 'react';
import { getTemperature } from '../service/temperatureApi';
import { Typography, Button, Box } from '@material-ui/core';
import Loading from '../components/Loading';

const TemperaturePage = () => {
    const [temperature, setTemperature] = useState(null);
    const [statusColor, setStatusColor] = useState(null);
    const [loading, setLoading] = useState(true);

    const getStatusColor = (status) => {
        if (status === 'ok') {
            setStatusColor('green');
        }
        else if (status === 'alerta') {
            setStatusColor('yellow');
        }
        else {
            setStatusColor('red');
        };
    }

    const getCurrentTemperature = useCallback(() => {
        setLoading(true);

        getTemperature()
            .then(response => {
                const { status } = response.data;

                setTemperature(response.data);
                getStatusColor(status);
                setLoading(false);
            })
            .catch(erro => {
                setLoading(false);
                console.log('Erro ao consultar a temperatura!');
            });
    }, []);

    useEffect(() => {
        getCurrentTemperature();
    }, [getCurrentTemperature]);

    return (
        <>
            {
                (() => {
                    if (loading)
                        return <Loading open={loading} />

                    return temperature &&
                        (
                            <>
                                <Box display='flex'>
                                    <Box p={1}>
                                        <Typography variant='h5'>
                                            Temperatura atual:
                                        </Typography>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant='h5' style={{color: statusColor}}>
                                            {temperature.valor}
                                        </Typography>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant='h5'
                                            style={{ backgroundColor: statusColor, width: 150, 
                                            borderRadius: 10, textAlign: 'center', color: 'white' }}>
                                            {temperature.status}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display='flex'>
                                    <Box p={1}>
                                        <Button
                                            variant="contained"
                                            style={{ color: 'white', backgroundColor: '#813BF7' }}
                                            onClick={getCurrentTemperature}>
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Box>
                            </>
                        );
                })()
            }
        </>
    );
}

export default TemperaturePage;