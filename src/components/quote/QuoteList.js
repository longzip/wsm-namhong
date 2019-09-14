import React from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import getCaret from "../common/GetCaret";

const titleFormatter = (cell, row) => {
  return `<a href=/sales/order-lines>${cell}</a>`;
};

class QuoteList extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      sortIndicator: true,
      noDataText: "Không có dữ liệu"
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
      <BootstrapTable
        data={this.props.quotes}
        selectRow={this.selectRowProp}
        options={this.options}
        bordered={false}
        striped
        hover
        condensed
      >
        <TableHeaderColumn dataField="id" isKey hidden>
          Id
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="code"
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          Code
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="name"
          dataFormat={titleFormatter}
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          Name
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="categoryId"
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          Category
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="createdAt"
          dataSort={true}
          caretRender={getCaret}
          columnTitle
        >
          createdAt
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

QuoteList.propTypes = {
  quotes: PropTypes.array.isRequired,
  handleRowSelect: PropTypes.func.isRequired
};

export default QuoteList;
