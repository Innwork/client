import {FC} from "react";
import classes from "@src/widgets/pre-load/Preload.module.scss";
import {TextModule} from "@src/shared/scss";
import {useClass} from "@src/shared/hooks";

export interface IPreLoad {
    children: string;
    words: Array<string>
}

export const PreLoad: FC<IPreLoad> = ({children, words}) => {
    return (
        <div className={classes.spinner_container}>
            <div className={classes.spinner}></div>
            <div className={
                useClass([
                    classes.loader, TextModule.paragraph
                ])
            }>
                <p>{children}</p>

                <div className={classes.words}>
                    {
                        words.map((el) => <span className={classes.word} key={el}>
                            {el}
                        </span>)
                    }
                </div>
            </div>
        </div>
    );
};