const Button = ({ styles = '', variant = 'primary', children = 'Get Started' }) => (
  <button type='button' className={`${variant === 'ghost' ? 'btn-ghost' : 'btn-primary'} ${styles}`}>
    {children}
    {variant === 'primary' && (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
        <path d='M5 12h14M13 6l6 6-6 6' />
      </svg>
    )}
  </button>
);

export default Button;
