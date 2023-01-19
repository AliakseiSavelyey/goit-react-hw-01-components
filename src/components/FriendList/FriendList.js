import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(el => {
        return (
          <li className="item" key={el.id}>
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
    })
  ),
};

export default FriendList;
