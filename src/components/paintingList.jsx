// Рендерим коллекцию элементов
import Painting from "./painting";
import PropTypes from "prop-types";

function PaintingList({ items }) {
  return <ul>
    {items.map(item => (
      <li key={item.id}>
        <Painting
          url={item.url}
          alt={item.title}
          href={item.author.url}
          author={item.author.tag}
          price={item.price}
          quantity={item.quantity}
        />
      </li>
    ))}
  </ul>;
}

// Проверяем массив обьектов что бы у каждого обьекта было одно свойство нужное нам.(другие свойства у каждого элемента проверяются в другом файле)
PaintingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
}
export default PaintingList;
