import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { hasRole } from "../utils/auth";
import PageNotFound from "./common/PageNotFound";
import Home from "./landing/Home";
import ProductListContainer from "./product/ProductListContainer";
import AddOrEditProductContainer from "./product/AddOrEditProductContainer";
import CourseListContainer from "./course/CourseListContainer";
import AddOrEditCourseContainer from "./course/AddOrEditCourseContainer"; // eslint-disable-line import/no-named-as-default
import BomListContainer from "./bom/BomListContainer";
import AddOrEditBomContainer from "./bom/AddOrEditBomContainer";
import BomLineListContainer from "./bomLine/BomLineListContainer";
import AddOrEditBomLineContainer from "./bomLine/AddOrEditBomLineContainer";
import ContactListContainer from "./contact/ContactListContainer";
import AddOrEditContactContainer from "./contact/AddOrEditContactContainer";
import DeliverListContainer from "./deliver/DeliverListContainer";
import AddOrEditDeliverContainer from "./deliver/AddOrEditDeliverContainer";
import InventoryListContainer from "./inventory/InventoryListContainer";
import AddOrEditInventoryContainer from "./inventory/AddOrEditInventoryContainer";
import OrderListContainer from "./order/OrderListContainer";
import AddOrEditOrderContainer from "./order/AddOrEditOrderContainer";
import OrderLineListContainer from "./orderLine/OrderLineListContainer";
import AddOrEditOrderLineContainer from "./orderLine/AddOrEditOrderLineContainer";
import ProductCategoryListContainer from "./productCategory/ProductCategoryListContainer";
import AddOrEditProductCategoryContainer from "./productCategory/AddOrEditProductCategoryContainer";
import ProductionListContainer from "./production/ProductionListContainer";
import AddOrEditProductionContainer from "./production/AddOrEditProductionContainer";
import RoutingListContainer from "./routing/RoutingListContainer";
import AddOrEditRoutingContainer from "./routing/AddOrEditRoutingContainer";
import RoutingWorkcenterListContainer from "./routingWorkcenter/RoutingWorkcenterListContainer";
import AddOrEditRoutingWorkcenterContainer from "./routingWorkcenter/AddOrEditRoutingWorkcenterContainer";
import UomListContainer from "./uom/UomListContainer";
import AddOrEditUomContainer from "./uom/AddOrEditUomContainer";
import WorkcenterListContainer from "./workcenter/WorkcenterListContainer";
import AddOrEditWorkcenterContainer from "./workcenter/AddOrEditWorkcenterContainer";
import WorkcenterProductivityListContainer from "./workcenterProductivity/WorkcenterProductivityListContainer";
import AddOrEditWorkcenterProductivityContainer from "./workcenterProductivity/AddOrEditWorkcenterProductivityContainer";
import WorkorderListContainer from "./workorder/WorkorderListContainer";
import AddOrEditWorkorderContainer from "./workorder/AddOrEditWorkorderContainer";
import UserListContainer from "./user/UserListContainer";
import AddOrEditUserContainer from "./user/AddOrEditUserContainer";
import UserLoginContainer from "./user/UserLoginContainer";
import About from "./About";
import HeaderNavContainer from "./landing/HeaderNavContainer"; // eslint-disable-line import/no-named-as-default
import MenuContainer from "./landing/MenuContainer";
import Footer from "./landing/Footer";
import PrivateRoute from "./PrivateRoute";

export class App extends React.Component {
  constructor() {
    super();
    this.state = { userAuth: undefined };
  }
  render() {
    const { userAuth } = this.props;
    return (
      <Router>
        <div>
          {userAuth && <HeaderNavContainer />}
          {userAuth && <MenuContainer />}
          <Switch>
            <PrivateRoute authed={userAuth} exact path="/" component={Home} />
            <Route path="/login" component={UserLoginContainer} />
            <PrivateRoute
              authed={userAuth}
              path="/datas/products"
              component={ProductListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/datas/product"
              component={AddOrEditProductContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/datas/product/:id"
              component={AddOrEditProductContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/datas/boms"
              component={BomListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/datas/bom"
              component={AddOrEditBomContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/datas/bom/:id"
              component={AddOrEditBomContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/bom-lines"
              component={BomLineListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/bomline"
              component={AddOrEditBomLineContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/bom-line/:id"
              component={AddOrEditBomLineContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/crm/contacts"
              component={ContactListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/crm/contact"
              component={AddOrEditContactContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/crm/contact/:id"
              component={AddOrEditContactContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/delivers"
              component={DeliverListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/deliver"
              component={AddOrEditDeliverContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/deliver/:id"
              component={AddOrEditDeliverContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/inventorys"
              component={InventoryListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/inventory"
              component={AddOrEditInventoryContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/inventory/:id"
              component={AddOrEditInventoryContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/crm/orders"
              component={OrderListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/crm/order"
              component={AddOrEditOrderContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/crm/order/:id"
              component={AddOrEditOrderContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/order-lines"
              component={OrderLineListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/order-line"
              component={AddOrEditOrderLineContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/order-line/:id"
              component={AddOrEditOrderLineContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/product-categories"
              component={ProductCategoryListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/product-category"
              component={AddOrEditProductCategoryContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/product-category/:id"
              component={AddOrEditProductCategoryContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/mrp/productions"
              component={ProductionListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/mrp/production"
              component={AddOrEditProductionContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/mrp/production/:id"
              component={AddOrEditProductionContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/datas/routings"
              component={RoutingListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/datas/routing"
              component={AddOrEditRoutingContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/datas/routing/:id"
              component={AddOrEditRoutingContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/routing-workcenters"
              component={RoutingWorkcenterListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/routing-workcenter"
              component={AddOrEditRoutingWorkcenterContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/routing-workcenter/:id"
              component={AddOrEditRoutingWorkcenterContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/settings/uoms"
              component={UomListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/settings/uom"
              component={AddOrEditUomContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/settings/uom/:id"
              component={AddOrEditUomContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/datas/workcenters"
              component={WorkcenterListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/datas/workcenter"
              component={AddOrEditWorkcenterContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/datas/workcenter/:id"
              component={AddOrEditWorkcenterContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/workcenter-productivities"
              component={WorkcenterProductivityListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/workcenter-productivity"
              component={AddOrEditWorkcenterProductivityContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/workcenter-productivity/:id"
              component={AddOrEditWorkcenterProductivityContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/mrp/workorders"
              component={WorkorderListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/mrp/workorder"
              component={AddOrEditWorkorderContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/mrp/workorder/:id"
              component={AddOrEditWorkorderContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/settings/users"
              component={UserListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/settings/user"
              component={AddOrEditUserContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/settings/user/:id"
              component={AddOrEditUserContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/courses"
              component={CourseListContainer}
            />
            <PrivateRoute
              authed={userAuth}
              exact
              path="/course"
              component={AddOrEditCourseContainer}
            />
            <PrivateRoute
              authed={userAuth}
              path="/course/:id"
              component={AddOrEditCourseContainer}
            />
            <PrivateRoute authed={userAuth} path="/about" component={About} />
            <PrivateRoute authed={userAuth} component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.loginedUserReducer.userAuth
});

export default connect(mapStateToProps)(App);
