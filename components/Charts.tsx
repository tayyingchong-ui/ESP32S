import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { transportComparisonData, budgetDistributionData } from '../constants';

const COLORS = ['#6366f1', '#14b8a6', '#f59e0b', '#ec4899'];

export const TransportChart: React.FC = () => {
  return (
    <div className="h-[350px] w-full">
      <h3 className="text-lg font-bold text-center mb-4 text-slate-700">交通方式比較 (KL - 雲頂)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={transportComparisonData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" orientation="left" stroke="#6366f1" label={{ value: '費用 (TWD)', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" stroke="#14b8a6" label={{ value: '時間 (分鐘)', angle: 90, position: 'insideRight' }} />
          <RechartsTooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="cost" name="費用 (約TWD)" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
          <Bar yAxisId="right" dataKey="time" name="時間 (分鐘)" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-center text-slate-500 mt-2">* 費用為單程預估，匯率浮動請依現場為主</p>
    </div>
  );
};

export const BudgetChart: React.FC = () => {
  return (
    <div className="h-[350px] w-full">
      <h3 className="text-lg font-bold text-center mb-4 text-slate-700">每日預算分配預估 (5000 TWD)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={budgetDistributionData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {budgetDistributionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <RechartsTooltip />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
