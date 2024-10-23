import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import {
  getProjects,
  getProjectSubmissionByCurrentStudent,
  submitWeekProject,
} from "@/app/utils/airtable";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

const SubmitProjectPage = async ({
  params: { index },
}: {
  params: { index: number };
}) => {
  const weekList = await getProjects();
  const week = weekList.find((w) => w.weekNumber == index);

  const studentSub = await getProjectSubmissionByCurrentStudent(
    week?.weekNumber || 0
  );

  async function submitProject(formData: FormData) {
    "use server";

    const projectLink = formData.get("projectLink") as string;
    const githubLink = formData.get("githubLink") as string | undefined;

    await submitWeekProject(week?.id || "", projectLink, githubLink);
    revalidatePath(`/hub/w/${index}/submit`);
  }

  return (
    <form action={submitProject} className='grid max-w-md gap-y-6 mt-4'>
      <p className='max-w-sm lg:text-lg'>{week?.description}</p>
      {studentSub ? (
        <p className='max-w-sm lg:text-sm text-primary leading-loose'>
          Congrats! Your project was successfully submitted <br />
          <Link
            href='#'
            className='underline text-neutral-400 hover:text-neutral-200'
          >
            View project
          </Link>
        </p>
      ) : (
        <>
          <div>
            <Input
              label='Link to project'
              name='projectLink'
              id='projectLink'
              inputMode='url'
              pattern='^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6})([\/\w \.-]*)*\/?$'
              placeholder='Paste project link here...'
              required
              type='url'
            />
          </div>
          {week?.hasGitHub ? (
            <div>
              <Input
                label='Link to GitHub repo'
                name='githubLink'
                id='githubLink'
                inputMode='url'
                placeholder='Paste github link here...'
                required
                type='url'
              />
            </div>
          ) : null}
          <div className='mt-4'>
            <Button pendingText='Submitting...' text='Submit project' />
          </div>
        </>
      )}
    </form>
  );
};

export default SubmitProjectPage;
