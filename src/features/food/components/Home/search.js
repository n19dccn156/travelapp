import * as React from "react";
import { SearchBar } from "@rneui/base";
import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    container: {
            height: 50,
            width: '80%',
            borderRadius:14,
            flexDirection: 'row',
            alignItems: 'center',
    }
})
export default () => {
    const [value, setValue] = React.useState("");
    return (
        <SearchBar
            platform="ios"
            inputContainerStyle={[{backgroundColor: "#0303031a"},style.container]}
            inputStyle={{padding:0}}
            leftIconContainerStyle={{}}
            rightIconContainerStyle={{}}
            loadingProps={{}}
            onChangeText={newVal => setValue(newVal)}
            placeholder="Bạn muốn ăn gì nào ? "
            cancelButtonTitle="Cancel"
            onCancel={() => (console.log("Click Cancel"))}
            value={value}
        />
    );
}