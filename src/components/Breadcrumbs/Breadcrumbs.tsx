
import './Breadcrumbs.scss';
import {Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split('/');

  let url = '';
  const breadcrumbLinks= crumbs.map((crumb) => { url +=`/${crumb}`;

  return (
      <div className='breadcrumb' key={crumb}>
        <Link to={url}>{crumb}</Link>
      </div>
    );
  });
  return <div className='crumbs'>
    {breadcrumbLinks}
  </div>
}

export default Breadcrumbs;