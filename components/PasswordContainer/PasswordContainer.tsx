import styles from "./PasswordContainer.module.scss";

import { useState } from "react";

import Copy from "svgr/icon-copy.svg";

interface Props {
    readonly password: string;
    readonly isMessage: boolean;
}

export const PasswordContainer: React.FunctionComponent<Props> = props => {
    const { password, isMessage } = props;

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyPassword = () => {
        navigator.clipboard.writeText(password);
        setIsCopied(true);
    };

    return (
        <div className={styles.password_container}>
            <p
                className={
                    password === "P4$5W0rD!" ? styles.empty_password : ""
                }
            >
                {password}
            </p>
            {isMessage && (
                <p className={styles.message}>
                    Check a box or set characther length!
                </p>
            )}
            <button
                type="button"
                title="copy password"
                className={styles.btn_copy}
                onClick={handleCopyPassword}
            >
                {password !== "P4$5W0rD!" && isCopied && !isMessage && (
                    <span>copied</span>
                )}
                <Copy />
            </button>
        </div>
    );
};
