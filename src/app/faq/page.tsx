import type { Metadata } from "next";
import { FaqPageContent } from "@/components/pages/FaqPageContent";

export const metadata: Metadata = {
  title: "FAQ | CASTLE 2026",
  description: "Official Frequently Asked Questions for CASTLE 2026"
};

export default function FaqPage() {
  return <FaqPageContent />;
}
