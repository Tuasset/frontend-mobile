import React, {useLayoutEffect, useState} from "react";
import "./index.scss";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import housePrices from "./housePriceHistory.json"


const App: React.FC<{ actualDetail: any }> = ({ actualDetail }) => {
    useLayoutEffect(() => {
        let root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        root.dateFormatter.setAll({
            dateFormat: "yyyy",
            dateFields: ["valueX"]
        });

        let data = housePrices;


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            focusable: true,
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX:true
        }));

        let easing = am5.ease.linear;


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            maxDeviation: 0.1,
            groupData: false,
            baseInterval: {
                timeUnit: "year",
                count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {

            }),
            tooltip: am5.Tooltip.new(root, {}),

        }));
        xAxis.get("renderer").labels.template.setAll({
            fontSize:12
        });

        let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.2,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));
        yAxis.get("renderer").labels.template.setAll({
            fontSize:12
        });

        // Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(am5xy.LineSeries.new(root, {
            name:"Price",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "[bold]{name}[/]\n{valueY}"
            })
        }));

        series.fills.template.setAll({
            fillOpacity: 0.2,
            visible: true
        });

        series.fills.template.set("fillGradient", am5.LinearGradient.new(root, {
            stops: [{
                color: am5.color(0x0352C9),
                opacity: 0.3
            }, {
                color: am5.color(0x0352C9),
                opacity: 0
            }]
        }));


        series.strokes.template.setAll({
            strokeWidth: 2
        });


// Set up data processor to parse string dates
// https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
        series.data.processor = am5.DataProcessor.new(root, {
            dateFormat: "yyyy",
            dateFields: ["date"]
        });

        series.data.setAll(data);

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            xAxis: xAxis,
            behavior: "none"
        }));
        cursor.lineY.set("visible", false);

// add scrollbar
//chart.set("scrollbarX", am5.Scrollbar.new(root, {
//  orientation: "horizontal"
//}));


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, []);

    const [tableList,setTableList] = useState([{
        name:"Airbnb",
        price:"$1,500"
    },{
        name:"Short term",
        price:"$2,300"
    },{
        name:"Long term",
        price:"$1,500"
    }])

  return (
    <div className="InvestmentValueInformation">
        <p className="title">
            Investment Value Information
        </p>
        <div className="detail">
            Explanation of Investment Value Information.
        </div>
        <div id="chartdiv" ></div>

        <table className="priceTable">
            {tableList.map((item, key)=>{
                return(
                    <tr>
                        <td>
                            <span>{item.name + " rent"}</span>
                            <img src={"https://tuassets.com/wp-content/reactpress/imgs/actual/exclamation.svg"}/>
                        </td>
                        <td><strong>{item.price}</strong>/mo. </td>
                    </tr>
                )
            })}

        </table>

    </div>
  );
}

export default App;
