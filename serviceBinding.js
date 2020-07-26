function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZT48_02_OVLY_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}