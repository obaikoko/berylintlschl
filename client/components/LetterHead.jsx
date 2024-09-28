import { FaPhone } from 'react-icons/fa';
import style from './styles/letterHead.module.css';

const LetterHead = ({ image }) => {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <div className={style.logo}>
          <img
            src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1726781636/beryl/epfme50v5t4l66i6fzx3.jpg'
            alt='logo'
          />
        </div>
        {image && (
          <div className={style.profile}>
            <img className='rounded' src={image} alt='profile' />
          </div>
        )}

        <div className={style.mainHeader}>
          <h1 className='md:text-4xl'>Beryl International School Calabar</h1>
          <h4 className='text-pink-600'>
            Plot 1, Block 1, Ikot Eneobong (Federal Housing Estate)
          </h4>
          <h4 className='text-pink-600'>
            Calabar Municipality, Cross River State
          </h4>
          <p>
            <FaPhone className='inline-block mb-1 text-green-500' />{' '}
            07060511978, 09073091617
          </p>
        </div>
      </main>
    </div>
  );
};

export default LetterHead;
