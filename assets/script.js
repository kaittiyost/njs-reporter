$( document ).ready(function() {
    $.ajax({url: "/getDashboard",method: "GET",
      success: function (response) {
        const res = JSON.parse(response);
        try {
          for(i=0; i< res.panels.length; i++){
            //console.log(res.panels[i]);
            // show dashboard
            $('#allgraph').append(`
            <div>
              <br>
              <img src="${res.grafana_protocol}://localhost:${res.grafana_port}/render/d-solo/${res.dashboard_uid}/test-dashboard?orgId=1&from=1680566687579&to=1680588287579&theme=light&panelId=${res.panels[i].id}&width=1000&height=500&tz=Asia%2FBangkok" alt="" srcset="">
            </div>
              `)
          }
        } catch (error) {
          $('#allgraph').html(error)
        }
      },
      error: function (xhr, status, error) {
        $('#allgraph').html(xhr.responseText)
        console.error(xhr.responseText);
      },
    });
});