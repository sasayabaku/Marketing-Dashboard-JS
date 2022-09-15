<template>
    <div>
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle">
            <div class="drawer-content flex-col items-center bg-gray-100">
                 <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <!-- <h1>Index Page</h1> -->
                <!-- <button class="btn">Hello daisyUI</button> -->
                <div class="grid grid-cols-6 gap-6 m-4">
                    <div class="shadow-md bg-white card col-span-2 p-8">
                        <h1>Demo Chart</h1>
                        <Bar
                            :chart-options="chartOptions"
                            :chart-data="chartData"
                            :chart-id="chartId"
                            :dataset-id-key="datasetIdKey"
                            :plugins="plugins"
                            :css-classes="cssClasses"
                            :styles="myStyles"
                        />
                    </div>
                    <div class="shadow-md bg-white card col-span-2 p-8">
                        <BarChart title="天気別来場者数"/>
                    </div>
                    <div class="shadow-md bg-white card col-span-2 p-8">
                        <One />
                    </div>
                    <div class="shadow-md bg-white card col-span-3 p-8">
                        <Two />
                    </div>
                    <div class="shadow-md bg-white card col-span-2 p-8">
                        <Three />
                    </div>
                </div>
            </div>

            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <p><b>Dashboard</b></p>
                    <br />
                    <!-- Sidebar content here -->
                    <li><a class="active">Dashboard</a></li>
                    <li><NuxtLink to="digital_twin">Components</NuxtLink></li>
                </ul>
            </div>
        </div>


    </div>
</template>

<script setup>
import BarChart from '@/components/charts/BarChart.vue';
import One from '@/components/sample/01_emargency.vue';
import Two from '@/components/sample/02_season.vue';
import Three from '@/components/sample/03_season_sales_visitor.vue';

</script>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { 
        Bar,
        One,
        Three
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
            default:200
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
                labels: [ 'January', 'February', 'March', 'Aplil' ],
                datasets: [ { data: [40, 20, 12, 36] }]
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
