export const PlayCircle = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm3 12.23-2.9 1.67a2.284 2.284 0 0 1-2.3 0 2.285 2.285 0 0 1-1.15-2v-3.35c0-.83.43-1.58 1.15-2 .72-.42 1.58-.42 2.31 0l2.9 1.67c.72.42 1.15 1.16 1.15 2 0 .84-.43 1.59-1.16 2.01Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
