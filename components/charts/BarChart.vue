<template>
    <h1>天候別来場者数</h1>
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
const BarChart = resolveComponent('BarChart');

const props = defineProps({
    title: String
})

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
            default: 200
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
                labels: [ '晴れ', '曇り', '雨' ],
                datasets: [ { 
                    label: '来場者数',
                    backgroundColor: '#ee8595',
                    data: [200000, 300000, 234567] 
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