import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div>
      <span className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name} </p>
    </div>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};

export default FriendListItem;
