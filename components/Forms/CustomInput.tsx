// src/CustomInput.tsx
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface CustomInputProps {
  id: string;
  label: string;
  placeholder: string;
  register: any;
  error?: FieldError;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  placeholder,
  register,
  error,
  type = "text",
}) => {
  return (
    <FormControl maxH="7.2rem" isInvalid={!!error} mb="7rem" minH="10rem">
      <FormLabel
        mb="1.5rem"
        color="#fff"
        fontSize="2.4rem"
        fontWeight="500"
        htmlFor={id}
      >
        {label}
      </FormLabel>
      <Input
        borderRadius="0.5rem"
        border="1px solid #41FFFF"
        background="#000"
        id={id}
        // placeholder={placeholder}
        {...register(id)}
        type={type}
        color="#fff"
        fontSize="2.4rem"
        fontWeight="500"
        h="100%"
        minH="7.2rem"
      />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
