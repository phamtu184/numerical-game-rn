import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default (props) => {
  const { content, status, selectNum } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        status == 1 ? styles.right : status == 0 ? styles.wrong : styles.normal,
      ]}
      onPress={() => selectNum(content)}
    >
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    margin: 2,
  },
  right: {
    backgroundColor: "#45ff5e",
  },
  wrong: {
    backgroundColor: "#ff6257",
  },
  normal: {
    backgroundColor: "#d4d4d4",
  },
  text: {
    fontSize: 30,
    fontWeight: "400",
    padding: 30,
  },
});
