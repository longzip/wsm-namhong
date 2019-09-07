import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import About from "./About";
import HeaderNavContainer from "./landing/HeaderNavContainer"; // eslint-disable-line import/no-named-as-default
import MenuContainer from "./landing/MenuContainer";
import Footer from "./landing/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <HeaderNavContainer />
        <MenuContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/datas/products" component={ProductListContainer} />
          <Route exact path="/datas/product" component={AddOrEditProductContainer} />
          <Route path="/datas/product/:id" component={AddOrEditProductContainer} />

          <Route path="/datas/boms" component={BomListContainer} />
          <Route exact path="/datas/bom" component={AddOrEditBomContainer} />
          <Route path="/datas/bom/:id" component={AddOrEditBomContainer} />

          <Route path="/bom-lines" component={BomLineListContainer} />
          <Route exact path="/bomline" component={AddOrEditBomLineContainer} />
          <Route path="/bom-line/:id" component={AddOrEditBomLineContainer} />

          <Route path="/crm/contacts" component={ContactListContainer} />
          <Route exact path="/crm/contact" component={AddOrEditContactContainer} />
          <Route path="/crm/contact/:id" component={AddOrEditContactContainer} />

          <Route path="/delivers" component={DeliverListContainer} />
          <Route exact path="/deliver" component={AddOrEditDeliverContainer} />
          <Route path="/deliver/:id" component={AddOrEditDeliverContainer} />

          <Route path="/inventorys" component={InventoryListContainer} />
          <Route
            exact
            path="/inventory"
            component={AddOrEditInventoryContainer}
          />
          <Route
            path="/inventory/:id"
            component={AddOrEditInventoryContainer}
          />

          <Route path="/crm/orders" component={OrderListContainer} />
          <Route exact path="/crm/order" component={AddOrEditOrderContainer} />
          <Route path="/crm/order/:id" component={AddOrEditOrderContainer} />

          <Route path="/order-lines" component={OrderLineListContainer} />
          <Route
            exact
            path="/order-line"
            component={AddOrEditOrderLineContainer}
          />
          <Route
            path="/order-line/:id"
            component={AddOrEditOrderLineContainer}
          />

          <Route
            path="/product-categories"
            component={ProductCategoryListContainer}
          />
          <Route
            exact
            path="/product-category"
            component={AddOrEditProductCategoryContainer}
          />
          <Route
            path="/product-category/:id"
            component={AddOrEditProductCategoryContainer}
          />

          <Route path="/mrp/productions" component={ProductionListContainer} />
          <Route
            exact
            path="/mrp/production"
            component={AddOrEditProductionContainer}
          />
          <Route
            path="/mrp/production/:id"
            component={AddOrEditProductionContainer}
          />

          <Route path="/datas/routings" component={RoutingListContainer} />
          <Route exact path="/datas/routing" component={AddOrEditRoutingContainer} />
          <Route path="/datas/routing/:id" component={AddOrEditRoutingContainer} />

          <Route
            path="/routing-workcenters"
            component={RoutingWorkcenterListContainer}
          />
          <Route
            exact
            path="/routing-workcenter"
            component={AddOrEditRoutingWorkcenterContainer}
          />
          <Route
            path="/routing-workcenter/:id"
            component={AddOrEditRoutingWorkcenterContainer}
          />

          <Route path="/settings/uoms" component={UomListContainer} />
          <Route exact path="/settings/uom" component={AddOrEditUomContainer} />
          <Route path="/settings/uom/:id" component={AddOrEditUomContainer} />

          <Route
            path="/datas/workcenters"
            component={WorkcenterListContainer}
          />
          <Route
            exact
            path="/datas/workcenter"
            component={AddOrEditWorkcenterContainer}
          />
          <Route
            path="/datas/workcenter/:id"
            component={AddOrEditWorkcenterContainer}
          />

          <Route
            path="/workcenter-productivities"
            component={WorkcenterProductivityListContainer}
          />
          <Route
            exact
            path="/workcenter-productivity"
            component={AddOrEditWorkcenterProductivityContainer}
          />
          <Route
            path="/workcenter-productivity/:id"
            component={AddOrEditWorkcenterProductivityContainer}
          />

          <Route path="/mrp/workorders" component={WorkorderListContainer} />
          <Route
            exact
            path="/mrp/workorder"
            component={AddOrEditWorkorderContainer}
          />
          <Route
            path="/mrp/workorder/:id"
            component={AddOrEditWorkorderContainer}
          />

          <Route path="/settings/users" component={UserListContainer} />
          <Route exact path="/settings/user" component={AddOrEditUserContainer} />
          <Route path="/settings/user/:id" component={AddOrEditUserContainer} />

          <Route path="/courses" component={CourseListContainer} />
          <Route exact path="/course" component={AddOrEditCourseContainer} />
          <Route path="/course/:id" component={AddOrEditCourseContainer} />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
