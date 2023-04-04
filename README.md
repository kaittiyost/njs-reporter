
# NJS-Reporter

For generating reports from grafana dashboards developed with NodeJS.

## Grafana requires

- The plugin grafana-image-renderer 

Step0 : config file grafana.ini as follows: 
```bash
    allow_embedding = true
    [auth.anonymous]
    enabled = true
```
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
You can add any html code inside the <center> tag.

After you've customized it to your satisfaction. Just press Ctrl+p to easily save it as a pdf file.

### enjoy :)


