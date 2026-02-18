import React, { useState } from "react";
import TextField from "@shared/components/common/TextField.tsx";
import Button from "@shared/components/common/Button.tsx";
import { Visibility, VisibilityOff } from "@mui/icons-material";
type PasswordFieldProps = Omit<
  React.ComponentProps<typeof TextField>,
  "type"
> & {};

function PasswordField(props: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <TextField {...props} type={show ? "text" : "password"}>
        <div className="absolute right-0 top-0 p-1">
          <Button variant="icon" onclick={() => setShow(!show)}>
            {show ? <Visibility /> : <VisibilityOff />}
          </Button>
        </div>
      </TextField>
    </>
  );
}

export default PasswordField;
