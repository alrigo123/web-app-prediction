import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const BarChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // Destruir el gráfico existente antes de crear uno nuevo
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            chartRef.current.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Temperatura', 'Humedad', 'Precipitación'],
                    datasets: [
                        {
                            label: 'rendimineto %',
                            data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)', // Color de la barra de temperatura
                                'rgba(54, 162, 235, 0.2)', // Color de la barra de humedad
                                'rgba(75, 192, 192, 0.2)', // Color de la barra de precipitación
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)', // Color del borde de la barra de temperatura
                                'rgba(54, 162, 235, 1)', // Color del borde de la barra de humedad
                                'rgba(75, 192, 192, 1)', // Color del borde de la barra de precipitación
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                stepSize: 10,
                            },
                        },
                    },
                },
            });
        }
    }, [data]);

    return <canvas ref={chartRef} />;
};

const Dashboard = () => {
    //INPUTs RANGE FOR VARIABLES SHOW
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [precipitation, setPrecipitation] = useState(0);

    const handleTemperatureChange = (e) => {
        setTemperature(e.target.value);
    };

    const handleHumidityChange = (e) => {
        setHumidity(e.target.value);
    };

    const handlePrecipitationChange = (e) => {
        setPrecipitation(e.target.value);
    };
    // // ----------------------------------------------------------------

    return (
        <div className="flex bg-gray-300 min-h-screen">
            <div className="w-1/6 bg-white p-4">
                <h2 className="text-2xl font-bold mb-4">Rendimiento del cultivo de trigo</h2>
                <div className="mb-6">
                    <label htmlFor="temperature" className="text-sm font-medium mb-2">
                        Temperatura: <span className="text-xs">{temperature}%</span>
                    </label>
                    <input
                        type="range"
                        id="temperature"
                        min={0}
                        max={100}
                        value={temperature}
                        onChange={handleTemperatureChange}
                        className="w-full"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="humidity" className="text-sm font-medium mb-2">
                        Humedad: <span className="text-xs">{humidity}%</span>
                    </label>
                    <input
                        type="range"
                        id="humidity"
                        min={0}
                        max={100}
                        value={humidity}
                        onChange={handleHumidityChange}
                        className="w-full"
                    />

                </div>
                <div>
                    <label htmlFor="precipitation" className="text-sm font-medium mb-2">
                        Precipitación: <span className="text-xs">{precipitation}%</span>
                    </label>
                    <input
                        type="range"
                        id="precipitation"
                        min={0}
                        max={100}
                        value={precipitation}
                        onChange={handlePrecipitationChange}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex flex-wrap bg-gray-300 min-h-screen w-full p-4">
                <div id='border-graph' className='w-[50%] md:w-[25%] lg:w-[50%] p-3 m- z-0'>
                    <BarChart className='border-red-500 border-width-2' data={[temperature, humidity, precipitation]} />
                </div>
                <div id='border-graph' className='w-full md:w-[25%] lg:w-[50%] p-4 border-red-50'>
                    <BarChart data={[temperature, humidity, precipitation]} />
                </div>
                <div id='border-graph' className='w-full md:w-[25%] lg:w-[50%] p-4 border-red-50'>
                    <BarChart data={[temperature, humidity, precipitation]} />
                </div>
                <div id='border-graph' className='w-full md:w-[25%] lg:w-[50%] p-4 border-red-50'>
                    <BarChart data={[temperature, humidity, precipitation]} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
