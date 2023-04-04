
# NJS-Reporter

For generating reports from grafana dashboards developed with NodeJS.

## Grafana requires

- The plugin grafana-image-renderer 

Step1 : config file grafana.ini as follows: 
```bash
    allow_embedding = true
    [auth.anonymous]
    enabled = true
```
Step2 : create file config.json and enter the content as below
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

