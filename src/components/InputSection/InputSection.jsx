import React from "react";
import Button from "../button/Button";

export default function InputSection({
  formAction,
  inputPlaceHolder,
  btnTitle,
  btnIcon,
  btnBackground,
  btnfuncWord,
  btnBorder,
  btnMarginTop,
}) {
  return (
    <form
      action={formAction}
      className="flex items-center gap-2 text-secondaryBlackColor"
    >
      <input
        type="text"
        className="outline-none rounded p-1 md:p-2"
        placeholder={inputPlaceHolder}
        required
      />
      <Button
        title={btnTitle}
        border={btnBorder}
        icon={btnIcon}
        backgroundColor={btnBackground}
        funcWord={btnfuncWord}
        marginTop={btnMarginTop}
      />
    </form>
  );
}
