import styles from "./Slider.module.scss";
interface Props {
    readonly length: number;
    readonly onSlider: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly percentage: number;
}

export const Slider: React.FunctionComponent<Props> = props => {
    const { length, onSlider, percentage } = props;

    const progressBarWidth = {
        width: `${percentage}%`
    };

    return (
        <div className={styles.slider_container}>
            <label htmlFor="slider">
                characther length <span>{length}</span>
            </label>
            <div className={styles.slider_wrap}>
                <input
                    id="slider"
                    type="range"
                    min={0}
                    max={20}
                    name="length"
                    value={length}
                    className={styles.slider}
                    onChange={onSlider}
                />
                <div
                    className={styles.progress_bar}
                    style={progressBarWidth}
                ></div>
            </div>
        </div>
    );
};
