import styles from './Description.module.scss';

export const Description = ({ data }) => {
    if (!data?.img || !data?.description) return <></>;
    const { img, description } = data;
    return (
        <div className={styles.container} >
            <div>
                <img className={styles.image} src={img} />
                <span>{description?.toUpperCase()}</span>
            </div>
        </div>
    );
};