<template>
    <div>
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle">
            <div class="drawer-content flex-col items-center bg-gray-200">
                 <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <div class="process">
                    <div class="objects">
                        <div class="caption">
                            <h1>View Audience</h1>
                            <span> 67% Users Accessed </span>
                        </div>
                        <img class="" src="/assets/Online_shopping_PNG.png" />
                    </div>

                    <div class="objects">
                        <div class="caption">
                            <h1>CVR is </h1>
                            <span> 52% Users buy</span>
                        </div>
                        <img class="" src="/assets/Online_shopping_PNG.png" />
                    </div>
                </div>
                <div class="progress_demo">
                    <Process />
                </div>
                <!-- </div> -->
            </div>

            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <p><b>Dashboard</b></p>
                    <br />
                    <!-- Sidebar content here -->
                    <li><a href="/">Dashboard</a></li>
                    <!-- <li><NuxtLink to="/" >Dashboard</NuxtLink></li> -->
                    <li><a class="active">Components</a></li>
                </ul>
            </div>
        </div>


    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>

<script>
export default {
    name: 'BarChart',
    components: { 
        Bar
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
                position: 'relative'
            }
        }
    }
}

</script>

<style scoped lang="scss">
    .process {
        position: relative;
        margin-top: 5rem;
        left: 5rem;
        display: flex;
    }

    .caption {
        position: relative;
        border-radius: 1rem;
        background-color: #37536d;
        color: white;
        padding: 1rem;
        margin: .5rem 0;
    }

    .objects:hover {
        transform: translateY(-10%);
    }
    .objects {
        width: 10rem;
        margin: 0 3rem;
        transform: translateY(0%);
        transition: all 1s;
    }

    .progress_demo {
        position: relative;
        top: 5rem;
        left: 5rem;
    }
</style>