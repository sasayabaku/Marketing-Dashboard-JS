<template>
    <h1>緊急事態宣言時の外部状況による人流の増減</h1>
    <!-- <span>{{ $route.name }}</span> -->
    <br />
    <Bar
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
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const One = resolveComponent('One');
</script>

<script>
export default {
    name: 'BarChart',
    components: { 
        Bar,
    },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
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
                labels: [ 'population', 'zone1', 'zone2' , 'zone3'],
                datasets: [ { 
                    label: '緊急事態宣言中',
                    backgroundColor: '#244a9e',
                    data: [9941.19, 1891.38, 2536.20, 5148.27] 
                },
                {
                    label: "それ以外",
                    backgroundColor: '#37536d',
                    data: [11103.75, 2100.41, 2840.72, 5424.02]
                }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
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