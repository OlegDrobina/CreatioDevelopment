define("AccountPageV2", [], function () {
  return {
    entitySchemaName: "Account",
    details: /**SCHEMA_DETAILS*/ {} /**SCHEMA_DETAILS*/,
    diff: /**SCHEMA_DIFF*/ [] /**SCHEMA_DIFF*/,
    attributes: {},
    methods: {
      onEntityInitialized: function () {
        this.callParent(arguments);
        this.checkAccountCodeValue();
      },

      checkAccountCodeValue: function () {
        const accountCode = this.get("Code");
        if (accountCode && accountCode === "1") {
          alert("The code is correct");
        } else {
          this.modifyAccountCode();
        }
      },

      modifyAccountCode: function () {
        this.set("Code", "1");
      },
    },
  };
});
