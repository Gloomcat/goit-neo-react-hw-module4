import css from './ErrorMessage.module.css';

// Excess component IMO. Why not display it with toaster?
const ErrorMessage = ({ error }) => {
  return <p className={css.error}>{error}</p>;
};

export default ErrorMessage;
