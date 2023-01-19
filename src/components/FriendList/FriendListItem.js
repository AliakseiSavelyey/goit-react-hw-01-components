import PropTypes from 'prop-types';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div>
      <span className="status">{isOnline}</span>
      <img
        className="avatar"
        src={avatar}
        alt={name}
        width="48"
      />
      <p className="name">{name} </p>
    </div>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendListItem;
