# README

## Pie Chart Widget

Pie Chart Widget is a custom SAC (SAP Analytics Cloud) widget that allows you to create interactive pie charts within your application. The widget is developed using D3.js and web components technology.

### Version
1.0.1

### Vendor
Planifyit

![Icon](https://planifyit.github.io/Pie_chart/PlanifyIT_Logo2.png)

## Getting Started

To get started, you need to include the `PieChartWidget.js` in your project and define the custom element using `pie-chart-widget` tag.

## Usage

1. Include the widget script in your HTML file:

    ```html
    <script src="https://planifyit.github.io/Pie_chart/PieChartWidget.js"></script>
    ```

2. Use the custom element in your HTML:

    ```html
    <pie-chart-widget></pie-chart-widget>
    ```

## Configuration

You can configure the widget's width and height by setting the `width` and `height` properties respectively.

### Properties

- `width`: (Integer) The width of the widget. Default is 750.
- `height`: (Integer) The height of the widget. Default is 700.

### Data Bindings

The widget requires data to be bound in a specific format.

- `myDataBinding`: This is the data feed that needs to be bound to the widget. It consists of dimensions and measures.

    - `dimensions`: Describes the dimensions of the data.
    - `measures`: Describes the measures of the data. This is the main structure member.

Styling

The widget comes with a set of predefined styles. The pie chart is interactive; when you hover over a segment, it scales up slightly.

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pie Chart Widget</title>
    <script src="https://planifyit.github.io/Pie_chart/PieChartWidget.js"></script>
</head>
<body>
    <pie-chart-widget></pie-chart-widget>
</body>
</html>
```

## Development

The widget is developed using the following technologies:

- HTML/CSS for structure and styling.
- JavaScript for functionality.
- D3.js for generating the pie chart.

## Link

Follow [Planifyit on Linkedin](https://www.linkedin.com/company/planifyit) for more updates.

## License

Please refer to the vendor for license information.

## Support

For any issues or inquiries, contact the vendor at Planifyit.

## Note

Ensure that you have an active internet connection as the widget relies on the D3.js library, which is loaded from a CDN.
