import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumListComponent>
                <Component />
                <Component />
                <Component />
            </NumListComponent>
        </CollapseWrapper>
    );
};

// не понял задание
const NumListComponent = ({ children }) => {
    // console.log("children HW", children);
    return React.Children.map(children, (child, i) => {
        console.log("child HW", i, child);
        return (
            <div>
                {i + 1}. {child}
            </div>
        );
    });
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
