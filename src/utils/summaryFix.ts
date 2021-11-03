export function summaryFix(summary: string): string {
  return summary
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "")
    .replace(/<br>/g, "");
}
