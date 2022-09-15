<template>
    <h1>季節で区切った際の人流増減</h1>
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
const Two = resolveComponent('Two');
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
                labels: [ 'population', 'zone1', 'zone2' , 'zone3', 'zone4'],
                datasets: [ { 
                    label: '春',
                    backgroundColor: '#ee8595',
                    data: [10675, 2026.5, 2600.5, 5370, 4908.5] 
                },
                {
                    label: "夏",
                    backgroundColor: '#24419e',
                    data: [10603.5, 1943, 2506.5, 5421, 4979.5]
                },{
                    label: "秋",
                    backgroundColor: '#D0CB9D',
                    data: [11587.5, 2223.5, 3152.5, 5523, 5784.5]
                },{
                    label: "冬",
                    backgroundColor: "#85C8BB",
                    data: [10830, 1909.5, 2639, 5281.5, 5302]
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