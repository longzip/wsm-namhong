import React from "react";
import * as PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-bootstrap4";
import getCaret from "../common/GetCaret";
import dateFormat from "../common/MyFormat";

class UomList extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      sortIndicator: true,
      noDataText: "No data"
    };

    this.selectRowProp = {
      mode: "radio",
      bgColor: "#c1f291",
      onSelect: props.handleRowSelect,
      clickToSelect: true,
      hideSelectColumn: true
    };
  }
  render() {
    return (
      <div>
        <div className="card">
        <Grid
        rows={this.props.uoms}
        columns={[
          { name: 'id', title: '#' },
          { name: 'name', title: 'Tên' },
          { name: 'createdAt', title: 'Ngày tạo' },
        ]}
      >
        <SortingState
          defaultSorting={[{ columnName: 'city', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls />
      </Grid>
          <BootstrapTable
            data={this.props.uoms}
            selectRow={this.selectRowProp}
            options={this.options}
            bordered={false}
            striped
            hover
            condensed
          >
            <TableHeaderColumn dataField="id" isKey hidden>
              #
            </TableHeaderColumn>

            <TableHeaderColumn
              dataField="name"
              dataSort={true}
              caretRender={getCaret}
              filter={{ type: "TextFilter", delay: 0 }}
              columnTitle
            >
              Tên
            </TableHeaderColumn>

            <TableHeaderColumn
              dataField="createdAt"
              dataFormat={dateFormat}
              dataSort={true}
              caretRender={getCaret}
              filter={{ type: "TextFilter", delay: 0 }}
              columnTitle
            >
              Ngày tạo
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

UomList.propTypes = {
  uoms: PropTypes.array.isRequired,
  handleRowSelect: PropTypes.func.isRequired
};

export default UomList;
