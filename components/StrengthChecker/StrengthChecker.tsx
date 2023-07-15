import React, { useState } from "react";
import styles from "./StrengthChecker.module.scss";

interface Props {
    readonly strength: string;
}

export const StrengthChecker: React.FunctionComponent<Props> = props => {
    const { strength } = props;

    const passwordStrength =
        strength === "tooweak"
            ? strength.slice(0, 3) + " " + strength.slice(3, strength.length)
            : strength;

    return (
        <div className={styles.strength_container}>
            <p className={styles.strength_label}>strength</p>

            <div className={`${styles.checker_container} ${styles[strength]}`}>
                <p>{passwordStrength}</p>
                <div className={styles.checker}></div>
                <div className={styles.checker}></div>
                <div className={styles.checker}></div>
                <div className={styles.checker}></div>
            </div>
        </div>
    );
};
