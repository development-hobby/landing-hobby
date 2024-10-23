const MusicHobby = ({ className }: { className: string }) => (
  <svg
    width={50}
    height={50}
    viewBox='0 0 50 50'
    fill='none'
    className={className}
  >
    <circle cx={25} cy={25} r={24} stroke='#F8F8F8' strokeWidth={2} />
    <path
      d='M34 26.75V13L20.25 15.5V29.25'
      stroke='#F8F8F8'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M30.25 33H31.5C32.8808 33 34 31.8807 34 30.5V26.75H30.25C28.8693 26.75 27.75 27.8693 27.75 29.25V30.5C27.75 31.8807 28.8693 33 30.25 33Z'
      stroke='#F8F8F8'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.5 35.5H17.75C19.1307 35.5 20.25 34.3807 20.25 33V29.25H16.5C15.1193 29.25 14 30.3693 14 31.75V33C14 34.3807 15.1193 35.5 16.5 35.5Z'
      stroke='#F8F8F8'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
export default MusicHobby
