import clsx from 'clsx';
import css from './Profile.module.css';
import { RiRadioButtonLine } from 'react-icons/ri';
import { CiStreamOff } from 'react-icons/ci';

import iconReact from '../../assets/react.svg';
const Profile = ({
  name,
  phone,
  email,
  status = 'offline',
  hasPhisicalAddress,
}) => {
  const handleClisk = () => {
    alert('Hello');
  };

  return (
    <div
      className={clsx(
        css.profile,
        hasPhisicalAddress && css.hasPhisicalAddress,
      )}
    >
      <img src={iconReact} alt="" />
      <h2 className={css.title}>
        Name: {name} {hasPhisicalAddress && '🏠'}
      </h2>
      <p className={css.fieldRow}>Phone: {phone}</p>
      <p className={css.fieldRow}>Email: {email}</p>
      <p
        className={clsx(
          css.fieldRow,
          status === 'online' && css.online,
          status === 'offline' && css.offline,
        )}
      >
        Status: {status === 'online' ? <RiRadioButtonLine /> : <CiStreamOff />}
      </p>
      <button type="button" onClick={handleClisk}>
        Click to Alert{' '}
      </button>
    </div>
    // gg
  );
};

export default Profile;
