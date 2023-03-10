import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div>
      <p>404 Not Found</p>
      <Link to='/'>Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFoundScreen;
