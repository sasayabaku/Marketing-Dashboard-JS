<template>
    <h1>季節ごとの来場者×売上</h1>
    <br />
    <Scatter
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="myStyles"
    />
</template>

<script setup>
import { Scatter } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)
const Three = resolveComponent('Three');
</script>

<script>
export default {
    name: 'ScatterChart',
    components: { 
        Scatter,
    },
    props: {
        chartId: {
            type: String,
            default: 'scatter'
        },
        datasetIdKey: {
            type: String,
            default: 'label2'
        },
        width: {
            type: Number,
            default:400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => {}
        },
        plugins: {
            type: Object, 
            default: () => {}
        }
    },
    data() {
        return {
            chartData: {
                datasets: [{ 
                    label: '春',
                    fill: false,
                    backgroundColor: '#ee8595',
                    pointRadius: 10,
                    data: [{x: 313072, y:159555249}] 
                },{
                    label: '夏',
                    fill: false,
                    backgroundColor: '#244A9E',
                    pointRadius: 10,
                    data: [{x: 321655, y: 173801286}]
                },{
                    label: '秋',
                    fill: false,
                    backgroundColor: '#d0cb9d',
                    pointRadius: 10,
                    data: [{x: 333695, y: 200863037}]
                },{
                    label: '冬',
                    fill: false,
                    backgroundColor: '#85C8BB',
                    pointRadius: 10,
                    data: [{x: 351706, y: 276106047}]
                }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales:{
                    x:{
                        display:true,
                        title: {
                            display: true,
                            text: '大通来場者'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: '売上'
                        }
                    }
                }
            }
        }
    },
    computed: {
        myStyles() {
            return {
                margin: '0 0.5rem',
                position: 'relative',
                height: "200px"
            }
        }
    }
}

</script>