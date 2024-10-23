import Airtable from "airtable";
import { AIRTABLE_BASE, AIRTABLE_KEY } from "./config";
import { WeekCardProps } from "../components/WeekCard";
import { isPast } from "./time";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: AIRTABLE_KEY,
});

export const mainBase = Airtable.base(AIRTABLE_BASE);

export async function getProjects() {
  const records = await mainBase("Weekly Projects")
    .select({
      maxRecords: 8,
      fields: ["Index", "Name", "Description", "Start", "End", "Image"],
    })
    .all();

  return (
    records
      .map((m) => m.fields)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((a: any, b: any) => a["Index"] - b["Index"])
      .map((m) => ({
        title: m.Name as string,
        description: m.Description as string,
        weekNumber: m.Index as number,
        isCurrent:
          isPast((m.Start as string) + "T00:00:00") &&
          !isPast(m.End + "T23:59:59"),
        image: m.Image as string,
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
