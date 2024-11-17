"use client";

import { reportCriticalAppError } from "~/domain/utilities/general";

export default function Dashboard() {
  return (
    <div>
      <h1>hello, world</h1>
      <button onClick={() => reportCriticalAppError("Error")}>
        report critical error
      </button>
    </div>
  );
}
