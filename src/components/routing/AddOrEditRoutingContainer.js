import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import * as routingAction from "../../action/RoutingAction";
import RoutingForm from "./RoutingForm";

export class AddOrEditRoutingContainer extends React.Component {
  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.action
      .getRoutingAction(this.props.match.params.id)
      .catch(error => {
        toastr.error(error);
      });
  }

  handleSave(values) {
    const product = {
      id: values.id,
      code: values.code,
      name: values.name
    };

    this.props.action
      .saveRoutingAction(product)
      .then(() => {
        toastr.success("Product saved");
        this.props.history.push("/products");
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.replace("/products");
  }

  render() {
    const { initialValues } = this.props;
    const heading = initialValues && initialValues.id ? "Edit" : "Add";
    console.log(this.props.initialValues);
    return (
      <div className="content-wrapper">
        <div className="container">
          <RoutingForm
            heading={heading}
            handleSave={this.handleSave}
            handleCancel={this.handleCancel}
            initialValues={this.props.initialValues}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const productId = parseInt(ownProps.match.params.id);
  if (
    productId &&
    state.selectedProductReducer.product &&
    productId === state.selectedProductReducer.product.id
  ) {
    return {
      initialValues: state.selectedProductReducer.product
    };
  } else {
    return {};
  }
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(routingAction, dispatch)
});

AddOrEditRoutingContainer.propTypes = {
  action: PropTypes.object.isRequired,
  history: PropTypes.object,
  initialValues: PropTypes.object,
  match: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrEditRoutingContainer);
