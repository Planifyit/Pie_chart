# Planifyit Pie Chart Widget

![Planifyit Logo](https://planifyit.github.io/Pie_chart/PlanifyIT_Logo2.png)

## Overview
Planifyit Pie Chart Widget is an SAC (SAP Analytics Cloud) custom widget that allows users to seamlessly incorporate interactive pie charts within their analytics dashboards. The widget is specifically designed for SAP Analytics Cloud, making it simple to visualize data in a pie chart format with user-friendly interactivity.

## Version
1.0.0

## Features
- Easy integration with SAP Analytics Cloud dashboards.
- Interactive pie chart visualization.
- Customizable colors, labels, and data points.
- Hover effects to display additional data information.
- Supports data binding from SAP Analytics Cloud models.

## Getting Started
### Add Widget to SAC
To add this widget to your SAP Analytics Cloud dashboard, follow these steps:
1. Download the `PlanifyitPieChartWidget.js` file.
2. In your SAC dashboard, add a new custom widget and provide the required fields according to `Planifyit_PieChart.json`.


### Configure Widget
- **width**: (integer) The width of the pie chart container. Default is 300.
- **height**: (integer) The height of the pie chart container. Default is 300.
- **colors**: (array) An array of color strings to be used for the pie slices.
- **labels**: (array) An array of label strings for each pie slice.
- **dataPoints**: (array) An array of numerical values for each pie slice.

## Data Bindings
- **myDataBinding**: This data binding should be linked to a measure or dimension from your SAP Analytics Cloud model to dynamically feed data into the pie chart.

## Methods
- **updateData(data)**: Updates the data in the pie chart with the provided data array.

## Events
- **onSliceClick**: This event is called when a user clicks on a pie slice. The clicked slice data is passed as an argument to any attached handlers.

## Dependencies
No external dependencies.

## Vendor
Planifyit

## License
This project is licensed under the vendor "Planifyit".

## Support
For support, please contact the vendor at [Planifyit Support](mailto:support@planifyit.com).

## Disclaimer
This widget is provided by Planifyit and has no affiliation with SAP. 
