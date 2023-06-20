(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
            /* Add your CSS here */
            .arc {
                stroke: #fff;
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
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            if ("myDataBinding" in changedProperties) {
                this._updateData(this._props.myDataBinding);
            }
        }

        _updateData(data) {
            // Load D3.js
            const script = document.createElement('script');
            script.src = 'https://d3js.org/d3.v5.min.js';
            script.onload = () => this._renderChart(data);
            this._shadowRoot.appendChild(script);
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
