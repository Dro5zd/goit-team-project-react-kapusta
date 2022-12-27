import * as React from 'react'
import styled from 'styled-components'
import {
    BarChart,
    BarGroup,
    Bar,
    HintPoint,
    TooltipWrapper,
    TooltipLabel,
    TooltipValue,
    TooltipXAxisValue,
} from 'styled-chart'

// That's how you style the bars e.g. Dogs
const StyledBar = styled(Bar)`
   background-color: aqua;
  width: 30px;
  `
// That's how you style the "parent" bar
const StyledBarGroup = styled(BarGroup)`
    && {
      margin: 0 4px;
    }
  `
// That's how you can style the Tooltip
const StyledTooltip = styled(TooltipWrapper)<{backgroundColor?: string, textColor?: string}>`
    && {
      ${({ backgroundColor, textColor }) => `
        ${backgroundColor ? `background: ${backgroundColor}` : ``};
        ${textColor ? `color: ${textColor}` : ``};
      `}
      ${TooltipLabel} {
        font-style: italic;
      }
      ${TooltipValue} {
        font-style: italic;
      }
      ${TooltipXAxisValue} {
        opacity: 0.8;
      }
    }
  `
// That's how you style the 'colored hint dots' in the tooltip
const StyledHint = styled(HintPoint)<{backgroundColor: string}>`
    && {
      ${({ backgroundColor }) => `
        background-color: ${backgroundColor};
      `}
    }
  `
const CHART_HEIGHT = 300

// xAxis uses the 'weekday' as a key to prolongate the chart horizontally
// you can change it to anything you specify in the data items
// e.g. 'date'
const X_AXIS = {
    key: 'weekday',
    ticksNum: 2,
    grid: true,
}

const Y_AXIS = {
    ticksNum: 9,
}

const CONFIG = {
    'dogs': {
        label: 'Dogs',
        isParent: false,
        component: (
            <StyledBar/>
        ),
    },

}

const TOOLTIP = {
    isVisible: true,
    component: (
        <StyledTooltip
            backgroundColor='rgba(126, 211, 33, 1)'
        />
    ),
    hints: {
        'dogs': <StyledHint backgroundColor='rgba(126, 211, 33, 1)' />,

    },
}


const StyledBarChart = (chartData: any) => {
    // xAxis uses the 'weekday' as a key to build itself
    // you can change it to anything you want

    console.log(chartData)
    const data = [
        {
            weekday: 'Sun',
            'dogs': 1,
        },
        {
            weekday: 'Mon',
            'dogs': 6,
        },
        {
            weekday: 'Tue',
            'dogs': 8,
        },
        {
            weekday: 'Wed',
            'dogs': 18,
        },
        {
            weekday: 'Thu',
            'dogs': 16,
        },
        {
            weekday: 'Fri',
            'dogs': 30,
        },
        {
            weekday: 'Sat',
            'dogs': 24,
        },

    ]

    return (
        <BarChart
            height={CHART_HEIGHT}
            tooltip={TOOLTIP}
            yAxis={Y_AXIS}
            xAxis={X_AXIS}
            config={CONFIG}
            data={data}
        />
    )
}

export default StyledBarChart