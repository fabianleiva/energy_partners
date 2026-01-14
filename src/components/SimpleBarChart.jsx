import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: '1', B: 300, A: 456 },
  { name: '2', B: -145, A: 230 },
  { name: '3', B: -100, A: 345 },
  { name: '4', B: -8, A: 450 },
  { name: '5', B: 100, A: 321 },
  { name: '6', B: 9, A: 235 },
  { name: '7', B: 53, A: 267 },
  { name: '8', B: 252, A: -378 },
  { name: '9', B: 79, A: -210 },
  { name: '10', B: 294, A: -23 },
  { name: '12', B: 43, A: 45 },
  { name: '13', B: -74, A: 90 },
  { name: '14', B: -71, A: 130 },
  { name: '15', B: -117, A: 11 },
  { name: '16', B: -186, A: 107 },
  { name: '17', B: -16, A: 926 },
  { name: '18', B: -125, A: 653 },
  { name: '19', B: 222, A: 366 },
  { name: '20', B: 372, A: 486 },
  { name: '21', B: 182, A: 512 },
  { name: '22', B: 164, A: 302 },
  { name: '23', B: 316, A: 425 },
  { name: '24', B: 131, A: 467 },
  { name: '25', B: 291, A: -190 },
  { name: '26', B: -47, A: 194 },
  { name: '27', B: -415, A: 371 },
  { name: '28', B: -182, A: 376 },
  { name: '29', B: -93, A: 295 },
  { name: '30', B: -99, A: 322 },
  { name: '31', B: -52, A: 246 },
];

// #endregion
const BrushBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '1800px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <ReferenceLine y={0} stroke="#000" />
      {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
      <Bar dataKey="A" fill="#d9d9d9" />
      <Bar dataKey="B" fill="#00aa2b56" />
      <RechartsDevtools />
    </BarChart>
  );
};

export default BrushBarChart;