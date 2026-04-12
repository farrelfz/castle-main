import type { Metadata } from "next";
import { CommitteePageContent } from "@/components/pages/CommitteePageContent";

export const metadata: Metadata = {
  title: "Committee | CASTLE 2026",
  description: "Official committee of CASTLE 2026 Conference"
};

export default function CommitteePage() {
  return <CommitteePageContent />;
}
