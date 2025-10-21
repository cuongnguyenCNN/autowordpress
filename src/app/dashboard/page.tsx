"use client";
import "react-day-picker/dist/style.css";
import { useEffect, useState } from "react";
import ProfileModal from "@/src/components/profilemodal";
import { usePosts } from "@/src/contexts/postscontext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { format, subDays, eachDayOfInterval } from "date-fns";
import PostCalendar from "@/src/components/postcalender";
import { Post } from "@/src/types";
import { useUser } from "@/src/contexts/userscontext";

// function convertStyleStringToObject(styleString: string) {
//   const styleObject: { [key: string]: string } = {};

//   styleString.split(";").forEach((style) => {
//     if (style.trim()) {
//       const [property, value] = style.split(":");
//       if (property && value) {
//         const camelCaseProperty = property
//           .trim()
//           .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase
//         styleObject[camelCaseProperty] = value.trim();
//       }
//     }
//   });

//   return styleObject;
// }
function transformPostsToChartData(posts: Post[], days = 7) {
  const today = new Date();
  const startDate = subDays(today, days - 1); // 7 ngày gần nhất
  const daysArray = eachDayOfInterval({ start: startDate, end: today });

  const result = daysArray.map((date) => {
    const dateStr = format(date, "MMM dd"); // ví dụ: "Apr 26"

    const scheduled = posts.filter((post) => {
      const postDate = new Date(post.scheduled_time);
      return format(postDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
    }).length;

    const posted = posts.filter((post) => {
      const postDate = new Date(post.scheduled_time);
      return (
        format(postDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd") &&
        post.status === "posted"
      );
    }).length;

    return { date: dateStr, scheduled, posted };
  });

  return result;
}
export default function Dashboard() {
  // const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { posts } = usePosts();
  const { user } = useUser();
  const [range, setRange] = useState("7");
  const [chartData, setChartData] = useState(
    transformPostsToChartData(posts, parseInt(range))
  );
  //const chartData = transformPostsToChartData(posts, 7);

  useEffect(() => {
    // Giả lập dữ liệu cho "posted" và "scheduled"

    setChartData(transformPostsToChartData(posts, parseInt(range)));
  }, [range, posts]);
  return (
    <main className="flex-1 overflow-auto rounded-[10px] bg-[#F3F4EF] md:pr-1 pt-14 md:pt-0 w-full">
      <div className="min-h-screen bg-[#F3F4EF]">
        <div className="bg-[#F3F4EF] w-full">
          <div className="container mx-auto py-2 md:py-4 px-3 md:px-4 max-w-7xl">
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                <div className="m-1 border text-card-foreground rounded-2xl md:rounded-3xl shadow-sm border-gray-100 bg-white">
                  <div className="flex flex-col p-6 pb-2 md:pb-4 space-y-0">
                    <h3 className="text-sm md:text-ml font-normal text-gray-500">
                      Scheduled
                    </h3>
                  </div>
                  <div className="p-6 pt-0 pb-4 md:pb-6">
                    <div className="space-y-1">
                      <p className="text-2xl md:text-4xl font-extrabold tracking-tight">
                        {
                          posts.filter((post) => post.status === "scheduled")
                            .length
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="m-1 border text-card-foreground rounded-2xl md:rounded-3xl shadow-sm border-gray-100 bg-white">
                  <div className="flex flex-col p-6 pb-2 md:pb-4 space-y-0">
                    <h3 className="text-sm md:text-ml font-normal text-gray-500">
                      Posted
                    </h3>
                  </div>
                  <div className="p-6 pt-0 pb-4 md:pb-6">
                    <div className="space-y-1">
                      <p className="text-2xl md:text-4xl font-extrabold tracking-tight">
                        {
                          posts.filter((post) => post.status === "posted")
                            .length
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="m-1 border text-card-foreground rounded-2xl md:rounded-3xl shadow-sm border-gray-100 bg-white">
                  <div className="flex flex-col p-6 pb-2 md:pb-4 space-y-0">
                    <h3 className="text-sm md:text-ml font-normal text-gray-500">
                      Drafts
                    </h3>
                  </div>
                  <div className="p-6 pt-0 pb-2 md:pb-6">
                    <div className="space-y-1">
                      <p className="text-2xl md:text-4xl font-extrabold tracking-tight">
                        {posts.filter((post) => post.status === "draft").length}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="m-1 border text-card-foreground rounded-2xl md:rounded-3xl shadow-sm border-gray-100 bg-white">
                  <div className="flex flex-col p-6 pb-2 md:pb-4 space-y-0">
                    <h3 className="text-sm md:text-ml font-normal text-gray-500">
                      Time Range
                    </h3>
                  </div>
                  <div className="p-6 pt-0 space-y-2">
                    <select
                      value={range}
                      onChange={(e) => setRange(e.target.value)}
                      // value={value}
                      // onChange={(e) => onChange(e.target.value)}
                      className="border p-2 rounded flex h-10 w-full items-center justify-between rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 "
                    >
                      <option value="7">Last 7 Days</option>
                      <option value="14">Last 14 Days</option>
                      <option value="30">Last 30 Days</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h2 className="text-gray-700 text-sm font-medium mb-4">
                    Posts
                  </h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={chartData}
                      margin={{ top: 10, right: 30, bottom: 0, left: 0 }}
                    >
                      <CartesianGrid
                        vertical={false}
                        stroke="#e5e7eb"
                        strokeDasharray="3 3"
                      />
                      <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12, fill: "#444" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fontSize: 12, fill: "#444" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `${value} posts`}
                        domain={[0, 4]}
                      />
                      <Tooltip
                        contentStyle={{ fontSize: "12px", borderRadius: "8px" }}
                        labelStyle={{ fontWeight: 600 }}
                      />
                      <Legend iconType="line" verticalAlign="top" height={36} />
                      <Line
                        type="monotone"
                        dataKey="scheduled"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="posted"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                {/* <div className="m-1 border text-card-foreground rounded-3xl shadow-sm border-gray-100 bg-white">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="leading-none font-normal text-gray-500">
                      Posts
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <div
                      className="w-full h-[375px] mt-2"
                      tremor-id="tremor-raw"
                    >
                      <div
                        className="recharts-responsive-container"
                        style={convertStyleStringToObject(
                          "width: 100%; height: 100%; min-width: 0px;"
                        )}
                      >
                        <div
                          className="recharts-wrapper"
                          style={convertStyleStringToObject(
                            "position: relative; cursor: default; width: 100%; height: 100%; max-height: 375px; max-width: 1190px;"
                          )}
                        >
                          <svg
                            className="recharts-surface"
                            width="1190"
                            height="375"
                            viewBox="0 0 1190 375"
                            style={convertStyleStringToObject(
                              "width: 100%; height: 100%;"
                            )}
                          >
                            <title></title>
                            <desc></desc>
                            <defs>
                              <clipPath id="recharts1-clip">
                                <rect
                                  x="60"
                                  y="44"
                                  height="301"
                                  width="1130"
                                ></rect>
                              </clipPath>
                            </defs>
                            <g className="recharts-cartesian-grid">
                              <g className="recharts-cartesian-grid-horizontal">
                                <line
                                  className="stroke-gray-200 stroke-1 dark:stroke-gray-800"
                                  stroke="#ccc"
                                  fill="none"
                                  x="60"
                                  y="44"
                                  width="1130"
                                  height="301"
                                  x1="60"
                                  y1="345"
                                  x2="1190"
                                  y2="345"
                                ></line>
                                <line
                                  className="stroke-gray-200 stroke-1 dark:stroke-gray-800"
                                  stroke="#ccc"
                                  fill="none"
                                  x="60"
                                  y="44"
                                  width="1130"
                                  height="301"
                                  x1="60"
                                  y1="269.75"
                                  x2="1190"
                                  y2="269.75"
                                ></line>
                                <line
                                  className="stroke-gray-200 stroke-1 dark:stroke-gray-800"
                                  stroke="#ccc"
                                  fill="none"
                                  x="60"
                                  y="44"
                                  width="1130"
                                  height="301"
                                  x1="60"
                                  y1="194.5"
                                  x2="1190"
                                  y2="194.5"
                                ></line>
                                <line
                                  className="stroke-gray-200 stroke-1 dark:stroke-gray-800"
                                  stroke="#ccc"
                                  fill="none"
                                  x="60"
                                  y="44"
                                  width="1130"
                                  height="301"
                                  x1="60"
                                  y1="119.25"
                                  x2="1190"
                                  y2="119.25"
                                ></line>
                                <line
                                  className="stroke-gray-200 stroke-1 dark:stroke-gray-800"
                                  stroke="#ccc"
                                  fill="none"
                                  x="60"
                                  y="44"
                                  width="1130"
                                  height="301"
                                  x1="60"
                                  y1="44"
                                  x2="1190"
                                  y2="44"
                                ></line>
                              </g>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis text-xs fill-gray-500 dark:fill-gray-500">
                              <g className="recharts-cartesian-axis-ticks">
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="bottom"
                                    width="1130"
                                    height="30"
                                    stroke="none"
                                    transform="translate(0, 6)"
                                    x="80"
                                    y="353"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="middle"
                                    fill=""
                                  >
                                    <tspan x="80" dy="0.71em">
                                      Apr 26
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="bottom"
                                    width="1130"
                                    height="30"
                                    stroke="none"
                                    transform="translate(0, 6)"
                                    x="391.42857142857144"
                                    y="353"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="middle"
                                    fill=""
                                  >
                                    <tspan x="391.42857142857144" dy="0.71em">
                                      Apr 28
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="bottom"
                                    width="1130"
                                    height="30"
                                    stroke="none"
                                    transform="translate(0, 6)"
                                    x="702.8571428571429"
                                    y="353"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="middle"
                                    fill=""
                                  >
                                    <tspan x="702.8571428571429" dy="0.71em">
                                      Apr 30
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="bottom"
                                    width="1130"
                                    height="30"
                                    stroke="none"
                                    transform="translate(0, 6)"
                                    x="1014.2857142857143"
                                    y="353"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="middle"
                                    fill=""
                                  >
                                    <tspan x="1014.2857142857143" dy="0.71em">
                                      May 02
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis text-xs fill-gray-500 dark:fill-gray-500">
                              <g className="recharts-cartesian-axis-ticks">
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="left"
                                    width="60"
                                    height="301"
                                    stroke="none"
                                    transform="translate(-3, 0)"
                                    x="52"
                                    y="345"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="end"
                                    fill=""
                                  >
                                    <tspan x="52" dy="0.355em">
                                      0 posts
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="left"
                                    width="60"
                                    height="301"
                                    stroke="none"
                                    transform="translate(-3, 0)"
                                    x="52"
                                    y="269.75"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="end"
                                    fill=""
                                  >
                                    <tspan x="52" dy="0.355em">
                                      1 posts
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="left"
                                    width="60"
                                    height="301"
                                    stroke="none"
                                    transform="translate(-3, 0)"
                                    x="52"
                                    y="194.5"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="end"
                                    fill=""
                                  >
                                    <tspan x="52" dy="0.355em">
                                      2 posts
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="left"
                                    width="60"
                                    height="301"
                                    stroke="none"
                                    transform="translate(-3, 0)"
                                    x="52"
                                    y="119.25"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="end"
                                    fill=""
                                  >
                                    <tspan x="52" dy="0.355em">
                                      3 posts
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-layer recharts-cartesian-axis-tick">
                                  <text
                                    orientation="left"
                                    width="60"
                                    height="301"
                                    stroke="none"
                                    transform="translate(-3, 0)"
                                    x="52"
                                    y="44"
                                    className="recharts-text recharts-cartesian-axis-tick-value"
                                    text-anchor="end"
                                    fill=""
                                  >
                                    <tspan x="52" dy="0.355em">
                                      4 posts
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                            <defs>
                              <linearGradient
                                className="text-blue-500"
                                id=":rl:-scheduled"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stop-color="currentColor"
                                  stop-opacity="0.4"
                                ></stop>
                                <stop
                                  offset="95%"
                                  stop-color="currentColor"
                                  stop-opacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                            <g className="recharts-layer recharts-area stroke-blue-500">
                              <g className="recharts-layer">
                                <path
                                  className="recharts-curve recharts-area-area"
                                  stroke-opacity="0.7"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="url(#:rl:-scheduled)"
                                  fill-opacity="0.6"
                                  width="1130"
                                  height="301"
                                  stroke="none"
                                  d="M80,345C131.905,345,183.81,345,235.714,345C287.619,345,339.524,345,391.429,345C443.333,345,495.238,345,547.143,345C599.048,345,650.952,345,702.857,345C754.762,345,806.667,345,858.571,345C910.476,345,962.381,345,1014.286,345C1066.19,345,1118.095,345,1170,345L1170,345C1118.095,345,1066.19,345,1014.286,345C962.381,345,910.476,345,858.571,345C806.667,345,754.762,345,702.857,345C650.952,345,599.048,345,547.143,345C495.238,345,443.333,345,391.429,345C339.524,345,287.619,345,235.714,345C183.81,345,131.905,345,80,345Z"
                                ></path>
                                <path
                                  className="recharts-curve recharts-area-curve"
                                  stroke-opacity="0.7"
                                  strokeWidth="2"
                                  stroke=""
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                  fill-opacity="0.6"
                                  width="1130"
                                  height="301"
                                  d="M80,345C131.905,345,183.81,345,235.714,345C287.619,345,339.524,345,391.429,345C443.333,345,495.238,345,547.143,345C599.048,345,650.952,345,702.857,345C754.762,345,806.667,345,858.571,345C910.476,345,962.381,345,1014.286,345C1066.19,345,1118.095,345,1170,345"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-area-dots"></g>
                            </g>
                            <defs>
                              <linearGradient
                                className="text-emerald-500"
                                id=":rl:-posted"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stop-color="currentColor"
                                  stop-opacity="0.4"
                                ></stop>
                                <stop
                                  offset="95%"
                                  stop-color="currentColor"
                                  stop-opacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                            <g className="recharts-layer recharts-area stroke-emerald-500">
                              <g className="recharts-layer">
                                <path
                                  className="recharts-curve recharts-area-area"
                                  stroke-opacity="0.7"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="url(#:rl:-posted)"
                                  fill-opacity="0.6"
                                  width="1130"
                                  height="301"
                                  stroke="none"
                                  d="M80,345C131.905,345,183.81,345,235.714,345C287.619,345,339.524,345,391.429,345C443.333,345,495.238,345,547.143,345C599.048,345,650.952,345,702.857,345C754.762,345,806.667,345,858.571,345C910.476,345,962.381,345,1014.286,345C1066.19,345,1118.095,345,1170,345L1170,345C1118.095,345,1066.19,345,1014.286,345C962.381,345,910.476,345,858.571,345C806.667,345,754.762,345,702.857,345C650.952,345,599.048,345,547.143,345C495.238,345,443.333,345,391.429,345C339.524,345,287.619,345,235.714,345C183.81,345,131.905,345,80,345Z"
                                ></path>
                                <path
                                  className="recharts-curve recharts-area-curve"
                                  stroke-opacity="0.7"
                                  strokeWidth="2"
                                  stroke=""
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  fill="none"
                                  fill-opacity="0.6"
                                  width="1130"
                                  height="301"
                                  d="M80,345C131.905,345,183.81,345,235.714,345C287.619,345,339.524,345,391.429,345C443.333,345,495.238,345,547.143,345C599.048,345,650.952,345,702.857,345C754.762,345,806.667,345,858.571,345C910.476,345,962.381,345,1014.286,345C1066.19,345,1118.095,345,1170,345"
                                ></path>
                              </g>
                              <g className="recharts-layer recharts-area-dots"></g>
                            </g>
                          </svg>
                          <div
                            className="recharts-legend-wrapper"
                            style={convertStyleStringToObject(
                              "position: absolute; width: 1190px; height: 39px; left: 0px; top: 5px;"
                            )}
                          >
                            <div
                              className="flex items-center justify-end"
                              style={convertStyleStringToObject(
                                "padding-left: 0px;"
                              )}
                            >
                              <ol className="relative overflow-hidden">
                                <div className="flex h-full flex-wrap">
                                  <li className="group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 transition cursor-default">
                                    <span
                                      className="h-[3px] w-3.5 shrink-0 rounded-full bg-blue-500 opacity-100"
                                      aria-hidden="true"
                                    ></span>
                                    <p className="truncate whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 opacity-100">
                                      scheduled
                                    </p>
                                  </li>
                                  <li className="group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 transition cursor-default">
                                    <span
                                      className="h-[3px] w-3.5 shrink-0 rounded-full bg-emerald-500 opacity-100"
                                      aria-hidden="true"
                                    ></span>
                                    <p className="truncate whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 opacity-100">
                                      posted
                                    </p>
                                  </li>
                                </div>
                              </ol>
                            </div>
                          </div>
                          <div
                            className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top"
                            style={convertStyleStringToObject(
                              "visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px; outline: none; transform: translate(255.714px, 0px);"
                            )}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="space-y-8 m-1">
                <div
                  dir="ltr"
                  data-orientation="horizontal"
                  className="h-full space-y-6"
                >
                  <PostCalendar
                    onDateClick={
                      (user?.post_used ?? 0) >= (user?.post_limit ?? 0)
                        ? () => setOpenModalCreate(false)
                        : () => setOpenModalCreate(true)
                    }
                  />
                  <ProfileModal
                    isOpen={openModalCreate}
                    onClose={() => setOpenModalCreate(false)}
                    content=""
                  />
                  {/* <div className="h-[calc(100vh-10rem)] bg-transparent mt-4">
                    <div className="relative bg-transparent">
                      <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r4:-trigger-calendar"
                        id="radix-:r4:-content-calendar"
                        className="ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=inactive]:hidden data-[state=active]:block w-full m-0"
                        style={convertStyleStringToObject("")}
                      >
                        <div className="border border-gray-100">
                          <div className="space-y-6">
                            <div className="rounded-lg m-1 border text-card-foreground bg-transparent border-none">
                              <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <h2 className="text-lg font-medium text-gray-900">
                                      May 2025
                                    </h2>
                                  </div>
                                  <div className="flex gap-2">
                                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground rounded-2xl h-8 w-8 p-0 hover:bg-gray-100">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-left h-4 w-4"
                                      >
                                        <path d="m15 18-6-6 6-6"></path>
                                      </svg>
                                    </button>
                                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground rounded-2xl h-8 w-8 p-0 hover:bg-gray-100">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-right h-4 w-4"
                                      >
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                <div className="grid grid-cols-7 gap-px bg-[#EEEFE8] rounded-lg overflow-hidden shadow-sm">
                                  <div className="bg-[#EEEFE8] p-4 text-center text-sm font-medium text-gray-600">
                                    Sun
                                  </div>
                                  <div className="bg-[#EEEFE8] p-4 text-center text-sm font-medium text-gray-600">
                                    Mon
                                  </div>
                                  <div className="bg-[#EEEFE8] p-4 text-center text-sm font-medium text-gray-600">
                                    Tue
                                  </div>
                                  <div className="bg-[#EEEFE8] p-4 text-center text-sm font-medium text-gray-600">
                                    Wed
                                  </div>
                                  <div className="bg-[#EEEFE8] p-4 text-center text-sm font-medium text-gray-600">
                                    Thu
                                  </div>
                                  <div className="bg-[#EEEFE8] p-4 text-center text-sm font-medium text-gray-600">
                                    Fri
                                  </div>
                                  <div className="bg-[#EEEFE8] p-4 text-center text-sm font-medium text-gray-600">
                                    Sat
                                  </div>
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] opacity-50 border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-04-27"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            27
                                          </time>
                                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-6 w-6 rounded-full hover:bg-primary/10">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-plus h-3 w-3"
                                              >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5v14"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-1.5 overflow-y-auto max-h-[90px] md:max-h-[100px] scrollbar-thin px-0.5 md:px-1"></div>
                                      </div>
                                    </div>
                                  </button>
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] opacity-50 border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-04-28"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            28
                                          </time>
                                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-6 w-6 rounded-full hover:bg-primary/10">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-plus h-3 w-3"
                                              >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5v14"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-1.5 overflow-y-auto max-h-[90px] md:max-h-[100px] scrollbar-thin px-0.5 md:px-1"></div>
                                      </div>
                                    </div>
                                  </button>
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] opacity-50 border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-04-29"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            29
                                          </time>
                                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-6 w-6 rounded-full hover:bg-primary/10">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-plus h-3 w-3"
                                              >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5v14"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-1.5 overflow-y-auto max-h-[90px] md:max-h-[100px] scrollbar-thin px-0.5 md:px-1"></div>
                                      </div>
                                    </div>
                                  </button>
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] opacity-50 border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-04-30"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            30
                                          </time>
                                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-6 w-6 rounded-full hover:bg-primary/10">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-plus h-3 w-3"
                                              >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5v14"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-1.5 overflow-y-auto max-h-[90px] md:max-h-[100px] scrollbar-thin px-0.5 md:px-1"></div>
                                      </div>
                                    </div>
                                  </button>
                                  {dates.map((index, key) => (
                                    <button
                                      key={key}
                                      className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100"
                                    >
                                      <div className="h-full w-full">
                                        <div className="h-full flex flex-col">
                                          <div className="flex justify-between items-start mb-1">
                                            <time
                                              dateTime="2025-05-01"
                                              className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                            >
                                              {index}
                                            </time>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                              <button
                                                onClick={() =>
                                                  setOpenModalCreate(true)
                                                }
                                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-6 w-6 rounded-full hover:bg-primary/10"
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="lucide lucide-plus h-3 w-3"
                                                >
                                                  <path d="M5 12h14"></path>
                                                  <path d="M12 5v14"></path>
                                                </svg>
                                              </button>
                                            </div>
                                          </div>
                                          <div className="flex flex-col gap-1 md:gap-1.5 overflow-y-auto max-h-[90px] md:max-h-[100px] scrollbar-thin px-0.5 md:px-1"></div>
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                                  <ProfileModal
                                    isOpen={openModalCreate}
                                    onClose={() => setOpenModalCreate(false)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-6">
                              <div className="bg-transparant">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-transparent"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
