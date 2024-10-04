export function extractFileIdFromGDriveUrl(url: string): string | null {
  const regex = /\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
