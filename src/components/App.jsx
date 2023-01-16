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

import PaintingList from './paintingList';
import Section from './section';
import paintings from '../paintings.json';

export default function App() {
  // Рендарить по условию можно 2 способами:
  // Реакт никогда не рендарит: False, Undefined, null
  const isOnline = true;

  return (
    <div>
      {/* первый способ */}
      {isOnline && 'Онлайн'}
      {/* второй способ */}
      {isOnline ? 'онлайн' : 'офлайн'}

      <Section title="TOP week">
        <PaintingList items={paintings} />
      </Section>
      <Section title='the best' />
    </div>
  );
}
