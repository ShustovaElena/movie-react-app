import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Card from './Card';
import { screen } from '@testing-library/react';

// let container: HTMLDivElement;
// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
// });

// it('renders card with testing data', () => {
//   act(() => {
//     render(
//       <Card
//         key={1}
//         src="img/1.jpg"
//         name="Название"
//         year="2002"
//         genre="Жанр"
//         rating="8.8"
//         likesCount={123}
//       />,
//       container
//     );
//   });

//   expect(screen.getByAltText(/Image cartoon/i)).toHaveAttribute('src', 'img/1.jpg');
//   expect(screen.getByText('Название')).toBeInTheDocument();
//   expect(screen.getByText('Год выпуска: 2002')).toBeInTheDocument();
//   expect(screen.getByText('Жанр: Жанр')).toBeInTheDocument();
//   expect(screen.getByText('8.8')).toBeInTheDocument();
//   expect(screen.getByText('123')).toBeInTheDocument();
// });
