const Container = (props) => {
  let containerClassName = "";
  const containerClasses = {
    small: "col-md-6 p-0 mx-auto",
    normal: "container",
    fluid: "container-fluid",
  };
  containerClassName = containerClasses[props.type] || "container";

  return <div className={containerClassName}>{props.children}</div>;
};
export default Container;
