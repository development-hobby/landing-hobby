export default function Play({ className }: { className: string }) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      className={className}
      fill='currentColor'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z'></path>
    </svg>
  )
}
