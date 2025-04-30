"use client";
import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const DistributedAsyncAwait: React.FC = () => {
  return (
    <div
      className={`${openSans.className} flex bg-white flex-col w-full max-w-[1200px] min-w-[300px] items-center mx-auto border-l border-r border-muted`}
    >
      <div className="bg-primary flex flex-col space-y-4 md:space-y-12 w-full py-8 px-12 mt-12 mb-24">
        <div className="text-center text-4xl md:text-6xl lg:text-8xl font-light pt-12">
          <p className="text-tertiary border-l-8 border-r-8 border-accent py-6">
            Distributed
          </p>
          <p className="text-tertiary border-l-8 border-r-8 border-accent py-6">
            Async Await
          </p>
        </div>
        <div className="text-center">
          <p className="text-tertiary text-2xl">— an open specification,</p>
        </div>
        <div className="text-center">
          <p className="text-tertiary text-2xl">
            defining a holistic programming model for the cloud
          </p>
        </div>

        <div className="py-8 flex justify-center items-center">
          <button
            onClick={() => smoothScrollTo("start-with-distributed-async-await")}
            className="font-mono mt-2 mx-4 lg:px-4 py-2 flex items-center text-tertiary hover:text-muted transition"
          >
            <svg
              height="20"
              viewBox="0 0 64 64"
              fill="currentColor"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <g id="Glyph">
                <path d="m50.71 39.29-4.24-4.24a1 1 0 0 0 -1.42 0l-9.05 9.05v-38.1a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v38.1l-9-9.05a1 1 0 0 0 -1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42l18 18a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z" />
              </g>
            </svg>
            Learn more
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://www.distributed-async-await.io")
            }
            className="font-mono flex items-center mt-2 mx-4 px-4 py-2 text-tertiary hover:text-muted transition"
          >
            Read the spec
            <svg
              height="20"
              viewBox="0 0 64 64"
              width="20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <g id="Glyph">
                <path d="m58.71 31.29-18-18a1 1 0 0 0 -1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42l9.05 9.05h-38.1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h38.1l-9.05 9a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.37z" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div
        id="start-with-distributed-async-await"
        className="grid grid-cols-[1fr,150px,1fr] items-center text-center"
      >
        <div></div>
        <div className="bg-dark text-accent flex flex-col items-center justify-center h-[150px] rounded-full">
          <svg
            height="40"
            viewBox="0 0 58 58"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Page-1" fill="none" fillRule="evenodd">
              <g
                id="037---Waypoint-Flag"
                fill="currentColor"
                fillRule="nonzero"
                transform="translate(0 -1)"
              >
                <path
                  id="Shape"
                  d="m14.678 58.9507 1.0678-.2984c1.0270794-.287091 1.6269982-1.3523947 1.34-2.3795l-12.2083-43.6888c-.17227193-.6165569-.58242107-1.139423-1.14021438-1.4535673-.5577933-.3141444-1.21753647-.3938324-1.83408562-.2215327l-.1379.0385c-1.28397381.3587434-2.0340279 1.6904218-1.6753 2.9744l12.2086 43.6888c.2870014 1.0271063 1.3522895 1.6270863 2.3794 1.3401z"
                />
                <path
                  id="Shape"
                  d="m57.67 28.42c-3.8715209-1.930437-7.4530885-4.3944478-10.64-7.32-.2678864-.245221-.3726619-.6216366-.27-.97 1.579074-5.9738125 2.7517572-12.04771023 3.51-18.18.12-1.02-.43-1.32-1.01-.62-11.38 13.61-31.07-2.49-42.79 9.88.14070884.2634479.25140182.5418575.33.83l7.92 28.36c11.74-12.22 31.36 3.78 42.72-9.8.58-.7.69-1.98.23-2.18z"
                />
              </g>
            </g>
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="flex flex-col items-center text-sm md:text-lg lg:text-2xl space-y-6 text-tertiary">
            <p className="font-bold">Concurrency</p>

            {/* Circle Wrapper for SVG */}
            <div className="w-20 h-20 text-accent flex items-center justify-center rounded-full bg-dark">
              <svg
                height={40}
                viewBox="0 0 480 480"
                width={40}
                fill="currentColor"
              >
                <path d="m408 336c-27.863281.03125-51.46875 20.539062-55.382812 48.128906-.203126-.054687-.410157-.097656-.617188-.128906h-344c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h344c.207031-.03125.414062-.074219.617188-.128906 4.203124 29.617187 30.941406 50.699218 60.71875 47.878906 29.78125-2.816406 52.085937-28.542969 50.660156-58.421875-1.425782-29.878906-26.082032-53.359375-55.996094-53.328125zm0 0" />
                <path d="m72 112c27.863281-.03125 51.46875-20.539062 55.382812-48.128906.203126.054687.410157.097656.617188.128906h344c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-344c-.207031.03125-.414062.074219-.617188.128906-4.203124-29.617187-30.941406-50.699218-60.71875-47.878906-29.78125 2.816406-52.085937 28.542969-50.660156 58.421875 1.425782 29.878906 26.082032 53.359375 55.996094 53.328125zm0 0" />
                <path d="m472 216h-176c-.207031.03125-.414062.074219-.617188.128906-3.878906-27.613281-27.5-48.148437-55.382812-48.148437s-51.503906 20.535156-55.382812 48.148437c-.203126-.054687-.410157-.097656-.617188-.128906h-176c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h176c.207031-.03125.414062-.074219.617188-.128906 3.878906 27.609375 27.5 48.148437 55.382812 48.148437s51.503906-20.539062 55.382812-48.148437c.203126.054687.410157.097656.617188.128906h176c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0" />
              </svg>
            </div>

            <p>introduces Partial Order</p>
          </div>
          <div className="border-l border-dark flex flex-col items-center justify-center h-[300px]"></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="bg-dark text-accent flex flex-col items-center justify-center h-[150px] rounded-full">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 307.164 307.164"
            enableBackground="new 0 0 307.164 307.164"
            fill="currentColor"
            stroke="currentColor"
            height={40}
            width={40}
          >
            <g>
              <path d="m193.307,126.847c40.828-33.225 75.857-73.173 103.504-118.246 0.598-0.975 0.419-2.236-0.426-3.006-0.845-0.77-2.118-0.83-3.032-0.144-9.58,7.185-24.574,17.651-39.701,25.109-19.557,9.641-40.571,13.577-51.19,15.055-4.476,0.623-8.461,3.156-10.929,6.941-5.225,8.016-15.351,23.039-28.405,39.984 6.044,7.515 12.568,15.213 19.406,22.654 3.755,4.085 7.343,7.965 10.773,11.653z" />
              <path d="m115.393,147.168c-17.296,18.396-29.524,30.808-36.563,37.816l-3.183-3.183c-3.906-3.904-10.236-3.904-14.143,0-3.905,3.905-3.905,10.237 0,14.143l1.405,1.405c-3.597-0.354-7.317,0.844-10.071,3.598-3.232,3.232-4.311,7.791-3.263,11.921-4.131-1.048-8.69,0.031-11.922,3.262-3.232,3.232-4.311,7.792-3.263,11.922-4.13-1.047-8.69,0.031-11.921,3.262-2.991,2.991-4.14,7.119-3.466,10.992l-1.932-1.932c-3.906-3.904-10.236-3.904-14.143,0-3.905,3.905-3.905,10.237 0,14.143l42.193,42.192c1.608,1.607 3.716,2.619 5.977,2.868l23.146,2.55c0.372,0.041 0.741,0.061 1.107,0.061 5.031,0 9.363-3.789 9.927-8.906 0.605-5.489-3.354-10.43-8.845-11.034l-19.653-2.165-14.243-14.243c0.712,0.124 1.432,0.195 2.153,0.195 3.199,0 6.398-1.221 8.839-3.661 3.232-3.232 4.311-7.791 3.263-11.921 1.011,0.257 2.046,0.399 3.083,0.399 3.199,0 6.398-1.221 8.839-3.661 3.232-3.232 4.311-7.791 3.263-11.922 1.011,0.256 2.045,0.398 3.082,0.398 3.199,0 6.398-1.221 8.839-3.661 2.755-2.755 3.953-6.475 3.599-10.071l2.814,2.814 2.166,19.653c0.563,5.118 4.895,8.906 9.927,8.906 0.366,0 0.735-0.02 1.107-0.061 5.49-0.605 9.45-5.545 8.845-11.034l-2.55-23.145c-0.249-2.261-1.261-4.368-2.868-5.977l-5.84-5.84 41.007-41.007c-9.115-6.05-18.025-12.416-26.712-19.076z" />
              <path d="m304.235,240.375c-3.906-3.904-10.236-3.904-14.143,0l-1.932,1.932c0.674-3.873-0.475-8.001-3.466-10.992-3.232-3.232-7.79-4.31-11.921-3.262 1.048-4.131-0.03-8.691-3.262-11.922-3.232-3.232-7.79-4.31-11.92-3.263 1.047-4.13-0.031-8.689-3.263-11.921-1.167-1.167-2.512-2.048-3.943-2.657-1.946-0.828-4.057-1.146-6.13-0.941l1.406-1.406c3.905-3.905 3.905-10.237 0-14.143-3.906-3.904-10.236-3.904-14.143,0l-3.183,3.183c-9.534-9.492-28.572-28.879-56.844-59.64-25.939-28.223-47.365-59.759-55.859-72.788-2.468-3.786-6.453-6.319-10.929-6.942-10.619-1.478-31.633-5.414-51.19-15.055-15.128-7.456-30.122-17.923-39.702-25.107-0.425-0.319-0.927-0.476-1.428-0.476-0.577,0-1.152,0.209-1.604,0.621-0.845,0.77-1.024,2.031-0.426,3.006 36.374,59.301 85.515,109.744 143.847,147.654l2.486,1.615 49.381,49.381-5.84,5.84c-1.607,1.608-2.619,3.716-2.868,5.977l-.068,.62-2.481,22.526c-0.606,5.489 3.354,10.43 8.845,11.034 0.372,0.041 0.741,0.061 1.107,0.061 5.031,0 9.363-3.788 9.927-8.906l1.29-11.707 4.632-4.632c0.609,1.431 1.489,2.775 2.656,3.942 2.44,2.44 5.64,3.661 8.839,3.661 1.037,0 2.072-0.142 3.083-0.399-1.048,4.131 0.03,8.69 3.262,11.922 2.441,2.441 5.64,3.661 8.839,3.661 1.037,0 2.071-0.142 3.082-0.398-1.048,4.13 0.031,8.689 3.263,11.921 2.44,2.44 5.64,3.661 8.839,3.661 0.721,0 1.441-0.071 2.154-0.195l-14.243,14.243-19.653,2.165c-5.49,0.604-9.45,5.545-8.845,11.034 0.563,5.118 4.895,8.906 9.927,8.906 0.366,0 0.735-0.021 1.107-0.061l23.146-2.55c2.261-0.249 4.368-1.261 5.977-2.868l42.192-42.192c3.904-3.906 3.904-10.238-0.001-14.143z" />
            </g>
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="border-r border-dark flex flex-col h-[300px]"></div>

          <div className="pl-2 md:pl-6 lg:pl-12 text-sm md:text-lg lg:text-2xl space-y-6 text-tertiary flex flex-col items-center">
            <p className="font-bold">Distribution</p>
            <div className="w-20 h-20 text-accent flex items-center justify-center rounded-full bg-dark">
              <svg
                height={40}
                width={40}
                viewBox="0 0 448 448"
                fill="currentColor"
              >
                <path d="m280 56c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
                <path d="m280 392c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
                <path d="m280 224c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
                <path d="m448 56c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
                <path d="m448 392c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
                <path d="m448 224c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
                <path d="m112 56c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
                <path d="m112 392c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
                <path d="m112 224c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0" />
              </svg>
            </div>

            <p>introduces Partial Failure</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="bg-dark text-accent flex flex-col items-center justify-center h-[150px] rounded-full">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 307.164 307.164"
            enableBackground="new 0 0 307.164 307.164"
            fill="currentColor"
            stroke="currentColor"
            height={40}
            width={40}
          >
            <g>
              <path d="m193.307,126.847c40.828-33.225 75.857-73.173 103.504-118.246 0.598-0.975 0.419-2.236-0.426-3.006-0.845-0.77-2.118-0.83-3.032-0.144-9.58,7.185-24.574,17.651-39.701,25.109-19.557,9.641-40.571,13.577-51.19,15.055-4.476,0.623-8.461,3.156-10.929,6.941-5.225,8.016-15.351,23.039-28.405,39.984 6.044,7.515 12.568,15.213 19.406,22.654 3.755,4.085 7.343,7.965 10.773,11.653z" />
              <path d="m115.393,147.168c-17.296,18.396-29.524,30.808-36.563,37.816l-3.183-3.183c-3.906-3.904-10.236-3.904-14.143,0-3.905,3.905-3.905,10.237 0,14.143l1.405,1.405c-3.597-0.354-7.317,0.844-10.071,3.598-3.232,3.232-4.311,7.791-3.263,11.921-4.131-1.048-8.69,0.031-11.922,3.262-3.232,3.232-4.311,7.792-3.263,11.922-4.13-1.047-8.69,0.031-11.921,3.262-2.991,2.991-4.14,7.119-3.466,10.992l-1.932-1.932c-3.906-3.904-10.236-3.904-14.143,0-3.905,3.905-3.905,10.237 0,14.143l42.193,42.192c1.608,1.607 3.716,2.619 5.977,2.868l23.146,2.55c0.372,0.041 0.741,0.061 1.107,0.061 5.031,0 9.363-3.789 9.927-8.906 0.605-5.489-3.354-10.43-8.845-11.034l-19.653-2.165-14.243-14.243c0.712,0.124 1.432,0.195 2.153,0.195 3.199,0 6.398-1.221 8.839-3.661 3.232-3.232 4.311-7.791 3.263-11.921 1.011,0.257 2.046,0.399 3.083,0.399 3.199,0 6.398-1.221 8.839-3.661 3.232-3.232 4.311-7.791 3.263-11.922 1.011,0.256 2.045,0.398 3.082,0.398 3.199,0 6.398-1.221 8.839-3.661 2.755-2.755 3.953-6.475 3.599-10.071l2.814,2.814 2.166,19.653c0.563,5.118 4.895,8.906 9.927,8.906 0.366,0 0.735-0.02 1.107-0.061 5.49-0.605 9.45-5.545 8.845-11.034l-2.55-23.145c-0.249-2.261-1.261-4.368-2.868-5.977l-5.84-5.84 41.007-41.007c-9.115-6.05-18.025-12.416-26.712-19.076z" />
              <path d="m304.235,240.375c-3.906-3.904-10.236-3.904-14.143,0l-1.932,1.932c0.674-3.873-0.475-8.001-3.466-10.992-3.232-3.232-7.79-4.31-11.921-3.262 1.048-4.131-0.03-8.691-3.262-11.922-3.232-3.232-7.79-4.31-11.92-3.263 1.047-4.13-0.031-8.689-3.263-11.921-1.167-1.167-2.512-2.048-3.943-2.657-1.946-0.828-4.057-1.146-6.13-0.941l1.406-1.406c3.905-3.905 3.905-10.237 0-14.143-3.906-3.904-10.236-3.904-14.143,0l-3.183,3.183c-9.534-9.492-28.572-28.879-56.844-59.64-25.939-28.223-47.365-59.759-55.859-72.788-2.468-3.786-6.453-6.319-10.929-6.942-10.619-1.478-31.633-5.414-51.19-15.055-15.128-7.456-30.122-17.923-39.702-25.107-0.425-0.319-0.927-0.476-1.428-0.476-0.577,0-1.152,0.209-1.604,0.621-0.845,0.77-1.024,2.031-0.426,3.006 36.374,59.301 85.515,109.744 143.847,147.654l2.486,1.615 49.381,49.381-5.84,5.84c-1.607,1.608-2.619,3.716-2.868,5.977l-.068,.62-2.481,22.526c-0.606,5.489 3.354,10.43 8.845,11.034 0.372,0.041 0.741,0.061 1.107,0.061 5.031,0 9.363-3.788 9.927-8.906l1.29-11.707 4.632-4.632c0.609,1.431 1.489,2.775 2.656,3.942 2.44,2.44 5.64,3.661 8.839,3.661 1.037,0 2.072-0.142 3.083-0.399-1.048,4.131 0.03,8.69 3.262,11.922 2.441,2.441 5.64,3.661 8.839,3.661 1.037,0 2.071-0.142 3.082-0.398-1.048,4.13 0.031,8.689 3.263,11.921 2.44,2.44 5.64,3.661 8.839,3.661 0.721,0 1.441-0.071 2.154-0.195l-14.243,14.243-19.653,2.165c-5.49,0.604-9.45,5.545-8.845,11.034 0.563,5.118 4.895,8.906 9.927,8.906 0.366,0 0.735-0.021 1.107-0.061l23.146-2.55c2.261-0.249 4.368-1.261 5.977-2.868l42.192-42.192c3.904-3.906 3.904-10.238-0.001-14.143z" />
            </g>
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>

      <div className="flex flex-col py-12 my-12 w-full text-tertiary">
        <div className="leading-loose text-center items-center">
          <p className="text-2xl pt-12">Distributed Async Await</p>
          <p className="text-2xl pb-6">specifies how to implement</p>

          <p className="text-2xl font-bold py-6">Coordination</p>
          {/* Shield SVG inside a circle */}
          <div className="w-20 h-20 text-accent flex items-center justify-center rounded-full bg-dark mx-auto">
            <svg
              version="1.1"
              height={40}
              width={40}
              viewBox="0 0 285.296 285.296"
              enableBackground="new 0 0 285.296 285.296"
              fill="currentColor"
              stroke="currentColor"
            >
              <g>
                <path d="m188.717,68.687c-17.697-2.229-34.128-7.851-46.069-15.662-11.939,7.811-28.371,13.434-46.068,15.662-14.084,1.773-27.714,1.31-39.525-1.263 0.624,5.411 1.202,11.033 1.799,16.841 3.195,31.091 6.816,66.33 20.302,91.096 16.569,30.431 48.019,60.297 63.493,60.297 15.475,0 46.925-29.866 63.493-60.297 13.486-24.767 17.107-60.006 20.303-91.097 0.597-5.808 1.175-11.429 1.799-16.84-11.814,2.572-25.441,3.035-39.527,1.263z" />
              </g>
            </svg>
          </div>
          <p className="text-2xl py-6">to combat Partial Order</p>

          <p className="text-2xl font-bold py-6">Recovery</p>
          {/* Shield SVG inside a circle */}
          <div className="w-20 h-20 text-accent flex items-center justify-center rounded-full bg-dark mx-auto">
            <svg
              version="1.1"
              height={40}
              width={40}
              viewBox="0 0 285.296 285.296"
              enableBackground="new 0 0 285.296 285.296"
              fill="currentColor"
              stroke="currentColor"
            >
              <g>
                <path d="m188.717,68.687c-17.697-2.229-34.128-7.851-46.069-15.662-11.939,7.811-28.371,13.434-46.068,15.662-14.084,1.773-27.714,1.31-39.525-1.263 0.624,5.411 1.202,11.033 1.799,16.841 3.195,31.091 6.816,66.33 20.302,91.096 16.569,30.431 48.019,60.297 63.493,60.297 15.475,0 46.925-29.866 63.493-60.297 13.486-24.767 17.107-60.006 20.303-91.097 0.597-5.808 1.175-11.429 1.799-16.84-11.814,2.572-25.441,3.035-39.527,1.263z" />
              </g>
            </svg>
          </div>
          <p className="text-2xl py-6">to combat Partial Failure</p>

          <p className="text-2xl font-bold py-6">
            Sequential Programming Model
          </p>
          {/* Sequential Programming Model SVG inside a circle */}
          <div className="w-20 h-20 text-accent flex items-center justify-center rounded-full bg-dark mx-auto">
            <svg
              id="Layer_1"
              height={40}
              width={40}
              enableBackground="new 0 0 100 100"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="m83.5100098 16.5400391c-8.4899903-8.7001944-20.3699952-13.9899891-33.5599976-13.9899891-13.0900269 0-24.9700317 5.2897949-33.460022 13.9899893-8.7000131 8.48999-13.9899914 20.3698728-13.9899914 33.5600584 0 13.0898438 5.289978 24.9699707 13.9899912 33.5598145 8.4899902 8.5 20.3699951 13.7900391 33.460022 13.7900391 13.1900024 0 25.0700073-5.2900391 33.5599976-13.7900391 8.7000124-8.6899415 13.9899904-20.4699708 13.9899904-33.5598145 0-13.1901856-5.289978-25.0700684-13.9899902-33.5600586zm-51.0900269.7700195c1.1799927 8.3498535 3.8099976 11.9099121 10.6000366 13.25-6.7900391 1.3300781-9.4200439 4.8999023-10.6000366 13.2399902-1.1900024-8.3400879-3.8099976-11.9099121-10.5999756-13.2399902 6.7899781-1.3400879 9.4099732-4.9001465 10.5999756-13.25zm40.4100342 41.6799316c0 6.1899414-2.6000366 11.9899902-6.7000122 16.1799316-4.0900269 4.1000977-9.789978 6.6000977-16.1799927 6.6000977-6.1900024 0-11.8900146-2.5-15.9800415-6.6000977-4.0999756-4.0898438-6.6999512-9.9899902-6.6999512-16.1799316v-2.8000488c0-1.5898438 1.1999512-2.6899414 2.6999512-2.6899414h40.1600342c1.5999756 0 2.7000122 1.1999512 2.7000122 2.6899414zm-5.2399902-15.1899414c-1.1900024-8.3400879-3.8099976-11.9099121-10.6100464-13.2399902 6.8000488-1.3400879 9.4200439-4.9001465 10.6100464-13.25 1.1799927 8.3498535 3.7999878 11.9099121 10.5899658 13.25-6.7899781 1.3300781-9.4099732 4.8999023-10.5899658 13.2399902z" />
            </svg>
          </div>
          <p className="text-2xl py-6">for a delightful developer experience</p>
        </div>
      </div>
      <div className="bg-primary text-tertiary px-12 mb-24 w-full">
        <div className="border-l-8 border-r-8 py-12 border-accent flex flex-col items-center text-center">
          <p className="text-tertiary text-2xl text-center px-2 md:px-6">
            It&apos;s common to manage the complexity that Concurrency and
            Distribution introduce at the application level, resulting in an
            awful developer experience.
          </p>
          <div className="text-accent w-20 h-20 flex items-center justify-center rounded-full bg-dark my-12">
            {/* Lamp SVG */}
            <svg
              id="bold"
              enableBackground="new 0 0 24 24"
              height={40}
              viewBox="0 0 24 24"
              width={40}
              fill="currentColor"
            >
              <path d="m12 3.457c-.414 0-.75-.336-.75-.75v-1.957c0-.414.336-.75.75-.75s.75.336.75.75v1.957c0 .414-.336.75-.75.75z" />
              <path d="m18.571 6.179c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.146-.339.22-.531.22z" />
              <path d="m23.25 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z" />
              <path d="m19.955 20.705c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z" />
              <path d="m4.045 20.705c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.147-.339.22-.531.22z" />
              <path d="m2.707 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z" />
              <path d="m5.429 6.179c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.148.146-.339.22-.531.22z" />
              <path d="m15 21v1.25c0 .96-.79 1.75-1.75 1.75h-2.5c-.84 0-1.75-.64-1.75-2.04v-.96z" />
              <path d="m16.41 6.56c-1.64-1.33-3.8-1.85-5.91-1.4-2.65.55-4.8 2.71-5.35 5.36-.56 2.72.46 5.42 2.64 7.07.59.44 1 1.12 1.14 1.91v.01c.02-.01.05-.01.07-.01h6c.02 0 .03 0 .05.01v-.01c.14-.76.59-1.46 1.28-2 1.69-1.34 2.67-3.34 2.67-5.5 0-2.12-.94-4.1-2.59-5.44zm-.66 5.94c-.41 0-.75-.34-.75-.75 0-1.52-1.23-2.75-2.75-2.75-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.34 0 4.25 1.91 4.25 4.25 0 .41-.34.75-.75.75z" />
              <path d="m8.93 19.5h.07c-.02 0-.05 0-.07.01z" />
              <path d="m15.05 19.5v.01c-.02-.01-.03-.01-.05-.01z" />
            </svg>
          </div>

          <p className="text-tertiary text-2xl text-center px-2 md:px-6">
            Distributed Async Await pushes that complexity to the platform
            level, offering a delightful developer experience.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="bg-dark text-accent flex flex-col items-center justify-center h-[150px] rounded-full">
          {/* Pin SVG */}
          <svg
            enableBackground="new 0 0 512 512"
            height={40}
            viewBox="0 0 512 512"
            width={40}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <g>
                <path d="m256 0c-99.25 0-180 80.75-180 180 0 127.602 170.388 319.553 180 332 .079-.103 180-199.882 180-332 0-99.25-80.75-180-180-180zm0 270c-49.63 0-90-40.37-90-90s40.37-90 90-90 90 40.37 90 90-40.37 90-90 90z" />
              </g>
            </g>
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="pr-2 md:pr-6 lg:pr-12 text-sm md:text-lg lg:text-2xl text-tertiary">
            <p className="font-bold pt-6">Distributed</p>
            <p className="font-bold pb-6">Async Await</p>
            <p className="py-6">extends the Async Await programming model...</p>
          </div>
          <div className="border-l border-dark flex flex-col items-center justify-center h-[300px]"></div>
          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="bg-dark text-accent flex flex-col items-center justify-center h-[150px] rounded-full">
          <svg
            enableBackground="new 0 0 511.982 511.982"
            height={40}
            viewBox="0 0 511.982 511.982"
            width={40}
            fill="currentColor"
          >
            <g>
              <g id="Page-1_2_">
                <g
                  id="_x30_03---Directional-Movement"
                  clipRule="evenodd"
                  fillRule="evenodd"
                >
                  <path
                    id="Path_8_"
                    d="m176.918 105.922h52.551v88.276c0 4.875 3.952 8.828 8.828 8.828h35.31c4.875 0 8.828-3.952 8.828-8.828v-88.276h52.701c3.62.001 6.901-2.132 8.37-5.441 1.468-3.309.849-7.173-1.581-9.857l-79.282-87.649c-1.709-1.894-4.141-2.975-6.692-2.975s-4.982 1.081-6.691 2.975l-79.183 87.534c-2.447 2.705-3.07 6.597-1.59 9.931 1.479 3.333 4.784 5.482 8.431 5.482z"
                  />
                  <path
                    id="Path_7_"
                    d="m273.606 308.957h-35.31c-4.875 0-8.828 3.952-8.828 8.828v88.276h-52.551c-3.647 0-6.952 2.149-8.432 5.482-1.48 3.334-.856 7.226 1.59 9.931l79.183 87.534c1.709 1.894 4.14 2.975 6.691 2.975s4.982-1.081 6.691-2.975l79.281-87.649c2.43-2.684 3.05-6.548 1.581-9.857-1.468-3.309-4.749-5.442-8.37-5.441h-52.701v-88.276c.003-4.876-3.949-8.828-8.825-8.828z"
                  />
                  <path
                    id="Path_6_"
                    d="m308.961 238.336v35.31c0 4.875 3.952 8.828 8.828 8.828h88.276v52.701c-.001 3.62 2.132 6.901 5.441 8.37s7.173.849 9.857-1.581l87.649-79.281c1.888-1.71 2.966-4.139 2.966-6.687s-1.077-4.977-2.966-6.687l-87.543-79.236c-2.705-2.441-6.594-3.06-9.924-1.581s-5.477 4.779-5.48 8.423v52.595h-88.276c-4.876-.002-8.828 3.951-8.828 8.826z"
                  />
                  <path
                    id="Path_5_"
                    d="m90.628 341.919c2.684 2.43 6.548 3.05 9.857 1.581 3.309-1.468 5.442-4.749 5.441-8.37v-52.7h88.276c4.875 0 8.828-3.952 8.828-8.828v-35.266c0-4.875-3.952-8.828-8.828-8.828h-88.276v-52.595c0-3.647-2.149-6.952-5.482-8.432-3.334-1.48-7.226-.856-9.931 1.59l-87.534 79.193c-1.893 1.707-2.974 4.137-2.974 6.687s1.081 4.98 2.974 6.687z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="border-r border-dark flex flex-col items-center justify-center h-[300px]"></div>
          <div className="pl-2 md: pl-6 lg:pl-12 text-sm md:text-lg lg:text-2xl text-tertiary">
            <p>...so Concurrency,</p>
            <p className="font-bold py-6">and Distribution,</p>
            <p>become first class citizens</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="bg-dark text-accent flex flex-col items-center justify-center h-[150px] rounded-full">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width={40}
            height={40}
            enableBackground="new 0 0 512 512"
            fill="currentColor"
          >
            <g>
              <g>
                <polygon points="376.822,153.145 281.402,455.309 512,153.145 		" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="74.336,46.263 1.082,134.168 125.614,134.168 		" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="437.664,46.263 386.386,134.168 510.918,134.168 		" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="135.178,153.145 0,153.145 230.598,455.309 		" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="278.906,39.279 367.874,128.247 419.768,39.279 		" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="92.232,39.279 144.126,128.247 233.094,39.279 		" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="155.076,153.145 256,472.721 356.924,153.145 		" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="256,43.208 165.04,134.168 346.96,134.168 		" />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>

      <div className="flex flex-col py-12 my-12 w-full text-tertiary">
        <div className="leading-loose text-center items-center">
          <p className="text-2xl pt-12">Distributed Async Await</p>
          <p className="text-2xl pb-6">asks developers to use just</p>

          <p className="text-2xl font-bold py-6">Promises and Functions</p>

          <div className="max-w-[300px] my-6  p-0 mx-auto">
            <Image
              src="/images/promise-function.svg"
              alt="promise and function call graph"
              width={722}
              height={322}
            />
          </div>
          <p className="text-2xl py-6">enabling...</p>
          <p className="text-2xl py-6 font-bold">Durable Execution</p>
          <p className="text-2xl py-6">without any proprietary primitives</p>
        </div>
      </div>
      <div className="bg-primary text-tertiary px-12  w-full mb-48 w-full">
        <div className="border-l-8 border-r-8 border-accent py-12 flex flex-col items-center text-center">
          <p className="text-2xl text-center px-2 md:px-6">
            Async Await pushes Concurrency to the platform level, but does
            nothing to address Distribution.
          </p>
          <div className="w-20 h-20 text-accent flex items-center justify-center rounded-full bg-dark my-12">
            {/* Lamp SVG */}
            <svg
              id="bold"
              enableBackground="new 0 0 24 24"
              height={40}
              viewBox="0 0 24 24"
              width={40}
              fill="currentColor"
            >
              <path d="m12 3.457c-.414 0-.75-.336-.75-.75v-1.957c0-.414.336-.75.75-.75s.75.336.75.75v1.957c0 .414-.336.75-.75.75z" />
              <path d="m18.571 6.179c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.146-.339.22-.531.22z" />
              <path d="m23.25 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z" />
              <path d="m19.955 20.705c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z" />
              <path d="m4.045 20.705c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.147-.339.22-.531.22z" />
              <path d="m2.707 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z" />
              <path d="m5.429 6.179c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.148.146-.339.22-.531.22z" />
              <path d="m15 21v1.25c0 .96-.79 1.75-1.75 1.75h-2.5c-.84 0-1.75-.64-1.75-2.04v-.96z" />
              <path d="m16.41 6.56c-1.64-1.33-3.8-1.85-5.91-1.4-2.65.55-4.8 2.71-5.35 5.36-.56 2.72.46 5.42 2.64 7.07.59.44 1 1.12 1.14 1.91v.01c.02-.01.05-.01.07-.01h6c.02 0 .03 0 .05.01v-.01c.14-.76.59-1.46 1.28-2 1.69-1.34 2.67-3.34 2.67-5.5 0-2.12-.94-4.1-2.59-5.44zm-.66 5.94c-.41 0-.75-.34-.75-.75 0-1.52-1.23-2.75-2.75-2.75-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.34 0 4.25 1.91 4.25 4.25 0 .41-.34.75-.75.75z" />
              <path d="m8.93 19.5h.07c-.02 0-.05 0-.07.01z" />
              <path d="m15.05 19.5v.01c-.02-.01-.03-.01-.05-.01z" />
            </svg>
          </div>

          <p className="text-2xl text-center px-2 md:px-6">
            Unlike Async Await, Distributed Async Await addresses both
            Concurrency and Distribution at the platform level. Where many
            Durable Execution solutions force developers to work with
            proprietary primitives like workflows and activities, Distributed
            Async Await, like Async Await, uses just promises and functions.
          </p>
        </div>
      </div>
      <div className="py-8 flex justify-center items-center mb-48">
        <button
          onClick={() => (window.location.href = "/resonate")}
          className="font-mono mt-2 mx-4 lg:px-4 py-2 flex items-center text-tertiary hover:text-muted transition"
        >
          <svg
            height="20"
            viewBox="0 0 64 64"
            width="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <g id="Glyph">
              <path d="m58 28h-38.1l9.1-9a1 1 0 0 0 0-1.42l-4.24-4.24a1 1 0 0 0 -1.42 0l-18 18a1 1 0 0 0 0 1.42l18 18a1 1 0 0 0 1.42 0l4.24-4.29a1 1 0 0 0 0-1.42l-9-9h38a1 1 0 0 0 1-1v-6.05a1 1 0 0 0 -1-1z" />
            </g>
          </svg>
          See an implementation
        </button>
        <button
          onClick={() =>
            (window.location.href = "https://www.distributed-async-await.io")
          }
          className="font-mono flex items-center mt-2 mx-4 px-4 py-2 text-tertiary hover:text-muted transition"
        >
          Read the spec
          <svg
            height="20"
            viewBox="0 0 64 64"
            width="20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <g id="Glyph">
              <path d="m58.71 31.29-18-18a1 1 0 0 0 -1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42l9.05 9.05h-38.1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h38.1l-9.05 9a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.37z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DistributedAsyncAwait;
