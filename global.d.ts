declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames
}

declare module "*.svg" {
    import React from "react";
    const SVG: React.FC<React.SVGProps<SVGElement>>
    export = SVG
}

declare module "*jpeg"
declare module "*jpg"
declare module "*png"

