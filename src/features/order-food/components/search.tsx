import * as React from "react";
import { SearchBar } from "@rneui/base";

export default () => {
    const [value, setValue] = React.useState("");
    return (
        <SearchBar
            platform="ios"
            containerStyle={{}}
            inputContainerStyle={{borderRadius: 30, backgroundColor: "#0303031a"}}
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