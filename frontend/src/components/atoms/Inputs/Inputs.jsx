import React, { useState } from "react";
import { withStyles, FormControl, Input } from "@material-ui/core";
import { styles } from "./styles";

const InputsRaw = (props) => {
  const { classes, label, saveInput, isDisabled, isRequired, type } = props;
  const [input, setInput] = useState();

  const handleChange = ({ target }) => {
    setInput(target.value);
    saveInput(target.value);
  };

  return (
    <div>
      <FormControl className={classes.input} variant="filled" autoComplete="on">
        <Input
          placeholder={label}
          requiered={isRequired}
          type={type}
          disabled={isDisabled}
          value={input}
          onChange={handleChange}
        />
      </FormControl>
    </div>
  );
};

export const Inputs = withStyles(styles)(InputsRaw);
