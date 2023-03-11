import React from "react";

const arr = [
  {
    title: "Pick Up or Store Order",
    content: "",
  },
  {
    title: "Inspection & Categorizing",
    content: "Examining for stains, damages, fabric type and color",
  },
  {
    title: "Stain Removal Treatment",
    content: "Treating based on Stain type & Dirt Cleaning wherever applicable",
  },
  {
    title: "Cleaning Process (Wet/Dry)",
    content:
      "Automatic Imported Machinery, Harmless Eco Friendly Chemicals Softener and Fragrance",
  },
  {
    title: "Quality Check (Intermediate)",
    content: "Inspecting for clean and spotless clothes",
  },
  {
    title: "Steam Ironing",
    content: "Finishing",
  },
  {
    title: "Quality Check (Final)",
    content: "Expert Scanning",
  },
  {
    title: "Packaging",
    content: "Getting the order ready",
  },
  {
    title: "Delivery or Store Pickup",
    content: "Get your Clean cloths in almost new conditions",
  },
];

export const svgCircle = () => {
  return (
    <>
      <div>
        <div className="wrapper">
          <div className="svg-container">
            <svg
              version="1.1"
              viewBox="0 0 500 500"
              preserveAspectRatio="xMinYMin meet"
              className="svg-content"
            >
              <defs>
                <marker
                  id="arrow"
                  markerWidth="4"
                  markerHeight="10"
                  viewBox="-2 -4 4 4"
                  refX="0"
                  refY="0"
                  markerUnits="strokeWidth"
                  orient="auto"
                >
                  <polyline
                    points="2,-2 0,0 2,2"
                    stroke="#443c3d"
                    stroke-width="0.75px"
                    fill="none"
                  />
                </marker>
              </defs>

              <g className="box-group">
                <g transform="translate(-5)">
                  <circle fill="#000" cx="55" cy="50" r="45" opacity="1" />
                  <text
                    x="28"
                    y="58"
                    font-family="Open Sans Condensed"
                    font-size="10"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="100"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Start
                  </text>
                  <line
                    x1="102"
                    x2="135"
                    y1="50"
                    y2="50"
                    stroke-width="2"
                    stroke="#443c3d"
                    stroke-dasharray="2,1"
                  />
                </g>

                <line
                  x1="100"
                  x2="136"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                />

                <g transform="translate(136)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #1
                    </tspan>
                  </text>
                </g>

                <line
                  x1="230"
                  x2="268"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                />

                <g transform="translate(268)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #2
                    </tspan>
                  </text>
                </g>

                <line
                  x1="362"
                  x2="400"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                />

                <g transform="translate(400)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #3
                    </tspan>
                  </text>
                </g>
              </g>

              <line
                x1="450"
                x2="450"
                y1="77"
                y2="124"
                stroke-width="2"
                stroke="#443c3d"
                stroke-dasharray="2,1"
              />

              <g className="box-group" transform="translate(0,100)">
                <g transform="translate(5)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #7
                    </tspan>
                  </text>
                </g>

                <line
                  x1="100"
                  x2="136"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                />

                <g transform="translate(136)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #6
                    </tspan>
                  </text>
                </g>

                <line
                  x1="230"
                  x2="268"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                />

                <g transform="translate(268)">
                  {/* <polygon
                  points="60,20 100,40 100,80 60,100 20,80 20,40"
                  fill="#72508d"
                  transform="translate(-12,-10)"
                /> */}
                  <rect
                    fill="#72508d"
                    stroke="#72508d"
                    stroke-width="0"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#fff"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #5
                    </tspan>
                  </text>
                </g>

                <line
                  x1="362"
                  x2="400"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                  marker-start="url(#arrow)"
                />

                <g transform="translate(400)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #4
                    </tspan>
                  </text>
                </g>
              </g>

              <line
                x1="50"
                x2="50"
                y1="177"
                y2="224"
                stroke-width="2"
                stroke="#443c3d"
                stroke-dasharray="2,1"
              />

              <g className="box-group" transform="translate(0,200)">
                <g transform="translate(5)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #8
                    </tspan>
                  </text>
                </g>

                <line
                  x1="100"
                  x2="136"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                />

                <g transform="translate(136)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #9
                    </tspan>
                  </text>
                </g>

                <line
                  x1="230"
                  x2="268"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                />

                <g transform="translate(268)">
                  <rect
                    fill="#66cc00"
                    x="2"
                    y="25"
                    rx="3"
                    ry="3"
                    width="90"
                    height="50"
                  />
                  <text
                    x="16"
                    y="47"
                    font-family="Open Sans Condensed"
                    font-size="14"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="900"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    Workflow
                    <tspan x="26" dy="17">
                      Step #10
                    </tspan>
                  </text>
                </g>

                <line
                  x1="362"
                  x2="400"
                  y1="50"
                  y2="50"
                  stroke-width="2"
                  stroke="#443c3d"
                  stroke-dasharray="2,1"
                />

                <g transform="translate(392)">
                  <circle fill="#000" cx="55" cy="50" r="45" opacity="1" />
                  <text
                    x="37"
                    y="58"
                    font-family="Open Sans Condensed"
                    font-size="26"
                    stroke="none"
                    fill="#f5f3e7"
                    font-weight="100"
                    // style="text-transform:uppercase; letter-spacing: 1px"
                  >
                    End
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Steps() {
  return (
    <ol className="  border-gray-200 dark:border-gray-700 text-start grid md:grid-cols-3 ">
      {arr.map(({ title, content }, i) => {
        return (
          <li
            key={i}
            className={
              " pb-10 pl-10 relative border-l md:border-l-0 border-slate-600 " +
              (i === arr.length - 1 ? "" : " md:border-t-2 ") +
              (i === 2 ? "md:border-r-2 rounded-xl " : " ") +
              (i === 3 ? "md:border-l-2 " : "") +
              (i === 5 ? "md:-rounded-xl " : "")
            }
          >
            <span className="md:-top-3  absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              {/* <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}

              <svg
                className={
                  "rotate-90 md:rotate-0 " +
                  (i === arr.length - 1 ? "" : " md:visible ") +
                  (i === 2 ? "md:  " : " ") +
                  (i === 3 ? "md:rotate-90 " : "") +
                  (i === 4 ? "md:rotate-180 " : "") +
                  (i === 5 ? "md:rotate-180 " : "")
                }
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <circle fill="#B5F1F4" cx="256" cy="256" r="256" />
                <path
                  fill="#84DBFF"
                  d="M394.799,256l-98.573-1.724l-185.465,21.549l223.858,223.856
	c71.623-23.092,129.455-76.869,158.008-145.854L394.799,256z"
                />
                <polygon
                  fill="#324A5E"
                  points="300.327,161.528 272.289,189.566 318.898,236.175 110.761,236.175 110.761,275.825 
	318.898,275.825 272.289,322.434 300.327,350.472 394.799,256 "
                />
                <polygon
                  fill="#324A5E"
                  points="110.761,275.825 318.898,275.825 272.289,322.434 300.327,350.472 394.799,256 110.761,256 
	"
                />
              </svg>
            </span>
            <h3 className="flex items-center md:pt-6 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {title}
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                Latest
              </span> */}
            </h3>

            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {content}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
