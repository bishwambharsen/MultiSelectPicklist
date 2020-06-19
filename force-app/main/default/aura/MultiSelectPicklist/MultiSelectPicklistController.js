({
    removeOption: function(cmp, evt, helper) {
        let item = evt.getSource().get("v.label");
        let selectedValues = cmp.get("v.selectedValues");
        //Removing the item from the array
        selectedValues = selectedValues.filter((x) => x != item);
        cmp.set("v.selectedValues", selectedValues);

        //Add the option back to the combobox
        let options = cmp.get("v.options");
        options.push({ label: item, value: item });
        cmp.set("v.options", options);
    },

    selectValue: function(cmp, evt, helper) {
        let multiCombo = cmp.find("multiCombo");
        let selectedValue = multiCombo.get("v.value");
        console.log("Selected value: ", selectedValue);
        let selectedValues = cmp.get("v.selectedValues");
        //Add the select value in the pill
        if (!selectedValues.includes(selectedValue))
            selectedValues.push(selectedValue);
        cmp.set("v.selectedValues", selectedValues);

        //Remove the option from the picklist.
        let options = cmp.get("v.options");
        options = options.filter((x) => x != selectedValue);
        cmp.set("v.options", options);
    }
});