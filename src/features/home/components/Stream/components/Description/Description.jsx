import styles from './Description.module.scss';
import blankDescription from '../../../../../../assets/images/blankDescription.jpg'

export const Description = ({ data }) => {
    const { img, description } = data;

    return (
        <div className={styles.container} >
            <div>
                <img width="390" height="390" layout='fixed' src={img || blankDescription.src} />
                <span>{description?.toUpperCase()}</span>
            </div>
        </div>
    );
};