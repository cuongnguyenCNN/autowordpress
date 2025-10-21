// app/dashboard/analytics/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Eye,
  MousePointerClick,
  Share2,
  MessageCircle,
} from "lucide-react";

const dataLine = [
  { name: "Mon", impressions: 1200 },
  { name: "Tue", impressions: 1800 },
  { name: "Wed", impressions: 1500 },
  { name: "Thu", impressions: 2000 },
  { name: "Fri", impressions: 2500 },
];

// const dataBar = [
//   { name: "Post 1", likes: 120, comments: 30, shares: 10 },
//   { name: "Post 2", likes: 200, comments: 45, shares: 22 },
//   { name: "Post 3", likes: 150, comments: 25, shares: 15 },
// ];

const dataPie = [
  { name: "Posts", value: 60 },
  { name: "Videos", value: 25 },
  { name: "Articles", value: 15 },
];

const COLORS = ["#4F46E5", "#06B6D4", "#F59E0B"];

export default function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto rounded-[10px] bg-[#F3F4EF] md:pr-1 pt-14 md:pt-0 w-full">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Analytics Overview</h1>
        <p className="text-muted-foreground">
          LinkedIn Content Performance Analysis
        </p>
        <br></br>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <Eye className="h-6 w-6 text-indigo-600" />
            <p className="text-sm text-muted-foreground">Impressions</p>
            <p className="text-xl font-bold">12.3K</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <MousePointerClick className="h-6 w-6 text-cyan-600" />
            <p className="text-sm text-muted-foreground">Clicks</p>
            <p className="text-xl font-bold">1.4K</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <p className="text-sm text-muted-foreground">Engagement</p>
            <p className="text-xl font-bold">8.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <Share2 className="h-6 w-6 text-orange-600" />
            <p className="text-sm text-muted-foreground">Shares</p>
            <p className="text-xl font-bold">320</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <MessageCircle className="h-6 w-6 text-pink-600" />
            <p className="text-sm text-muted-foreground">Comments</p>
            <p className="text-xl font-bold">145</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Impressions Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dataLine}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="impressions"
                  stroke="#4F46E5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={dataPie} dataKey="value" label>
                  {dataPie.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top posts */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Title</th>
                <th className="p-2">Views</th>
                <th className="p-2">Engagement</th>
                <th className="p-2">Clicks</th>
                <th className="p-2">CTR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Post about Web3</td>
                <td className="p-2">5.2K</td>
                <td className="p-2">12%</td>
                <td className="p-2">500</td>
                <td className="p-2">9.6%</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">AI Content Ideas</td>
                <td className="p-2">4.1K</td>
                <td className="p-2">10%</td>
                <td className="p-2">410</td>
                <td className="p-2">10%</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
