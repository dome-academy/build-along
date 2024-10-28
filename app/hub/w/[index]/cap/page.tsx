import React from "react";
import Textarea from "@/app/components/Textarea";
import {
  getCapUpdateByCurrentStudent,
  getProjects,
  submitWeeklyUpdate,
} from "@/app/utils/airtable";
import Button from "@/app/components/Button";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const CapstonePage = async ({
  params: { index },
}: {
  params: { index: number };
}) => {
  const weekList = await getProjects();
  const week = weekList.find((w) => w.weekNumber == index);

  const studentUpdate = await getCapUpdateByCurrentStudent(
    week?.weekNumber || 0
  );

  async function submitCapstone(formData: FormData) {
    "use server";

    const update = formData.get("update") as string;
    await submitWeeklyUpdate(week?.id || "", update);
    revalidatePath(`/hub/w/${index}/cap`);
  }

  return (
    <form action={submitCapstone} className='grid max-w-md gap-y-6 mt-4'>
      <h2 className='text-lg md:text-2xl uppercase font-[family-name:var(--font-display)]'>
        Capstone <span className='ml-1'>update</span>
      </h2>
      <p className='max-w-sm lg:text-lg'>{week?.capDescription}</p>
      {studentUpdate ? (
        <p className='max-w-sm lg:text-sm text-primary leading-loose'>
          Congrats! Your capstone was successfully submitted <br />
          <Link
            href='#'
            className='underline text-neutral-400 hover:text-neutral-200'
          >
            View update
          </Link>
        </p>
      ) : (
        <>
          <div>
            <Textarea
              label='Write your capstone update'
              name='update'
              id='update'
              inputMode='text'
              placeholder='Your capstone update...'
              required
              maxLength={300}
            />
          </div>
          <div className='mt-4'>
            <Button
              pendingText='Submitting capstone...'
              text='Submit capstone'
            />
          </div>
        </>
      )}
    </form>
  );
};

export default CapstonePage;
