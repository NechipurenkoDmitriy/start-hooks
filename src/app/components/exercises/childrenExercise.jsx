import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

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
        // console.log("child HW", i, child);
        const config = {
            number: `${i + 1}.`
        };

        return React.cloneElement(child, config);
        // return (
        //     <div>
        //         {i + 1}. {child}
        //     </div>
        // );
    });
};

const Component = ({ number }) => {
    return <div> {number} Компонент списка</div>;
};
Component.propTypes = {
    number: PropTypes.string
};

export default ChildrenExercise;
