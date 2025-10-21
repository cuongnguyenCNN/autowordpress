//import Link from "next/link";

function convertStyleStringToObject(styleString: string) {
  const styleObject: { [key: string]: string } = {};

  styleString.split(";").forEach((style) => {
    if (style.trim()) {
      const [property, value] = style.split(":");
      if (property && value) {
        const camelCaseProperty = property
          .trim()
          .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase
        styleObject[camelCaseProperty] = value.trim();
      }
    }
  });

  return styleObject;
}
export default function Create() {
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
                        0
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
                        0
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
                        0
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
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r3:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      className="flex h-10 w-full items-center justify-between rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      <span
                        style={convertStyleStringToObject(
                          "pointer-events: none;"
                        )}
                      >
                        Last 7 Days
                      </span>
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
                        className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="m-1 border text-card-foreground rounded-3xl shadow-sm border-gray-100 bg-white">
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
                </div>
              </div>
              <div className="space-y-8 m-1">
                <div
                  dir="ltr"
                  data-orientation="horizontal"
                  className="h-full space-y-6"
                >
                  <div className="sticky top-0 z-10 bg-[#F3F4EF] backdrop-blur-lg pb-2">
                    <div
                      role="tablist"
                      aria-orientation="horizontal"
                      className="text-muted-foreground w-full flex overflow-x-auto scrollbar-hide justify-between items-center h-12 md:h-14 bg-[#EEEFE8] rounded-xl p-1 md:p-2"
                      data-orientation="horizontal"
                      style={convertStyleStringToObject("outline: none;")}
                    >
                      <div className="flex gap-1 md:gap-2">
                        <button
                          type="button"
                          role="tab"
                          aria-selected="true"
                          aria-controls="radix-:r4:-content-calendar"
                          data-state="active"
                          id="radix-:r4:-trigger-calendar"
                          className="inline-flex items-center justify-center font-medium select-none ring-0 outline-none focus-visible:outline-none hover:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#FBF9F9] data-[state=active]:shadow-sm data-[state=active]:border-blue-100 data-[state=active]:text-blue-600 rounded-xl px-2 md:px-4 py-1.5 md:py-2 transition-all duration-200 shadow-sm focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs md:text-sm whitespace-nowrap"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <span className="hidden xs:inline md:inline">
                            Calendar
                          </span>
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected="false"
                          aria-controls="radix-:r4:-content-scheduled"
                          data-state="inactive"
                          id="radix-:r4:-trigger-scheduled"
                          className="inline-flex items-center justify-center font-medium select-none ring-0 outline-none focus-visible:outline-none hover:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#FBF9F9] data-[state=active]:shadow-sm data-[state=active]:border-blue-100 data-[state=active]:text-blue-600 rounded-xl px-2 md:px-4 py-1.5 md:py-2 transition-all duration-200 shadow-sm focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs md:text-sm whitespace-nowrap"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                          </svg>
                          <span className="hidden xs:inline md:inline">
                            Scheduled
                          </span>
                          &nbsp;<span>(0)</span>
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected="false"
                          aria-controls="radix-:r4:-content-draft"
                          data-state="inactive"
                          id="radix-:r4:-trigger-draft"
                          className="inline-flex items-center justify-center font-medium select-none ring-0 outline-none focus-visible:outline-none hover:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#FBF9F9] data-[state=active]:shadow-sm data-[state=active]:border-blue-100 data-[state=active]:text-blue-600 rounded-xl shadow-sm px-2 md:px-4 py-1.5 md:py-2 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs md:text-sm whitespace-nowrap"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="remixicon h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2"
                          >
                            <path d="M20 2C20.5523 2 21 2.44772 21 3V6.757L19 8.757V4H5V20H19V17.242L21 15.242V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20ZM21.7782 8.80761L23.1924 10.2218L15.4142 18L13.9979 17.9979L14 16.5858L21.7782 8.80761ZM13 12V14H8V12H13ZM16 8V10H8V8H16Z"></path>
                          </svg>
                          <span className="hidden xs:inline md:inline">
                            Drafts
                          </span>
                          &nbsp;<span>(0)</span>
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected="false"
                          aria-controls="radix-:r4:-content-shared"
                          data-state="inactive"
                          id="radix-:r4:-trigger-shared"
                          className="inline-flex items-center justify-center font-medium select-none ring-0 outline-none focus-visible:outline-none hover:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#FBF9F9] data-[state=active]:shadow-sm data-[state=active]:border-blue-100 data-[state=active]:text-blue-600 rounded-xl shadow-sm px-2 md:px-4 py-1.5 md:py-2 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs md:text-sm whitespace-nowrap"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                          </svg>
                          <span className="hidden xs:inline md:inline">
                            Posted
                          </span>
                          &nbsp;<span>(0)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-[calc(100vh-10rem)] bg-transparent mt-4">
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-01"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            1
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-02"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            2
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#F3F4EF] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-03"
                                            className="ml-1 text-sm flex items-center justify-center font-bold w-7 h-7 rounded-full bg-blue-100 text-blue-600"
                                          >
                                            3
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-04"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            4
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-05"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            5
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-06"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            6
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-07"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            7
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-08"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            8
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-09"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            9
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-10"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            10
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-11"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            11
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-12"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            12
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-13"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            13
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-14"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            14
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-15"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            15
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-16"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            16
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-17"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            17
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-18"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            18
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-19"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            19
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-20"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            20
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-21"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            21
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-22"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            22
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-23"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            23
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-24"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            24
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-25"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            25
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-26"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            26
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-27"
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-28"
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-29"
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-30"
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
                                  <button className="relative h-40 p-1 transition-colors group hover:bg-[#F3F4EF] bg-[#EEEFE8] border-t border-gray-100">
                                    <div className="h-full w-full">
                                      <div className="h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                          <time
                                            dateTime="2025-05-31"
                                            className="ml-1 text-sm flex items-center justify-center text-gray-900"
                                          >
                                            31
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
                      <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r4:-trigger-scheduled"
                        id="radix-:r4:-content-scheduled"
                        className="ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=inactive]:hidden data-[state=active]:block mt-0 space-y-4"
                      ></div>
                      <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r4:-trigger-draft"
                        id="radix-:r4:-content-draft"
                        className="ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=inactive]:hidden data-[state=active]:block mt-0 space-y-4"
                      ></div>
                      <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r4:-trigger-shared"
                        id="radix-:r4:-content-shared"
                        className="ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=inactive]:hidden data-[state=active]:block mt-0 space-y-4"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
