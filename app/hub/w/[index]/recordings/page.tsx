import { getProjectRecordings } from "@/app/utils/airtable";
import React from "react";
import ProjectRecordings from "./ProjectRecordings";

const RecordingsPage = async ({
  params: { index },
}: {
  params: { index: number };
}) => {
  const recordings = await getProjectRecordings(index);
  return (
    <div className='max-w-md gap-y-6 mt-4'>
      <h3 className='font-semibold text-lg lg:text-xl'>Recordings</h3>
      <ProjectRecordings index={index} {...recordings} />
    </div>
  );
};

export default RecordingsPage;
