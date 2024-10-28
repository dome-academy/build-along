import React from "react";
import Textarea from "@/app/components/Textarea";
import { getProjects } from "@/app/utils/airtable";
import Button from "@/app/components/Button";

const CapstonePage = async ({
  params: { index },
}: {
  params: { index: number };
}) => {
  const weekList = await getProjects();
  const week = weekList.find((w) => w.weekNumber == index);

  async function submitCapstone() {
    "use server";
  }

  return (
    <form action={submitCapstone} className='grid max-w-md gap-y-6 mt-4'>
      <p className='max-w-sm lg:text-lg'>{week?.capDescription}</p>
      <>
        <div>
          <Textarea
            label='Write your capstone update'
            name='projectLink'
            id='projectLink'
            inputMode='text'
            placeholder='Your capstone update...'
            required
            maxLength={300}
          />
        </div>
        <div className='mt-4'>
          <Button pendingText='Submitting capstone...' text='Submit capstone' />
        </div>
      </>
    </form>
  );
};

export default CapstonePage;
