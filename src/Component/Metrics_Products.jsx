import React from 'react';

// Full data array
const data = [
  { PRODUCTCODE: 'S18_3232', TOTAL_REVENUE: 33534.95, TOTAL_UNITS_SOLD: 347, AVG_PRICE_PER_UNIT: 95.205556, TOTAL_ORDERS: 9 },
  { PRODUCTCODE: 'S12_4675', TOTAL_REVENUE: 26016.86, TOTAL_UNITS_SOLD: 272, AVG_PRICE_PER_UNIT: 96.346, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S24_3856', TOTAL_REVENUE: 23789.89, TOTAL_UNITS_SOLD: 255, AVG_PRICE_PER_UNIT: 89.57, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S32_1374', TOTAL_REVENUE: 22275.6, TOTAL_UNITS_SOLD: 225, AVG_PRICE_PER_UNIT: 98.98, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S24_1578', TOTAL_REVENUE: 21246, TOTAL_UNITS_SOLD: 214, AVG_PRICE_PER_UNIT: 99.384, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S18_3856', TOTAL_REVENUE: 19690.6, TOTAL_UNITS_SOLD: 226, AVG_PRICE_PER_UNIT: 83.608, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S18_1129', TOTAL_REVENUE: 19387.52, TOTAL_UNITS_SOLD: 200, AVG_PRICE_PER_UNIT: 96.166, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S12_2823', TOTAL_REVENUE: 19167.08, TOTAL_UNITS_SOLD: 202, AVG_PRICE_PER_UNIT: 95.784, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S700_3167', TOTAL_REVENUE: 19026.08, TOTAL_UNITS_SOLD: 221, AVG_PRICE_PER_UNIT: 83.828, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S18_1749', TOTAL_REVENUE: 18900, TOTAL_UNITS_SOLD: 189, AVG_PRICE_PER_UNIT: 100, TOTAL_ORDERS: 4 },
  { PRODUCTCODE: 'S10_4757', TOTAL_REVENUE: 18800, TOTAL_UNITS_SOLD: 188, AVG_PRICE_PER_UNIT: 100, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S24_4278', TOTAL_REVENUE: 18789.29, TOTAL_UNITS_SOLD: 238, AVG_PRICE_PER_UNIT: 79.47, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S10_4698', TOTAL_REVENUE: 18422.17, TOTAL_UNITS_SOLD: 187, AVG_PRICE_PER_UNIT: 97.354, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S12_1666', TOTAL_REVENUE: 18264.8, TOTAL_UNITS_SOLD: 197, AVG_PRICE_PER_UNIT: 92.64, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S700_2466', TOTAL_REVENUE: 18054.55, TOTAL_UNITS_SOLD: 199, AVG_PRICE_PER_UNIT: 91.87, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S18_1097', TOTAL_REVENUE: 17971.9, TOTAL_UNITS_SOLD: 185, AVG_PRICE_PER_UNIT: 96.62, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S24_1785', TOTAL_REVENUE: 17829.66, TOTAL_UNITS_SOLD: 207, AVG_PRICE_PER_UNIT: 84.146, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S18_3685', TOTAL_REVENUE: 17666.56, TOTAL_UNITS_SOLD: 186, AVG_PRICE_PER_UNIT: 92.7075, TOTAL_ORDERS: 4 },
  { PRODUCTCODE: 'S10_1949', TOTAL_REVENUE: 17400, TOTAL_UNITS_SOLD: 174, AVG_PRICE_PER_UNIT: 100, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S18_2870', TOTAL_REVENUE: 17400, TOTAL_UNITS_SOLD: 174, AVG_PRICE_PER_UNIT: 100, TOTAL_ORDERS: 4 },
  { PRODUCTCODE: 'S18_4027', TOTAL_REVENUE: 17200, TOTAL_UNITS_SOLD: 172, AVG_PRICE_PER_UNIT: 100, TOTAL_ORDERS: 4 },
  { PRODUCTCODE: 'S18_1984', TOTAL_REVENUE: 16663.7, TOTAL_UNITS_SOLD: 186, AVG_PRICE_PER_UNIT: 88.61, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S24_2766', TOTAL_REVENUE: 16432, TOTAL_UNITS_SOLD: 191, AVG_PRICE_PER_UNIT: 83, TOTAL_ORDERS: 4 },
  { PRODUCTCODE: 'S24_2000', TOTAL_REVENUE: 16360.2, TOTAL_UNITS_SOLD: 184, AVG_PRICE_PER_UNIT: 91.32, TOTAL_ORDERS: 5 },
  { PRODUCTCODE: 'S18_1889', TOTAL_REVENUE: 15964.73, TOTAL_UNITS_SOLD: 202, AVG_PRICE_PER_UNIT: 80.966, TOTAL_ORDERS: 5 },
];

const ProductTable = () => {
  return (
   <div className='container mx-auto  '>
        <div style={{ overflowX: 'auto' }}  >
          <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Product Code</th>
                <th>Total Revenue</th>
                <th>Total Units Sold</th>
                <th>Avg Price per Unit</th>
                <th>Total Orders</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr key={index}>
                  <td>{product.PRODUCTCODE}</td>
                  <td>{product.TOTAL_REVENUE.toFixed(2)}</td>
                  <td>{product.TOTAL_UNITS_SOLD}</td>
                  <td>{product.AVG_PRICE_PER_UNIT.toFixed(2)}</td>
                  <td>{product.TOTAL_ORDERS}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ProductTable;