/** Build a safe public URL for files in /public/work (handles spaces in filenames) */
export function workVideoPath(fileName: string) {
  return `/work/${encodeURIComponent(fileName)}`;
}

export const HERO_VIDEO_SRC = workVideoPath("Timeline 44.mov");
export const TIMELINE_70_SRC = workVideoPath("Timeline 70.mov");
export const TIMELINE_51_SRC = workVideoPath("Timeline 51.mov");
export const TIMELINE_38_SRC = workVideoPath("Timeline 38.mov");
export const ABOUT_IMAGE_SRC = "/work/DSC08818.jpg";
