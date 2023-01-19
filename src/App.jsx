// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

// =======================================================
// import PaintingList from './paintingList';
// import Section from './section';
// import paintings from '../paintings.json';

// export default function App() {
//   // Рендарить по УСЛОВИЮ можно 2 способами:
//   // Реакт никогда не рендарит: False, Undefined, null
//   const isOnline = true;

//   return (
//     <div>
//       {/* первый способ */}
//       {isOnline && 'Онлайн'}
//       {/* второй способ */}
//       {isOnline ? 'онлайн' : 'офлайн'}

//       <Section title="TOP week">
//         <PaintingList items={paintings} />
//       </Section>
//       <Section title='the best' />
//     </div>
//   );
// }
// =======================================================

import Container from 'components/Container/Container';
import user from 'data/user.json';
import Profile from 'components/Profile/Profile';
import statistics from 'data/statistics.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'data/friends.json'
import FriendList from 'components/FriendList/FriendList'
import transactions from 'data/transactions.json';
import TransactionHistory from 'components/Transaction/TransactionHistory';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
