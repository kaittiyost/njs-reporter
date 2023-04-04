
# NJS-Reporter

For generating reports from grafana dashboards developed with NodeJS
And customize the report format with simple HTML.

## Grafana requires

- The plugin grafana-image-renderer 
- API keys

Step0 : config file grafana.ini or default file as follows: 
```bash
    allow_embedding = true
    [auth.anonymous]
    enabled = true
```
and restart Grafana services__

Step1 : Clone NJS-Reporter: 
```bash
    git clone https://github.com/kaittiyost/njs-reporter.git
```
Step2 : edit file config.json and enter the content as below
```bash
{
    "GRAFANA_API_KEY" : "<Your API_KEY>",
    "GRAFANA_PROTOCOL" : "<Your Protocol>",
    "GRAFANA_HOST" : "<Your Host>",
    "GRAFANA_PORT" : <Your Port>,
    "DASHBOARD_UID" : "<Your Dashboard UID>"
}

```
example :
```bash
{
    "GRAFANA_API_KEY" : "eyJrIjoiMTB1RFBsRGxJVzhGc2F=...",
    "GRAFANA_PROTOCOL" : "http",
    "GRAFANA_HOST" : "192.168.1.99",
    "GRAFANA_PORT" : 3000,
    "DASHBOARD_UID" : "AXJFGLDVk"
}
```
## Custom templete pdf

You can edit the views/index.js file to customize the style of the report with your HTML writing skills.
```bash
<center>
    <h3>NJS-Reporter</h3>
    <!-- Graph Here  -->
    <div id="allgraph"></div>
</center>
```
You can add any html code inside the center tag.

### be careful !!
- You need an element id="allgraph" to display the graph from grafana.

After you've customized it to your satisfaction. Open your web browser and go to http://localhost:3001/
and just press Ctrl+p to easily save it as a pdf file.

### enjoy :)


