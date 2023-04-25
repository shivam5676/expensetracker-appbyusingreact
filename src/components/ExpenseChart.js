import React from "react";
import Chart from "./Bar/Chart";

const ExpenseChart=(props)=>{
    const chartDataPoints=[
        {label:"jan",value:0},
        {label:"feb",value:0},
        {label:"mar",value:0},
        {label:"apr",value:0},
        {label:"may",value:0},
        {label:"june",value:0},
        {label:"july",value:0},
        {label:"aug",value:0},
        {label:"sept",value:0},
        {label:"oct",value:0},
        {label:"nov",value:0},
        {label:"dec",value:0},

    ];
    for(const expense of props.expenses){
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth].value+=expense.amount;
    }
    return <Chart dataPoints={chartDataPoints}></Chart>
}
export default ExpenseChart;