({
    removeOption: function(cmp, evt, helper) {
        let item = evt.getSource().get("v.label");
        let selectedValues = cmp.get("v.selectedValues");
        //Removing the item from the array
        selectedValues = selectedValues.filter((x) => x != item);
        cmp.set("v.selectedValues", selectedValues);
        //Reset the combobox
        cmp.find("multiCombo").set("v.value", null);
    },

    selectValue: function(cmp, evt, helper) {
        let multiCombo = cmp.find("multiCombo");
        let selectedValue = multiCombo.get("v.value");
        console.log("Selected value: ", selectedValue);
        let selectedValues = cmp.get("v.selectedValues");
        if (!selectedValues.includes(selectedValue))
            selectedValues.push(selectedValue);
        cmp.set("v.selectedValues", selectedValues);
    }
});