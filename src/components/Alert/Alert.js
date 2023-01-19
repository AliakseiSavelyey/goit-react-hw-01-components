import PropTypes from 'prop-types';
import css from './Alert.module.css';

function Alert({ text, type }) {
  return (
    // прописываем каждому алерту свой стиль, так же в стилях добавляем свойство composes:
    <p role="alert" className={css[type]}>
      {text}
    </p>
  );
}
// Выбираем в type одно из значений(error, warning, success)
Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']),
};

export default Alert;
