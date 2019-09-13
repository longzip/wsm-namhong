import React from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import getCaret from "../common/GetCaret";

class ContactList extends React.Component {
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
      <BootstrapTable
        data={this.props.contacts}
        selectRow={this.selectRowProp}
        options={this.options}
        bordered={false}
        striped
        hover
        condensed
      >
        <TableHeaderColumn dataField="id" isKey>
          Id
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="code"
          dataSort={true}
          caretRender={getCaret}
          filter={{ type: "TextFilter", delay: 0 }}
          columnTitle
        >
          Mã dự án
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="name"
          dataSort={true}
          caretRender={getCaret}
          filter={{ type: "TextFilter", delay: 0 }}
          columnTitle
        >
          Tên chủ đầu tư
        </TableHeaderColumn>

      </BootstrapTable>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleRowSelect: PropTypes.func.isRequired
};

export default ContactList;
