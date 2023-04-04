const express = require('express');
const port = 3001;
const app = express()
const path = require("path")

const GrafanaConfig = require('./config.json')
const subProcess = require('child_process')

app.set('view engine','ejs')
let assetsDir = path.join(__dirname,"assets")
app.use('/assets',express.static(assetsDir))


app.get('/getDashboard',(req,res)=>{

    const dashboardUID = GrafanaConfig.DASHBOARD_UID;
    const API_KEY = GrafanaConfig.GRAFANA_API_KEY;
    const GrafanaHost = GrafanaConfig.GRAFANA_HOST;
    const GrafanaPort = GrafanaConfig.GRAFANA_PORT;
    let cmd = `curl -H "Authorization: Bearer ${API_KEY}" http://${GrafanaHost}:${GrafanaPort}/api/dashboards/uid/${dashboardUID}`
    
    var response;
    subProcess.exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          res.status(500).send(stderr);
        } else {
          response = JSON.parse(stdout)
          //console.log(response.dashboard.panels);
          let data = {
            "panels":response.dashboard.panels,
            "grafana_protocol": GrafanaConfig.GRAFANA_PROTOCOL,
            "grafana_host" : GrafanaHost,
            "grafana_port" : GrafanaPort,
            "dashboard_uid" : dashboardUID
          }
          res.status(200).send(JSON.stringify(data));
        }
      })
})

app.get('/',(req,res)=>{
    console.log(GrafanaConfig);
    res.render('index')
})

app.listen(port, ()=>{
    console.log('Server is runing on port '+port);
})