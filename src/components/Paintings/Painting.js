// prop-types Библиотека подсказывает чем элемент должен быть(например: строка или число), работает только в Разработке (в продакшене не работает)
// import PropTypes from 'prop-types'; 

// export default function Painting({ url, alt, href, author, price, quantity }) {

//   return (
//     <div>
//       <img src={url} alt={alt} width="180" />
//       <h2>{alt}</h2>
//       <p>
//         Автор: <a href={href}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// обьявляем в библиотеке prop-types чем должны быть те или иные элементы (например: строка или число), так же ставим в конце isRequired что бы пропс был обьязательный, т.е. если мы его забыли поставить, в консоле будет ошибка что его нету(undefined)
// Painting.propTypes = {
//   url: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   href: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   quantity: PropTypes.number.isRequired,
// };
// ============================================================