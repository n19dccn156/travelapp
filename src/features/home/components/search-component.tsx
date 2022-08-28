import * as React from "react";
import { SearchBar } from "@rneui/base";

export default () => {
    const [value, setValue] = React.useState("");
    return (
        <SearchBar
            platform="ios"
            containerStyle={{}}
            inputContainerStyle={{borderRadius: 30, backgroundColor: "#fddbde"}}
            inputStyle={{}}
            leftIconContainerStyle={{}}
            rightIconContainerStyle={{}}
            selectionColor= {"red"}
            loadingProps={{}}
            onChangeText={newVal => setValue(newVal)}
            placeholder="Tìm kiếm ..."
            placeholderTextColor="#888"
            cancelButtonTitle="Cancel"
            // cancelButtonProps={{}}
            onCancel={() => (console.log("Click Cancel"))}
            value={value}
        />
    );
}