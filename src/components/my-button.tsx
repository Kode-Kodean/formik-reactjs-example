import React from "react";
import { Button, ButtonProps } from "@chakra-ui/core";

type myButtonProps = {
  children: string;
  type: ButtonProps["type"];
  full?: boolean;
  loading?: boolean;
};

const MyButton = ({ children, type, full, loading }: myButtonProps) => {
  return (
    <Button
      type={type}
      shadow="sm"
      my="1rem"
      isFullWidth={full}
      isLoading={loading}
    >
      {children}
    </Button>
  );
};

export default MyButton;
