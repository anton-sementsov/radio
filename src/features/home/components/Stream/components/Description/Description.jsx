import blankDescription from '../../../../../../assets/images/blankDescription.jpg';
import styles from './Description.module.scss';

export const Description = ({ data }) => {
  const { img, description } = data;

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.image} src={img || blankDescription.src} />
        <span>{description?.toUpperCase()}</span>
      </div>
    </div>
  );
};
