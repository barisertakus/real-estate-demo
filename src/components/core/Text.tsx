import { Text as DefaultText } from "react-native";
import React from "react";
import rf from "../../utils/responsiveFont";
import { TextStyle } from "react-native";
import Colors from "../../constants/Colors";

interface ITextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  bold?: boolean;
  italic?: boolean;
  title?: string;
  style?: TextStyle;
}

const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  bold,
  italic,
  title,
  style,
  ...rest
}: ITextProps) => {
  return (
    <DefaultText
      style={[
        h1 && { fontSize: rf(48) },
        h2 && { fontSize: rf(32) },
        h3 && { fontSize: rf(20) },
        h4 && { fontSize: rf(18) },
        h5 && { fontSize: rf(16) },
        h5 && { fontSize: rf(16) },
        p && { fontSize: rf(12) },
        bold && { fontWeight: "bold" },
        italic && { fontStyle: "italic" },
        { color: Colors.customBlack },
        style,
      ]}
      {...rest}
    >
      {title}
    </DefaultText>
  );
};

export default Text;
