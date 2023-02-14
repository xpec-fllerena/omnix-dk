import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button label="Click me now!" onClick={() => alert("Click")} />;