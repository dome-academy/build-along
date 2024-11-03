import Airtable from "airtable";
import { AIRTABLE_BASE, AIRTABLE_KEY } from "./config";
import { WeekCardProps } from "../components/WeekCard";
import { isPast } from "./time";
import { cookies } from "next/headers";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: AIRTABLE_KEY,
});

export const mainBase = Airtable.base(AIRTABLE_BASE);

export async function getProjects() {
  const records = await mainBase("Weekly Projects")
    .select({
      maxRecords: 8,
      fields: [
        "Id",
        "Index",
        "Name",
        "Description",
        "Start",
        "End",
        "Image",
        "Has GitHub",
        "Capstone instruction",
      ],
    })
    .all();

  return (
    records
      .map((m) => m.fields)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((a: any, b: any) => a["Index"] - b["Index"])
      .map((m) => ({
        id: m.Id,
        title: m.Name as string,
        description: m.Description as string,
        weekNumber: m.Index as number,
        isCurrent: isPast((m.Start as string) + "T00:00:00"),
        /*!isPast(m.End + "T23:59:59")*/
        image: m.Image as string,
        hasGitHub: m["Has GitHub"],
        capDescription: m["Capstone instruction"],
      })) as WeekCardProps[]
  );
}

export async function loginStudent(email: string, studentId: string) {
  const records = await mainBase("#BuildAlong Students")
    .select({
      maxRecords: 15,
      fields: ["Id", "Email", "Student id"],
    })
    .all();

  const targetStudent = records
    .map((r) => r.fields)
    .map((r) => ({
      email: r["Email"],
      studentId: r["Student id"],
      id: r["Id"],
    }))
    .find((r) => r.email === email && r.studentId === studentId);

  if (targetStudent) {
    return targetStudent.id;
  }
  return false;
}

export async function getCurrentStudentDetails() {
  const id = cookies().get("id")?.value;
  if (id) {
    try {
      const record = (await mainBase("#BuildAlong Students").find(id)).fields;
      const studentData = {
        studentId: record["Student id"],
        name: record.Name,
        username:
          (record.Name as string).toLowerCase() +
          "-" +
          (record["Last name"] as string).toLowerCase(),
        team: (record["Team name"] as string[])[0],
        email: record.Email,
        id: record.Id,
      };
      return studentData;
    } catch (error) {
      console.log(error);
    }
  }
}

export async function getProjectSubmissionByCurrentStudent(project: number) {
  const studentId = cookies().get("id")?.value;
  if (studentId) {
    try {
      const records = await mainBase("Project Submissions")
        .select({ maxRecords: 100, fields: ["Id", "Student", "Project Week"] })
        .all();

      return records
        .map((r) => r.fields)
        .map((r) => ({
          id: r.Id,
          student: (r.Student as string[])[0] as string,
          projectNumber: (
            r["Project Week"] as unknown as number[]
          )[0] as number,
        }))
        .find((ps) => ps.projectNumber === project && ps.student === studentId);
    } catch (error) {
      console.log(error);
    }
  }
}

export async function submitWeekProject(
  projectId: string,
  projectUrl: string,
  githubLinK?: string
) {
  const studentId = cookies().get("id")?.value;
  if (studentId) {
    try {
      await mainBase("Project Submissions").create([
        {
          fields: {
            "Project URL": projectUrl,
            "GitHub Link": githubLinK,
            Student: [studentId],
            Project: [projectId],
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }
}

export async function submitWeeklyUpdate(projectId: string, update: string) {
  const studentId = cookies().get("id")?.value;
  if (studentId) {
    try {
      await mainBase("Capstone Submissions").create([
        {
          fields: {
            Update: update,
            Student: [studentId],
            Project: [projectId],
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }
}

export async function getCapUpdateByCurrentStudent(project: number) {
  const studentId = cookies().get("id")?.value;
  if (studentId) {
    try {
      const records = await mainBase("Capstone Submissions")
        .select({
          maxRecords: 100,
          fields: ["Id", "Update", "Project Index", "Student"],
        })
        .all();

      return records
        .map((r) => r.fields)
        .map((r) => ({
          id: r.Id,
          update: r.update as string,
          student: (r.Student as string[])[0] as string,
          projectNumber: (
            r["Project Index"] as unknown as number[]
          )[0] as number,
        }))
        .find((ps) => ps.projectNumber === project && ps.student === studentId);
    } catch (error) {
      console.log(error);
    }
  }
}
