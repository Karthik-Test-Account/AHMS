import React from 'react';
import { PieChart, Series, Label, Connector} from 'devextreme-react/pie-chart';
import { Box, Paper } from '@mui/material';


function PieChartComponent(props) {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Paper elevation={0} sx={{ padding: '5px', width: '100%', height: '100%',display:'flex',justifyContent:'center',alignItems:'center','@media (max-width:1100px)':{flexDirection:'column'},color:'white',backgroundColor:props.paperColor}}>
        <PieChart
          dataSource={props.data}
          palette="Carmine"
          title={{text:props.title,font:{color:'white'}}}
          size={{ width:props.width, height:props.height}}
        >
          <Series argumentField={props.argumentField} valueField={props.valueField}>
            <Label visible={props.labelVisible} position="inside" font={{color:'white'}}>
              <Connector visible={false} />
            </Label>
          </Series>
        </PieChart>
      </Paper>
    </Box>
  );
}

export default PieChartComponent;