(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <style>
    .arc {
        stroke: #fff;
        transition: transform 0.3s ease-out;
    }

    .arc:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    .arc text {
        fill: #fff;
        font: 10px sans-serif;
        text-anchor: middle;
    }
</style>
        <div id="chart"></div>
    `;

    class PieChartWidget extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: 'open'});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._props = {};

            // Load D3.js
            const script = document.createElement('script');
            script.src = 'https://d3js.org/d3.v5.min.js';
            script.onload = () => this._ready = true;
            this._shadowRoot.appendChild(script);
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

onCustomWidgetAfterUpdate(changedProperties) {
    if ("myDataBinding" in changedProperties) {
        this._updateData(changedProperties.myDataBinding);
    }
}


_updateData(dataBinding) {

console.log('dataBinding:', dataBinding);
    if (!dataBinding) {
    console.error('dataBinding is undefined');
}
    if (!dataBinding || !dataBinding.data) {
    console.error('dataBinding.data is undefined');
}
    
    if (this._ready) {
        // Check if dataBinding and dataBinding.data are defined
        if (dataBinding && Array.isArray(dataBinding.data)) {
            // Transform the data into the correct format
        const transformedData = dataBinding.data.map(row => {
    console.log('row:', row);
    return {
        dimension: row.dimensions_0.label,
        measure: row.measures_0.raw
    };
});

            this._renderChart(transformedData);
        } else {
            console.error('Data is not an array:', dataBinding && dataBinding.data);
        }
    }
}



        _renderChart(data) {
            const width = 300;
            const height = 300;
            const radius = Math.min(width, height) / 2;

            const color = d3.scaleOrdinal()
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

            const arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            const pie = d3.pie()
                .sort(null)
                .value(d => d.measure);

            const svg = d3.select(this._shadowRoot.getElementById('chart')).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            const g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", d => color(d.data.dimension));

            g.append("text")
                .attr("transform", d => "translate(" + arc.centroid(d) + ")")
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .text(d => d.data.dimension);
        }
    }

    customElements.define('pie-chart-widget', PieChartWidget);
})();
