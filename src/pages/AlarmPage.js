import React, { useState, useEffect } from 'react';
import { getAlarmTemperature } from '../service/temperatureApi';
import { Typography } from '@material-ui/core';
import Loading from '../components/Loading';

const AlarmPage = () => {
    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getAlarmTemperature()
            .then(response => {
                setTemperature(response.data);
                setLoading(false);
            })
            .catch(erro => {
                setLoading(false);
                console.log('Erro ao consultar o alarme!');
            });
    }, []);

    return (
        <>
            {
                (() => {
                    if (loading)
                        return <Loading open={loading} />

                    return temperature &&
                        (                           
                            <Typography variant='h5' align='center' style={{ color: 'red' }} >
                                Alerta de temperatura! Valor de risco: {temperature.valor}
                            </Typography>
                        );
                })()
            }
        </>
    );
}

export default AlarmPage;