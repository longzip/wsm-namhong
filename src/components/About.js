import React from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';

const About = () => {
  return (
    <div className="content-wrapper">
      <h1>About</h1>
      <p>
        Est et amet perfecto sententiae, nec error essent eripuit ei. Velit
        sanctus ut has, partem dolorem atomorum est ad, sumo fabellas electram
        ex vim.
      </p>
      <Grid
    rows={[
      { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
      { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
    ]}
    columns={[
      { name: 'id', title: 'ID' },
      { name: 'product', title: 'Product' },
      { name: 'owner', title: 'Owner' },
    ]}>
    <Table />
    <TableHeaderRow />
  </Grid>
    </div>
  );
};

export default About;
