'use client';

import { Check, CreditCard, DollarSign, PersonStanding } from "lucide-react"
import { DashboardCard } from "./_components/dashboard-card"
import { LineGraph } from "./_components/linegraph"
import { BarChart } from "./_components/barchart"

import { LineChart, XAxis, YAxis, Line, Tooltip, CartesianGrid, Legend, PieChart, AreaChart, Pie, Area } from "recharts";

// Sample data for charts
const areaData = [
    { name: "Jan", uv: 4000, pv: 2400 },
    { name: "Feb", uv: 3000, pv: 1398 },
    { name: "Mar", uv: 2000, pv: 9800 },
    { name: "Apr", uv: 2780, pv: 3908 },
    { name: "May", uv: 1890, pv: 4800 },
];

const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
];

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-5 w-full">
            <h1 className="font-bold text-4xl mx-6 text-center">Dashboard</h1>
            <div className="mx-auto py-8">
                <div className="flex flex-col gap-5 w-full">
                    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                        <DashboardCard 
                            label="Revenue"
                            Icon={DollarSign}
                            amount="$40,000"
                            description="Total revenue generated this month"
                        />
                        <DashboardCard 
                            label="Customers"
                            Icon={PersonStanding}
                            amount="+300"
                            description="+22 this month"
                        />
                        <DashboardCard 
                            label="Profit"
                            Icon={CreditCard}
                            amount="$8,000"
                            description="Total profit generated this month"
                        />
                        <DashboardCard 
                            label="Sales"
                            Icon={Check}
                            amount="+90"
                            description="+10 this month"
                        />
                    </section>
                    <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
                        <AreaChart width={730} height={250} data={areaData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                        <PieChart width={400} height={400}>
                            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                            <Tooltip />
                        </PieChart>
                    </section>
                </div>
            </div>
        </div>
    );
}
