import {ComponentType} from "react";

export interface Page {
    path: string;
    exact?: boolean;
    component: ComponentType<Object>;
}