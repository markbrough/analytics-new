<template>
  <div>
    <h1>Publishers</h1>
    <p class="lead">How many organisations are publishing IATI data?</p>
    <h2>Publishers over time</h2>
    <p class="lead">This graph shows the number of organisations publishing IATI data over time.</p>
    <b-row>
      <b-col>
        <line-chart
          :data="chartData"
          :options="chartOptions" />
      </b-col>
    </b-row>
    <hr />
    <b-table
      small
      :items="publishers"
      :fields="fields"></b-table>
  </div>
</template>

<script>
import csvtojson from 'csvtojson'
import LineChart from '~/components/charts/linechart'
export default {
  name: 'IndexPage',
  data() {
    return {
      publishers: [],
      fields: ['Publisher Name',
        'Publisher Registry Id',
        'Activities',
        'Organisations',
        'Files',
        'Total File Size',
        'Hierarchies (count)',
        'Reporting Orgs In Data (count)'
      ],
      valueLabel: 'Number of publishers',
      publishersByDate: []
    }
  },
  components: {
    LineChart
  },
  computed: {
    chartData() {
      const colours = [
        "#6e40aa", "#6849b9", "#6153c7", "#585fd2", "#4e6cda", "#4479df", "#3988e1", "#2f96e0", "#26a5db", "#1fb3d3", "#1bc1c8", "#19cdbb", "#1bd9ac", "#20e29d", "#28ea8d", "#34f07e", "#44f470", "#56f665", "#6bf75c", "#81f558",
        "#98f357", "#aff05b"
      ]
      return {
        datasets: [{
          label: 'Number of publishers',
          fill: false,
          data: this.publishersByDate,
          borderColor: colours[0],
          borderWidth: 3
        }]
      }
    },
    chartOptions(){
      return {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: function(tick) {
                  return tick.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0
                  })
                }
              },
              scaleLabel: {
                display: true,
                labelString: this.valueLabel
              }
            }
          ],
          xAxes: [
            {
              type: 'time',
              time: {
                  unit: 'year'
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    getPublishers() {
      this.$axios.get('https://analytics.codeforiati.org/publishers.csv').then(response => {
        csvtojson().fromString(response.data).then((jsonData=> {
          this.publishers = jsonData
        }))
      })
    },
    getPublishersByDate() {
      this.$axios.get('https://stats.codeforiati.org/gitaggregate-dated/publishers.json').then(response => {
        this.publishersByDate = Object.entries(response.data).map(item => {
          return {
            x: item[0],
            y: item[1]
          }
        })
      })
    }
  },
  mounted() {
    this.getPublishers()
    this.getPublishersByDate()
  }
}
</script>
