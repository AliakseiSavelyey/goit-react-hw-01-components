import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.FriendListTop}>
      {friends.map(el => {
        return (
          <li className={css.item} key={el.id}>
            <FriendListItem
              avatar={el.avatar}
              name={el.name}
              isOnline={el.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
