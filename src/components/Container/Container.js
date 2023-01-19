import css from './Container.module.css';
function Container({ children }) {
  return <div className={css.Container}>{children}</div>;
}

export default Container;
