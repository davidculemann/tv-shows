export function summaryFix(summary: string): string {
  return summary
    .replaceAll("<p>", "")
    .replaceAll("</p>", "")
    .replaceAll("<br>", "");
}
