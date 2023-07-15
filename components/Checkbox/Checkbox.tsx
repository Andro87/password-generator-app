import React from "react";
import styles from "./Checkbox.module.scss";

interface Props {
    title: string;
    name: string;
    isChecked: boolean;
    description: string;
    onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FunctionComponent<Props> = props => {
    const { title, name, isChecked, description, onCheck } = props;
    return (
        <div className={styles.checkbox_container}>
            <input
                id={title}
                type="checkbox"
                name={name}
                checked={isChecked}
                onChange={onCheck}
                className={`${styles.checkbox}  ${
                    isChecked && styles.checked
                } `}
            />
            <label htmlFor={title}>{description}</label>
        </div>
    );
};
