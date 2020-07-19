import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/core";

type myFormControlProps = {
  name: string;
  invalid?: boolean;
  error?: boolean;
  touched?: boolean;
  label: string;
  placeholder?: string;
  id?: string;
  field?: any;
  type?: string;
};

const MyFormControl = ({
  error,
  touched,
  label,
  placeholder,
  id,
  field,
  type,
}: myFormControlProps) => {
  return (
    <FormControl my={"15px"} isInvalid={error && touched}>
      <FormLabel>{label}</FormLabel>
      <Input {...field} type={type} placeholder={placeholder} id={id} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default MyFormControl;
