import React from "react";
import Layout from "../layout";
import Navbar from "../navbar";
import { useParams, useNavigate } from "react-router-dom";
import "./IntroReact.css";
import HistoryReact from "./historyReact";
import ReactAdvantage from "./reactAdvantage";
import IntroReact from "./introReact";
import SinglePageApp from "./singlePageApp";

function IntroWrapper() {
  const navigate = useNavigate();
  const modules = [
    {
      page: 1,
      title: "Introduction to ReactJS",
      component: <IntroReact />,
    },
    {
      page: 2,
      title: "History of React",
      component: <HistoryReact />,
    },
    {
      page: 3,
      title: "Advantages of React",
      component: <ReactAdvantage />,
    },
    {
      page: 4,
      title: "Single-Page Application vs Multi-Page Application",
      component: <SinglePageApp />,
    },
  ];
  let { page } = useParams();
  page = Number(page);
  return (
    <div className="intro">
      <Navbar />
      <Layout>{modules[page - 1].component}</Layout>
      <div className="bottom_navigation ">
        {page !== 1 && (
          <div
            className="previous_seg enabled"
            role="presentation"
            data-testid="previous-segment-nav"
            onClick={() => navigate(`/introduction-reactjs/${page - 1}`)}
          >
            <div className="icon_wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M2.8125 9.19141H15.1875"
                  stroke="#4A5568"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.125 4.12891L15.1875 9.19141L10.125 14.2539"
                  stroke="#4A5568"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="seg_name_wrapper ml-20">
              <div className="action_hint">PREVIOUS</div>
              <div className="seg_name">{modules[page - 2].title}</div>
            </div>
          </div>
        )}

        {modules.length !== page && (
          <div
            className="next_seg"
            data-testid="next-segment-CTA"
            role="presentation"
            onClick={() => navigate(`/introduction-reactjs/${page + 1}`)}
          >
            <div className="seg_name_wrapper mr-20">
              <div className="action_hint">NEXT</div>
              <div className="seg_name">{modules[page].title}</div>
            </div>
            <div className="icon_wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M2.8125 9.19141H15.1875"
                  stroke="#4A5568"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.125 4.12891L15.1875 9.19141L10.125 14.2539"
                  stroke="#4A5568"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IntroWrapper;
