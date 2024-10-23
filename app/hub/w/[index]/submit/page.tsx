import Input from "@/app/components/Input";
import { getProjects } from "@/app/utils/airtable";
import { redirect } from "next/navigation";
import React from "react";

const SubmitProjectPage = async ({
  params: { index },
}: {
  children: React.ReactNode;
  params: { index: number };
}) => {
  const weekList = await getProjects();
  const week = weekList.find((w) => w.weekNumber == index);

  async function submitProject(formData: FormData) {
    "use server";

    const projectLink = formData.get("projectLink");

    console.log(projectLink);
    redirect("/hub");
  }
  return (
    <form action={submitProject} className='grid max-w-md gap-y-6 mt-4'>
      <p className='max-w-sm lg:text-lg'>{week?.description}</p>
      <div>
        <Input
          label='Link to project'
          name='projectLink'
          id='projectLink'
          inputMode='url'
          placeholder='Paste project link here...'
        />
      </div>
      <div className='mt-4'>
        <button
          type='submit'
          className='inline-flex rounded-full border border-solid border-transparent transition-colors items-center justify-center bg-[#ededed] text-[#0a0a0a] gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
        >
          Submit project
        </button>
      </div>
    </form>
  );
};

export default SubmitProjectPage;
