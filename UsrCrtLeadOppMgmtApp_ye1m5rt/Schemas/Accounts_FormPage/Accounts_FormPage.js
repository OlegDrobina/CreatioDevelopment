define("Accounts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "BackButton",
				"values": {
					"caption": "#ResourceString(BackButton_caption)#",
					"clicked": {
						"request": "usr.ClosePageRequest"
					},
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"clicked": {
						"request": "usr.ClosePageRequest"
					},
					"caption": "#ResourceString(CloseButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "Timeline",
				"values": {
					"filterValues": "$Timeline_AllTileFilters"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Email",
				"values": {
					"filters": "$TimelineTile_Email_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Task",
				"values": {
					"filters": "$TimelineTile_Task_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Call",
				"values": {
					"filters": "$TimelineTile_Call_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Lead",
				"values": {
					"filters": "$TimelineTile_Lead_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Opportunity",
				"values": {
					"filters": "$TimelineTile_Opportunity_Items"
				}
			},
			{
				"operation": "insert",
				"name": "ComboBox_e2s8w6l",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AddressType_68fp113",
					"labelPosition": "auto",
					"control": "$PDS_AddressType_68fp113",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_gcojk8o",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gcojk8o_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_e2s8w6l",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_AddressType_68fp113": {
						"modelConfig": {
							"path": "PDS.AddressType"
						}
					},
					"Timeline_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"TimelineTile_EmailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_TaskDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_CallDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"TimelineTile_LeadDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Lead"
						}
					},
					"TimelineTile_OpportunityDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Opportunity"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				"request": "usr.ClosePageRequest",
				"handler": async(request, next) => {
					const handlerChain = sdk.HandlerChainService.instance;
					const isPageOpenedFromContact = localStorage.getItem("IsAccountPageOpenedFromContact") === 'true';
					if (isPageOpenedFromContact) {
						localStorage.removeItem("IsAccountPageOpenedFromContact");
						await handlerChain.process({
							type: 'crt.OpenPageRequest',
							schemaName: 'Accounts_ListPage',
							$context: request.$context,
							scopes: [...request.scopes]
						});
					} else {
						await handlerChain.process({
							type: 'crt.ClosePageRequest',
							$context: request.$context,
							scopes: [...request.scopes]
						});
					}
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});