import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import TabPane from './TabPane';

import {FtcTable, TableBodyRow} from 'ftc-table-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      activeIndex: 0
    };
  }

  handleChange(e) {
    this.setState({
      activeIndex: parseInt(e.target.value, 10)
    });
  }
  /*
  getTable() {
    const fieldsInfoForTable = [
      {
        "field":"Cheese",
        "fieldName": "Cheese",
        "fieldSubName": "Type of cheese",
        "dataIsNumberic": false,
        "disableSort": false
      },
      {
        "field":"Bread",
        "fieldName": "Bread",
        "fieldSubName": "Type of bread",
        "dataIsNumberic": false,
        "disableSort": false
      },
      {
        "field": "CostGBP",
        "fieldName": "Cost",
        "fieldSubName": "(GBP)",
        "dataIsNumberic": true,
        "disableSort": false
      },
      {
        "field":"CostEUR",
        "fieldName": "Cost",
        "fieldSubName":"(EUR)",
        "dataIsNumberic": true,
        "disableSort": false
      }
    ];
    const captionsInfoForTable = {
      top: "Top Caption",
      bottom: "Bottom Caption"
    };
    const styleListValue = [
      "table--row-stripes",
      "table--vertical-lines",
      "table--horizontal-lines",
      //"table--responsive-overflow",
       //"table--responsive-flat"
       //两种responsive样式:overflow, flat 1.只能选择一种,如果两种都写了，则写在后面的那一种生效；2.有了addWrapperInfo这两种responsive样式都无效
    ];
    const statisticInfoArr = ['sum', 'mean', 'median'];
    const wrapperInfo = {
      width:'100%',
      height:'180px'
    }
    return (
      <FtcTable 
        styleList={styleListValue} 
        fieldsInfo={fieldsInfoForTable} 
        captionsInfo={captionsInfoForTable}  
        addStatisticInfo={statisticInfoArr}
       // addWrapperInfo={wrapperInfo} 
        >
        <TableBodyRow defaultOrder="0" data={
          {
            "Cheese": "cheddar",
            "Bread": "rye",
            "CostGBP":1,
            "CostEUR":1.56
          }
        }/>
        <TableBodyRow defaultOrder="1" data={
          {
            "Cheese": "stilton",
            "Bread": "wholemeal",
            "CostGBP":2,
            "CostEUR":1.85
          }
        }/>
        <TableBodyRow defaultOrder="2" data={
          {
            "Cheese": "red leicester",
            "Bread": "white",
            "CostGBP":3,
            "CostEUR":""
          }
        }/>
      </FtcTable>
    );
  }
  */
  render() {
    return (
      <div>
        <div className="operator">
          <span>切换 Tab:</span>
          <select value={this.state.activeIndex} onChange={this.handleChange}>
            <option value="0">Tab 1</option>
            <option value="1">Tab 2</option>
            <option value="2">Tab 3</option>
          </select>
        </div>
        <Tabs activeIndex={this.state.activeIndex} className="tabs-bar">
          <TabPane order="0" tab="Tab 1">
            第一个Tab里的内容
          </TabPane>
          <TabPane order="1" tab="Tab 2">
            第二个Tab里的内容
          </TabPane>
          <TabPane order="2" tab="Tab 3">
            第三个Tab里的内容
          </TabPane>
        </Tabs>
        {/*this.getTable()*/}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);